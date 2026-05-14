export type AppId = 'home' | 'explorer' | 'media' | 'chat' | 'trash' | 'photos' | 'about' | 'mail';

export interface WindowState {
  id: AppId;
  isOpen: boolean;
  isMaximized?: boolean;
  zIndex: number;
}

export interface OSConfig {
  bootTime: number;
}
