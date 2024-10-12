


const imgUrl = "https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.18169-9/21433233_1121380257894219_8621731889934405441_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE-kZ9aSnOB14FAZhjCwdkA5z_FV5bHvITnP8VXlse8hBZmuETOMXIaZaIXKObU_Fi0Qd1zTMfrSgaRFQ1BiWrX&_nc_ohc=u6Ge9phtX-4Q7kNvgG3nftJ&_nc_ht=scontent.fsgn5-13.fna&oh=00_AYCx_VedtJsyzIX_emY_s7jS48DPoQqUK2FKudbaq2pFTw&oe=6732175A"

const restaurants: Record<string, Restaurant> = {
    "Pizza Hut Nguyễn Trãi": {
        id: "pizza_hut_nguyen_trai",
        name: "Pizza Hut Nguyễn Trãi",
        location: "120 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh",
        stars: 4.3,
        views: 2000,
        snapUrl: imgUrl,
    },
    "Burger King Phú Nhuận": {
        id: "burger_king_phu_nhuan",
        name: "Burger King Phú Nhuận",
        location: "23 Phan Đăng Lưu, Phường 7, Phú Nhuận, TP. Hồ Chí Minh",
        stars: 4.6,
        views: 1800,
        snapUrl: imgUrl,
    },
    "Lotteria Hoàng Diệu": {
        id: "lotteria_hoang_dieu",
        name: "Lotteria Hoàng Diệu",
        location: "53-55 Hoàng Diệu, Phường 12, Quận 4, TP. Hồ Chí Minh",
        stars: 4.2,
        views: 2200,
        snapUrl: imgUrl,
    },
    "Jollibee Võ Văn Ngân": {
        id: "jollibee_vo_van_ngan",
        name: "Jollibee Võ Văn Ngân",
        location: "88 Võ Văn Ngân, Thủ Đức, TP. Hồ Chí Minh",
        stars: 4.5,
        views: 1500,
        snapUrl: imgUrl,
    },
    "McDonald's Đồng Khởi": {
        id: "mcdonalds_dong_khoi",
        name: "McDonald's Đồng Khởi",
        location: "71-75 Đồng Khởi, Quận 1, TP. Hồ Chí Minh",
        stars: 4.7,
        views: 2500,
        snapUrl: imgUrl,
    },
    "Subway Bạch Đằng": {
        id: "subway_bach_dang",
        name: "Subway Bạch Đằng",
        location: "10 Bạch Đằng, Phường 2, Quận Tân Bình, TP. Hồ Chí Minh",
        stars: 4.4,
        views: 1700,
        snapUrl: imgUrl,
    },
    "Texas Chicken Nam Kỳ Khởi Nghĩa": {
        id: "texas_chicken_nam_ky_khoi_nghia",
        name: "Texas Chicken Nam Kỳ Khởi Nghĩa",
        location: "48 Nam Kỳ Khởi Nghĩa, Quận 1, TP. Hồ Chí Minh",
        stars: 4.6,
        views: 1600,
        snapUrl: imgUrl,
    },
    "The Pizza Company Điện Biên Phủ": {
        id: "the_pizza_company_dien_bien_phu",
        name: "The Pizza Company Điện Biên Phủ",
        location: "78 Điện Biên Phủ, Bình Thạnh, TP. Hồ Chí Minh",
        stars: 4.5,
        views: 1400,
        snapUrl: imgUrl,
    },
    "Domino's Pizza Phú Mỹ Hưng": {
        id: "dominos_phu_my_hung",
        name: "Domino's Pizza Phú Mỹ Hưng",
        location: "105 Nguyễn Văn Linh, Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
        stars: 4.7,
        views: 1900,
        snapUrl: imgUrl,
    },
    "Popeyes Gò Vấp": {
        id: "popeyes_go_vap",
        name: "Popeyes Gò Vấp",
        location: "345 Quang Trung, Phường 10, Gò Vấp, TP. Hồ Chí Minh",
        stars: 4.4,
        views: 2100,
        snapUrl: imgUrl,
    }
};


export const getRestaurant = async (query: string): Promise<Restaurant[]> => {
    await new Promise((res) => setTimeout(res, 500)) // Simulating delay

    // Convert the query to lowercase for case-insensitive search
    const queryLower = query.toLowerCase();

    // Filter the restaurants based on whether their name includes the query string
    const filteredRestaurants = Object.values(restaurants).filter((restaurant) =>
        restaurant.name.toLowerCase().includes(queryLower)
    );

    return filteredRestaurants;
}
