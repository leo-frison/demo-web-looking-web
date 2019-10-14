interface Images {
  favicon: string,
  preview: string[],
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  images: Images;
}