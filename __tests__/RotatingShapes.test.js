import { RotatingShape } from "../src/RotatingShape.mjs";

xdescribe("Rotating 3x3 shape", () => {
  const shape = new RotatingShape(
    `ABC
     DEF
     GHI`
  );

  xit("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `ABC
       DEF
       GHI`
    );
  });

  xit("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `GDA
       HEB
       IFC`
    );
  });

  xit("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `CFI
       BEH
       ADG`
    );
  });
});

xdescribe("Rotating 5x5 shape", () => {
  const shape = new RotatingShape(
    `ABCDE
     FGHIJ
     KLMNO
     PQRST
     UVWXY`
  );

  xit("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `ABCDE
       FGHIJ
       KLMNO
       PQRST
       UVWXY`
    );
  });

  xit("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `UPKFA
       VQLGB
       WRMHC
       XSNID
       YTOJE`
    );
  });

  xit("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `EJOTY
       DINSX
       CHMRW
       BGLQV
       AFKPU`
    );
  });
});
