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
          @keydown.enter.prevent="doSearch"
        />
      </form>
      <!--搜尋結果-->
      <template v-if="isSearching==2">
        <div>
          <p class="mt-4 mb-4 text-center">＝＝＝＝ 以下為查詢結果 ＝＝＝＝</p>

          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div v-for="(item, index) in found.all" :key="'data-' + index" class="col">
              <div class="card mb-3">
                <div class="card-header">#{{ index+1 }}</div>
                <div class="card-body">
                  <h5 class="card-title">⟪ {{ item.dataName }} ⟫</h5>
                  <template v-if="item.dataType == 'togo'">
                    <div>取餐姓名：{{ item["姓名"] }}</div>
                    <div>聯絡手機：{{ item["聯絡手機"] }}</div>
                    <div>取餐日期：{{ item["日期"] }}</div>
                    <div>取餐時間：{{ item["時間"] }}</div>
                    <hr />
                    <div>預定內容：</div>
                    <div>
                      <template v-if="item['5380'] || item['6380']">
                        【合菜】
                        <ul>
                          <li v-if="item['5380']">5380 X {{ item['5380'] }} 組</li>
                          <li v-if="item['6380']">6380 X {{ item['6380'] }} 組</li>
                        </ul>
                      </template>
                      <template
                       v-if="
                        item['五福'] || item['海鮮羹'] || item['海大蝦'] || item['小龍蝦'] ||
                        item['石斑'] || item['干貝'] || item['鮑魚'] || item['雞米糕'] || item['鰻米糕'] ||
                        item['紅燒蹄'] || item['佛跳牆'] || item['燉雞'] || item['蛋糕']">
                        【單點】
                        <ul>
                          <li v-if="item['五福']">五福臨門冷拼盤 X {{ item['五福'] }} 份</li>
                          <li v-if="item['海鮮羹']">鴻運發財海鮮羹 X {{ item['海鮮羹'] }} 份</li>
                          <li v-if="item['海大蝦']">蒜味白灼海大蝦 X {{ item['海大蝦'] }} 份</li>
                          <li v-if="item['小龍蝦']">沙律小龍蝦沙拉 X {{ item['小龍蝦'] }} 份</li>
                          <li v-if="item['石斑']">清蒸魚露海石斑 X {{ item['石斑'] }} 份</li>
                          <li v-if="item['干貝']">田園彩椒燴干貝 X {{ item['干貝'] }} 份</li>
                          <li v-if="item['鮑魚']">菇菇蜜鮑魚 X {{ item['鮑魚'] }} 份</li>
                          <li v-if="item['雞米糕']">麻油雞米糕雙拼 X {{ item['雞米糕'] }} 份</li>
                          <li v-if="item['鰻米糕']">蒲燒鰻魚米糕雙拼 X {{ item['鰻米糕'] }} 份</li>
                          <li v-if="item['紅燒蹄']">富貴滿堂紅燒蹄 X {{ item['紅燒蹄'] }} 份</li>
                          <li v-if="item['佛跳牆']">福滿乾坤佛跳牆 X {{ item['佛跳牆'] }} 份</li>
                          <li v-if="item['燉雞']">排翅鮑貝燉全雞 X {{ item['燉雞'] }} 份</li>
                          <li v-if="item['蛋糕']">綜合檸檬蛋糕 X {{ item['蛋糕'] }} 份</li>
                        </ul>
                      </template>
                    </div>
                  </template>
                  <template v-if="item.dataType == 'here'">
                    <div>訂桌姓名：{{ item["訂桌姓名"] }}</div>
                    <div>聯絡手機：{{ item["聯絡手機"] }}</div>
                    <div>用餐日期：{{ item["用餐日期"] }}</div>
                    <div>用餐時段：{{ item["用餐時段 "] }}</div>
                    <hr />
                    <template v-if="item['5380'] || item['6380']">
                      <div>
                        預訂內容：
                        <p v-if="item['5380']">5380 X {{ item['5380'] }} 桌</p>
                        <p v-if="item['6380']">6380 X {{ item['6380'] }} 桌</p>
                      </div>
                    </template>
                  </template>
                  <hr />
                  <div>
                    備註：{{ item['備註'] ? item['備註'] : "無" }}
                  </div>
                </div>
                <div
                  class="card-footer text-white"
                  style="background-color: #474747"
                >
                  <div>總金額：${{ item['總金額'] }}</div>
                  <div>付款狀態：{{ item['已收款'] ? '已收款$ ' + item['已收款'] : "尚未付款" }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
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
  name: "Home",
  data() {
    return {
      //0:init, 1:wait, 2:done
      isSearching: 0,
      searchKey: "",
      rows: {
        here: [],
        togo: []
      },
      found: {
        all: [],
        here: [],
        togo: []
      },
    }
  },
  methods: {
    //取得表單
    async get_HereSheet() {
      const orderDoc = await getOrderDoc();
      const orderSheet = orderDoc.sheetsByTitle["內用(原始回覆)"];
      this.rows.here = await orderSheet.getRows();
    },
    async get_togoSheet() {
      const orderDoc = await getOrderDoc();
      const orderSheet = orderDoc.sheetsByTitle["外帶(原始回覆)"];
      this.rows.togo = await orderSheet.getRows();
    },
    //搜尋
    async doSearch() {
      this.isSearching = 1;
      //empty
      this.found = {
        all: [],
        here: [],
        togo: []
      }
      //access
      await this.get_HereSheet();
      await this.get_togoSheet();
      
      //搜尋外帶
      for (let index = 0; index < this.rows.togo.length; index++) {
        const formRow = this.rows.togo[index];
        
        if (this.searchKey == formRow["姓名"] || this.searchKey == formRow["聯絡手機"]) {
          formRow.dataType = "togo";
          formRow.dataName = "外帶訂單";

          this.found.all.push(formRow);
          this.found.togo.push(formRow);
        }
      }
      //搜尋內用
      for (let index = 0; index < this.rows.here.length; index++) {
        const formRow = this.rows.here[index];
        
        if (this.searchKey == formRow["訂桌姓名"] || this.searchKey == formRow["聯絡手機"]) {
          formRow.dataType = "here";
          formRow.dataName = "內用訂單";

          this.found.all.push(formRow);
          this.found.here.push(formRow);
        }
      }

      this.isSearching = 2;
    },
  }
};
</script>