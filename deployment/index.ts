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

const tictoctoeTargetGroup = new awsx.lb.ApplicationTargetGroup(
    "targetGroup",
    {
        protocol: "HTTP",
        port: 80,
        loadBalancer: appLoadbalancer
    }
);

// Create a load balancer to listen for requests and route them to the container.
const listener = new awsx.elasticloadbalancingv2.ApplicationListener("tictactoe", { port: 80, loadBalancer: appLoadbalancer, targetGroup: tictoctoeTargetGroup });

// Define the service, building and publishing our "./app/Dockerfile", and using the load balancer.
const service = new awsx.ecs.FargateService("tictactoe-frontend", {
    desiredCount: 2,
    taskDefinitionArgs: {
        containers: {
            nginx: {
                image: awsx.ecs.Image.fromPath("tictactoe-frontend", "../tictactoe-frontend"),
                memory: 1024, // see https://create-react-app.dev/docs/troubleshooting/#:~:text=The%20build%20failed%20because%20the,or%20build%20the%20project%20locally.
                portMappings: [tictoctoeTargetGroup],
            },
        },
    },
});

// Export the URL so we can easily access it.
export const frontendURL = pulumi.interpolate `http://${listener.endpoint.hostname}/`;

