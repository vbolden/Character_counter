import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = "Type your message here...",
    initialValue = ''
}) => {

    const [text, setText] = useState(initialValue)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        setText(newText);
        onTextChange(newText) // SEND DATA TO PARENT
    };

    return (
        <div className="textbox">
            <textarea 
            placeholder={placeholder} 
            value={text} 
            onChange={handleChange} 
            rows={6} ></textarea>
        </div>
    )
}

export default TextInput;