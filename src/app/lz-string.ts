import * as JSLZString from 'lz-string';

export class LZString {
  compress(data: string) {
    // TODO: Code to compress
    return JSLZString.compress(data);
  }

  decompress(compressed: string) {
    // TODO: Code to decompress
    return JSLZString.decompress(compressed);
  }

  decompressFromBase64(compressed: string) {
    // TODO: Code to decompress
    return JSLZString.decompressFromBase64(compressed);
  }
}
