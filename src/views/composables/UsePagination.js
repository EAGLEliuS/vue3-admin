import { ref } from 'vue'
const UsePagination = function () {
    const total = ref(0);
    return { total };
}
export default UsePagination