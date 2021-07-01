import {shallowMount} from "@vue/test-utils";
import ConfirmModal from "@/components/ConfirmModal";
import {ModalData} from "@/model/ModalData";
import Vue from "vue";

describe('ConfirmModal.vue', () => {

    it('測試傳遞標題和內文', async () => {
        const modalData = new ModalData();
        modalData.title = '測試標題'
        modalData.body = '測試內文'
        const wrapper = shallowMount(ConfirmModal)
        const vm = wrapper.vm;
        expect(Object.keys(vm.$options.methods).length).toBe(2)
        expect(vm.$options.methods).toHaveProperty('openModal')
        vm.openModal(modalData)
        await Vue.nextTick()
        expect(vm.$data['modal']).not.toBeNull()
        expect(vm.$data['title']).toBe(modalData.title)
        expect(vm.$data['body']).toBe(modalData.body)
        expect(wrapper.get('.modal-title').text()).toBe(modalData.title)
        expect(wrapper.get('.modal-body').text()).toBe(modalData.body)
    })

    it('測試確認後回傳參數', async () => {
        const modalData = new ModalData('test value', '測試標題', '測試內文');
        const wrapper = shallowMount(ConfirmModal)
        const vm = wrapper.vm;
        vm.openModal(modalData)
        await wrapper.find('button.btn-primary').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('confirm')
        expect(wrapper.emitted()['confirm'][0]).toEqual([modalData.value])
    })


})