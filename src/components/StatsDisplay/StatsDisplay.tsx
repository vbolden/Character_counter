import type { StatsDisplayProps } from "../../types/index.ts";

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {

    return (
        <div className="stats-display">
            <div>
                <p>Characters</p>
                <span>{stats.characterCount}</span>
            </div>
            <div>
                <p>Words</p>
                <span>{stats.characterCount}</span>
                <p>Min: 25 | Max: 100</p>
            </div>
            <div>
                <p>Reading Time</p>
                {showReadingTime && <span>{stats.readingTime}</span>}
            </div>
        </div>
    )
}

export default StatsDisplay;