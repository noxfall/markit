import { useCallback, useEffect } from 'react';
import { EditorState } from '@codemirror/state';

import hookCodemirror from '@/hooks/CodemirrorHook';

interface Props {
    initialDoc: string,
    onChange: (doc: string) => void
};

const Editor: React.FC<Props> = (props) => {
    const { onChange, initialDoc } = props;
    const handleChange = useCallback(
        (state: EditorState) => onChange(state.doc.toString()),
        [onChange]
    );
    const [refContainer, editorView] = hookCodemirror<HTMLDivElement>({
        initialDoc: initialDoc,
        onChange: handleChange
    });
    useEffect(() => {
        if (editorView) {
            /** */
        }
    }, [editorView]);

    return <div className="editor-wrapper" ref={refContainer}></div>
};

export default Editor;