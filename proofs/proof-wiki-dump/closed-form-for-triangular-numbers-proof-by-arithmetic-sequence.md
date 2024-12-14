theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ (Tₙ = ∑ᵢ₌₁ⁿ i = (n(n+1))/2)
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  lemma Arithmetic_Sequence_Sum() {
    assert(
      ∀m,a,d ∈ ℝ ⇒ (∑ᵢ₌₀ᵐ⁻¹(a + id) = m(a + ((m-1)/2)d))
    )
  } →
  
  step1: {
    setVar(n: ℕ) →
    substitute(m = n+1, a = 0, d = 1) →
    assert(∑ᵢ₌₀ⁿ(0 + i·1) = (n+1)(0 + (n/2)·1))
  } →
  
  step2: {
    simplify() →
    assert(∑ᵢ₌₀ⁿ i = (n+1)(n/2))
  } →
  
  step3: {
    rearrange() →
    assert(0 + ∑ᵢ₌₁ⁿ i = (n(n+1))/2)
  } →
  
  step4: {
    simplify() →
    assert(∑ᵢ₌₁ⁿ i = (n(n+1))/2)
  } →
  
  conclude(∀n ∈ ℕ ⇒ Tₙ = (n(n+1))/2)
}