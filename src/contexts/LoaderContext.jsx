import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function useLoader() {
    return useContext(LoaderContext);
}

export function LoaderContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, startLoading, endLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}
