export interface TopbarData {
  address: string;
  phone: string;
}

export interface HeaderData {
  menu: { label: string; href: string; isActive: boolean }[];
  cta: { label: string; href: string };
}

export interface HeroBannerData {
  slides: {
    id: number;
    badge: string;
    heading: { main: string; highlight: string };
    description: string;
    button: { label: string; href: string };
    image: { src: string };
  }[];
}

export interface AboutUsData {
  badge: string;
  heading: { main: string; highlight: string };
  description: string;
  images: {
    main1: string;
    main2: string;
    doctorBadge: { name: string; specialty: string; avatar: string; buttonText: string };
  };
  features: string[];
  videoCard: { thumbnail: string; title: string };
  quote: { text: string; author: string; role: string; avatar: string };
}

export interface ServicesData {
  badge: string;
  heading: { main: string; highlight: string };
  description: string;
  list: { id: number; title: string; description: string; image: string; href: string; slug: string }[];
}

export interface StatsData {
  list: { id: number; icon: string; value: string; label: string }[];
  featureCards: { id: number; icon: string; title: string; description: string }[];
}

export interface TeamData {
  badge: string;
  heading: { main: string; highlight: string };
  description: string;
  list: { id: number; name: string; specialty: string; image: string; appointmentLink: string }[];
}

export interface TestimonialsData {
  badge: string;
  heading: { main: string; highlight: string };
  list: { id: number; rating: number; review: string; name: string; location: string; avatar: string }[];
}

export interface FaqData {
  badge: string;
  heading: { main: string; highlight: string };
  description: string;
  contactBox: { label: string; phone: string; btnText: string; btnLink: string };
  image: string;
  list: { id: string; question: string; answer: string }[];
}

export interface FooterData {
  description: string;
  socials: { platform: string; url: string }[];
  quickLinks: { label: string; href: string }[];
  services: { label: string; href: string }[];
  contactInfo: {
    address: { title: string; value: string };
    phone: { title: string; value: string; timing: string };
    email: { title: string; value: string; note: string };
  };
  copyright: string;
}

export interface GlobalData {
  companyName: string;
  brand: { name: string; suffix: string; tagline: string };
  contact: { address: string; phone: string; email: string };
  socials: { name: string; url: string; icon: string }[];
}

export interface MediCareTemplateData {
  categories: {
    MediCare: {
      templateComponents: any;
      sections: {
        Global?: { variants: { MediCareGlobal1: GlobalData } };
        Topbar?: { variants: { MediCareTopbar1: TopbarData } };
        Header?: { variants: { MediCareHeader1: HeaderData } };
        HeroBanner?: { variants: { MediCareHeroBanner1: HeroBannerData } };
        AboutUs?: { variants: { MediCareAboutUs1: AboutUsData } };
        Services?: { variants: { MediCareServices1: ServicesData } };
        Stats?: { variants: { MediCareStats1: StatsData } };
        Team?: { variants: { MediCareTeam1: TeamData } };
        Testimonials?: { variants: { MediCareTestimonials1: TestimonialsData } };
        Faq?: { variants: { MediCareFaq1: FaqData } };
        MissionAndVision?: { variants: { MediCareMissionAndVision1: any } };
        WhyChooseUs?: { variants: { MediCareWhyChooseUs1: any } };
        BookAppointment?: { variants: { MediCareBookAppointment1: any } };
        ContactPage?: { variants: { MediCareContactPage1: any } };
        WorkingProcess?: { variants: { MediCareWorkingProcess1: any } };
        Footer?: { variants: { MediCareFooter1: FooterData } };
      }
    }
  }
}
