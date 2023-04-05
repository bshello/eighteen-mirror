import { instance } from "..";

/**
 * [POST] search를 위한 회원등록 요청
 * @param token 토큰
 */
export const searchRegist = (token: string) => {
  instance.defaults.headers["Authorization"] = token;
  return instance.post(`/elatic_search/regist`);
};

/**
 * [PUT] search를 위한 애창곡 등록 요청
 * @param musicIdList 노래 번호 목록
 * @param token 토큰
 */
export const addEighteenForSearch = (musicIdList: { id: number }[], token: string) => {
  instance.defaults.headers["Authorization"] = token;
  return instance.put(`/elatic_search/data`, musicIdList);
};

/**
 * [DELETE] search를 위한 애창곡 삭제 요청
 * @param musicIdList 노래 번호 목록
 * @param token 토큰
 */
export const removeEighteenForSearch = (musicIdList: { id: number }[], token: string) => {
  instance.defaults.headers["Authorization"] = token;
  return instance.delete(`/elatic_search/data`, { data: musicIdList });
};

/**
 * [GET] 제목 기반 노래 검색
 * @param title 제목 검색어
 * @param pagination_idx 페이지 번호
 * @param pagination_size 페이지 크기
 * @param token 토큰
 * @returns
 */
export const searchForTitle = (title: string, pagination_idx: number, pagination_size: number, token: string) => {
  instance.defaults.headers["Authorization"] = token;
  return instance.get(`/search/pagination/title/${title}`, { params: { pagination_idx, pagination_size } });
};

/**
 * [GET] 가수 기반 노래 검색
 * @param singer 가수 검색어
 * @param pagination_idx 페이지 번호
 * @param pagination_size 페이지 크기
 * @param token 토큰
 */
export const searchForSinger = (singer: string, pagination_idx: number, pagination_size: number, token: string) => {
  instance.defaults.headers["Authorization"] = token;
  return instance.get(`/search/pagination/singer/${singer}`, { params: { pagination_idx, pagination_size } });
};
