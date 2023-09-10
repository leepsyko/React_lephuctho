import Ref from "./10_Ref/Ref";
import CustomHook from "./11_CustomHook/CustomHook";
import Redux from "./12_Redux/Redux";
import ReduxThunk from "./13_ReduxThunk/ReduxThunk";
import Welcome from "./1_components/welcome";
import Profile from "./2_JSX/Profile";
import Events from "./3_Events/Events";
import ConditionalRendering from "./4_ConditionalRendering/ConditionalRendering";
import RenderList from "./5_RenderList/RenderList";
import Props from "./6_Props/Props";
import State from "./7_State/State";
import Form from "./8_Form/Form";
import Effect from "./9_Effect/Effect";
import BusTicket from "./EX_BusTcket/BusTicket";
import Home from "./EX_HomeLayout (EX1)/Home";
import Shop from "./EX_ShopLayout (EX2)/Shop";
import Shopping from "./EX_Shopping (EX5)/Shopping";
import StateCard from "./EX_StateCar (EX4)/StateCard";
import UserManagement from "./EX_UserManagement/UserManagement";
import ShoeShop from "./ShoeShop_EX (EX3)/ShoeShop";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PostList from "./14_Router/PostList";
import PostDetail from "./14_Router/PostDetail";
import Styles from "./15_Styles/Styles";
import ReactQuery from "./16_ReactQuery/ReactQuery";

// component: là một function return về cú pháp JSX mô tả giao diện sẽ được hiển thị


function App() {
  // cú  pháp JSX: javascript XML là cú pháp đặc biệc cho phép viết html trong javascript. Viết hoa chữ cái đầu của function
  return (
    <BrowserRouter>

      {/* đã đưa nav vào homelayout */}
      {/* <nav class="nav justify-content-center  ">
      
      <Link class="nav-link" to="/">Home</Link>
      <Link class="nav-link" to="/shop">Shop</Link>
      <Link class="nav-link" to="/user">User</Link>
      
    </nav> */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>

          <Route index element={<Home />} />
          <Route path="shop" element={<Shopping />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="post" element={<PostList />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="styles" element={<Styles/>}/>
          <Route path="reactQuery" element={<ReactQuery/>}/>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}


// function App() {
//   // cú  pháp JSX: javascript XML là cú pháp đặc biệc cho phép viết html trong javascript. Viết hoa chữ cái đầu của function
//   return (
//     // 1.1
//     // <>
//     //   <h1>Hello BC52</h1>
//     //   <Welcome/>
//     //   <Profile/>
//     // </>


//     // <>
//     // <Home/>
//     // </>

//     // <Shop/>

//     // <Events/>

//     // <ConditionalRendering/>

//     // <RenderList/>

//     // <Props/>

//     // <ShoeShop/>

//     // <State/>

//     // <StateCard/>

//     // <Shopping/>

//     // <Form/>

//     // <Effect/>

//     // <UserManagement/>

//     // <Ref/>   

//     // <CustomHook/>

//     // <Redux/>

//     // <BusTicket/>

//     // <ReduxThunk/>

//    // phần tiếp theo thuộc folder 14 nằm ở trên
//   );
// }

export default App;
