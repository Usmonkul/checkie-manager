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

export interface DraftDataProps {
  id: string;
  title: string;
  inspector: string;
  inspectionDate: string;
  registeredDate: string;
  progress: string;
  complationDate: string;
}

export interface ItemDataProps {
  id: string;
  check_item: string;
  checkClass: string;
  checkSubClass: string;
  create_dt: string;
  update_dt: string;
}

export interface TargetDataProps {
  id: string;
  facility: string;
  create_dt: string;
  update_dt: string;
}
