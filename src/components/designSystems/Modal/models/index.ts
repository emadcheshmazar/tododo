export interface TopBarModalProps {
  title?: string
  closeable?: boolean
  buttons?: React.ReactNode
  onClose?: () => void
}

export interface ModalProps {
  children: React.ReactNode
  config: {
    open: boolean
    onClose: () => void
    type: "desktop" | "mobile"
    hideBackdrop?: boolean
    topbar?: TopBarModalProps
  }
}

export interface DesktopModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  hideBackdrop?: boolean
}

export interface MobileModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  hideBackdrop?: boolean
}
