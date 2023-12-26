/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			spacing: {
				header: "var(--header-height)",
			},
			maxWidth: {
				shell: "var(--shell-width)",
				content: "var(--content-width)",
			},
			minHeight: {
				content: "var(--content-height)",
			},
			colors: {
				base: "hsl(var(--color-base) / <alpha-value>)",
				surface: "hsl(var(--color-surface) / <alpha-value>)",
				overlay: "hsl(var(--color-overlay) / <alpha-value>)",
				muted: "hsl(var(--color-muted) / <alpha-value>)",
				subtle: "hsl(var(--color-subtle) / <alpha-value>)",
				text: "hsl(var(--color-text) / <alpha-value>)",
				love: "hsl(var(--color-love) / <alpha-value>)",
				gold: "hsl(var(--color-gold) / <alpha-value>)",
				rose: "hsl(var(--color-rose) / <alpha-value>)",
				pine: "hsl(var(--color-pine) / <alpha-value>)",
				foam: "hsl(var(--color-foam) / <alpha-value>)",
				iris: "hsl(var(--color-iris) / <alpha-value>)",
			},
			borderColor: {
				DEFAULT: "hsl(var(--color-muted) / 0.2)",
			},
			ringColor: {
				DEFAULT: "hsl(var(--color-foam) / 0.2)",
			},
		},
	},
	plugins: [],
};
