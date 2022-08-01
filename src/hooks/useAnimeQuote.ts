import { ref, watchEffect } from "vue";
import { Random } from "animechan.js";

const useAnimeQuote = () => {
    const result = ref<string>(sessionStorage.getItem("anime-quote") ?? "...");

    watchEffect(() => {
        (async () => {
            const { anime, character, quote } = await Random();
            const fullQuote = `[${anime}] ${character}: ${quote}`;

            sessionStorage.setItem("anime-quote", fullQuote);
            result.value = fullQuote;
        })();
    });

    return { quote: result };
};

export { useAnimeQuote };
