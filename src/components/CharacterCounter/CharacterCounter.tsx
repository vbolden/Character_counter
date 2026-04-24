import type { CharacterCounterProps, TextStats } from "../../types";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import { useState } from "react";

const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWords = 25,
    maxWords = 100,
    targetReadingTime = 5,
}) => {
    const [text, setText] = useState("");

    const calculateStats = (input: string): TextStats => {
        const characterCount = input.length;

        const words = input.trim() === "" 
        ? [] 
        : input.trim().split(/\s+/); // SPLIT BY WHITESPACE

        const wordCount = words.length;

        const readingTime = wordCount / 225; // ROUND UP TO NEAREST MINUTE

        return {
            characterCount,
            wordCount,
            readingTime,
        };
    };

    const stats = calculateStats(text);

    // STATS VALIDATIONS
    const isBelowMin = minWords && stats.wordCount < minWords;
    const isAboveMax = maxWords && stats.wordCount > maxWords;
    const meetsReadingTarget =
        targetReadingTime && stats.readingTime >= targetReadingTime;

    return (
        <div className='container'>
            <h1>CHARACTER COUNTER</h1>

            <TextInput onTextChange={setText} />

            <StatsDisplay stats={stats} />

            <div>
                {isBelowMin && <p style={{ color: "red" }}>Below minimum word count.</p>}
                {isAboveMax && <p style={{ color: "red" }}>Above maximum word count.</p>}
                {meetsReadingTarget && <p style={{ color: "green" }}>Meets reading target.</p>}
            </div>
        </div>
    )
}

export default CharacterCounter;