// utils/translateText.js

import {
    startTranslation,
    stopTranslation,
} from "./translationLoader";

export const translateText = async (
    text,
    lang,
    setIsTranslating
) => {

    try {

        // START GLOBAL LOADER
        startTranslation(setIsTranslating);

        const response = await fetch("/api/translate", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                text,
                lang,
            }),
        });

        const data = await response.json();

        return data.translated;

    } catch (error) {

        console.log(error);

        return text;

    } finally {

        // STOP GLOBAL LOADER
        stopTranslation(setIsTranslating);
    }
};