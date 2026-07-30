export interface Place {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  image: string;
  created_at: string;
}


export interface Village {
  id: number;
  name: string;
  district: string;
  state: string;
  description: string;
  agriculture: string;
  culture: string;
  created_at: string;
}