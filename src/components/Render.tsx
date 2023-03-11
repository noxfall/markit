import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'github-markdown-css/github-markdown.css';

interface Props {
    doc: string
};

const Render: React.FC<Props> = (props) => {

    return (
        <div className="render markdown-body">
            <ReactMarkdown
                children={props.doc}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={oneDark}
                                language={match[1]}
                                PreTag="div"
                                customStyle={{
                                    background: "none",
                                    border: "none",
                                    lineHeight: "1.5"
                                }}
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            />
        </div>
    );
};

export default Render;