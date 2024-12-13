theorem IsoscelesTriangleArea() {
  let(△ABC: IsoscelesTriangle, A: Apex) →
  let(r: Length[Leg], b: Length[Base]) →
  assert(
    Area(△ABC) = (b/4)√(4r² - b²)
  )
} ↔

proof IsoscelesTriangleArea() {
  let(h: Height[△ABC]) →
  
  step1: {
    assert(
      Area(△ABC) = (1/2)bh
    ) by(TriangleArea)
  } →
  
  step2: {
    let(base_half = b/2) →
    apply(PythagorasTheorem) →
    assert(
      h = √(r² - (b/2)²)
    )
  } →
  
  step3: {
    substitute(step1, h) →
    assert(
      Area(△ABC) = (b/2)√(r² - (b/2)²)
    )
  } →
  
  step4: {
    simplify(step3) →
    assert(
      Area(△ABC) = (b/2)√((4r² - b²)/4)
    )
  } →
  
  step5: {
    simplify(step4) →
    assert(
      Area(△ABC) = (b/4)√(4r² - b²)
    )
  }
}