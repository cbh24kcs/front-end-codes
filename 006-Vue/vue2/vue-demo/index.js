new Vue({
    // 指定绑定的元素
    el: '#app',
    // 模板
    template: `
        <div>
            <h1>{{msg}}</h1>
        </div>
    `,
    // 数据
    data: {
        msg: 'Hello World',
    },
    // 方法
    methods: {},
    // 计算属性
    computed: {},
    // 监听器
    watch: {},
    // 过滤器
    filter: {},

    // 生命周期钩子函数
    // 创建之前
    beforeCreate: function () {},
    // 创建完成
    created: function () {},
    // 挂载之前
    beforeMount: function() {},
    // 挂载完成
    mounted: function() {},
    // 更新之前
    beforeUpdate: function () {},
    // 更新完成
    updated: function () {},
    // 销毁之前
    beforeDestory: function () {},
    // 销毁完成
    destoryed: function () {},
});




