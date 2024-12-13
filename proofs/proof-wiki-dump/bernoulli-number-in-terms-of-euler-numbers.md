theorem Bernoulli_Euler_Relation() {
  assert(
    ∀n ∈ ℤ₊ ⇒ B₂ₙ = (2n/(2^(2n)(2^(2n)-1))) * (∑ₖ₌₀ⁿ⁻¹ (2n-2 choose 2k)E₂ₖE₂ₙ₋₂ₖ₋₂)
  )
} ↔

proof Bernoulli_Euler_Relation() {
  setVar(n: ℤ₊) →
  
  lemma TangentSeries() {
    assert(tan(x) = ∑ₙ₌₁^∞ ((-1)ⁿ⁻¹2^(2n)(2^(2n)-1)B₂ₙx^(2n-1))/(2n)!)
  } →
  
  lemma TangentDerivative() {
    assert(d/dx(tan(x)) = ∑ₙ₌₁^∞ ((-1)ⁿ⁻¹2^(2n)(2^(2n)-1)B₂ₙ(2n-1)x^(2n-2))/(2n)!)
  } →
  
  lemma SecantSeries() {
    assert(sec(x) = ∑ₙ₌₀^∞ ((-1)ⁿE₂ₙx^(2n))/(2n)!)
  } →
  
  lemma SecantSquared() {
    assert(sec²(x) = (∑ₙ₌₀^∞ ((-1)ⁿE₂ₙx^(2n))/(2n)!)²)
  } →
  
  assert(d/dx(tan(x)) = sec²(x)) →
  
  lemma CoefficientsEquation() {
    assert(
      ((-1)ⁿ⁻¹2^(2n)(2^(2n)-1)B₂ₙ)/(2n(2n-2)!) = 
      ∑ₖ₌₀ⁿ⁻¹ ((-1)ⁿ⁻¹/(2k)!(2n-2k-2)!)E₂ₖE₂ₙ₋₂ₖ₋₂
    )
  } →
  
  apply(CoefficientsEquation()) →
  assert(
    B₂ₙ = (2n/(2^(2n)(2^(2n)-1))) * (∑ₖ₌₀ⁿ⁻¹ (2n-2 choose 2k)E₂ₖE₂ₙ₋₂ₖ₋₂)
  )
}