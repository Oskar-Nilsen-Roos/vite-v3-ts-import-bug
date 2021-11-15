declare module "components/Component.vue" {
    const _default: import("vue").DefineComponent<__VLS_DefinePropsToOptions<{
        msg: string;
    }>, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        msg?: unknown;
    } & {
        msg: string;
    } & {}>, {}>;
    export default _default;
    type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
    type __VLS_DefinePropsToOptions<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? {
            type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
        } : {
            type: import('vue').PropType<T[K]>;
            required: true;
        };
    };
}
declare module "index" {
    export { default as Component } from "components/Component.vue";
}
