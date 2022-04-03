import { GraphQLClient, gql } from "graphql-request";
import config from "../config.js";

export default async function(x, y, canvasIndex, colorIndex) {
    const graphQLClient = new GraphQLClient("https://gql-realtime-2.reddit.com/query", {
        accept: "*/*",
        "content-type": "application/json",
        headers: {
            authorization: config.token,
        },
    });

    const variables = {
        input: {
            actionName: "r/replace:set_pixel",
            PixelMessageData: {
                coordinate: {
                    x: x,
                    y: y,
                },
                colorIndex: colorIndex,
                canvasIndex: canvasIndex,
            },
        },
    };

    const query = gql`
        mutation setPixel($input: ActInput!) {
            act(input: $input) {
                data {
                    ... on BasicMessage {
                        id
                        data {
                            ... on GetUserCooldownResponseMessageData {
                                nextAvailablePixelTimestamp
                                __typename
                            }
                            ... on SetPixelResponseMessageData {
                                timestamp
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                __typename
            }
        }
    `;

    const data = await graphQLClient.request(query, variables);
    return {
        nextAvailablePixelTimestamp: data.act.data[0].data.nextAvailablePixelTimestamp,
        timestamp: data,
    }
}
