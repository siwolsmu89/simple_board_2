export const SPINNING_ON = 'SPINNING_ON';
export const SPINNING_OFF = 'SPINNING_OFF';

export function startSpinningAction() {
    return { type: SPINNING_ON }
}

export function stopSpinningAction() {
    return { type: SPINNING_OFF }
}