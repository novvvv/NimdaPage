# Nimda-Con 모노레포 프로젝트

이 프로젝트는 NestJS 백엔드와 React 프론트엔드를 포함한 모노레포 구조입니다.

## 🚀 빠른 시작 (새로운 개발자용)

### 0. 환경 요구사항
- **Node.js**: 18.x 이상 (권장: 20.x LTS)
- **npm**: 9.x 이상
- **운영체제**: Windows, macOS, Linux 모두 지원

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd nimda-con
```

### 2. 환경 셋팅 (한 번에 모든 의존성 설치)
```bash
npm run setup
```
> 💡 **참고**: `setup` 스크립트가 루트, 백엔드, 프론트엔드의 의존성을 순차적으로 설치합니다.
> 
> **지원 환경**: Windows, macOS, Linux 모두에서 정상 작동합니다.

### 3. 개발 서버 실행
```bash
# 백엔드와 프론트엔드를 동시에 실행
npm run dev
```

## 프로젝트 구조

```
nimda-con/
├── backend/          # NestJS 백엔드 애플리케이션
├── frontend/         # React 프론트엔드 애플리케이션
├── package.json      # 루트 패키지 설정
└── README.md         # 프로젝트 문서
```

## 기술 스택

- **Backend**: NestJS, TypeScript, TypeORM
- **Frontend**: React, TypeScript, Create React App
- **Package Manager**: npm workspaces

## 설치 및 실행

### 전체 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
# 백엔드와 프론트엔드를 동시에 실행
npm run dev

# 또는 개별적으로 실행
npm run dev:backend    # 백엔드만 실행
npm run dev:frontend   # 프론트엔드만 실행
```

### 빌드
```bash
# 전체 프로젝트 빌드
npm run build

# 개별 빌드
npm run build:backend
npm run build:frontend
```

### 테스트
```bash
# 전체 테스트 실행
npm test

# 개별 테스트
npm run test:backend
npm run test:frontend
```

## 개발 환경

- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:3001

## 유용한 명령어

```bash
# 의존성 정리
npm run clean

# 새로운 의존성 추가 (백엔드)
cd backend && npm install <package-name>

# 새로운 의존성 추가 (프론트엔드)
cd frontend && npm install <package-name>
```

## 주의사항

- 백엔드와 프론트엔드는 각각 독립적인 패키지로 관리됩니다.
- 공통 의존성은 루트 package.json에 추가하세요.
- 각 프로젝트의 세부 설정은 해당 디렉토리의 package.json을 참조하세요.