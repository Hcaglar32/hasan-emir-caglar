'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ContentData } from '@/backend/types';

export default function AdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'personal' | 'hero' | 'projects'>('personal');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setIsChecking(true);
    try {
      const authResponse = await fetch('/api/auth/check');
      
      if (authResponse.ok) {
        const authData = await authResponse.json();
        
        if (authData.authenticated) {
          const contentResponse = await fetch('/api/content');
          if (contentResponse.ok) {
            const data = await contentResponse.json();
            setContent(data);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    } finally {
      setIsChecking(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        await checkAuth();
        setMessage('Giriş başarılı!');
      } else {
        setMessage(data.error || 'Giriş başarısız');
      }
    } catch (error) {
      setMessage('Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setContent(null);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Değişiklikler kaydedildi!');
      } else {
        setMessage(data.error || 'Kaydetme başarısız');
      }
    } catch (error) {
      setMessage('Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const updatePersonalInfo = (field: string, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      personalInfo: { ...content.personalInfo, [field]: value },
    });
  };

  const updateHeroBanner = (field: string, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      heroBanner: { ...content.heroBanner, [field]: value },
    });
  };

  const updateProject = (index: number, field: string, value: any) => {
    if (!content) return;
    const updatedProjects = [...content.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setContent({ ...content, projects: updatedProjects });
  };

  const addProject = () => {
    if (!content) return;
    const newProject = {
      id: Date.now(),
      title: '',
      description: '',
      image: '',
      tag: ['All', 'Frontend'],
      gitUrl: '',
      previewUrl: '',
    };
    setContent({ ...content, projects: [...content.projects, newProject] });
  };

  const deleteProject = (index: number) => {
    if (!content) return;
    const updatedProjects = content.projects.filter((_, i) => i !== index);
    setContent({ ...content, projects: updatedProjects });
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md text-center">
          <div className="text-gray-800 text-xl">Kontrol ediliyor...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Paneli</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-posta
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                required
              />
            </div>
            {message && (
              <div className={`p-3 rounded-lg ${message.includes('başarılı') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Yönetim Paneli</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {message && (
          <div className={`mb-4 p-4 rounded-lg ${message.includes('başarılı') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex-1 px-6 py-4 font-medium ${activeTab === 'personal' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Kişisel Bilgiler
            </button>
            <button
              onClick={() => setActiveTab('hero')}
              className={`flex-1 px-6 py-4 font-medium ${activeTab === 'hero' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Banner
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex-1 px-6 py-4 font-medium ${activeTab === 'projects' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Projeler
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'personal' && content && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Kişisel Bilgiler</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <input
                    type="email"
                    value={content.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="text"
                    value={content.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                  <input
                    type="url"
                    value={content.personalInfo.linkedinUrl}
                    onChange={(e) => updatePersonalInfo('linkedinUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                  <input
                    type="url"
                    value={content.personalInfo.instagramUrl}
                    onChange={(e) => updatePersonalInfo('instagramUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={content.personalInfo.githubUrl}
                    onChange={(e) => updatePersonalInfo('githubUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CV URL</label>
                  <input
                    type="text"
                    value={content.personalInfo.cvUrl}
                    onChange={(e) => updatePersonalInfo('cvUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
              </div>
            )}

            {activeTab === 'hero' && content && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Banner Ayarları</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                  <input
                    type="text"
                    value={content.heroBanner.title}
                    onChange={(e) => updateHeroBanner('title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alt Başlık</label>
                  <input
                    type="text"
                    value={content.heroBanner.subtitle}
                    onChange={(e) => updateHeroBanner('subtitle', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                  <textarea
                    value={content.heroBanner.description}
                    onChange={(e) => updateHeroBanner('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Görsel URL</label>
                  <input
                    type="text"
                    value={content.heroBanner.imageUrl}
                    onChange={(e) => updateHeroBanner('imageUrl', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                </div>
              </div>
            )}

            {activeTab === 'projects' && content && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Projeler</h2>
                  <button
                    onClick={addProject}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    + Yeni Proje
                  </button>
                </div>
                {content.projects.map((project, index) => (
                  <div key={project.id} className="border border-gray-300 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">Proje #{index + 1}</h3>
                      <button
                        onClick={() => deleteProject(index)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm"
                      >
                        Sil
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Başlık</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updateProject(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Görsel URL</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => updateProject(index, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
                      <input
                        type="url"
                        value={project.gitUrl}
                        onChange={(e) => updateProject(index, 'gitUrl', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Önizleme URL</label>
                      <input
                        type="url"
                        value={project.previewUrl}
                        onChange={(e) => updateProject(index, 'previewUrl', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 font-medium"
          >
            {loading ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
          </button>
        </div>
      </div>
    </div>
  );
}
