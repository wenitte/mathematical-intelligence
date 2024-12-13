theorem SinePiOver10CosePiOver5() {
  assert(
    4 * sin(π/10) * cos(π/5) = 1
  )
} ↔

proof SinePiOver10CosePiOver5() {
  let P(z) = (z + 1)(z² - 2z*cos(π/5) + 1)(z² - 2z*cos(3π/5) + 1) →
  assert(P(z) = z⁵ + 1) →
  
  setVar(z := i) →
  assert(P(i) = (1 + i)(-1 - 2i*cos(π/5) + 1)(-1 - 2i*cos(3π/5) + 1)) →
  assert(P(i) = i⁵ + 1 = i + 1) →
  
  lemma SimplifyComplex() {
    assert((1 + i)(-2i*cos(π/5))(-2i*cos(3π/5)) = -4(1 + i)cos(π/5)cos(3π/5))
  } →
  
  apply(SimplifyComplex()) →
  assert(-4(1 + i)cos(π/5)cos(3π/5) = i + 1) →
  
  lemma EquateRealParts() {
    assert(-4cos(π/5)cos(3π/5) = 1)
  } →
  
  apply(EquateRealParts()) →
  assert(cos(3π/5) = cos(π/10 + π/2)) →
  assert(cos(3π/5) = -sin(π/10)) →
  
  assert(-4cos(π/5)(-sin(π/10)) = 1) →
  assert(4sin(π/10)cos(π/5) = 1)
}