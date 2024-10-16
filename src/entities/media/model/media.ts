type Genre =
  | 'action'
  | 'horror'
  | 'drama'
  | 'animation'
  | 'comedy'
  | 'documentary';
type Category = 'latest' | 'popular';

export type Media = {
  id: number; // 고유 ID
  title: string; // 시리즈 제목
  description: string; // 시리즈 설명
  imageUrl: string; // 썸네일 이미지 URL
  overallRating: number; // 전체 평균 평점
  genres: Genre[]; // 장르 리스트
  releaseDate: string; // 출시일 (ISO 8601 형식)
  isSeries: boolean; // 시리즈 여부
  seasons?: number; // 시즌 수 (옵션: 한 편이면 생략)
  episodes?: number; // 총 에피소드 수 (옵션: 한 편이면 생략)
  director: string; // 감독
  cast: string[]; // 주연 배우 리스트
  category?: Category; // 카테고리 (선택적: latest, popular)
};
