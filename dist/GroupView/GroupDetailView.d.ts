import * as React from 'react';
export default class UserView extends React.Component<{
    visible: boolean;
    onCancel: () => void;
    onOk: () => void;
}, {
    newName: string;
}> {
    constructor(props: any);
    render(): JSX.Element;
    changeName: () => void;
}
