theorem Triangle_Area_Complex() {
  let T: Triangle,
  let v1 = -4 - i,
  let v2 = 1 + 2i,
  let v3 = 4 - 3i
  assert(
    Area(T) = 17
  )
} ↔

proof Triangle_Area_Complex() {
  setVar(T: Triangle) →
  apply(Area_Determinant_Form) →
  assert(
    Area(T) = (1/2)|det([[-4,-1,1],[1,2,1],[4,-3,1]])|
  ) →
  apply(Determinant_Definition) →
  assert(
    Area(T) = (1/2)|(-4×2 - (-1)×1) - (-4×(-3) - 4×(-1)) + (1×(-3) - 2×4)|
  ) →
  simplify() →
  assert(
    Area(T) = (1/2)|(-8 - (-1)) - (12 - (-4)) + (-3 - 8)|
  ) →
  simplify() →
  assert(
    Area(T) = (1/2)|(-7) - (16) + (-11)|
  ) →
  simplify() →
  assert(
    Area(T) = (1/2)|-34|
  ) →
  simplify() →
  assert(
    Area(T) = 17
  )
}