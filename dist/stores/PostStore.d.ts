import { IReactionDisposer } from 'mobx';
import { Post, Preview } from 'posit-core';
declare class PostStore {
    page: (string | Post)[];
    hasMore: boolean;
    loading: boolean;
    pageNum: number;
    viewMoreId: number;
    entryReloader: IReactionDisposer;
    constructor();
    reloadPage: () => Promise<void>;
    loadInitialPage: () => Promise<void>;
    loadMore: () => Promise<void>;
    modalPost: Post;
    modalPreview: Preview | undefined;
    postModalVisible: boolean;
    openPostModal(post: Post, preview: Preview | undefined): void;
    hideModal(): void;
}
export declare const postStore: PostStore;
export {};
