import {createReactBlockSpec, InlineContent} from "@blocknote/react";

const CalloutBlock = createReactBlockSpec({
    type: "callout",
    propSchema: {},
    containsInlineContent: true,
    // Do we have JSX implementation of the design system?
    render: () => (
        <div className="callout">
            <p>{<InlineContent />}</p>
        </div>
    ),
});

export default CalloutBlock