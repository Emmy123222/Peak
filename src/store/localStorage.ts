export const loadState = () => {
    if (typeof window !== "undefined") return undefined;

    try {
        const serializedState = localStorage.getItem("reduxState");
        return serializedState? JSON.parse(serializedState) : undefined;
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (error) {
        console.warn("Failed to save state", error);
    }
}