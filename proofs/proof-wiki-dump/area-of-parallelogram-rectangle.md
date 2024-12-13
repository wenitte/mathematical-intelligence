theorem Rectangle_Area() {
  assert(
    ∀R[rectangle] → Area(R) = base(R) × height(R)
  )
} ↔

proof Rectangle_Area() {
  setVar(ABCD: rectangle) →
  construct(BI: segment) {
    length(BI) = length(BC)
  } →
  construct(CDEF, BCHI: squares) →
  
  assert(ABCD ≅ CHGF) →
  assert(Area(ABCD) = Area(CHGF)) ∧
  
  setVar(a: ℝ) {
    a = length(AB)
  } →
  setVar(b: ℝ) {
    b = length(BI)
  } →
  
  assert(Area(AIGE) = (a + b)²) →
  
  expand((a + b)²) {
    (a + b)² = a² + 2ab + b²
  } →
  
  assert(
    a² + 2Area(ABCD) + b² = a² + 2ab + b²
  ) →
  
  subtract(a² + b²) →
  divide(2) →
  
  conclude(
    Area(ABCD) = ab
  )
}