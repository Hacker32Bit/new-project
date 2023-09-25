import { useState } from "react";
import "./theme.css"

export default function DarkThemeToggle({ children }) {
    const [isEnabled, setIsEnabled] = useState(true)

    const onChangeThemeColor = () => {
        setIsEnabled((prev) => !prev)
    }

    console.log(children)

    return (
        <div className={isEnabled ? "dark-theme app" : "light-theme app"}>
            <label>
                Change theme
                <input type="checkbox" checked={isEnabled} onChange={onChangeThemeColor}></input>
            </label>
            {children}
        </div>
    )
}