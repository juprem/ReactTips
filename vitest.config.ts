import { defineProject } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineProject({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        // "reporters" is not supported in a project config,
        // so it will show an error
        reporters: ['json'],
    },
});
