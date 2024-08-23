import React, { useEffect, useMemo} from "react";
import { useQuill } from 'react-quilljs';
import * as Y from 'yjs';
import { QuillBinding } from 'y-quill';
import 'quill/dist/quill.snow.css';

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
        <div>
            <h1>Text Editor</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '100%', height: 300 }}>
                    <div ref={quillRef} />
                </div>
            </div>
        </div>
    );
}

export default Editor;
