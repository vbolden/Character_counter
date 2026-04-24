import type { StatsDisplayProps } from "../../types/index.ts";

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {

    const formattedTime = (readingTime: number) => {
        const totalSeconds = Math.floor(readingTime * 60);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        return (
            `${mins}: ${secs.toString().padStart(2, "0")}`
        );
    };

    return (
        <div className="stats-display">
            <div className="stat">
                <p className="label">Characters</p>
                <span className="value">{stats.characterCount}</span>
            </div>
            <div className="stat">
                <p className="label">Words</p>
                <span className={
                    `value 
                    ${stats.wordCount > 100 ? "error" : ""} 
                    ${stats.wordCount >= 25 && stats.wordCount <= 100 ? "success" : ""} 
                    ${stats.wordCount < 25 ? "error" : ""}`}>{stats.wordCount}</span>
                <p className="sub">Min: 25 | Max: 100</p>
            </div>
            <div className="stat reading">
                <p className="label">Reading Time</p>
                {showReadingTime && <span className="value">{formattedTime(stats.readingTime)}</span>}
            </div>
        </div>
    )
}

export default StatsDisplay;