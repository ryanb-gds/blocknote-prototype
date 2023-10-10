import { BlockNoteEditorOptions } from "@blocknote/core";
import {BlockNoteView, useBlockNote} from "@blocknote/react";
import "@blocknote/core/style.css";

function Editor({ options }: { options: Partial<BlockNoteEditorOptions<any>> }) {
    const editor = useBlockNote<any>(options);

    return <BlockNoteView editor={editor} />;
}

export default Editor