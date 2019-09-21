import * as React from 'react';
import { Post, Preview } from 'posit-server-common/dist/Entities';
import './PostItem.css';
interface Props {
    post: Post;
    viewMore: boolean;
}
export default class PostItem extends React.Component<Props, {
    preview: Preview | undefined;
}> {
    constructor(props: any);
    componentDidUpdate(prevProps: Props): void;
    shouldComponentUpdate(nextProps: Props, nextState: any): boolean;
    render(): JSX.Element;
    handleViewMore: () => void;
    cardTitle: () => string;
    link: () => JSX.Element;
    renderNonHtml: () => JSX.Element;
    reloadPreview: () => void;
}
export {};
