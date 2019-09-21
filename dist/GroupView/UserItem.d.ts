import * as React from 'react';
import { Permissions, UserData } from 'posit-core';
export default class UserItem extends React.Component<{
    user: UserData & {
        permissions: Permissions;
    };
}, {
    newPerm: Permissions;
}> {
    constructor(props: any);
    render(): JSX.Element;
    changeRole: () => void;
}
