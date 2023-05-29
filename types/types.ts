export interface CategoryProps {
  id: string;
  name: string;
  category: string;
  registeredDate: string;
}

export interface InspectorsProps {
  id: string;
  name: string;
  job: string;
  email: string;
  phone: string;
  description?: string;
  image: string;
}
