import { AlertGroupMutateResult, AlertPostMutateResult } from 'posit-core/dist/apiDefinitions/Api/ApiResults';
declare class AppStore {
    loggedIn: boolean;
    initialized: boolean;
    username: string;
    pageSize: number;
    login(tokens: string[], url: string, username?: string): void;
    onLogin: () => Promise<void>;
    onLogout: () => Promise<void>;
    onGroupMutate: (groupMutate: AlertGroupMutateResult) => Promise<void>;
    onPostMutate: (postMutate: AlertPostMutateResult) => Promise<void>;
    signout(): void;
}
export declare const appStore: AppStore;
export {};
