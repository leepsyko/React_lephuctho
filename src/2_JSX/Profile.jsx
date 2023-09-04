// Quy tắc JXS

// Quy tắc 1: JSX không cho phép 2 thẻ đồng cấp ngoài cùng
// trường hợp không muốn dư thẻ div thì dùng thẻ Fragment 
// thẻ rỗng 
// <>
// </>

// Quy tắc 2: Vì JSX là javascript nên có 1 số từ khoá của html bị thay thế, các thuốc tính đều viết dạng camelCase
// vd: class -> className; onclick --> onClick

// Quy tắc 3: khi muốn viết JavaScript, ta bọc chúng vào cặp ngoặc nhọn {}. VD biến name trong h1 

// style kiểu inline trong JSX được viết dưới dạng object

function Profile() {
    let name = "Tony"

    const getClassName = () => {
        return "BC52"
    }

    return (
        <div>
            <h1 className="title">Name: {name}</h1>
            <h3 style={{ color: "red", fontWeight: 600 }}>Class: {getClassName()}</h3>
        </div>
    )
}

export default Profile