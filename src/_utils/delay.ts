export default function delay(func: Function, num: number) {
  setTimeout(() => {
    func();
  }, num);
}
