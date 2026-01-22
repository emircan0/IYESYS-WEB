'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white dark:bg-gray-800 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Bize Ulaşın
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-10">
              Sorularınız veya iş birliği talepleriniz için aşağıdaki formu doldurabilirsiniz.
            </p>

            <form className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Gönder
                </motion.button>
              </div>
            </form>
          </div>
        </section>
      </main> 
    </div>
  )
}
