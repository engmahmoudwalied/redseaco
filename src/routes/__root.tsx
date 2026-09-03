import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://www.redsearoadseg.com";
const SITE_TITLE = "شركة البحر الأحمر للمقاولات العامة ورصف الطرق | Red Sea for Roads";
const SITE_DESC =
  "شركة البحر الأحمر للمقاولات العامة ورصف الطرق بالغردقة والمحافظة. خبرة تتجاوز 20 عاماً في أعمال الأسفلت، الطرق، العزل، التجفيف والتوريدات بالمحافظة. Red Sea for Roads & General Contracting Company.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_URL = `${SITE_URL}/logo.png`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "name": "شركة البحر الأحمر للمقاولات العامة ورصف الطرق",
  "alternateName": ["Red Sea for Roads Company", "شركة البحر الأحمر للطرق", "Red Sea Roads"],
  "url": SITE_URL,
  "logo": LOGO_URL,
  "image": OG_IMAGE,
  "description": SITE_DESC,
  "telephone": "+201000597912",
  "email": "Info@redsearoadseg.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 شارع الوحدة، المنشية",
    "addressLocality": "الغردقة",
    "addressRegion": "محافظة البحر الأحمر",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.2579",
    "longitude": "33.8116"
  },
  "areaServed": [
    "الغردقة", "Hurghada",
    "رأس غارب", "Ras Ghareb",
    "سهل حشيش", "Sahl Hasheesh",
    "سفاجا", "Safaga",
    "سوما باي", "Soma Bay",
    "القصير", "El Quseir",
    "مرسى علم", "Marsa Alam",
    "الجونة", "El Gouna",
    "محافظة البحر الأحمر", "Red Sea Governorate"
  ],
  "priceRange": "$$$",
  "openingHours": "Mo-Th 08:00-17:00, Sa-Su 08:00-17:00",
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.linkedin.com",
    "https://www.youtube.com"
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      {
        name: "keywords",
        content:
          "شركة البحر الأحمر للمقاولات, شركة البحر الاحمر للطرق, شركة الطرق والنقل, مقاولات رصف الطرق الغردقة, رصف طرق البحر الاحمر, شركة مقاولات الغردقة, Red Sea for Roads, شركة البحر الاحمر للمقاولات العامة, مقاول طرق البحر الاحمر, رصف اسفلت, عزل مباني وخزانات, Red Sea Roads, redsearoadseg.com",
      },
      { name: "author", content: "Red Sea for Roads Company" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:site_name", content: "شركة البحر الأحمر للمقاولات ورصف الطرق" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "شركة البحر الأحمر للمقاولات ورصف الطرق" },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#0f2347" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&family=Cairo:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-red-600 selection:text-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
