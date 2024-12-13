theorem Trapezium_Area() {
  assert(
    ∀ABCD ∈ Trapezium ∧
    ∃a,b,h ∈ ℝ₊ ∧
    isParallel(AB,DC) ∧
    length(AB) = a ∧
    length(DC) = b ∧
    height(ABCD) = h ⇒
    area(ABCD) = (h(a + b))/2
  )
}

proof Trapezium_Area() {
  setVar(ABCD: Trapezium) →
  setVar(a,b,h: ℝ₊) →
  
  construct(E: Point) {
    extend(AB, length: a)
  } →
  
  construct(F: Point) {
    extend(DC, length: b)
  } →
  
  assert(
    BEFC ∈ Trapezium ∧
    isParallel(BE,FC) ∧
    length(BE) = a ∧
    length(FC) = b ∧
    height(BEFC) = h
  ) →
  
  assert(
    AEFD ∈ Parallelogram ∧
    area(AEFD) = area(ABCD) + area(BEFC)
  ) →
  
  assert(area(ABCD) = area(BEFC)) →
  
  lemma Parallelogram_Area() {
    assert(
      ∀P ∈ Parallelogram ⇒
      area(P) = base(P) × height(P)
    )
  } →
  
  apply(Parallelogram_Area()) →
  assert(area(AEFD) = h(a + b)) →
  assert(area(ABCD) = h(a + b)/2)
}