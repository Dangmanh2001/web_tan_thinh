"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const posts = [
      {
        title: "Thực trạng chất lượng bê tông nhựa nóng tại các dự án cao tốc",
        slug: "chat-luong-be-tong-nhua-cao-toc",
        content:
          "Phát triển hạ tầng giao thông là ưu tiên hàng đầu, tuy nhiên việc kiểm soát chất lượng vật liệu đầu vào vẫn còn nhiều bất cập cần tháo gỡ.\n\n## 1. Những yếu tố ảnh hưởng đến độ bền mặt đường\nChất lượng bê tông nhựa phụ thuộc rất lớn vào cốt liệu đá và hàm lượng nhựa đường.\n\n### a. Tác động của nhiệt độ môi trường\nNhiệt độ mặt đường vào mùa hè có thể lên tới 70°C, gây ra hiện tượng hằn lún nếu nhựa đường không đạt chuẩn.\n\n### b. Công tác lu lèn tại hiện trường\nViệc kiểm soát nhiệt độ khi đổ nhựa và sơ đồ lu lèn phải được giám sát chặt chẽ bởi kỹ sư hiện trường.\n\n## 2. Giải pháp nâng cao tuổi thọ công trình\nCần áp dụng các loại phụ gia cải thiện độ đàn hồi và tăng cường tần suất kiểm định mẫu tại phòng Lab.",
        thumbnail: "news-01.jpg",
        category_id: 1,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Công nghệ NDT: Bước tiến mới trong kiểm định không phá hủy",
        slug: "cong-nghe-ndt-kiem-dinh-xay-dung",
        content:
          "Kiểm định không phá hủy (NDT) đang dần thay thế các phương pháp khoan mẫu truyền thống nhờ tính nhanh chóng và bảo vệ nguyên trạng kết cấu.\n\n## 1. Ứng dụng của Radar xuyên đất (GPR)\nGPR cho phép các kỹ sư nhìn xuyên qua lớp bê tông dày hàng mét để phát hiện khuyết tật ngầm.\n\n### a. Phát hiện túi rỗng trong đập thủy điện\nCác túi rỗng ngầm là nguy cơ tiềm ẩn gây rò rỉ và mất an toàn đập nếu không được xử lý kịp thời.\n\n### b. Đo độ dày lớp bê tông bảo vệ\nĐảm bảo cốt thép không bị ăn mòn bởi môi trường xâm thực bên ngoài bằng cách đo chính xác lớp bảo vệ.\n\n## 2. Tương lai của ngành kiểm định\nViệc tích hợp trí tuệ nhân tạo (AI) vào phân tích hình ảnh siêu âm sẽ là xu hướng tất yếu.",
        thumbnail: "news-02.jpg",
        category_id: 2,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Tại sao nén tĩnh cọc lại là 'lá chắn' cho nhà cao tầng?",
        slug: "nen-tinh-coc-nha-cao-tang",
        content:
          "Một sai sót nhỏ trong tính toán sức chịu tải của cọc có thể dẫn đến hậu quả lún nghiêng cả một tòa nhà.\n\n## 1. Quy trình thí nghiệm nén tĩnh trục dọc\nThí nghiệm này mô phỏng tải trọng thực tế mà móng công trình phải gánh chịu.\n\n### a. Giai đoạn gia tải và quan trắc lún\nTải trọng được tăng dần theo từng cấp (25%, 50%, 75%... tải trọng thiết kế) để theo dõi biến dạng.\n\n### b. Xác định điểm phá hoại của cọc\nDựa vào biểu đồ P-S, kỹ sư xác định được sức chịu tải cực hạn và đưa ra hệ số an toàn.\n\n## 2. Lời khuyên cho chủ đầu tư\nĐừng tiết kiệm chi phí thí nghiệm cọc thử vì đây là nền tảng an toàn của toàn bộ dự án.",
        thumbnail: "news-03.jpg",
        category_id: 3,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Xử lý nền đất yếu: Kinh nghiệm thực tế từ các dự án ven biển",
        slug: "xu-ly-nen-dat-yeu-ven-bien",
        content:
          "Xây dựng trên nền bùn lầy tại các khu vực ven biển luôn là bài toán khó về mặt kỹ thuật và chi phí.\n\n## 1. Các phương pháp xử lý phổ biến\nTùy vào địa tầng mà kỹ sư sẽ lựa chọn giải pháp gia cố phù hợp nhất.\n\n### a. Phương pháp cọc đất xi măng (Deep Soil Mixing)\nTrộn trực tiếp xi măng với đất tại chỗ để tạo ra các cột có cường độ cao, ổn định nền đường nhanh.\n\n### b. Bấc thấm và gia tải trước\nGiúp đẩy nhanh quá trình thoát nước lỗ rỗng, làm đất cố kết nhanh hơn trước khi xây dựng.\n\n## 2. Đánh giá hiệu quả sau gia cố\nThí nghiệm xuyên tĩnh (CPT) là công cụ bắt buộc để kiểm chứng chất lượng nền đất sau xử lý.",
        thumbnail: "news-04.jpg",
        category_id: 1,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Kiểm định nhà xưởng cũ: Rủi ro khi tự ý nâng tầng",
        slug: "kiem-dinh-nha-xuong-nang-tang",
        content:
          "Nhiều doanh nghiệp tự ý nâng thêm tầng hoặc lắp máy móc nặng mà không kiểm định, dẫn đến sập đổ kết cấu.\n\n## 1. Dấu hiệu cảnh báo nguy hiểm\nVết nứt chân chim trên dầm hoặc hiện tượng võng sàn thép là những tín hiệu 'kêu cứu' của nhà xưởng.\n\n### a. Ăn mòn cốt thép do hóa chất\nHơi axit trong quá trình sản xuất có thể xâm nhập gây rỉ sét thép, làm giảm khả năng chịu lực.\n\n### b. Mỏi kết cấu dưới tải trọng động\nMáy móc rung động liên tục sẽ làm xuất hiện vết nứt mỏi tại các vị trí mối hàn quan trọng.\n\n## 2. Quy trình khám bệnh kết cấu\nSử dụng súng bật nẩy kết hợp mô phỏng trên phần mềm chuyên dụng để đánh giá độ an toàn.",
        thumbnail: "news-05.jpg",
        category_id: 2,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Quan trắc lún: 'Mắt thần' theo dõi sức khỏe công trình",
        slug: "quan-trac-lun-suc-khoe-cong-trinh",
        content:
          "Quan trắc không chỉ là thủ tục pháp lý mà còn đảm bảo an toàn cho các công trình lân cận.\n\n## 1. Tại sao lún không đều lại nguy hiểm?\nChênh lệch lún giữa các cột vượt quá giới hạn sẽ gây nứt vỡ dầm và mất ổn định hệ khung.\n\n### a. Kỹ thuật đo thủy bình chính xác cao\nSử dụng máy thủy bình điện tử để đảm bảo sai số đo đạt mức milimet cho phép.\n\n### b. Phân tích biểu đồ quan trắc định kỳ\nDự báo thời điểm độ lún đạt trạng thái ổn định để tiến hành hoàn thiện kiến trúc.\n\n## 2. Kết luận\nQuan trắc đúng cách giúp tiết kiệm chi phí khắc phục sự cố và kéo dài tuổi thọ tòa nhà.",
        thumbnail: "news-06.jpg",
        category_id: 3,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Thí nghiệm đá tự nhiên: Tiêu chuẩn cho mặt dựng nhà cao tầng",
        slug: "thi-nghiem-da-tu-nhien",
        content:
          "Đá Granite hay Marble dùng cho ngoại thất cần đáp ứng các tiêu chuẩn khắt khe về độ bền uốn.\n\n## 1. Chỉ tiêu độ bền uốn (Flexural Strength)\nDưới áp lực gió cực lớn, các tấm đá trang trí có thể bị gãy vỡ nếu độ bền uốn không đạt.\n\n### a. Phương pháp thử mẫu đá\nMẫu được gia tải tại điểm giữa cho đến khi gãy để xác định cường độ chịu kéo khi uốn.\n\n### b. Ảnh hưởng của độ hút nước\nĐá có độ rỗng lớn sẽ dễ bị phong hóa và đóng rêu mốc, làm hỏng bề mặt thẩm mỹ.\n\n## 2. Lựa chọn vật liệu phù hợp\nKết quả thí nghiệm là căn cứ duy nhất để chọn đúng loại đá cho từng vị trí chịu lực khác nhau.",
        thumbnail: "news-07.jpg",
        category_id: 1,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Ảnh hưởng của hạ mực nước ngầm đến hố đào sâu",
        slug: "ha-muc-nuoc-ngam-ho-dao",
        content:
          "Thi công tầng hầm tại đô thị luôn tiềm ẩn rủi ro sụt lún nhà dân do thay đổi mực nước ngầm.\n\n## 1. Hiện tượng xói ngầm và sạt lở\nKhi hút nước móng không kiểm soát, các hạt đất mịn bị cuốn trôi tạo ra hàm ếch dưới lòng đất.\n\n### a. Giải pháp tường vây Barrette\nTường vây đóng vai trò ngăn nước và chịu lực, bảo vệ an toàn tuyệt đối cho mặt bằng.\n\n### b. Hệ thống quan trắc nước lỗ rỗng\nĐặt các cảm biến Piezometer để theo dõi biến động mực nước ngầm xung quanh công trường.\n\n## 2. Khuyến nghị kỹ thuật\nCần có phương án bù nước nếu mực nước bên ngoài tường vây bị hạ thấp quá mức.",
        thumbnail: "news-08.jpg",
        category_id: 2,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Giám sát thi công: Nghệ thuật kiểm soát chất lượng",
        slug: "nghe-thuat-giam-sat-thi-cong",
        content:
          "Kỹ sư giám sát là người bảo vệ quyền lợi của chủ đầu tư và đảm bảo tính bền vững của dự án.\n\n## 1. Đạo đức nghề nghiệp và trách nhiệm\nGiám sát viên phải kiên quyết ngăn chặn các hành vi gian dối vật liệu hoặc sai sót bản vẽ.\n\n### a. Nghiệm thu thép sàn và dầm\nKhoảng cách đai thép và vệ sinh cốt thép trước khi đổ bê tông là những lỗi thường gặp.\n\n### b. Nhật ký công trình số hóa\nCập nhật hình ảnh và nhật ký theo thời gian thực giúp quản lý dự án minh bạch hơn.\n\n## 2. Tầm nhìn dài hạn\nMột quy trình giám sát chặt chẽ giúp công trình trường tồn và giảm chi phí bảo trì.",
        thumbnail: "news-09.jpg",
        category_id: 3,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Gia cố kết cấu bằng sợi Carbon (FRP): Giải pháp thời đại",
        slug: "gia-co-ket-cau-soi-carbon",
        content:
          "Khi cần nâng tải trọng mà không muốn đục phá bê tông, sợi Carbon là giải pháp tối ưu nhất.\n\n## 1. Ưu điểm vượt trội của tấm FRP\nCường độ chịu kéo của sợi Carbon cao gấp 10 lần thép nhưng trọng lượng lại rất nhẹ.\n\n### a. Kỹ thuật dán tấm Carbon\nBề mặt bê tông cần được mài phẳng và sơn lót Epoxy trước khi dán sợi Carbon gia cố.\n\n### b. Ứng dụng trong sửa chữa cầu cảng\nKhả năng chống ăn mòn tuyệt vời trong môi trường nước biển giúp bảo vệ kết cấu vĩnh cửu.\n\n## 2. Lưu ý khi thi công\nNhiệt độ môi trường ảnh hưởng trực tiếp đến thời gian đông kết của keo dán chuyên dụng.",
        thumbnail: "news-10.jpg",
        category_id: 1,
        author_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("posts", posts);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
