export interface PortfolioItem {
  title: string;
  img: string;
  description: string;
  content: Array<PortfolioItemContent>;
}

export interface PortfolioItemContent {
  img: string;
  description: string;
}
