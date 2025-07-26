import { contactInfo, contactInfoEn } from "./contactInfo";

const turkishKeywords = [
  "okuyor", "üniversite", "hangi bölüm", "proje", "çalışma", "alanı",
  "staj", "iş deneyimi", "teknoloji", "dil", "yazılım", "sosyal", "beceri",
  "sertifika", "kurs", "hobi", "boş zaman", "züleyha", "tanıt", "kimdir",
  "iletişim", "nasıl ulaşırım", "teşekkür", "merhaba", "selam", "hangi yazılım"
];

const englishKeywords = [
  "study", "university", "major", "project", "develop", "working on",
  "intern", "work experience", "skills", "languages", "technologies",
  "soft skill", "certificate", "course", "hobby", "free time", "who is",
  "introduce", "contact", "linkedin", "github", "thanks", "thank you",
  "hello", "hi", "english level"
];

const detectLanguage = (text) => {
  const lower = text.toLowerCase();
  const trMatches = turkishKeywords.filter((w) => lower.includes(w)).length;
  const enMatches = englishKeywords.filter((w) => lower.includes(w)).length;

  if (trMatches > enMatches) return "tr";
  if (enMatches > trMatches) return "en";

  return /^[a-zA-Z0-9\s.,!?']+$/.test(text) && !/[çğıöşüÇĞİÖŞÜ]/.test(text)
    ? "en"
    : "tr";
};

export const getBotResponse = (msg) => {
  const q = msg.toLowerCase();
  const lang = detectLanguage(q);
  const isEnglish = lang === "en";

  if (
    q.includes("okuyor") || q.includes("üniversite") || q.includes("hangi bölüm") ||
    q.includes("study") || q.includes("university") || q.includes("major")
  ) {
    return isEnglish
      ? "Zuleyha is a 4th-year Computer Engineering student at Duzce University. She focuses on software development, artificial intelligence, and embedded systems."
      : "Züleyha, Düzce Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisi. Yazılım geliştirme, yapay zeka ve gömülü sistemler üzerine yoğunlaşıyor.";
  }

  if (
    q.includes("proje") || q.includes("çalışma alanı") || q.includes("hangi alan") ||
    q.includes("project") || q.includes("develop") || q.includes("working on")
  ) {
    return isEnglish
      ? "She develops mobile apps, AI-powered systems, and embedded system projects — especially focused on socially beneficial ideas."
      : "Mobil uygulamalar, yapay zeka destekli sistemler ve gömülü sistem projeleri geliştiriyor. Özellikle toplumsal fayda sağlamaya yönelik fikirler üzerinde çalışıyor.";
  }

  if (
    q.includes("staj") || q.includes("iş deneyimi") ||
    q.includes("intern") || q.includes("work experience")
  ) {
    return isEnglish
      ? "She has about 3 months of experience. She worked as a Backend Tester Intern at RETTER Technology using Ava and Sinon for unit testing, and as a Mobile App Developer Intern at Lideatech using Flutter."
      : "Yaklaşık 3 aylık iş/staj deneyimi bulunuyor. RETTER Teknoloji A.Ş.'de Backend Tester Intern olarak Ava ve Sinon ile unit testler yazdı. Lideatech Bilişim’de ise Flutter ile mobil uygulama geliştirme üzerine staj yaptı.";
  }

  if (
    q.includes("teknoloji") || q.includes("dil") || q.includes("hangi yazılım") ||
    q.includes("skills") || q.includes("languages") || q.includes("technologies")
  ) {
    return isEnglish
      ? "She works with Dart/Flutter, JavaScript (ES6+), C#, SQL Server, HTML/CSS, Python, Arduino, and Assembly. She also has experience with Firebase, React, and testing tools."
      : "Dart/Flutter, JavaScript (ES6+), C#, SQL Server, HTML/CSS, Python, Arduino ve Assembly ile projeler geliştiriyor. Firebase, React ve test araçlarında da deneyim sahibi.";
  }

  if (
    q.includes("sosyal beceri") || q.includes("kişisel özellik") ||
    q.includes("iletişim") || q.includes("soft skill")
  ) {
    return isEnglish
      ? "She is team-oriented and actively develops her time management, communication, and presentation skills."
      : "Takım çalışmasına yatkın, zaman yönetimi, etkili iletişim ve sunum yapma konularında kendini geliştiriyor.";
  }

  if (
    q.includes("sertifika") || q.includes("kurs") ||
    q.includes("certificate") || q.includes("course")
  ) {
    return isEnglish
      ? "She graduated from the Google Game and App Academy. She also completed the Google Project Management Certificate via Coursera and a Modern JavaScript course on Udemy."
      : "Google Oyun ve Uygulama Akademisi’nden mezun oldu. Coursera üzerinden Google Proje Yönetimi Sertifikası ve Udemy'den Modern JavaScript eğitimi tamamladı.";
  }

  if (
    q.includes("hobi") || q.includes("boş zaman") || q.includes("ne yapmayı seviyor") ||
    q.includes("hobby") || q.includes("free time")
  ) {
    return isEnglish
      ? "She enjoys playing chess, traveling, and video editing."
      : "Satranç oynamayı, seyahat etmeyi ve video çekip editlemeyi seviyor.";
  }

  if (
    q.includes("kimdir") || q.includes("züleyha kim") ||
    q.includes("tanıt") || q.includes("who is") || q.includes("introduce")
  ) {
    return isEnglish
      ? "Zuleyha is a Computer Engineering student who develops mobile, AI, and embedded system projects while constantly improving her technical skills."
      : "Züleyha, bilgisayar mühendisliği öğrencisi. Mobil uygulamalar, yapay zeka ve gömülü sistemler alanında projeler geliştiriyor ve teknik becerilerini her geçen gün güçlendiriyor.";
  }

  if (
    q.includes("ingilizce") || q.includes("hangi dilleri biliyor") ||
    q.includes("language level") || q.includes("english level")
  ) {
    return isEnglish
      ? "Her English level is around B1. She can understand technical documentation and follow software development processes."
      : "İngilizce seviyesi B1 düzeyindedir. Teknik belgeleri anlayabiliyor ve yazılım geliştirme süreçlerine adapte olabiliyor.";
  }

  if (
    q.includes("merhaba") || q.includes("selam") ||
    q.includes("hello") || q.includes("hi") || q.includes("how are you")
  ) {
    return isEnglish
      ? "Hello! You can ask me anything about Zuleyha. I'd be happy to help 😊"
      : "Merhaba! Züleyha hakkında merak ettiklerini sorabilirsin. Yardımcı olmaktan mutluluk duyarım 😊";
  }

  if (
    q.includes("teşekkür") || q.includes("sağ ol") ||
    q.includes("thanks") || q.includes("thank you")
  ) {
    return isEnglish
      ? "You're welcome! Let me know if there's anything else I can help with 😊"
      : "Rica ederim! Başka bir konuda yardımcı olabilirim 😊";
  }

  if (
    q.includes("iletişim") || q.includes("nasıl ulaşırım") ||
    q.includes("linkedin") || q.includes("github") || q.includes("contact")
  ) {
    return isEnglish ? contactInfoEn : contactInfo;
  }

  return isEnglish
    ? "I’m not sure about that, but you can ask Zuleyha directly if you'd like. Would you like me to share her contact info?"
    : "Bunu şu anda bilmiyorum ama istersen Züleyha’ya kendin sorabilirsin. İletişim kanallarını paylaşmamı ister misin?";
};
