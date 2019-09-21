import * as React from 'react';
export default class CreateGroupModal extends React.Component<{
    visible: boolean;
    onCancel: () => void;
    onOk: (newName: string) => void;
}, {
    newName: string;
}> {
    constructor(props: any);
    render(): JSX.Element;
}
