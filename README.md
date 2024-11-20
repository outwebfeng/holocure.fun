# HoloCure.fun - Official Website

![HoloCure Logo](public/images/logo.png)

HoloCure.fun is the official website for HoloCure - Save the Fans!, a free fan game featuring hololive VTubers. This website serves as the main hub for game information, downloads, and community updates.

## Features

- **Multi-language Support**: Available in:
  - English (en-US)
  - Traditional Chinese (zh-TW)
  - Japanese (ja-JP)
  - Indonesian (id-ID)
- **Modern Design**: Built with Next.js 14 and Tailwind CSS
- **Responsive Layout**: Optimized for all devices
- **Dark/Light Mode**: Automatic theme switching
- **Game Downloads**: Direct links to Steam and itch.io platforms

## Getting Started

### Prerequisites

- Node.js 20.x
- pnpm 7.14.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/outwebfeng/holocure.fun
cd holocure.fun
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

Visit `http://localhost:3000` to see the website.

## Built With

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Radix UI](https://www.radix-ui.com/) - UI Components
- [Lucide Icons](https://lucide.dev/) - Icon Set

## Project Structure

```
holocure.fun/
├── app/                  # Next.js app directory
├── components/          # React components
├── lib/                # Utility functions
├── messages/           # Translation files
├── public/            # Static assets
└── styles/           # Global styles
```

## Internationalization

The website uses `next-intl` for internationalization. Translation files are located in the `messages/` directory:

- `en.json` - English
- `tw.json` - Traditional Chinese
- `jp.json` - Japanese
- `id.json` - Indonesian

To add a new language, create a new JSON file in the `messages/` directory and update `i18n.ts`.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm prettier` - Format code

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

For any questions or concerns, please contact:
- Email: support@holocure.fun
- Website: https://holocure.fun

## Acknowledgments

- [hololive production](https://hololive.hololivepro.com/)
- All contributors who have helped with translations and improvements
- The amazing HoloCure community
