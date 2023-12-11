declare module global {
  interface String {
    secret: (length?: number) => this;
  }
}
declare module "x-plugins" {
  /**Send Notification */
  const $xEmit: (key: string, ...arg: any[]) => void;
  /** Spy Notification */
  const $xOn: (key: string, callback: (...arg: any[]) => void) => void;
  /** Disable Listening Notification */
  const $xOff: (key: string, callback?: (...arg: any[]) => void) => void;
  /** random character */
  const RandomString: (length?:number) => string;
  /** 0.1 second timer */
  const AddListenAction: (
    call: (time: number) => boolean | Promise<boolean>
  ) => void;
  /** Waiting Time */
  const WaitTime: (time?:number) => Promise<any>;
  /**  Waiting for feedback */
  const WaitContinue: (callback: () => boolean) => Promise<null>;
  /** json parsing */
  const JSONParse: (value) => object | null;
  /** Getting the right value  */
  const Clamp: (value: number, min: number, max: number) => number;
  /** Determine if it is empty */
  const IsEmpty: (value) => boolean;
  const Copy: (text) => void;
  /** String Coding */
  const encodeBase: (value: string) => string;
  /** String Decoding  */
  const decodeBase: (value: string) => string;

  interface XWorkerType {
    postMessage: (data: { cmd: string; data: any }) => void;
    onmessage: (e: { data: { cmd: string; data: any } }) => void;
    terminate: () => void;
  }
  /** Decorator listens to worker messages */
  function OnMessage(cmd: string): any;
  /** Set the decorator to enable monitoring of worker messages. */
  function runMessage(target: Object, worker: XWorkerType): void;
  /** Decorator Monitor Notification Messages */
  function OnNotification(name: string): any;
  /** Set Decorator to listen to notification messages  */
  function runNotification(target: Object): void;
  /** Turn off the decorator to listen to notification messages */
  function stopNotfication(target: Object): void;
  /** Used to intercept method execution Decorator use */
  function RequestProxy(callback: () => boolean);
}

declare module "x-plugins/component" {
  const SignMessage: (
    callback: () => Promise<string | null>,
    type?:boolean
  ) => Promise<string | null>;
}
