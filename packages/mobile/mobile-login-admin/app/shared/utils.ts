
import { getRootView } from "tns-core-modules/application"

export const showDrawer = () => {
    let drawerNativeView = getRootView() as any;
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.showDrawer();
    }
}

export const closeDrawer = () => {
    let drawerNativeView = getRootView() as any;
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.closeDrawer();
    }
}