// src/js/api/PromptService.js
import { api } from "./http.js";
import { ENDPOINTS } from "./endpoints.js";

class PromptService {
    async getPrompts(params = {}) {
        const res = await api.get(ENDPOINTS.PROMPTS, { params });

        const totalHeader =
            res.headers["x-total-count"] || res.headers["X-Total-Count"];

        const total = totalHeader ? Number(totalHeader) : res.data.length;

        return {
            list: res.data,
            total
        };
    }

    async getPrompt(id) {
        const res = await api.get(`${ENDPOINTS.PROMPTS}/${id}`);
        return res.data;
    }

    async createPrompt(data) {
        const res = await api.post(ENDPOINTS.PROMPTS, data);
        return res.data;
    }
}

export const promptService = new PromptService();
