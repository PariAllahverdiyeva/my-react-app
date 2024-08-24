import React, { useEffect, useMemo} from "react";
import { useQuill } from 'react-quilljs';
import * as Y from 'yjs';
import { QuillBinding } from 'y-quill';
import 'quill/dist/quill.snow.css';
import './css/editor.css'

function Editor() {
    const { quill, quillRef } = useQuill();

    const ydoc = useMemo(() => new Y.Doc(), []);
    const ytext = ydoc.getText('quill');
    
    useEffect(() => {
        if (quill) {
            const binding = new QuillBinding(ytext, quill);
            quill.on('text-change', () => {
                const content = quill.root.innerHTML;
                return content
            });

            return () => {
                return binding
            };
        }
    }, [quill, ytext]);

    return (
        <div className="editor">
            <div className="editor-container">
                <h1 className="editor-title">Text Editor</h1>
                <div className="editor-wrapper">
                <div ref={quillRef} />
            </div>
        </div>
        </div>
    );
}

export default Editor;
