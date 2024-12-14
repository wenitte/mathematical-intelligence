theorem Complex_Exponential_Is_Entire() {
  assert(
    let exp: ℂ → ℂ be_the_complex_exponential_function →
    exp is_entire
  )
} ↔

proof Complex_Exponential_Is_Entire() {
  setDef(exp(z) = ∑[n=0→∞](z^n/n!)) →
  
  lemma Power_Series_Form() {
    assert(
      exp(z) = ∑[n=0→∞]((z-ξ)^n/n!) ∧ 
      ξ = 0
    )
  } →
  
  lemma Entire_Function_Equivalence() {
    assert(
      f is_entire ↔ f has_everywhere_convergent_power_series
    )
  } →
  
  lemma Factorial_Series_Convergence() {
    assert(
      ∀z ∈ ℂ → series(∑[n=0→∞](z^n/n!)) is_convergent
    )
  } →
  
  apply(Power_Series_Form()) →
  apply(Entire_Function_Equivalence()) →
  apply(Factorial_Series_Convergence()) →
  
  assert(
    exp has_everywhere_convergent_power_series →
    exp is_entire
  )
}