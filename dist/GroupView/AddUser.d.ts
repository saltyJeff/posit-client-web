import * as React from 'react';
import { Permissions } from 'posit-core';
interface State {
    email: string;
    role: Permissions;
}
export default class AddUser extends React.Component<{}, State> {
    constructor(props: any);
    render(): JSX.Element;
    addUser: () => void;
}
export {};
