

export default PortableText;
export function blockContentToPlainText( blocks?: [any]): string;


declare function PortableText ({ content, className, serializers, ...additionalOptions}: {
    content: [object];
    className: string;
    serializers: object;
    dataset: string;
    project: string;
}): any;

declare namespace PortableText{
    namespace propTypes {
        const content: any;
        const className: any;
        const Serializer: any;
        const dataset: string;
        const project: string
    }
}