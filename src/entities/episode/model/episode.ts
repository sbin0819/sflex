export type Episode = {
  id: number; // 고유 ID
  episodeNumber: number; // 에피소드 번호
  title: string; // 에피소드 제목
  description: string; // 에피소드 설명
  runtime: number; // 에피소드 런타임 (분 단위)
  releaseDate: string; // 에피소드 출시일 (ISO 8601 형식)
  imageUrl: string; // 썸네일 이미지 URL
};
