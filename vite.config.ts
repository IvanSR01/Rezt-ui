import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// поддержка синтаксиса React
		react(),
		// генерация файла index.d.ts
		dts({
			insertTypesEntry: true
		})
	],
	build: {
		lib: {
			// путь к основному файлу библиотеки
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			// Название библиотеки
			name: 'Z-Ui',
			// Форматы генерируемых файлов
			formats: ['es', 'umd'],
			// Название генерируемых файлов
			fileName: format => `Z-Ui.lib.${format}.ts`
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'clsx'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'clsx': 'clsx'
				}
			}
		}
	}
})
