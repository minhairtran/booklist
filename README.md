# Context-hook-local storage
- Context: lưu trữ dữ liệu trong state tập trung tại files context để: 
  + Dễ tìm
  + Tất cả các components có thể sử dụng, tránh việc lift up state mỗi lần các components khác không thuộc nhánh lưu trữ components hiện tại cần dùng đến
  + Hệ quả: cleaner code và dễ phát triển
- Hook: tạo và tương tác với dữ liệu trong state. Các hàm quan trọng trong hook:
  + useState: tạo state
  + useContext: sử dụng state tại các components khác
  + useEffect: khi có sự thay đổi trong state thì useEffect sẽ được gọi
  + useReducer. useReducer là công cụ mạnh ở trong hook, giúp nó thay thế việc sử dụng redux. useReducer có 3 thành phần cơ bản như redux là: state, action và reducer. reducer kết nối state và action thực hiện. 
- Local storage: cho phép lưu trữ dữ liệu trên port. Như vậy, khi reload trang web thì dữ liệu cũ không bị mất. Cách sử dung
  + Object localStorage và các hàm setItem(), getItem()
  + JSON.parse: chuyển đổi dữ liệu format JSON sang javascript object
