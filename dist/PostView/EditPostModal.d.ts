import * as React from 'react';
export default class EditPostModal extends React.Component<{}, {
    tagList: string;
    lastPostId: number;
}> {
    constructor(props: any);
    componentDidUpdate(): void;
    render(): JSX.Element;
    onOk: () => Promise<void>;
    onDelete: () => Promise<void>;
    hide: () => void;
}
