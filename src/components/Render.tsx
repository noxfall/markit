import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

interface Props {
    doc: string
};

const Render: React.FC<Props> = (props) => {

    return (
        <div className="render markdown-body">
            <ReactMarkdown children={props.doc} remarkPlugins={[remarkGfm]} />
        </div>
    );
};

export default Render;