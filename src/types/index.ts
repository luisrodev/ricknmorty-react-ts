export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Pagination {
  next: string | null;
  prev: string | null;
}

export enum PaginationAction {
  Next = "Next",
  Prev = "Prev",
}
