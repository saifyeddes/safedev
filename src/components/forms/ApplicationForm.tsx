import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'react-hot-toast';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: File | null;
  coverLetter: File | null;
  comments: string;
}

export function ApplicationForm({ isOpen, onClose, positionTitle }: ApplicationFormProps) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cvInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cv: null,
    coverLetter: null,
    comments: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: 'cv' | 'coverLetter') => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        toast.error(t('common.fileTypeError'));
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error(t('common.fileSizeError'));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.cv) {
      toast.error(t('common.requiredFields'));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cv: null,
        coverLetter: null,
        comments: ''
      });
      
      if (cvInputRef.current) cvInputRef.current.value = '';
      if (coverLetterInputRef.current) coverLetterInputRef.current.value = '';
      
      toast.success(t('common.applicationForm.success'));
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error(t('common.applicationForm.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {positionTitle ? `${t('common.applicationForm.title')} - ${positionTitle}` : t('common.applicationForm.title')}
          </DialogTitle>
          <DialogDescription>
            {t('common.applicationForm.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                {t('common.applicationForm.firstName')} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t('common.firstName')}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">
                {t('common.applicationForm.lastName')} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t('common.lastName')}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                {t('common.applicationForm.email')} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">{t('common.applicationForm.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cv">
              {t('common.applicationForm.cv')} <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="cv"
                name="cv"
                type="file"
                ref={cvInputRef}
                onChange={(e) => handleFileChange(e, 'cv')}
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="cursor-pointer"
                required
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {formData.cv ? formData.cv.name : t('common.noFileChosen')}
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="coverLetter">
              {t('common.applicationForm.coverLetter')}
              <span className="text-muted-foreground text-sm ml-2">({t('common.optional')})</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="coverLetter"
                name="coverLetter"
                type="file"
                ref={coverLetterInputRef}
                onChange={(e) => handleFileChange(e, 'coverLetter')}
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="cursor-pointer"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {formData.coverLetter ? formData.coverLetter.name : t('common.noFileChosen')}
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comments">{t('common.applicationForm.comments')}</Label>
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder={t('common.comments')}
              rows={4}
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('common.sending')}
                </>
              ) : (
                t('common.applicationForm.submit')
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ApplicationForm;
