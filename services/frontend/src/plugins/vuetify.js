// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                primary: colors.purple.base,
            },
        },
    },
});

export default vuetify;
