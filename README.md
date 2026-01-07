# Core Booster - 헬스 부스터 판매 웹사이트

미국 시장 스타일의 헬스 부스터 판매 정적 웹사이트입니다.

## 기술 스택

- **Vite** - 빌드 도구
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **React Router v6** - 라우팅

## 프로젝트 구조

```
src/
├── app/                    # 앱 설정 (라우터, 레이아웃)
├── features/product/       # 제품 관련 기능
│   ├── components/         # ProductCard, ProductList, ProductDetail
│   └── model/              # 정적 데이터
├── entities/product/       # Product 타입 정의
├── shared/                 # 공유 컴포넌트
│   ├── ui/                 # Button, Card
│   └── layout/             # Header, Footer
├── pages/                  # 페이지 컴포넌트
└── assets/images/          # 이미지 에셋
```

## 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 프로덕션 빌드
pnpm run build

# 빌드 미리보기
pnpm run preview
```

## 이미지 설정

`src/assets/images/` 폴더에 다음 이미지 파일을 추가해주세요:

- `booster01a.png` - 제품 메인 이미지
- `booster01b.png` - 제품 마케팅 이미지 (Hero 배경)

## 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 (Hero + 제품 목록) |
| `/product/:id` | 제품 상세 페이지 |

## 커스터마이징

### 색상 변경

`tailwind.config.js`에서 색상을 수정할 수 있습니다:

```js
colors: {
  primary: '#1E293B',
  secondary: '#4B5563',
  accent: '#F59E0B',
}
```

### 제품 추가

`src/features/product/model/product.ts`에서 products 배열에 새 제품을 추가하세요.

## TODO

- [ ] Buy Now 버튼에 실제 구매 링크 연결
- [ ] 추가 제품 이미지 및 데이터

