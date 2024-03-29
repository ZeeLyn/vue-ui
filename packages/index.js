import mask from "./mask/index";
import loading from "./loading/index";
import alert from "./alert/index";
import toast from "./toast/index";

// 以数组的结构保存组件，便于遍历
const components = [mask, loading, alert, toast];

// 定义 install 方法
const install = function (app, opts) {
    if (install.installed) return;
    install.installed = true;
    // 遍历并注册全局组件
    components.map((component) => {
        component.install(app, opts);
    });
};

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components,
};
