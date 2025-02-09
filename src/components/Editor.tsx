// @ts-nocheck

import { useState } from "react"
import SunEditor from "suneditor-react"
import "suneditor/dist/css/suneditor.min.css";

const Editor = ({ height }: { height?: string}) => {
  const [isDarkMode, setDarkMode] = useState(false)
  return (
    <SunEditor
        // setContents={defaultValue ? defaultValue : meta.value ? meta.value : ""}
        // onChange={(content) => setFieldValue(name, content)}
        height={height || "300px"}
        placeholder={'start typing'}
        setOptions={{
        buttonList: [
            ["undo", "redo"],
            ["bold", "italic", "underline", "strike", "subscript", "superscript"],
            ["font", "fontSize", "formatBlock"],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["align", "horizontalRule", "list", "lineHeight", "paragraphStyle"],
            ["outdent", "indent"],
            ["table", "link", "image", "video", "audio"],
            ["codeView", "fullScreen", "showBlocks"],
            ["preview", "print", "save", "template"],
        ],
        defaultStyle: `font-size: 14px; line-height: 1.6; background-color:${
            isDarkMode ? "#000" : "#fff"
        }; color: ${isDarkMode ? "#fff" : "#000"}`,
        resizingBar: true,
        imageFileInput: true,
        videoFileInput: true,
        }}
    />
  )
}

export default Editor