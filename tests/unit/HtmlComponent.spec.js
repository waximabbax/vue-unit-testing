import { shallowMount } from '@vue/test-utils'
import HtmlComponent from '@/components/HtmlComponent.vue'

describe('HtmlComponent', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HtmlComponent)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })

  it('check text content to be as defined in varaible', () => {
    const wrapper = shallowMount(HtmlComponent, {
      data () {
        return {
          title: 'I love Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('I love Vue.')
  })

  test('should show the form element on the user output', () => {
    const wrapper = shallowMount(HtmlComponent)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(HtmlComponent)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have button', () => {
    const wrapper = shallowMount(HtmlComponent)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  test('trigger click event on button ', async () => {
    const wrapper = shallowMount(HtmlComponent)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit form')
  })
  
})
