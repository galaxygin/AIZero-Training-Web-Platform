import { Typography } from "@material-ui/core";
import { calculateEditorHeight } from "./SizeManager";

export function showEditor(content: string, lines: number, fileName: string) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: "1px solid", borderColor: 'silver' }}>
            <Typography style={{ color: 'white', height: 20, backgroundColor: "#454545" }}>{fileName}</Typography>
            <textarea readOnly value={content} style={{
                color: 'lime',
                backgroundColor: 'black',
                borderColor: 'silver',
                borderWidth: 1,
                fontSize: 16,
                minWidth: 700,
                whiteSpace: 'pre',
                height: calculateEditorHeight(lines)
            }} />
        </div>
    )
}

export function showCmdInput(cmd: string) {
    return <input readOnly value={cmd} style={{
        color: 'lime',
        backgroundColor: 'black',
        borderColor: 'silver',
        borderWidth: 1,
        fontSize: 16,
        height: 30,
        width: 700,
        whiteSpace: 'pre'
    }} />
}