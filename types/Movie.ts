export type TMovie = {
  type: string;
  id: string;
  link_type: string;
  link_key: string;
  theme: string;
  output_type: string;
  movie_id: string;
  uid: string;
  movie_title: string;
  movie_title_en: string;
  tag_id: string;
  serial: {
    enable: boolean;
    parent_title: string;
    season_id: number;
    serial_part: string;
    part_text: string;
    season_text: string;
    last_part: string;
  };
  watermark: boolean;
  HD: boolean;
  watch_list_action: string;
  commingsoon_txt: string;
  rel_data: {
    rel_type: string;
    rel_id: string;
    rel_uid: string | null;
    rel_title: string | null;
    rel_type_txt: string;
  };
  badge: {
    free: boolean;
    backstage: boolean;
    vision: boolean;
    hear: boolean;
    online_release: boolean;
    exclusive: boolean;
    commingsoon: boolean;
    info: string[];
  };
  rate_enable: boolean;
  rate_enable_by_cnt: boolean;
  descr: string;
  cover: string;
  publish_date: string;
  age_range: string;
  pic: {
    movie_img_s: string;
    movie_img_m: string;
    movie_img_b: string;
  };
  rate_avrage: string;
  avg_rate_label: string;
  pro_year: string;
  imdb_rate: string;
  categories: {
    title_en: string;
    title: string;
    link_type: string;
    link_key: string;
  }[];
  duration: {
    value: number;
    text: string;
  };
  countries: {
    country: string;
    country_en: string;
  }[];
  dubbed: {
    enable: boolean;
    text: string;
  };
  subtitle: {
    enable: boolean;
    text: string;
  };
  audio: {
    languages: string[];
    isMultiLanguage: boolean;
  };
  language_info: {
    flag: string;
    text: string;
  };
  director: string;
  last_watch: string | null;
  freemium: boolean;
  position: string | null;
  sid: string | null;
  uuid: string | null;
};
