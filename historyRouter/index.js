const app = document.getElementById('app')
const div1 = document.createElement('div')
div1.innerHTML = '1.components'
const div2 = document.createElement('div')
div2.innerHTML = '2.components'
const div3 = document.createElement('div')
div3.innerHTML = '3.components'
const div4 = document.createElement('div')
div4.innerHTML = '4.components'

const routerMap = {
  "/1": div1,
  "/2": div2,
  "/3": div3,
  "/4": div4
};

function route(container) {
  // 获取路由hash 值
  let hashName = window.location.pathname;
  if (hashName === "/") {
    hashName = "/1";
  }

  // 获取路由对应的组件
  let components = routerMap[hashName]
  if(!components) {
    // 404
    components = document.querySelector("#div404");
  }
  components.style.display = 'block'

  // 展示界面
  container.innerHTML = "";
  container.appendChild(components);
}

const allA = document.querySelectorAll("a.link");
for(let a of allA) {
  a.addEventListener('click', ()=> {
    e.preventDefault();
    const href = a.getAttribute("href");
    window.history.pushState(null, `page ${href}`, href);
    // 路由变化更新
    onStateChange(href);
  })
}

route(app)

function onStateChange() {
  route(app);
}
