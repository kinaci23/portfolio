import { motion } from "framer-motion";

export default function About() {
  return (
    // relative ve z-10 ile arka plan grid'inin önünde kalmasını sağlıyoruz
    <section id="hakkimda" className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative z-10 px-4">
      
      {/* whileInView: Kullanıcı buraya kaydırdığında animasyon çalışır */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Ekrana %20'si girince 1 kere çalışır
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* Terminal Penceresi Kapsayıcısı */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/90 overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Terminal Üst Çubuğu (Mac stili butonlar ve dosya yolu) */}
          <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
            <div className="flex gap-2.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="mx-auto text-neutral-500 text-sm flex items-center gap-2 font-mono">
              <span className="text-emerald-500">➜</span>
              <span>~/system</span>
              <span className="text-neutral-400">cat about_me.txt</span>
            </div>
          </div>

          {/* Terminal İçeriği (Yazılar) */}
          <div className="p-6 md:p-10 text-neutral-300 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Uçtan uca ürün geliştirme süreçlerini yürüten, backend odaklı bir Full Stack Yazılım Mühendisiyim. Geliştirme felsefem; sağlam ve optimize edilmiş veritabanı mimarileri kurmak, karmaşık iş mantıklarını temiz kod prensipleriyle basitleştirmek ve doğrudan amaca hizmet eden, yüksek performanslı sistemler tasarlamaktır.
            </p>
            
            <p>
              Modern web uygulamalarını yalnızca birer arayüz olmaktan çıkarıp, arka plandaki veri akışını güvenli servislerle yönetiyorum. Kurduğum bu altyapıları, veri odaklı makine öğrenmesi modelleri ve akıllı karar mekanizmalarıyla entegre ederek, sistemlerin kendi kendine öğrenen ve süreçleri otonomlaştıran yapılar haline gelmesini sağlıyorum.
            </p>

            {/* Okul bilgisine kod yorum satırı veya vurgulu bir blok stili veriyoruz */}
            <div className="border-l-2 border-emerald-500/50 pl-5 py-2 my-8 bg-emerald-500/5 rounded-r-lg">
              <p className="text-neutral-400">
                Mühendislik vizyonumu, eğitimimi sürdürdüğüm <span className="text-emerald-400 font-bold">Fırat Üniversitesi Yazılım Mühendisliği</span> bölümünde edindiğim güçlü akademik temele borçluyum.
              </p>
            </div>

            <p>
              Nesne Yönelimli Programlama (OOP), Veri Yapıları, Algoritma Analizi ve Yapay Zeka disiplinlerinde aldığım teorik eğitimi; geliştirdiğim gerçek dünya projeleriyle harmanlıyor ve modern yazılım mimarilerine döküyorum.
            </p>
            
            {/* Terminal Bitiş İmleci */}
            <div className="pt-6 flex items-center gap-2 text-emerald-500 font-mono mt-4">
              <span>goktan@server:~$</span>
              <span className="w-2.5 h-5 bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}