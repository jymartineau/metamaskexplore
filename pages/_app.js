import "@/styles/globals.css";
import { MetaMaskProvider } from "@metamask/sdk-react";

export default function App({ Component, pageProps }) {
  return (
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Bankful DApp Ecommerce",
          icon: "https://example.com/icon.png",
          description: "Bankful's DApp Ecommerce Gateway for Merchants.",
          url: "https://bankful.com",
        },
        enableAnalytics: true,
      }}>
      <Component {...pageProps} />
    </MetaMaskProvider>
  );
}
