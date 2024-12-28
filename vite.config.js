import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@globalStyles': path.resolve(__dirname, 'src/styles/globalStyles.css'),
			'@atoms': path.resolve(__dirname, 'src/components/atoms'),
			'@molecules': path.resolve(__dirname, 'src/components/molecules'),
			'@organisms': path.resolve(__dirname, 'src/components/organisms'),
			'@templates': path.resolve(__dirname, 'src/components/templates'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
})
