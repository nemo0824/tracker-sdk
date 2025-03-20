declare class Tracker {
    private apiKey;
    constructor();
    init(apiKey: string): Promise<void>;
    getApiKey(): string | null;
}
export declare const tracker: Tracker;
export {};
