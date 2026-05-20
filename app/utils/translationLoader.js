// utils/translationLoader.js

let activeRequests = 0;

export const startTranslation = (setIsTranslating) => {

    activeRequests++;

    setIsTranslating?.(true);
};

export const stopTranslation = (setIsTranslating) => {

    activeRequests--;

    if (activeRequests <= 0) {

        activeRequests = 0;

        setIsTranslating?.(false);
    }
};