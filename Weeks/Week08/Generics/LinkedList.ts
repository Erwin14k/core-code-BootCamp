import Node from './Node';

export class LinkedList<T> {
  private first: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  public add(value: T): void {
    if (this.first == null) {
      this.first = new Node(value);
    } else {
      let node = this.first;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.first !== null) {
      this.first = this.first.next;
      this.length--;
    }
  }

  public addFirst(value: T) {
    if (this.first === null) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.first;
      this.first = node;
      this.length++;
    }
  }

  public removeLast(): void {
    if (this.first !== null) {
      let node = this.first;
      let previous: Node<T> = node;
      while (node.next !== null) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
      this.length--;
    }
  }
}