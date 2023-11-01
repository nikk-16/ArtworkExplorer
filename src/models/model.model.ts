export interface Art {
    id: number;  // id
    title: string;  // title
    artist_title: string;  // artist_title
    artwork_type_title: string;  // artwork_type_title
    category_titles: string[];  // category_titles
    copyright_notice: string; // .copyright_notice
    credit_line: string;  // credit_line
    dimensions: string;  // dimensions_detail
    date_start: number;  // date_end
    exhibition_history: string  // exhibition_history
    image_id: string;  // image_id
    description: string;  // description
}
export interface Pagination {
    total: number,
    limit: 10,
    offset: 0,
    total_pages: number,
    current_page: number,
    next_url: string
}
export interface Data{
    pagination: Pagination;
    data: Art[];
    info : Info,
    config : Config

}
export interface oneArt{
    data: Art;
    info : Info,
    config : Config
}

export interface Info {
    license_text: string,
    license_links: string[],
    version: string
}
 
export interface Config {
    iiif_url: string,
    website_url: string
}



