import { GroupData, UserData } from 'posit-core';
export declare type VIEW_MODES = 'FILE' | 'STREAM';
export declare class GroupStore {
    group: GroupData;
    pageNum: number;
    page: GroupData[];
    changePage: (page: number) => Promise<void>;
    setGroup(group: GroupData): void;
    userFromId(id: number): UserData;
    searchTerms: string;
    viewMode: VIEW_MODES;
    streamModeOperator: 'AND' | 'OR';
    readonly searchOp: "OR" | "AND";
    readonly searchTokens: string[];
}
export declare const groupStore: GroupStore;
