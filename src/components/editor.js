import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function Editor() {
  const [value, setValue] = React.useState("");
  return (
      <MDEditor
      className="h-screen"
        value={value}
        onChange={setValue}
        height={1000}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
          maxLength: 1000,
        }}
      />
  );
}