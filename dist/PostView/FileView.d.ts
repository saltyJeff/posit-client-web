import * as React from 'react';
export default class FileView extends React.Component<{}, {
    createPostVisible: boolean;
}> {
    constructor(props: any);
    render(): JSX.Element;
    createPost: (url: string, tags: string[]) => Promise<void>;
    goUp: () => void;
    listHeader: () => JSX.Element;
}
