export type ConsentViewState = "hidden" | "popup" | "settings" | null;
export type SupportedLanguages = keyof typeof t;

export const CONSENT_COOKIE_NAME = "tracking_consent";

export const t = {
  de: {
    info: "Diese Website verwendet Tracking-Technologien. Sie können der Nutzung dieser Technologien zustimmen oder widersprechen.",
    denyBt: "Ablehnen",
    acceptBt: "Alle akzeptieren",
    smallPopup: {
      settingsBt: "Einstellungen",
    },
    settings: {
      yourPrivacy: "Ihre Privatsphäre",
      saveBt: "Speichern",
      privacyPolicyLinkText:
        "Lesen Sie in unserer Datenschutzerklärung, wie wir mit Daten umgehen",

      consentCategories: [
        {
          key: "essential",
          title: "Essenziell",
          description:
            "Essenzielle Cookies und Dienste werden verwendet, um Kernfunktionen der Website zu ermöglichen, wie z. B. die Gewährleistung der Sicherheit der Website.",
        },
        {
          key: "marketing",
          title: "Marketing",
          description:
            "Marketing-Cookies und -Dienste werden verwendet, um personalisierte Werbung, Werbeaktionen und Angebote bereitzustellen. Diese Technologien ermöglichen gezielte Werbung und Marketingkampagnen, indem sie Informationen über die Interessen, Vorlieben und Online-Aktivitäten der Nutzer sammeln.",
        },
        {
          key: "analytics",
          title: "Analysen",
          description:
            "Analyse-Cookies und -Dienste werden zur Erfassung statistischer Informationen darüber verwendet, wie Besucher mit einer Website interagieren. Diese Technologien liefern Einblicke in die Websitenutzung, das Besucherverhalten und die Websiteleistung, um die Website zu verstehen und zu verbessern und die Benutzererfahrung zu verbessern.",
        },
        {
          key: "functional",
          title: "Funktional",
          description:
            "Funktionale Cookies und Dienste werden verwendet, um erweiterte und personalisierte Funktionalitäten anzubieten. Diese Technologien bieten zusätzliche Funktionen und verbesserte Benutzererfahrungen, wie z. B. das Speichern Ihrer Spracheinstellungen, Schriftgrößen, Regionsauswahlen und benutzerdefinierten Layouts. Das Deaktivieren dieser Cookies kann dazu führen, dass bestimmte Dienste oder Funktionen der Website nicht verfügbar sind.",
        },
      ],
    },
  },
  en: {
    info: "This site uses tracking technologies. You may opt in or opt out of the use of these technologies.",
    denyBt: "Deny",
    acceptBt: "Accept all",
    smallPopup: {
      settingsBt: "Consent Settings",
    },
    settings: {
      yourPrivacy: "Your Privacy",
      saveBt: "Save",
      privacyPolicyLinkText:
        "Read how we handle for data in our Privacy Policy",

      consentCategories: [
        {
          key: "essential",
          title: "Essentiell",
          description:
            "Essential cookies and services are used to enable core website features, such as ensuring the security of the website.",
        },
        {
          key: "marketing",
          title: "Marketing",
          description:
            "Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities.",
        },
        {
          key: "analytics",
          title: "Analytics",
          description:
            "Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.",
        },
        {
          key: "functional",
          title: "Functional",
          description:
            "Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.",
        },
      ],
    },
  },
} as const;
