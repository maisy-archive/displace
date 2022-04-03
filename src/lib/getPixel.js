import { GraphQLClient, gql } from "graphql-request";
import config from "../config.js";

export default async function(x, y, canvasIndex) {
    const graphQLClient = new GraphQLClient("https://gql-realtime-2.reddit.com/query", {
        accept: "*/*",
        "content-type": "application/json",
        headers: {
            authorization: config.token,
        },
    });

    const variables = {
        input: {
            actionName: "r/replace:get_tile_history",
            PixelMessageData: {
                coordinate: {
                    x: x,
                    y: y,
                },
                colorIndex: 0,
                canvasIndex: canvasIndex,
            },
        },
    };

    const query = gql`
        mutation PixelHistory($input: ActInput!) {
            act(input: $input) {
                data {
                    ... on BasicMessage {
                        id
                        data {
                            ... on GetTileHistoryResponseMessageData {
                                lastModifiedTimestamp
                                userInfo {
                                    userID
                                    username
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
                __typename
            }
        }
    `;

    const data = await graphQLClient.request(query, variables);
    return data.act.data[0].data;
}
