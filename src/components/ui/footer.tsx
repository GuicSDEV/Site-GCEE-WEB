export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary-foreground font-bold text-2xl">G</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">GCEE - Unioeste</h3>
            <p className="text-primary-foreground/80">Grupo Cataratas de Eficiência Energética</p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/70">
              © 2025 GCEE - Grupo Cataratas de Eficiência Energética. 
              Desenvolvendo o futuro sustentável através da inovação.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}