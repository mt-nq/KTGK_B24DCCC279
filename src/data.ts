import { Post } from "./types";

export const initialPosts: Post[] = [
  {
    id: "1",
    title: "Bắt đầu với TypeScript cho dự án React",
    author: "Minh Tuấn",
    thumbnail: "https://picsum.photos/seed/ts/600/360",
    content:
      "TypeScript giúp dự án React an toàn kiểu dữ liệu hơn. Bài viết này giới thiệu cài đặt, cấu hình và mẹo sử dụng TS trong React Router.",
    category: "Công nghệ",
    createdAt: new Date("2025-10-15").toISOString()
  },
  {
    id: "2",
    title: "Hà Giang mùa lúa chín: Kinh nghiệm du lịch tự túc",
    author: "Lan Anh",
    thumbnail: "https://picsum.photos/seed/hagiang/600/360",
    content:
      "Hà Giang đẹp nhất vào mùa lúa chín. Lộ trình, chi phí, cách di chuyển và các điểm check-in nổi bật...",
    category: "Du lịch",
    createdAt: new Date("2025-09-20").toISOString()
  },
  {
    id: "3",
    title: "Món phở bò chuẩn vị: Bí quyết nấu nước dùng trong",
    author: "Chef Khoa",
    thumbnail: "https://picsum.photos/seed/pho/600/360",
    content:
      "Phở bò ngon nằm ở nồi nước dùng. Cách xử lý xương, nướng gia vị và nêm nếm để có tô phở chuẩn vị...",
    category: "Ẩm thực",
    createdAt: new Date("2025-08-12").toISOString()
  },
  {
    id: "4",
    title: "Cân bằng công việc và cuộc sống: 5 mẹo nhỏ",
    author: "Hà My",
    thumbnail: "https://picsum.photos/seed/life/600/360",
    content:
      "Cân bằng là quá trình, không phải đích đến. Hãy bắt đầu bằng việc quản lý năng lượng thay vì thời gian...",
    category: "Đời sống",
    createdAt: new Date("2025-07-01").toISOString()
  },
  {
    id: "5",
    title: "Tư duy sản phẩm cho developer",
    author: "Quang Huy",
    thumbnail: "https://picsum.photos/seed/product/600/360",
    content:
      "Code tốt là cần, nhưng chưa đủ. Developer nên trang bị tư duy sản phẩm để đưa ra giải pháp đúng vấn đề...",
    category: "Công nghệ",
    createdAt: new Date("2025-06-10").toISOString()
  }
];
