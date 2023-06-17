//
//
export interface InspectorProps {
  idx: number;
  inspector_name: string;
  inspector_tel: string;
  inspector_email: string;
  inspector_description: string;
  inspector_title: string;
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
  update_dt: string;
  file_name: string;
  file_path: string;
  file_size: string;
  check_item_idx: [];
  tag_id: string;
  check_group_schedule: string;
  check_group_inspectors: [];
}

export interface ItemProps {
  idx: number;
  check_class: {
    idx: string;
    check_class: string;
    del_yn: string;
    create_by: string;
    create_dt: string;
    update_dt: string;
  };
  checkSubClass: {
    idx: string;
    check_class: string;
    del_yn: string;
    create_by: string;
    create_dt: string;
    update_dt: string;
  };
  check_item: string;
  check_content: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_dt: string;
}

export interface ContentProps {
  idx: number;
  check_item: string;
  check_content: string;
}

export interface CategoryProps {
  idx: number;
  check_class: string;
  del_yn: string;
  create_by: string;
  create_dt: string;
  update_dt: string;
}

export interface DraftDataProps {
  id: number;
  title: string;
  inspector: string;
  inspectionDate: string;
  registeredDate: string;
  progress: string;
  completionDate: string;
}
