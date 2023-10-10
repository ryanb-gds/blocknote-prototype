import {useState} from 'react'
import './App.css'
import Editor from "./editor/Editor";
import { defaultBlockSchema, BlockSchema } from "@blocknote/core"
import CalloutBlock from "./editor/blocks/Callout";

const editorSchema = {
    ...defaultBlockSchema,
    callout: CalloutBlock,
} satisfies BlockSchema;

function App() {
    const [markdown, setMarkdown] = useState("");

    const onEditorContentChange = (editor) => {
        const saveBlocksAsMarkdown = async () => {
            const output: string = await editor.blocksToMarkdown(editor.topLevelBlocks)
            setMarkdown(output);
        };
        void saveBlocksAsMarkdown();
    }

    const editorOptions = { onEditorContentChange, blockSchema: editorSchema }

    return (
        <>
            <h1>BlockNote Prototype</h1>
            <Editor options={editorOptions}/>
            <pre className="markdown">{markdown}</pre>
        </>
    )
}

export default App
