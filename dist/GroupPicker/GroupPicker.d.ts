import * as React from 'react';
import './GroupPicker.css';
interface State {
    createGroupVisible: boolean;
}
export default class GroupPicker extends React.Component<{}, State> {
    constructor(props: any);
    render(): JSX.Element;
    changePage: (page: number) => Promise<void>;
    createGroup: (newName: string) => Promise<void>;
}
export {};
