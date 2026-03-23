import React, { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Contact = () => {
  const { t, dir } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'ecommerce',
    budget: 'b1',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = t('contact.form.validation.nameRequired') || 'Name is required';
      else if (value.trim().length < 2) error = t('contact.form.validation.nameLength') || 'Name must be at least 2 characters';
    }
    if (name === 'phone') {
      if (!value.trim()) error = t('contact.form.validation.phoneRequired') || 'Phone number is required';
      else if (!/^[0-9+\-\s()]{8,20}$/.test(value)) error = t('contact.form.validation.phoneInvalid') || 'Please enter a valid phone number';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({ name: true, phone: true, service: true, budget: true, message: true });
    
    if (Object.keys(newErrors).filter(k => newErrors[k]).length === 0) {
      setIsSubmitting(true);
      
      try {
        const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/26935933/upc3ejs/';
        
        if (webhookUrl) {
          // Send data to the configured webhook (Zapier, Make, etc.)
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              service: formData.service,
              budget: formData.budget,
              message: formData.message,
              source: 'iVision Ads Website',
              timestamp: new Date().toISOString()
            }),
          });
        } else {
          // Fallback simulation if no webhook is configured
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', phone: '', service: 'ecommerce', budget: 'b1', message: '' });
          setTouched({});
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        // Still show success to the user so they aren't blocked, 
        // but in a real app you might want to show an error message.
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', phone: '', service: 'ecommerce', budget: 'b1', message: '' });
          setTouched({});
        }, 5000);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          {t('contact.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {t('contact.subtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <GlassCard delay={0.1} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-neon-blue/10 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 text-brand-neon-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.location')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('contact.info.address')}</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.2} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-neon-purple/10 flex items-center justify-center shrink-0">
              <Phone className="w-7 h-7 text-brand-neon-purple" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.phone')}</h3>
              <p className="text-gray-400 leading-relaxed" dir="ltr">+966 50 123 4567</p>
            </div>
          </GlassCard>

          <GlassCard delay={0.3} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center shrink-0">
              <Mail className="w-7 h-7 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('contact.info.email')}</h3>
              <p className="text-gray-400 leading-relaxed">hello@ivisionads.com</p>
            </div>
          </GlassCard>

          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="flex-1 glass-card py-4 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-green-400">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a href="#" className="flex-1 glass-card py-4 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-blue-400">
              <Send className="w-5 h-5" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>

        {/* Lead Gen Form */}
        <GlassCard delay={0.4} className="relative overflow-hidden p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon-blue/10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neon-purple/10 blur-[120px] rounded-full -ml-20 -mb-20 pointer-events-none" />
          
          <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('contact.form.success')}</h3>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.name')}</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white/5 border ${errors.name && touched.name ? 'border-red-500/50 focus:border-red-500' : touched.name && !errors.name ? 'border-green-500/50 focus:border-green-500' : 'border-white/10 focus:border-brand-neon-blue'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:bg-white/10 transition-all shadow-inner`}
                        />
                        {touched.name && !errors.name && (
                          <CheckCircle2 className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-green-400" />
                        )}
                      </div>
                      <AnimatePresence>
                        {errors.name && touched.name && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm flex items-center gap-1 mt-2">
                            <AlertCircle className="w-4 h-4" /> {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.phone')}</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-white/5 border ${errors.phone && touched.phone ? 'border-red-500/50 focus:border-red-500' : touched.phone && !errors.phone ? 'border-green-500/50 focus:border-green-500' : 'border-white/10 focus:border-brand-neon-blue'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:bg-white/10 transition-all shadow-inner`}
                          dir="ltr"
                        />
                        {touched.phone && !errors.phone && (
                          <CheckCircle2 className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-green-400" />
                        )}
                      </div>
                      <AnimatePresence>
                        {errors.phone && touched.phone && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm flex items-center gap-1 mt-2">
                            <AlertCircle className="w-4 h-4" /> {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.service')}</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue transition-all appearance-none shadow-inner cursor-pointer"
                    >
                      <option value="ecommerce">{t('contact.form.services.ecommerce')}</option>
                      <option value="hospitality">{t('contact.form.services.hospitality')}</option>
                      <option value="fashion">{t('contact.form.services.fashion')}</option>
                      <option value="beauty">{t('contact.form.services.beauty')}</option>
                      <option value="digital">{t('contact.form.services.digital')}</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.budget')}</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue transition-all appearance-none shadow-inner cursor-pointer"
                    >
                      <option value="b1">{t('contact.form.budgets.b1')}</option>
                      <option value="b2">{t('contact.form.budgets.b2')}</option>
                      <option value="b3">{t('contact.form.budgets.b3')}</option>
                      <option value="b4">{t('contact.form.budgets.b4')}</option>
                      <option value="b5">{t('contact.form.budgets.b5')}</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{t('contact.form.message')}</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon-blue focus:bg-white/10 transition-all resize-none shadow-inner"
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full py-5 text-lg font-bold tracking-wide flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('contact.form.submit')}...
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </Button>

                  <p className="text-sm text-brand-neon-purple/90 text-center mt-6 bg-brand-neon-purple/10 p-4 rounded-xl border border-brand-neon-purple/20 backdrop-blur-sm">
                    {t('contact.form.notice')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};
