import { Phone, Mail, Facebook, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

function App() {
  const phoneNumber = '+447812196147';
  const email = 'wrightwindowsdoors@gmail.com';
  const whatsappNumber = '447812196147';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
          <img
            src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern aluminum bi-fold doors"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img
            src="/294696181_931006934461478_4223655888314587220_n.jpg"
            alt="Wright Windows and Doors Logo"
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            High-Specification<br />Glazing Specialists
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Premium UPVc, Aluminum, and Timber solutions for homes across South Yorkshire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-none text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Rob Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-none text-lg font-semibold hover:bg-sky-600 transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp for a Quote
            </a>
          </div>
        </div>
      </section>

      {/* High-Spec Specialists Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              High-Spec Specialists
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 p-8 border-t-4 border-slate-800">
              <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Cortizo Aluminum Sliders
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ultra-slim sightlines with exceptional thermal performance. Precision-engineered for contemporary aesthetics.
              </p>
            </div>

            <div className="bg-slate-50 p-8 border-t-4 border-sky-500">
              <div className="w-16 h-16 bg-sky-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Saint Gobain Solar Glass
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Advanced solar control glazing for optimal energy efficiency and comfort throughout the year.
              </p>
            </div>

            <div className="bg-slate-50 p-8 border-t-4 border-slate-800">
              <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Flush Sash Windows
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Traditional elegance meets modern performance. Perfect for period properties and new builds alike.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-sky-400" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Assure Registered Installer
              </h3>
            </div>
            <p className="text-blue-100 text-lg">
              Quality & Compliance Guaranteed - Your peace of mind is our commitment
            </p>
          </div>
        </div>
      </section>

      {/* Visual Portfolio Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-slate-900 aspect-square">
              <img
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bespoke Bi-folds"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bespoke Bi-folds
                  </h3>
                  <p className="text-blue-100">
                    Seamless indoor-outdoor living
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-900 aspect-square">
              <img
                src="https://images.pexels.com/photos/8175435/pexels-photo-8175435.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Roof Lanterns"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Roof Lanterns
                  </h3>
                  <p className="text-blue-100">
                    Natural light transformation
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-900 aspect-square">
              <img
                src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Window Systems"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Modern Window Systems
                  </h3>
                  <p className="text-blue-100">
                    Precision-crafted excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Service Areas
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8" />
            <p className="text-xl text-slate-600">
              Proudly serving South Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Doncaster', 'Wakefield', 'Barnsley', 'Rotherham'].map((area) => (
              <div key={area} className="text-center p-6 bg-slate-50 border-l-4 border-sky-500">
                <MapPin className="w-8 h-8 text-slate-900 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/294696181_931006934461478_4223655888314587220_n.jpg"
                alt="Wright Windows and Doors Logo"
                className="w-32 h-32 mb-4"
              />
              <p className="text-blue-100 text-lg font-semibold mb-2">
                Established Local Craftsmanship
              </p>
              <p className="text-slate-400">
                Quality glazing solutions across South Yorkshire since 1998
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Rob</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-2 text-blue-100 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +44 7812 196147
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-blue-100 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  wrightwindowsdoors@gmail.com
                </a>
                <a
                  href="https://www.facebook.com/Wrightwindowsanddoors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-sky-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Follow us on Facebook
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-blue-100">
                <li>Doncaster</li>
                <li>Wakefield</li>
                <li>Barnsley</li>
                <li>Rotherham</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Wright Windows and Doors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
