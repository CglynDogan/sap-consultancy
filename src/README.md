CglynDogan: Bu proje localhost:3000'de calisiyor ben bunu 3001'de calisacak sekilde nasil ayarlarim?

Workspace: Collecting workspace informationNext.js projenizin port numarasını değiştirmek için birkaç yöntem var. İşte en kolay iki yöntem:

1. package.json dosyasında script komutunu güncelleyerek:

```json
{
  "scripts": {
    "dev": "next dev --turbopack --port 3001",
    "build": "next build --turbopack",
    "start": "next start --port 3001",
    "lint": "eslint"
  }
}
```

2. Ya da komut satırında doğrudan port belirterek:

```sh
npm run dev -- -p 3001
```

İlk yöntem kalıcı bir çözüm sunar ve projenin her zaman 3001 portunda çalışmasını sağlar. İkinci yöntem ise geçici olarak port değiştirmek istediğinizde kullanışlıdır.

Değişiklikten sonra projenizi http://localhost:3001 adresinde görüntüleyebilirsiniz.

CglynDogan: Projeyi https://github.com/CglynDogan/sap-consultancy bu adrese pushla

GitHub Copilot: GitHub'a projenizi pushlamak için şu adımları takip edebilirsiniz:

1. Önce yerel git reponuzu başlatın:

```bash
git init
```

2. Değişiklikleri staging area'ya ekleyin:

```bash
git add .
```

3. Değişiklikleri commit edin:

```bash
git commit -m "Initial commit"
```

4. Remote repoyu ekleyin:

```bash
git remote add origin https://github.com/CglynDogan/sap-consultancy.git
```

5. Main branch'i oluşturun ve değişiklikleri push edin:

```bash
git branch -M main
git push -u origin main
```

Not:

- Eğer GitHub'da henüz repo oluşturmadıysanız, önce [GitHub](https://github.com/new) üzerinden yeni bir repo oluşturmanız gerekir.
- GitHub'a push yapabilmek için GitHub hesabınızla authenticate olmanız gerekebilir. Eğer daha önce yapmadıysanız, GitHub'ın kimlik doğrulaması isteyecektir.
- `.gitignore` dosyanızın node_modules klasörünü ve diğer gereksiz dosyaları içerdiğinden emin olun.

CglynDogan: Projeye uygun readme.md dosyasi olustur

GitHub Copilot: # SAP Consultancy Project

## Overview

This is a modern web application built with Next.js for SAP consulting services. The project uses React 19, TypeScript, and Tailwind CSS for styling.

## Tech Stack

- Next.js 15.5.3
- React 19.1.0
- TypeScript
- Tailwind CSS
- ESLint for code quality

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository

```bash
git clone https://github.com/CglynDogan/sap-consultancy.git
cd sap-consultancy
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3001](http://localhost:3001)

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
sap-consultancy/
├── app/
│   └── page.tsx
├── public/
├── styles/
├── components/
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
