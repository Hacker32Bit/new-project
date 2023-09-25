import { useState } from "react";

export default function DarkThemeToggle() {
    const [isEnabled, setIsEnabled] = useState(false)

    const onChangeThemeColor = () => {
        document.body.style.backgroundColor = isEnabled ? "black" : "white"
        document.body.style.color = isEnabled ? "white" : "black"
    
        setIsEnabled(!isEnabled)
    }

    return (
        <div>
            <label>
                Change theme
                <input type="checkbox" checked={isEnabled} onChange={onChangeThemeColor}></input>
            </label>
        </div>
    )
}