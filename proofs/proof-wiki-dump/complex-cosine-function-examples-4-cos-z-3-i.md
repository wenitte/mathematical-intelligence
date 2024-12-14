theorem Complex_Cosine_Example() {
  assert(
    ∀z ∈ ℂ: 4cos(z) = 3 + i ↔ 
    (z = (8n + 1)π/4 - (iln(2))/2, n ∈ ℤ) ∨
    (z = (8m - 1)π/4 + (iln(2))/2, m ∈ ℤ)
  )
} ↔

proof Complex_Cosine_Example() {
  setVar(z: ℂ) →
  assert(4cos(z) = 3 + i) →
  
  lemma Euler_Cosine() {
    assert(cos(z) = (eⁱᶻ + e⁻ⁱᶻ)/2)
  } →
  
  apply(Euler_Cosine()) →
  assert(4((eⁱᶻ + e⁻ⁱᶻ)/2) = 3 + i) →
  assert(2e²ⁱᶻ - (3 + i)eⁱᶻ + 2 = 0) →
  
  lemma Quadratic_Formula() {
    assert(eⁱᶻ = ((3 + i) ± √((3 + i)² - 16))/4)
  } →
  
  apply(Quadratic_Formula()) →
  assert(eⁱᶻ = (3 + i ± √(9 - 1 + 6i - 16))/4) →
  assert(eⁱᶻ = (3 + i ± √(-8 + 6i))/4) →
  assert(eⁱᶻ = (3 + i ± (1 + 3i))/4) →
  assert(eⁱᶻ ∈ {1 + i, 1/2 - i/2}) →
  
  lemma Complex_Log_Case1() {
    assert(eⁱᶻ = 1 + i →
      iz = ln(√2exp(iπ/4)) →
      iz = ln(2)/2 + (8n + 1)iπ/4, n ∈ ℤ →
      z = (8n + 1)π/4 - (iln(2))/2)
  } →
  
  lemma Complex_Log_Case2() {
    assert(eⁱᶻ = 1/2 - i/2 →
      iz = ln((2/√2)exp(-π/4)) →
      iz = -ln(2)/2 + (8m - 1)iπ/4, m ∈ ℤ →
      z = (8m - 1)π/4 + (iln(2))/2)
  } →
  
  apply(Complex_Log_Case1(), Complex_Log_Case2()) →
  assert(conclusion)
}