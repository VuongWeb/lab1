import { getAll } from "../api/cate";
import Header from "../components/header";
import Main from "../components/product";

const ProPage = {
  async render() {
    const {data} = await getAll();
    return `
        <h1 class="text-center p-8 text-2xl font-medium">Danh mục sản phẩm</h1>
        <div class="cate text-center mx-96 ">
                <ul class="flex py-12">
                ${data.map(
                  (item) => `
                  <li class="menu_link px-4 py-3 bg-[#03778e] text-white font-[500] text-xl mx-8 rounded hover:bg-[#025566]"><a href="/cates/${item.id}?_embed=pro">${item.name}</a></li>
                `
                )}
                        
                </ul>
        </div>
        <h1 class="text-center p-8 text-4xl font-medium">Sản phẩm nổi bật</h1>
                ${await Main.render()}
        `;
  },
  afterRender() {
    Header.afterRender();
  },
};

export default ProPage;
