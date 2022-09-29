import { first, sampleSize, last, sample } from "lodash";
import { useNumberFormat } from "@/utils/common/number";
import dayjs from "dayjs";
declare global {
  interface Array<T> {
    first(this: T[]): T;

    last(this: T[]): T;

    sample<T>(this: T[]): T;
    //  随机获取数据的中 N 个元素
    sampleSize(this: T[], size: number): T[];
  }
  interface String {
    ellipsis(this: string, limit: number): string;
    toInt(this: string): number;
  }
  interface Number {
    toDate(this: number, format?: string): string;
    numberFormat(this: number): number | string;
  }
}
Array.prototype.first = function <T>(this: T[]): T {
  return first<T>(this) as T;
};
Array.prototype.last = function <T>(this: T[]): T {
  return last<T>(this) as T;
};
Array.prototype.sample = function <T>(this: T[]): T {
  return sample<T>(this) as T;
};
Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
  return sampleSize<T>(this, size) as T[];
};
String.prototype.ellipsis = function (this: string, limit: number): string {
  if (this.length >= limit) return this.slice(0, limit) + "...";
  return this;
};
String.prototype.toInt = function (this: string): number {
  return parseInt(this);
};
Number.prototype.numberFormat = function (this): number | string {
  return useNumberFormat(this);
};

Number.prototype.toDate = function (
  this: number,
  format: string = "YYYY-MM-DD"
): string {
  return dayjs(this).format(format);
};
