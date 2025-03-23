declare class Tracker {
    private apiKey;
    private userId;
    constructor();
    init(apiKey: string): Promise<void>;
    getApiKey(): string | null;
    getUserId(): string | null;
}

export declare const tracker: Tracker;

export { }
