import { sv } from '@formkit/i18n'
import theme from '@/formkit.theme.config'
import { defaultConfig } from '@formkit/vue'
import { addAsteriskPlugin } from '@/formkit.plugin.config'

const config = defaultConfig({
	plugins: [addAsteriskPlugin],
	locales: { sv },
	locale: 'sv',
	config: {
		classes: theme,
	},
})

export default config
