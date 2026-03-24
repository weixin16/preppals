export type Language = 'en' | 'zh';

export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export interface Content {
  nav: {
    home: string;
    csca: string;
    resources: string;
    resourcesDropdown: {
      overview: string;
      math: string;
      physics: string;
      chemistry: string;
      chinese: string;
    };
    tutoring: string;
    tutoringDropdown: {
      overview: string;
      stem: string;
      chinese: string;
      oneOnOne: string;
    };
    about: string;
    blog: string;
    contact: string;
    contactBtn: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    offer: {
      title: string;
      cards: Array<{ title: string; desc: string }>;
    };
    how: {
      title: string;
      steps: Array<{ title: string; desc: string }>;
    };
    resources: {
      title: string;
      desc: string;
      cta: string;
    };
    tutoring: {
      title: string;
      desc: string;
      cta: string;
    };
    story: {
      title: string;
      content: string;
    };
    faq: {
      title: string;
      items: FAQItem[];
    };
  };
  resources: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; desc: string; link: string }>;
  };
  resourceSubject: {
    sections: {
      free: { title: string; desc: string; status: string };
      selfStudy: { title: string; desc: string; price: string };
      community: { title: string; desc: string; price: string };
    };
    faqTitle: string;
    cta: string;
  };
  tutoring: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; desc: string; link: string }>;
  };
  tutoringClass: {
    registrationFee: string;
    officialRefer: string;
    lastUpdated: string;
    table: {
      headers: string[];
      rows: Array<{ label: string; value: string }>;
    };
  };
  tutoringOneOnOne: {
    title: string;
    subtitle: string;
    processTitle: string;
    steps: Array<{ title: string; desc: string }>;
    timezoneNote: string;
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyText: string;
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    values: Array<{ title: string; desc: string }>;
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPostSummary[];
    readMore: string;
    relatedTitle: string;
    tocTitle: string;
  };
  contact: {
  title: string;
  subtitle: string;
  whatsapp: string;
  emailFallback: string;
  whatNextTitle: string;
  whatNextSteps: string[];
  disclaimer: string;
  form: {
    name: string;
    email: string;
    whatsapp: string;
    country: string;
    timeline: string;
    timelinePlaceholder: string;
    timelineOptions: {
      label: string;
      value: string;
    }[];
    helpType: string;
    helpPlaceholder: string;
    helpOptions: {
      label: string;
      value: string;
    }[];
    subjects: string;
    subjectOptions: {
      label: string;
      value: string;
    }[];
    message: string;
    submit: string;
  };
};
  footer: {
    disclaimer: string;
    rights: string;
  };
}