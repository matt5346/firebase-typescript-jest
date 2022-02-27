import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import { CombinedVueInstance } from 'vue/types/vue';
import TopHeader from '@/components/TopHeader.vue';

describe('topHeader.vue', () => {
  let wrapper: Wrapper<TopHeader, Element>;
  let cmp;
  let vm: CombinedVueInstance<Record<never, any> & Vue, object, object, object, Record<never, any>>;

  beforeEach(() => {
    cmp = Vue.extend(TopHeader);
    vm = new cmp().$mount();
    wrapper = shallowMount(TopHeader, {
      // methods: { setupFirebase: () => {} },
    });
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('checking h1 text in top header', () => {
    expect(wrapper.find('h1').text()).toBe('User status');
  });
});
