import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav className="flex gap-5">
                <Link href={"/dashboard"}>
                dashboard</Link>
                <Link href={"/dashboard/about"}>
                About</Link>
            </nav>
            {children}
        </section>
    )
}