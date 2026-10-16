/*
 * BEM MINEIRO AÇAÍ — configurações principais
 * Dados reais extraídos do cardápio oficial.
 */
const STORE_CONFIG = {
  whatsapp: "5532998111834", // (32) 99811-1834
  instagram: "https://www.instagram.com/bem_mineiro_acai_bq/",
  currency: "BRL",
  locale: "pt-BR"
};

// Cardápio real da Bem Mineiro Açaí
const PRODUCTS = [
  // ============ AÇAÍ NO COPO ============
  {id:"acai-300",name:"Açaí no Copo 300ml",category:"acai",categoryLabel:"Açaí no Copo",description:"Açaí cremoso com 2 adicionais grátis.",price:16.00,image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80",tag:"2 adicionais grátis"},
  {id:"acai-500",name:"Açaí no Copo 500ml",category:"acai",categoryLabel:"Açaí no Copo",description:"Açaí cremoso com 3 adicionais grátis.",price:20.00,image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",tag:"3 adicionais grátis"},
  {id:"acai-1000",name:"Açaí no Copo 1 Litro",category:"acai",categoryLabel:"Açaí no Copo",description:"Açaí cremoso com 5 adicionais grátis. Ideal para compartilhar.",price:45.00,image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80",tag:"5 adicionais grátis"},

  // ============ GARRAFINHA ============
  {id:"garrafinha-300",name:"Garrafinha 300ml",category:"garrafinha",categoryLabel:"Garrafinha",description:"Açaí na garrafinha com 1 adicional grátis.",price:15.00,image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",tag:"1 adicional grátis"},
  {id:"garrafinha-500",name:"Garrafinha 500ml",category:"garrafinha",categoryLabel:"Garrafinha",description:"Açaí na garrafinha com 3 adicionais grátis.",price:17.00,image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",tag:"3 adicionais grátis"},

  // ============ ADICIONAIS ============
  {id:"nutella",name:"Nutella",category:"adicionais",categoryLabel:"Adicional",description:"Creme de avelã Nutella.",price:5.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"chocolate-branco",name:"Chocolate Branco",category:"adicionais",categoryLabel:"Adicional",description:"Creme de chocolate branco.",price:3.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"chocolate-leite",name:"Chocolate ao Leite",category:"adicionais",categoryLabel:"Adicional",description:"Creme de chocolate ao leite.",price:3.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"morango",name:"Morango",category:"adicionais",categoryLabel:"Adicional",description:"Morango fresco picado.",price:3.00,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"leite-ninho",name:"Leite Ninho",category:"adicionais",categoryLabel:"Adicional",description:"Leite Ninho em pó.",price:3.00,image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"creme-ninho",name:"Creme de Ninho",category:"adicionais",categoryLabel:"Adicional",description:"Creme de Leite Ninho.",price:4.00,image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"doce-leite",name:"Doce de Leite",category:"adicionais",categoryLabel:"Adicional",description:"Doce de leite cremoso.",price:3.00,image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"pacoca",name:"Paçoca",category:"adicionais",categoryLabel:"Adicional",description:"Paçoca esfarelada.",price:2.50,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"ovomaltine",name:"Ovomaltine",category:"adicionais",categoryLabel:"Adicional",description:"Ovomaltine crocante.",price:4.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"banana",name:"Banana",category:"adicionais",categoryLabel:"Adicional",description:"Banana em rodelas.",price:2.00,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"manga",name:"Manga",category:"adicionais",categoryLabel:"Adicional",description:"Manga picada.",price:3.00,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"granola",name:"Granola",category:"adicionais",categoryLabel:"Adicional",description:"Granola crocante.",price:2.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},
  {id:"oreo",name:"Biscoito Oreo",category:"adicionais",categoryLabel:"Adicional",description:"Biscoito Oreo triturado.",price:3.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Adicional"},

  // ============ COBERTURAS ============
  {id:"cob-morango",name:"Cobertura de Morango",category:"coberturas",categoryLabel:"Cobertura",description:"Calda de morango.",price:2.00,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",tag:"Cobertura"},
  {id:"cob-chocolate",name:"Cobertura de Chocolate",category:"coberturas",categoryLabel:"Cobertura",description:"Calda de chocolate.",price:2.00,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Cobertura"},
  {id:"cob-doce-leite",name:"Cobertura de Doce de Leite",category:"coberturas",categoryLabel:"Cobertura",description:"Calda de doce de leite.",price:2.00,image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",tag:"Cobertura"},
  {id:"cob-leite-cond",name:"Cobertura de Leite Condensado",category:"coberturas",categoryLabel:"Cobertura",description:"Leite condensado.",price:2.50,image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",tag:"Cobertura"},

  // ============ CONFEITOS ============
  {id:"conf-granulado-branco",name:"Granulado Branco",category:"confeitos",categoryLabel:"Confeito",description:"Granulado branco.",price:1.50,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Confeito"},
  {id:"conf-granulado-preto",name:"Granulado Preto",category:"confeitos",categoryLabel:"Confeito",description:"Granulado preto.",price:1.50,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Confeito"},
  {id:"conf-granulado-colorido",name:"Granulado Colorido",category:"confeitos",categoryLabel:"Confeito",description:"Granulado colorido.",price:1.50,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",tag:"Confeito"},
  {id:"conf-confete",name:"Confete Colorido",category:"confeitos",categoryLabel:"Confeito",description:"Confete colorido.",price:1.50,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop