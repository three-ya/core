<template>
  <main class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5 mb-4 text-center" style="color: #960b0b">
        三葉餐廳 <br />
        2022年 過年訂單查詢系統
      </h1>
      <form class="mb-4">
        <input
          type="search"
          class="form-control"
          placeholder="請輸入姓名或電話"
          aria-label="Search"
          style="padding: 16px; font-size: 1.2rem"
          v-model="searchKey"
          @change="doSearch"
        />
      </form>
      <!--搜尋結果-->
      <p class="mt-4 mb-4 text-center">＝＝＝＝ 以下為查詢結果 ＝＝＝＝</p>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card mb-3">
            <div class="card-header">#01</div>
            <div class="card-body">
              <h5 class="card-title">⟪ 外帶訂單 ⟫</h5>
              <div>取餐姓名：林淑晴</div>
              <div>聯絡手機：0932662570</div>
              <div>取餐日期：1/31 除夕</div>
              <div>取餐時間：16:00</div>
              <hr />
              <div>預定內容：</div>
              <div>
                【合菜】
                <ul>
                  <li>5350 X 1 組</li>
                </ul>
                【單點】
                <ul>
                  <li>五福臨門冷拼盤 X 1</li>
                  <li>鴻運發財海鮮羹 X 1</li>
                  <li>蒜味白灼海大蝦 X 1</li>
                  <li>沙律小龍蝦沙拉 X 1</li>
                </ul>
              </div>
              <hr />
              <div>
                備註：麻油雞米糕雙拼可以換燒鰻魚米糕雙拼嗎？補差價也沒關係
              </div>
            </div>
            <div
              class="card-footer text-white"
              style="background-color: #474747"
            >
              <div>總金額：$5380</div>
              <div>付款狀態：已付清</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="card-header">#02</div>
            <div class="card-body">
              <h5 class="card-title">⟪ 內用訂單 ⟫</h5>
              <div>訂桌姓名：林淑晴</div>
              <div>聯絡手機：0932662570</div>
              <div>用餐日期：2/3 初三</div>
              <div>用餐時段：18:00 - 19:20</div>
              <hr />
              <div>
                預定內容：
                <p>5350 X 3桌</p>
              </div>
              <hr />
              <div>
                備註：麻油雞米糕雙拼可以換燒鰻魚米糕雙拼嗎？補差價也沒關係
              </div>
            </div>
            <div
              class="card-footer text-white"
              style="background-color: #474747"
            >
              <div>總金額：$5380</div>
              <div>付款狀態：已付清</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <p class="text-center">
        如需要更改或取消訂單，請聯繫我們！<br />
        <a href="tel:+88689325261">089-325261</a>
      </p>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a href="tel:+88689325261" class="btn btn-primary" type="button"
          >立即通話</a
        >
      </div>
    </div>
  </main>

  <!--footer-->
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted text-center">三葉精緻餐廳 祝您虎年行大運</span>
    </div>
  </footer>
</template>

<script>
import { getOrderDoc } from '@/assets/js/getOrderDoc';

export default {
  name: "HelloWorld",
  data() {
    return {
        formListRows: null,
        searchKey: ""
    }
  },
  methods: {
    //取得表單
    async accessSpreadsheet() {
      const orderDoc = await getOrderDoc();
      const orderSheet = orderDoc.sheetsByTitle["內用(原始回覆)"];
      this.formListRows = await orderSheet.getRows();
    },
    doSearch() {
        this.accessSpreadsheet();

        for (let index = 0; index < this.formListRows.length; index++) {
            const formRow = this.formListRows[index];
            
            console.log(formRow);
        }
    },
  }
};
</script>