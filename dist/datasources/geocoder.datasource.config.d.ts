export declare const connector: string;
export declare namespace options {
    export const headers: {
        "accept": string;
        "content-type": string;
    };
    export const timeout: number;
}
export declare const operations: {
    "template": {
        "method": string;
        "url": string;
        "query": {
            "format": string;
            "benchmark": string;
            "address": string;
        };
        "responsePath": string;
    };
    "functions": {
        "geocode": string[];
    };
}[];
