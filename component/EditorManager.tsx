import { calculateEditorHeight } from "./SizeManager";

export function showEditor(content: string, lines: number) {
    return <textarea readOnly value={content} style={{
        color: 'lime',
        backgroundColor: 'black',
        borderColor: 'silver',
        borderWidth: 1,
        fontSize: 16,
        minWidth: 700,
        whiteSpace: 'pre',
        height: calculateEditorHeight(lines)
    }} />
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