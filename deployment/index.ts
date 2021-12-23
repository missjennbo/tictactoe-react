import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";

// Create a load balancer to listen for requests and route them to the container.
const listener = new awsx.elasticloadbalancingv2.NetworkListener("tictactoe", { port: 80 });

// Define the service, building and publishing our "./app/Dockerfile", and using the load balancer.
const service = new awsx.ecs.FargateService("tictactoe-frontend", {
    desiredCount: 2,
    taskDefinitionArgs: {
        containers: {
            nginx: {
                image: awsx.ecs.Image.fromPath("tictactoe-frontend", "../tictactoe-frontend"),
                memory: 512,
                portMappings: [listener],
            },
        },
    },
});

// Export the URL so we can easily access it.
export const frontendURL = pulumi.interpolate `http://${listener.endpoint.hostname}/`;