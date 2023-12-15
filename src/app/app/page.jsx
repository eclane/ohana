import AppBreadcrumb from "@/components/app/breadcrumb";
import AppFooter from "@/components/app/footer";
import AppHeader from "@/components/app/header";
import AppPromo from "@/components/app/promo";
import AppServices from "@/components/app/services";
import AppUpgrade from "@/components/app/upgrade";

export default function Application() {
    return (
        <main>
            <AppPromo />
            <AppHeader />
            <AppBreadcrumb />
            <AppUpgrade />
            <AppServices />
            <AppFooter />
        </main>
    )
}
