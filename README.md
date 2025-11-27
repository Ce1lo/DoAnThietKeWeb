# Lingua Center - Project Structure

## 📁 Cấu trúc dự án (Project Structure)

```
DoAn/
├── index.html              # Main entry point (Điểm vào chính)
├── assets/
│   ├── styles.css         # CSS thuần (Pure CSS - No Tailwind)
│   └── script.js          # jQuery JavaScript (Using jQuery only)
├── pages/
│   ├── home.html          # Trang chủ (Home Page)
│   └── about.html         # Trang giới thiệu (About Page)
└── README.md              # Tài liệu này
```

## ✨ Các cải tiến thực hiện (Improvements Made)

### 1. **Loại bỏ Tailwind CSS - Sử dụng Pure CSS**

- ✅ Xóa hoàn toàn Tailwind CDN
- ✅ Viết toàn bộ CSS từ đầu (Pure CSS)
- ✅ Sử dụng CSS Custom Properties (CSS Variables) quản lý màu sắc
- ✅ Hỗ trợ Dark Mode bằng CSS (không cần thêm thư viện)
- ✅ Responsive design với media queries

### 2. **JavaScript - Chỉ sử dụng jQuery**

- ✅ jQuery CDN (duy nhất ngoại trừ Google Fonts & Material Symbols)
- ✅ Tất cả JavaScript được viết bằng jQuery
- ✅ Không sử dụng vanilla JavaScript hay thư viện khác
- Functions chính:
  - `loadPage(pageName)` - Load trang động
  - `navigateTo(pageId)` - Chuyển trang
  - `initializeSlideshow()` - Slideshow tự động
  - `initializeNavigation()` - Navigation links
  - `initializeScrollEffect()` - Header scroll effect
  - `initializeMobileMenu()` - Mobile menu toggle

### 3. **Tách riêng CSS & JavaScript**

- **`assets/styles.css`**: CSS thuần (Pure CSS)
- **`assets/script.js`**: jQuery JavaScript

### 4. **Đặt lại tên Class (Semantic Naming)**

- `slide` - Slideshow slide
- `slide-active` - Active slide
- `header-solid` - Solid header background
- `mobile-menu-btn` - Mobile menu button
- `pages-container` - Pages container
- `slideshow-container` - Slideshow container
- Tất cả tên lớp đều rõ ràng và có ý nghĩa

### 5. **CSS Features**

- Reset & Base Styles
- Color Variables (CSS Custom Properties)
- Material Symbols Icons
- Typography
- Buttons (Primary, Secondary, White variants)
- Header & Navigation (Desktop & Mobile)
- Hero Section with Slideshow
- Sections & Grid Layouts
- Cards & Feature Cards
- Footer with Social Links
- CTA Section
- Animations (fadeInUp)
- Utilities & Helpers
- Dark Mode Support
- Responsive Design (Mobile-first)

## 🎯 Cách sử dụng (How to Use)

### Chạy dự án (Run Project)

1. Mở file `index.html` bằng trình duyệt web
2. Hoặc sử dụng live server:
   ```bash
   # VS Code: Dùng extension Live Server
   # hoặc
   python -m http.server 8000
   # Sau đó truy cập: http://localhost:8000
   ```

### Thêm trang mới (Add New Page)

1. Tạo file HTML mới trong folder `pages/` (ví dụ: `pages/contact.html`)
2. Thêm link navigation trong `index.html`:
   ```html
   <li>
     <a href="#" onclick="navigateTo('contact'); return false;">Contact</a>
   </li>
   ```
3. Thêm ID wrapper trong page mới:
   ```html
   <div id="page-contact">
     <!-- Nội dung trang -->
   </div>
   ```

### Sửa CSS (Modify Styles)

- Tất cả CSS nằm trong `assets/styles.css`
- Sử dụng CSS Custom Properties (Variables) ở phần `:root` để thay đổi màu sắc:
  ```css
  :root {
    --primary: #005a9c;
    --secondary: #ffc107;
    /* ... */
  }
  ```
- Media queries được sử dụng cho responsive design

### Sửa JavaScript (Modify Scripts)

- Tất cả JavaScript nằm trong `assets/script.js`
- Sử dụng jQuery syntax
- Main functions nằm ở phần cuối file
- Không sử dụng vanilla JavaScript

## 📋 jQuery Functions

### Page Loading

```javascript
// Load trang từ file HTML
loadPage("home"); // Load pages/home.html
loadPage("about"); // Load pages/about.html
```

### Navigation

```javascript
// Chuyển đến trang khác
navigateTo("home"); // Chuyển trang chủ
navigateTo("about"); // Chuyển trang giới thiệu
```

### jQuery Selectors

```javascript
$("#main-header"); // Header element
$("#pages-container"); // Pages container
$("#mobile-menu"); // Mobile menu
```

## 🎨 Color System

Tất cả màu sắc được định nghĩa trong CSS Custom Properties:

- **Primary**: `#005A9C` (Blue)
- **Secondary**: `#FFC107` (Yellow/Amber)
- **Neutral Light**: `#F4F6F8`
- **Neutral Dark**: `#333333`
- **Background Light**: `#ffffff`
- **Background Dark**: `#101922`

Để thay đổi toàn bộ theme, chỉ cần sửa giá trị trong `:root`.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `768px`: Desktop view
  - Menu ẩn trên mobile, hiện menu button
  - Mobile menu toggle functionality

## 🔧 Công nghệ sử dụng (Technologies)

- **HTML5** - Markup
- **CSS3** - Styling (Pure CSS, no Tailwind)
- **jQuery** - JavaScript library (duy nhất)
- **Google Fonts** - Typography (Lexend)
- **Material Symbols** - Icons

## 📦 Dependencies

```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700;900&display=swap"
  rel="stylesheet"
/>

<!-- Material Symbols -->
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>
```

## 🚀 Performance

- Không sử dụng Tailwind CSS JIT compiler
- CSS được viết thủ công, tối ưu cho production
- jQuery được load từ CDN (jQuery 3.6.0)
- Minimal dependencies

## 📝 Notes

- Tất cả code được viết bằng semantic HTML & CSS
- Dark mode được hỗ trợ bằng CSS (class `dark-mode` trên body)
- Slideshow tự động chuyển slide mỗi 5 giây
- Mobile menu được toggle bằng jQuery click event
- Page loading được thực hiện bằng fetch API + jQuery

---

**Ngày cập nhật**: 20/11/2025
**Phiên bản**: 3.0 (jQuery + Pure CSS)
