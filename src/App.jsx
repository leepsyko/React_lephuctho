import Welcome from "./1_components/welcome";
import Profile from "./2_JSX/Profile";
import Events from "./3_Events/Events";
import ConditionalRendering from "./4_ConditionalRendering/ConditionalRendering";
import Home from "./EX_HomeLayout/Home";
import Shop from "./EX_ShopLayout/Shop";

// component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị
function App() {
  // cú  pháp JSX: javascript XML là cú pháp đặc biệc cho phép viết html trong javascript. Viết hoa chữ cái đầu của function
  return (
    // 1.1
    // <>
    //   <h1>Hello BC52</h1>
    //   <Welcome/>
    //   <Profile/>
    // </>


    // <>
    // <Home/>
    // </>

    // <Shop/>

    // <Events/>

    <ConditionalRendering/>
  );
}

export default App;