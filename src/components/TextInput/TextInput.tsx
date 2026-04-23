import type { TextInputProps } from "../../types/index.ts";

const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = "Type your message here...",
    initialValue = ''
}) => {
    return (
        <div className="textbox">
            <textarea 
            placeholder={placeholder} 
            defaultValue={initialValue} 
            onChange={(e) => onTextChange(e.target.value)} 
            rows={6} ></textarea>
        </div>
    )
}

export default TextInput;