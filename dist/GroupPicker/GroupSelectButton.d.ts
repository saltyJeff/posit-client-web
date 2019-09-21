import * as React from 'react';
import { GroupData } from 'posit-core';
interface Props {
    key: string;
    group: GroupData;
}
export default class GroupSelectButton extends React.Component<Props, {}> {
    constructor(props: any);
    render(): JSX.Element;
    setGroup: () => void;
}
export {};
