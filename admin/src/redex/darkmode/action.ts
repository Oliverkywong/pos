export function toggleDark() {
    return {
        type: '@@darkmode/TOGGLE_DARKMODE' as const,  
    };
}

export type DarkModeAction = ReturnType<typeof toggleDark>