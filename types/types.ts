//
//
export interface InspectorProps {
  idx: number;
  inspector_name: string;
  inspector_tel: string;
  inspector_email: string;
  inspector_description: string;
  inspector_image: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_by: string;
  update_dt: string;
  validation: boolean;
}

export interface TargetProps {
  idx: number;
  check_group: string;
  create_by: string;
  create_dt: string;
  update_by: string;
  update_dt: string;
  file_name: string;
  file_path: string;
  file_size: string;
  check_item_idx: 0;
  tag_id: null;
}

export interface ItemProps {
  idx: number;
  check_class_idx: string;
  checkClass: {
    idx: number;
    check_class: string;
    del_yn: string;
    create_by: string;
    create_dt: string;
    update_by: string;
    update_dt: string;
  };
  check_sub_class_idx: string;
  checkSubClass: {
    idx: number;
    check_sub_class: string;
    del_yn: string;
    create_by: string;
    create_dt: string;
    update_by: string;
    update_dt: string;
  };
  check_item: string;
  check_content: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_by: string;
  update_dt: string;
  check_item_type: string;
}

export interface ContentProps {
  idx: number;
  check_item: string;
  check_content: string;
}

export interface LCategoryProps {
  idx: number;
  check_class: string;
  check_sub_class?: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_by: string;
  update_dt: string;
}

export interface MCategoryProps {
  idx: number;
  check_sub_class: string;
  check_class?: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_by: string;
  update_dt: string;
}

// For test
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
