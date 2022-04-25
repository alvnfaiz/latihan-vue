import * as op from "@/utils/operation.js";

describe("penjumlahan", () => {
    it("Penjumlahan bilangan positif", () => {
        expect(op.penjumlahan(1, 2)).toBe(3);
    });
    it("penjumlahan bilangan positif dan negatif", () => {
        expect(op.penjumlahan(1, -2)).toBe(-1);
    });
    it("Penjumlahan bilangan negatif", () => {
        expect(op.penjumlahan(-1, -2)).toBe(-3);
    });
});

describe("pengurangan", () => {
    it("Pengurangan bilangan positif", () => {
        expect(op.pengurangan(1, 2)).toBe(-1);
    });
    it("pengurangan bilangan positif dan negatif", () => {
        expect(op.pengurangan(1, -2)).toBe(3);
    });
    it("Pengurangan bilangan negatif", () => {
        expect(op.pengurangan(-1, -2)).toBe(1);
    });
});

//pembagian
describe("pembagian", () => {
    it("Pembagian bilangan positif", () => {
        expect(op.pembagian(1, 2)).toBe(0.5);
    });
    it("pembagian bilangan positif dan negatif", () => {
        expect(op.pembagian(1, -2)).toBe(-0.5);
    });
    it("Pembagian bilangan negatif", () => {
        expect(op.pembagian(-1, -2)).toBe(0.5);
    });
});

//perkalian
describe("perkalian", () => {
    it("Perkalian bilangan positif", () => {
        expect(op.perkalian(1, 2)).toBe(2);
    });
    it("perkalian bilangan positif dan negatif", () => {
        expect(op.perkalian(1, -2)).toBe(-2);
    });
    it("Perkalian bilangan negatif", () => {
        expect(op.perkalian(-1, -2)).toBe(2);
    });
});

//rata_rata
describe("rata_rata", () => {
    it("Rata-rata bilangan positif", () => {
        expect(op.rata_rata(1, 2, 3, 4, 5)).toBe(3);
    });
    it("rata-rata bilangan positif dan negatif", () => {
        expect(op.rata_rata(5, -10, 15, -20, 25)).toBe(3);
    });
    it("Rata-rata bilangan negatif", () => {
        expect(op.rata_rata(-1, -2, -3, -4, -5)).toBe(-3);
    });
});

//sisa_bagi
describe("sisa_bagi", () => {
    it("Sisa-bagi bilangan positif", () => {
        expect(op.sisa_bagi(1, 2)).toBe(1);
    });
    it("sisa-bagi bilangan positif dan negatif", () => {
        expect(op.sisa_bagi(1, -2)).toBe(1);
    });
    it("Sisa-bagi bilangan negatif", () => {
        expect(op.sisa_bagi(-1, -2)).toBe(-1);
    });
});

//luas_persegi
describe("luas_persegi", () => {
    it("Luas persegi", () => {
        expect(op.luas_persegi(5,2)).toBe(10);
    });
    it("luas persegi", () => {
        expect(op.luas_persegi(10,4)).toBe(40);
    });
    it("luas persegi", () => {
        expect(op.luas_persegi(5,5)).toBe(25);
    });
});

//luas lingkaran
describe("luas_lingkaran", () => {
    it("Luas lingkaran", () => {
        expect(op.luas_lingkaran(5)).toBeCloseTo(78.57142857142857);
    });
    it("luas lingkaran", () => {
        expect(op.luas_lingkaran(7)).toBeCloseTo(154)
    });
    it("luas lingkaran", () => {
        expect(op.luas_lingkaran(14)).toBeCloseTo(616)
    });
});

//luas balok
describe("luas_balok", () => {
    it("Luas balok", () => {
        expect(op.luas_kubus(5,5,5)).toBe(150);
    });
    it("luas balok", () => {
        expect(op.luas_kubus(5,6,7)).toBe(214);
    });
    it("luas balok", () => {
        expect(op.luas_kubus(5,3,2)).toBe(62);
    });
});

//volume balok
describe("volume_balok", () => {
    it("Volume balok", () => {
        expect(op.volume_kubus(5,5,5)).toBe(125);
    });
    it("volume balok", () => {
        expect(op.volume_kubus(5,6,7)).toBe(210);
    });
    it("volume balok", () => {
        expect(op.volume_kubus(5,3,2)).toBe(30);
    });
});