import { useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import gceeLogotype from "@/assets/gcee-logo.jpeg";
import gceeBird from "@/assets/gcee-bird.jpeg";

const languages = [
	{ code: "pt" as const, flag: "🇧🇷", name: "Português" },
	{ code: "en" as const, flag: "🇺🇸", name: "English" },
	{ code: "es" as const, flag: "🇪🇸", name: "Español" },
];

const socialLinks = [
	{
		icon: Facebook,
		href: "https://www.facebook.com/grupocataratas/",
		label: "Facebook",
	},
	{
		icon: Instagram,
		href: "https://www.instagram.com/gceeunioeste/",
		label: "Instagram",
	},
	{
		icon: Youtube,
		href: "https://www.youtube.com/@gcee.unioeste/",
		label: "YouTube",
	},
	{
		icon: Music,
		href: "https://www.tiktok.com/@gcee.unioeste/",
		label: "TikTok",
	},
];

// Animation variants
const headerVariants = {
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 100,
			damping: 20,
			staggerChildren: 0.1
		}
	}
};

const logoVariants = {
	hidden: { x: -30, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 120,
			damping: 14
		}
	}
};

const navItemVariants = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 120,
			damping: 14
		}
	}
};

const socialVariants = {
	hidden: { x: 30, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 120,
			damping: 14
		}
	}
};

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { language, setLanguage, t } = useLanguage();
	
	const navigation = [
		{
			name: "Unioeste",
			href: "https://www.unioeste.br/portal/campus-foz-do-iguacu/",
			external: true,
		},
		{ name: t('nav.home'), href: "/" },
		{ name: t('nav.projects'), href: "/projetos" },
		{ name: t('nav.news'), href: "/noticias" },
		{ name: t('nav.about'), href: "/sobre-nos" },
		{ name: t('nav.sponsors'), href: "/patrocinadores" },
	];

	return (
		<div className="relative">
			{/* Top accent line */}
			<motion.div 
				className="h-1.5 bg-gradient-primary w-full fixed top-0 z-50"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				style={{ transformOrigin: "left" }}
			/>

			<motion.header 
				className="sticky top-1.5 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
				initial="hidden"
				animate="visible"
				variants={headerVariants}
			>
				<div className="container flex items-center justify-between h-20 px-4">
					{/* Logo */}
					<motion.div variants={logoVariants}>
						<Link
							to="/"
							className="flex items-center space-x-3 hover:opacity-80 transition-fast"
						>
							<motion.img
								src={gceeBird}
								alt="GCEE"
								className="w-12 h-12 object-contain"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ type: "spring", stiffness: 300 }}
							/>
							<div className="hidden sm:block">
								<img
									src={gceeLogotype}
									alt="GCEE - Unioeste"
									className="h-8 object-contain"
								/>
								<p className="text-xs text-muted-foreground mt-1">
									Grupo Cataratas de Eficiência Energética
								</p>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						{navigation.map((item, index) => (
							<motion.div
								key={item.name}
								variants={navItemVariants}
								custom={index}
								whileHover={{ y: -2 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								{item.external ? (
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium text-foreground hover:text-primary transition-fast relative group"
									>
										{item.name}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
									</a>
								) : (
									<Link
										to={item.href}
										className="text-sm font-medium text-foreground hover:text-primary transition-fast relative group"
									>
										{item.name}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
									</Link>
								)}
							</motion.div>
						))}
					</nav>

					{/* Desktop Social Links & Language */}
					<motion.div 
						className="hidden lg:flex items-center space-x-4"
						variants={socialVariants}
					>
						<div className="flex items-center space-x-2">
							{socialLinks.map((social, index) => (
								<motion.div
									key={social.label}
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ 
										delay: 0.5 + index * 0.1,
										type: "spring",
										stiffness: 200
									}}
									whileHover={{ scale: 1.2, rotate: 10 }}
								>
									<Button
										variant="ghost"
										size="sm"
										asChild
										className="w-8 h-8 p-0"
									>
										<a
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={social.label}
										>
											<social.icon className="w-4 h-4" />
										</a>
									</Button>
								</motion.div>
							))}
						</div>

						<motion.div 
							className="h-6 w-px bg-border"
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							transition={{ delay: 0.8, duration: 0.3 }}
						/>

						<div className="flex items-center space-x-2">
							{languages.map((lang, index) => (
								<motion.button
									key={lang.code}
									onClick={() => setLanguage(lang.code)}
									className={`text-2xl transition-all ${
										language === lang.code
											? "opacity-100 scale-110"
											: "opacity-50"
									}`}
									title={lang.name}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: language === lang.code ? 1 : 0.5, y: 0 }}
									transition={{ delay: 0.9 + index * 0.1 }}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.95 }}
								>
									{lang.flag}
								</motion.button>
							))}
						</div>
					</motion.div>

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="sm"
						className="lg:hidden p-2"
						onClick={() => setMobileMenuOpen(true)}
						aria-label="Abrir menu"
					>
						<Menu className="w-6 h-6" />
					</Button>
				</div>
			</motion.header>

			{/* Mobile menu FORA do header */}
			{mobileMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-50">
					<motion.div 
						className="fixed inset-0 bg-white z-50 flex flex-col"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
					>
						{/* Header */}
						<div className="flex items-center justify-between p-6 border-b border-border">
							<div className="flex items-center space-x-3">
								<img
									src={gceeBird}
									alt="GCEE"
									className="w-8 h-8 object-contain"
								/>
								<span className="font-semibold text-lg">Menu</span>
							</div>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setMobileMenuOpen(false)}
								className="p-2"
								aria-label="Fechar menu"
							>
								<X className="w-6 h-6" />
							</Button>
						</div>

						{/* Navigation */}
						<nav className="flex-1 px-6 py-6 space-y-1">
							{navigation.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									{item.external ? (
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-fast"
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</a>
									) : (
										<Link
											to={item.href}
											className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-fast"
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									)}
								</motion.div>
							))}
						</nav>

						{/* Footer */}
						<div className="p-6 border-t border-border space-y-4">
							<div className="flex items-center justify-center space-x-4 mb-4">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => setLanguage(lang.code)}
										className={`flex flex-col items-center space-y-1 transition-all hover:scale-110 ${
											language === lang.code
												? "opacity-100 scale-110"
												: "opacity-50"
										}`}
									>
										<span className="text-3xl">{lang.flag}</span>
										<span className="text-xs text-muted-foreground">
											{lang.name}
										</span>
									</button>
								))}
							</div>

							<div className="grid grid-cols-2 gap-2">
								{socialLinks.map((social) => (
									<Button
										key={social.label}
										variant="outline"
										size="sm"
										asChild
										className="justify-center"
									>
										<a
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2"
										>
											<social.icon className="w-4 h-4" />
											<span className="text-xs">{social.label}</span>
										</a>
									</Button>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
}
