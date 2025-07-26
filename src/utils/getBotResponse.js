import { contactInfo } from "./contactInfo";

const turkishKeywords = [
  "okuyor", "üniversite", "hangi bölüm", "proje", "çalışma", "alanı",
  "staj", "iş deneyimi", "teknoloji", "dil", "yazılım", "sosyal", "beceri",
  "sertifika", "kurs", "hobi", "boş zaman", "züleyha", "tanıt", "kimdir",
  "iletişim", "nasıl ulaşırım", "teşekkür", "merhaba", "selam", "hangi yazılım",
  "yaş", "kaç yaş", "doğum yılı", "2004 doğumlu", "sevgili", "evli", "ilişkisi"
];

const detectLanguage = (text) => {
  const lower = text.toLowerCase();
  const matches = turkishKeywords.filter((w) => lower.includes(w)).length;
  return matches > 0 ? "tr" : "tr";
};

export const getBotResponse = (msg) => {
  const q = msg.toLowerCase();

  if (q.includes("okuyor") || q.includes("üniversite") || q.includes("hangi bölüm")) {
    return "Züleyha, Düzce Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisi. Yazılım geliştirme, yapay zeka ve gömülü sistemler üzerine yoğunlaşıyor.";
  }

  if (q.includes("proje") || q.includes("çalışma alanı") || q.includes("hangi alan")) {
    return "Mobil uygulamalar, yapay zeka destekli sistemler ve gömülü sistem projeleri geliştiriyor. Özellikle toplumsal fayda sağlamaya yönelik fikirler üzerinde çalışıyor.";
  }

  if (q.includes("staj") || q.includes("iş deneyimi")) {
    return "Yaklaşık 3 aylık iş/staj deneyimi bulunuyor. RETTER Teknoloji A.Ş.'de Backend Tester Intern olarak Ava ve Sinon ile unit testler yazdı. Lideatech Bilişim’de ise Flutter ile mobil uygulama geliştirme üzerine staj yaptı.";
  }

  if (q.includes("teknoloji") || q.includes("dil") || q.includes("hangi yazılım")) {
    return "Dart/Flutter, JavaScript (ES6+), C#, SQL Server, HTML/CSS, Python, Arduino ve Assembly ile projeler geliştiriyor. Firebase, React ve test araçlarında da deneyim sahibi.";
  }

  if (q.includes("sosyal beceri") || q.includes("kişisel özellik") || q.includes("takım")) {
    return "Takım çalışmasına yatkın, zaman yönetimi, etkili iletişim ve sunum yapma konularında kendini geliştiriyor.";
  }

  if (q.includes("sertifika") || q.includes("kurs")) {
    return "Google Oyun ve Uygulama Akademisi’nden mezun oldu. Coursera üzerinden Google Proje Yönetimi Sertifikası ve Udemy'den Modern JavaScript eğitimi tamamladı.";
  }

  if (q.includes("hobi") || q.includes("boş zaman") || q.includes("ne yapmayı seviyor")) {
    return "Satranç oynamayı, seyahat etmeyi ve video çekip editlemeyi seviyor.";
  }

  if (q.includes("kimdir") || q.includes("züleyha kim") || q.includes("tanıt")) {
    return "Züleyha, bilgisayar mühendisliği öğrencisi. Mobil uygulamalar, yapay zeka ve gömülü sistemler alanında projeler geliştiriyor ve teknik becerilerini her geçen gün güçlendiriyor.";
  }

  if (q.includes("ingilizce") || q.includes("hangi dilleri biliyor")) {
    return "İngilizce seviyesi B1 düzeyindedir. Teknik belgeleri anlayabiliyor ve yazılım geliştirme süreçlerine adapte olabiliyor.";
  }

  if (q.includes("merhaba") || q.includes("selam")) {
    return "Merhaba! Züleyha hakkında merak ettiklerini sorabilirsin. Yardımcı olmaktan mutluluk duyarım 😊";
  }

  if (q.includes("teşekkür") || q.includes("sağ ol")) {
    return "Rica ederim! Başka bir konuda yardımcı olabilirim 😊";
  }

  if (q.includes("iletişim") || q.includes("nasıl ulaşırım") || q.includes("linkedin") || q.includes("github")) {
    return contactInfo;
  }

  if (q.includes("yaş") || q.includes("kaç yaş") || q.includes("doğum yılı") || q.includes("2004 doğumlu")) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2004;
    return `Züleyha 2004 doğumlu. Yani şu an ${age} yaşında.`;
  }

  return "Bunu şu anda bilmiyorum . Züleyha’ya kendin sorman daha sağlıklı olabilir. Ben iletişim kanallarını seninle paylaşabilirim.";
};
