import * as React from 'react';
import { Preview } from 'posit-server-common/dist/Entities';
interface Props {
    preview: Preview;
    viewMore: boolean;
}
export default class Previewer extends React.Component<Props, {}> {
    constructor(props: any);
    render(): JSX.Element;
    renderTitle: () => JSX.Element;
    renderPreview: () => JSX.Element;
}
export {};
