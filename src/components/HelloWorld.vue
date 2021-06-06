<template>
  <div class="container">
    <div class="card my-4">
        <div class="card-header with-elements">
            <div class="card-header-title mb-0">
                <h1>6/5(六) 三葉家庭日,外帶表單</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita ullam ipsa quis amet iure dolores eaque tempore necessitatibus suscipit doloremque velit, ratione sunt quibusdam id obcaecati nesciunt consectetur tenetur.
            </p>
        </div>
    </div>

    <div class="card my-4">
        <h4 class="card-header">訂購人資訊</h4>
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">姓名(必填)</label>
                <input type="email" class="form-control" placeholder="取餐人姓名">
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">電話(必填)</label>
                <input type="email" class="form-control" placeholder="取餐人電話">
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">訂購時間(必填)</label>
                <select class="custom-select">
                    <option>請選擇時間</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                </select>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="card my-4">
        <h4 class="card-header">小家庭合菜</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                  <div class="itemInfo">
                        <div class="itemName">主餐選里肌肉</div>
                        <div class="itemPrice badge badge-pill badge-primary">$<span>400</span></div>
                  </div>
                  <div class="form-group ml-auto mb-0">
                    <div class="input-group">
                        <span class="input-group-prepend">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-minus"></i></button>
                        </span>
                        <input type="number" class="form-control" placeholder="Product name" min="0" max="10" value="0">
                        <span class="input-group-append">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-plus"></i></button>
                        </span>
                    </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="itemInfo">
                    <div class="itemName">主餐選油雞</div>
                    <div class="itemPrice badge badge-pill badge-primary">$<span>400</span></div>
                </div>
                <div class="form-group ml-auto mb-0">
                  <div class="input-group">
                      <span class="input-group-prepend">
                          <button class="btn btn-secondary" type="button"><i class="feather icon-minus"></i></button>
                      </span>
                      <input type="number" class="form-control" placeholder="Product name" min="0" max="10" value="0">
                      <span class="input-group-append">
                          <button class="btn btn-secondary" type="button"><i class="feather icon-plus"></i></button>
                      </span>
                  </div>
              </div>
            </div>
          </li>
        </ul>
    </div>

    <div class="card my-4">
        <h4 class="card-header"> 單點區</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <div class="itemInfo">
                        <div class="itemName">單點一</div>
                        <div class="itemPrice badge badge-pill badge-primary">$<span>100</span></div>
                    </div>
                    <div class="form-group ml-auto mb-0">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <button class="btn btn-secondary" type="button"><i class="feather icon-minus"></i></button>
                            </span>
                            <input type="number" class="form-control" placeholder="Product name" min="0" max="10" value="0">
                            <span class="input-group-append">
                                <button class="btn btn-secondary" type="button"><i class="feather icon-plus"></i></button>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="itemInfo">
                    <div class="itemName">單點二</div>
                    <div class="itemPrice badge badge-pill badge-primary">$<span>80</span></div>
                </div>
                <div class="form-group ml-auto mb-0">
                    <div class="input-group">
                        <span class="input-group-prepend">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-minus"></i></button>
                        </span>
                        <input type="number" class="form-control" placeholder="Product name" min="0" max="10" value="0">
                        <span class="input-group-append">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-plus"></i></button>
                        </span>
                    </div>
                </div>
            </div>
          </li>
          <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="itemInfo">
                    <div class="itemName">單點三</div>
                    <div class="itemPrice badge badge-pill badge-primary">$<span>10</span></div>
                </div>
                <div class="form-group ml-auto mb-0">
                    <div class="input-group">
                        <span class="input-group-prepend">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-minus"></i></button>
                        </span>
                        <input type="number" class="form-control" placeholder="Product name" min="0" max="10" value="0">
                        <span class="input-group-append">
                            <button class="btn btn-secondary" type="button"><i class="feather icon-plus"></i></button>
                        </span>
                    </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
    
    <div class="card my-4">
        <h4 class="card-header">訂單備註</h4>
        <div class="card-body">
            <div class="form-group">
                <textarea class="form-control" placeholder="請寫下備註"></textarea>
            </div>
        </div>
    </div>

    <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#ComfirmModal">送出訂單</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
