import * as React from 'react';
export default class CreatePostModal extends React.Component<{
    visible: boolean;
    onCancel: () => void;
    onOk: (newName: string, newTags: string[]) => void;
}, {
    newUrl: string;
    tagList: string;
}> {
    constructor(props: any);
    componentWillReceiveProps(): void;
    render(): JSX.Element;
    onOk: () => void;
}
