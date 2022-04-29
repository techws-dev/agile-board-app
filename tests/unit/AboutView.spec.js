import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components/index.mjs'
import * as directives from 'vuetify/lib/directives/index.mjs'

describe('AboutView.vue', () => {
    const vuetify = createVuetify({ components, directives })

    it('has the right title', () => {
        const wrapper = mount(AboutView, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toContain('<h1 class="mb-5">About</h1>')
    })
})
