"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "services",
      [
        {
          name: "Thí nghiệm Bê tông & Cốt thép",
          slug: "thi-nghiem-be-tong-cot-thep",
          description:
            "Kiểm tra cường độ nén bê tông, thử uốn cốt thép theo TCVN.",
          content:
            "## 1. Tầm quan trọng của công tác thí nghiệm\n" +
            "Trong kết cấu xây dựng hiện đại, bê tông và cốt thép đóng vai trò là khung xương chịu lực chính. Việc thực hiện thí nghiệm giúp đảm bảo an toàn sinh mạng và kéo dài tuổi thọ công trình.\n\n" +
            "## 2. Các phép thử tiêu chuẩn\n" +
            "### a. Nén mẫu bê tông\n" +
            "Xác định mác thực tế (R7, R28) bằng máy nén thủy lực kỹ thuật số, đảm bảo bê tông đạt cường độ thiết kế trước khi tháo dỡ cốp pha.\n\n" +
            "### b. Thử kéo uốn cốt thép\n" +
            "Kiểm tra giới hạn bền, giới hạn chảy và độ giãn dài của thép thanh, thép cuộn theo các tiêu chuẩn hiện hành.\n\n" +
            "## 3. Cam kết chất lượng\n" +
            "Quy trình thực hiện nghiêm ngặt theo ISO, kết quả khách quan và trung thực tuyệt đối.",
          thumbnail: "service-betong.png",
          created_at: new Date(),
        },
        {
          name: "Thí nghiệm Cơ lý Đất nền",
          slug: "thi-nghiem-co-ly-dat-nen",
          description:
            "Xác định các chỉ tiêu kỹ thuật của đất phục vụ thiết kế móng.",
          content:
            "## 1. Địa kỹ thuật và Nền móng\n" +
            "Nền móng ổn định là tiền đề cho công trình vững chắc. Phân tích đất giúp kỹ sư tối ưu phương án móng, tránh các rủi ro lún nứt không đáng có.\n\n" +
            "## 2. Danh mục thí nghiệm trọng tâm\n" +
            "### a. Thí nghiệm nén tam trục\n" +
            "Phân tích sức kháng cắt của đất để xác định khả năng chịu tải của nền đất yếu.\n\n" +
            "### b. Thí nghiệm Proctor\n" +
            "Tìm độ ẩm tối ưu và dung trọng khô lớn nhất phục vụ công tác đầm nén nền đường, sân bãi.\n\n" +
            "## 3. Ứng dụng thực tế\n" +
            "Cung cấp báo cáo địa kỹ thuật chi tiết với các khuyến nghị giải pháp gia cố nền phù hợp.",
          thumbnail: "service-geotechnical.png",
          created_at: new Date(),
        },
        {
          name: "Kiểm định Chất lượng Công trình",
          slug: "kiem-dinh-chat-luong-cong-trinh",
          description:
            "Đánh giá an toàn chịu lực và đưa ra biện pháp khắc phục.",
          content:
            "## 1. Khi nào cần kiểm định?\n" +
            "Chủ đầu tư cần thực hiện kiểm định khi công trình có dấu hiệu nứt lún, cần nâng tầng thay đổi công năng hoặc sau sự cố hỏa hoạn.\n\n" +
            "## 2. Quy trình thực hiện chuyên sâu\n" +
            "### a. Khảo sát hiện trạng\n" +
            "Ghi nhận trực quan các vết nứt, đo độ nghiêng và kiểm tra tình trạng thấm dột bằng thiết bị chuyên dụng.\n\n" +
            "### b. Kiểm tra cường độ vật liệu\n" +
            "Sử dụng phương pháp siêu âm hoặc khoan lấy mẫu lõi để đánh giá chính xác độ suy giảm chất lượng vật liệu theo thời gian.\n\n" +
            "## 3. Giải pháp đề xuất\n" +
            "Dựa trên kết quả kiểm toán kết cấu, chúng tôi sẽ đưa ra phương án gia cường (sợi Carbon FRP hoặc bọc thép) tối ưu nhất.",
          thumbnail: "service-audit.png",
          created_at: new Date(),
        },
        {
          name: "Thí nghiệm Nhựa đường & Asphalt",
          slug: "thi-nghiem-nhua-duong-asphalt",
          description:
            "Kiểm tra bê tông nhựa phục vụ thi công hạ tầng giao thông.",
          content:
            "## 1. Tiêu chuẩn mặt đường chất lượng\n" +
            "Lớp Asphalt phải đảm bảo độ nhám, độ chặt và khả năng kháng lún vệt bánh xe dưới tác động khắc nghiệt của thời tiết.\n\n" +
            "## 2. Các chỉ tiêu thí nghiệm chính\n" +
            "### a. Thí nghiệm Marshall\n" +
            "Xác định độ ổn định và độ dẻo để tìm ra công thức phối trộn bê tông nhựa hoàn hảo.\n\n" +
            "### b. Hàm lượng nhựa thực tế\n" +
            "Chiết tách để kiểm tra tỷ lệ nhựa thực tế so với thiết kế, đảm bảo độ bền liên kết.\n\n" +
            "## 3. Kiểm tra hiện trường\n" +
            "Thực hiện đo độ nhám mặt đường và độ chặt lu lèn bằng phương pháp rót cát hoặc máy đo hạt nhân.",
          thumbnail: "service-asphalt.png",
          created_at: new Date(),
        },
        {
          name: "Thí nghiệm Nén tĩnh Cọc",
          slug: "thi-nghiem-nen-tinh-coc",
          description:
            "Xác định sức chịu tải của cọc để tối ưu phương án móng.",
          content:
            "## 1. Vai trò của thí nghiệm nén tĩnh\n" +
            "Đây là phương pháp đáng tin cậy nhất để xác định sức chịu tải của cọc đơn tại hiện trường trước khi triển khai thi công đại trà.\n\n" +
            "## 2. Phương pháp gia tải\n" +
            "### a. Hệ dàn chất tải bê tông\n" +
            "Sử dụng các khối đối trọng bê tông lớn để ép cọc theo từng cấp tải trọng quy định.\n\n" +
            "### b. Quan trắc biến dạng\n" +
            "Sử dụng hệ thống đồng hồ so độ chính xác 0.01mm để theo dõi độ lún của cọc theo thời gian gia tải.\n\n" +
            "## 3. Kết quả đầu ra\n" +
            "Cung cấp biểu đồ P-S và xác định tải trọng thiết kế an toàn cho công trình.",
          thumbnail: "service-pile.png",
          created_at: new Date(),
        },
        {
          name: "Quan trắc Biến dạng Công trình",
          slug: "quan-trac-bien-dang-cong-trinh",
          description:
            "Theo dõi lún, nghiêng trong quá trình thi công và vận hành.",
          content:
            "## 1. Tại sao cần quan trắc định kỳ?\n" +
            "Phát hiện sớm các chuyển vị bất thường giúp chủ đầu tư có biện pháp can thiệp kịp thời, tránh các sự cố gây thiệt hại lớn về người và của.\n\n" +
            "## 2. Các hạng mục quan trắc chủ yếu\n" +
            "### a. Quan trắc độ lún\n" +
            "Sử dụng máy thủy bình điện tử chính xác cao để theo dõi cao độ các mốc lún được gắn trên cột công trình.\n\n" +
            "### b. Quan trắc nghiêng và chuyển vị ngang\n" +
            "Sử dụng máy toàn đạc hoặc cảm biến Inclinometer để theo dõi độ thẳng đứng của nhà cao tầng.\n\n" +
            "## 3. Hệ thống cảnh báo\n" +
            "Báo cáo được gửi định kỳ, kèm theo các cảnh báo tức thời nếu biến dạng vượt ngưỡng cho phép.",
          thumbnail: "service-monitoring.png",
          created_at: new Date(),
        },
        {
          name: "Thí nghiệm Vật liệu Hoàn thiện",
          slug: "thi-nghiem-vat-lieu-hoan-thien",
          description:
            "Kiểm tra gạch ốp lát, đá tự nhiên và các loại sơn tường.",
          content:
            "## 1. Thẩm mỹ đi đôi với chất lượng\n" +
            "Vật liệu hoàn thiện không chỉ cần đẹp mà phải đáp ứng được các chỉ tiêu cơ lý để không bị bong tróc, phai màu theo thời gian.\n\n" +
            "## 2. Các phép thử phổ biến\n" +
            "### a. Gạch ốp lát và Đá tự nhiên\n" +
            "Thử độ hút nước, độ bền uốn và độ cứng bề mặt Mohs để phân loại vật liệu phù hợp với khu vực sử dụng.\n\n" +
            "### b. Vật liệu sơn và chống thấm\n" +
            "Kiểm tra độ bám dính trên nền bê tông và khả năng kháng nước, kháng kiềm của lớp phủ.\n\n" +
            "## 3. Lợi ích\n" +
            "Giúp nhà thầu kiểm soát đầu vào, tránh việc sử dụng hàng giả, hàng kém chất lượng.",
          thumbnail: "service-finish.png",
          created_at: new Date(),
        },
        {
          name: "Tư vấn Giám sát Thi công",
          slug: "tu-van-giam-sat-thi-cong",
          description:
            "Quản lý chất lượng và tiến độ thi công trực tiếp tại dự án.",
          content:
            "## 1. Vai trò của đơn vị giám sát\n" +
            "Chúng tôi thay mặt chủ đầu tư kiểm soát chặt chẽ mọi công đoạn thi công, đảm bảo nhà thầu thực hiện đúng bản vẽ thiết kế.\n\n" +
            "## 2. Nội dung công việc trọng tâm\n" +
            "### a. Kiểm soát chất lượng vật liệu\n" +
            "Nghiệm thu vật liệu đầu vào và chỉ cho phép đưa vào sử dụng các loại vật liệu đã qua thí nghiệm đạt yêu cầu.\n\n" +
            "### b. Giám sát quy trình thi công\n" +
            "Theo dõi trực tiếp các công tác quan trọng như đặt thép, đổ bê tông và lắp đặt hệ thống cơ điện.\n\n" +
            "## 3. Mục tiêu cuối cùng\n" +
            "Công trình về đích đúng tiến độ, đảm bảo kỹ thuật và tối ưu hóa chi phí cho chủ đầu tư.",
          thumbnail: "service-supervisor.png",
          created_at: new Date(),
        },
        {
          name: "Thí nghiệm Hiện trường (NDT)",
          slug: "thi-nghiem-khong-pha-huy",
          description:
            "Kiểm tra kết cấu bằng công nghệ siêu âm, radar hiện đại.",
          content:
            "## 1. Ưu điểm của phương pháp NDT\n" +
            "Đánh giá chính xác chất lượng bên trong cấu kiện mà hoàn toàn không gây hư hại hay ảnh hưởng đến khả năng chịu lực của công trình.\n\n" +
            "## 2. Các công nghệ tiên phong\n" +
            "### a. Siêu âm khuyết tật (UPV)\n" +
            "Phát hiện các vết nứt ngầm, lỗ rỗng hoặc các vùng bê tông bị rỗ bên trong các cấu kiện lớn như dầm, trụ cầu.\n\n" +
            "### b. Radar xuyên đất (GPR)\n" +
            "Xác định vị trí và đường kính cốt thép, độ dày lớp bê tông bảo vệ một cách nhanh chóng.\n\n" +
            "## 3. Ứng dụng\n" +
            "Phục vụ đắc lực cho công tác nghiệm thu và kiểm định các công trình hạ tầng kỹ thuật.",
          thumbnail: "service-ndt.png",
          created_at: new Date(),
        },
        {
          name: "Tư vấn Thiết kế Kết cấu",
          slug: "tu-van-thiet-ke-ket-cau",
          description: "Lập giải pháp kết cấu tối ưu cho công trình dân dụng.",
          content:
            "## 1. Triết lý thiết kế bền vững\n" +
            "Một bản thiết kế tốt phải đạt được sự cân bằng giữa: An toàn tuyệt đối, thẩm mỹ kiến trúc và tính kinh tế trong thi công.\n\n" +
            "## 2. Phạm vi dịch vụ thiết kế\n" +
            "### a. Tính toán kết cấu nhà cao tầng\n" +
            "Sử dụng các phần mềm hiện đại như ETABS, SAFE để mô phỏng sự làm việc của khung bê tông cốt thép dưới tác động của tải trọng gió và động đất.\n\n" +
            "### b. Thẩm tra hồ sơ thiết kế\n" +
            "Rà soát các sai sót kỹ thuật trong bản vẽ của đơn vị khác để tránh rủi ro phát sinh chi phí khi thi công.\n\n" +
            "## 3. Công cụ hỗ trợ\n" +
            "Ứng dụng BIM trong thiết kế giúp trực quan hóa kết cấu và phối hợp tốt với các bộ môn kiến trúc, MEP.",
          thumbnail: "service-design.png",
          created_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("services", null, {});
  },
};
