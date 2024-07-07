export interface ToastInterface {
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'
    | undefined;
  autoClose: number | false | undefined;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  theme: 'light' | 'dark' | 'colored' | undefined;
  draggable: boolean;
}
