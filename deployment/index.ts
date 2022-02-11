import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";

// const lbSecurityGroup = new awsx.ec2.SecurityGroup("lb-security-group", {
//     ingress: [
//         {
//             cidrBlocks: ["0.0.0.0/0"],
//             ipv6CidrBlocks: ["::/0"],
//             fromPort: 80,
//             toPort: 80,
//             protocol: "tcp",
//         },
//     ],
//     egress: [
//         {
//             cidrBlocks: ["0.0.0.0/0"],
//             ipv6CidrBlocks: ["::/0"],
//             fromPort: 80,
//             toPort: 80,
//             protocol: "tcp",
//         },
//     ]
// });

const appLoadbalancer = new awsx.lb.ApplicationLoadBalancer("tictactoe-loadbalancer");

const tictoctoeFrontendTargetGroup = new awsx.lb.ApplicationTargetGroup(
    "frontendTargetGroup",
    {
        protocol: "HTTP",
        port: 80,
        loadBalancer: appLoadbalancer
    }
);

const tictoctoeBackendTargetGroup = new awsx.lb.ApplicationTargetGroup(
    "backendTargetGroup",
    {
        protocol: "HTTP",
        port: 80,
        loadBalancer: appLoadbalancer
    }
);

// Create a load balancer to listen for requests and route them to the container.
const frontendListener = new awsx.elasticloadbalancingv2.ApplicationListener("tictactoe-frontend", { port: 80, loadBalancer: appLoadbalancer, targetGroup: tictoctoeFrontendTargetGroup });
const backendListener = new awsx.elasticloadbalancingv2.ApplicationListener("tictactoe-backend", { port: 8080, loadBalancer: appLoadbalancer, targetGroup: tictoctoeBackendTargetGroup });

// Define the service, building and publishing our "./app/Dockerfile", and using the load balancer.
const frontendService = new awsx.ecs.FargateService("tictactoe-frontend", {
    desiredCount: 2,
    taskDefinitionArgs: {
        containers: {
            nginx: {
                image: awsx.ecs.Image.fromPath("tictactoe-frontend", "../tictactoe-frontend"),
                memory: 1024, // see https://create-react-app.dev/docs/troubleshooting/#:~:text=The%20build%20failed%20because%20the,or%20build%20the%20project%20locally.
                portMappings: [tictoctoeFrontendTargetGroup],
            },
        },
    },
});

const backendService = new awsx.ecs.FargateService("tictactoe-backend", {
    desiredCount: 2,
    taskDefinitionArgs: {
        containers: {
            nginx: {
                image: awsx.ecs.Image.fromPath("tictactoe-backend", "../tictactoe-backend"),
                memory: 1024,
                portMappings: [tictoctoeBackendTargetGroup],
            },
        },
    },
});

// Export the URLs so we can easily access it.
export const frontendURL = pulumi.interpolate `http://${frontendListener.endpoint.hostname}/`;
export const backendURL = pulumi.interpolate `http://${backendListener.endpoint.hostname}/`;

