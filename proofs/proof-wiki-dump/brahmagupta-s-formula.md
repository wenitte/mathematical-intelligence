theorem BrahmaguptaFormula() {
  assert(
    ∀ABCD: CyclicQuadrilateral, 
    let a,b,c,d ∈ ℝ⁺ be sides,
    let s = (a+b+c+d)/2 be semiperimeter →
    Area(ABCD) = √((s-a)(s-b)(s-c)(s-d))
  )
} ↔

proof BrahmaguptaFormula() {
  setVar(ABCD: CyclicQuadrilateral) →
  setVar(a,b,c,d: ℝ⁺) →
  setVar(s = (a+b+c+d)/2) →

  lemma AreaDecomposition() {
    Area(ABCD) = Area(△ABC) + Area(△ADC) ∧
    Area(△ABC) = (1/2)ab·sin(∠ABC) ∧
    Area(△ADC) = (1/2)cd·sin(∠ADC)
  } →

  lemma CyclicAngles() {
    ∠ABC + ∠ADC = π →
    sin(∠ABC) = sin(∠ADC) ∧
    cos(∠ABC) = -cos(∠ADC)
  } →

  apply(AreaDecomposition(), CyclicAngles()) →
  assert(Area = (1/2)(ab + cd)·sin(∠ABC)) →
  assert(4·Area² = (ab + cd)²(1 - cos²(∠ABC))) →

  lemma LawOfCosines() {
    a² + b² - 2ab·cos(∠ABC) = c² + d² - 2cd·cos(∠ADC) ∧
    2·cos(∠ABC)(ab + cd) = a² + b² - c² - d²
  } →

  apply(LawOfCosines()) →
  assert(16·Area² = ((a+b)² - (c-d)²)((c+d)² - (a-b)²)) →
  assert(16·Area² = (a+b+c-d)(a+b+d-c)(a+c+d-b)(b+c+d-a)) →
  
  substitute(s = (a+b+c+d)/2) →
  assert(16·Area² = 16(s-a)(s-b)(s-c)(s-d)) →
  assert(Area = √((s-a)(s-b)(s-c)(s-d)))
}

corollary BrahmaguptaFormulaAlternate() {
  assert(
    Area = (1/4)·√((a²+b²+c²+d²)² + 8abcd - 2(a⁴+b⁴+c⁴+d⁴))
  )
}