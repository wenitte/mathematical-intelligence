theorem Circle_Group_Is_Group() {
  assert(
    ∀K ⊆ ℂ, K = {z ∈ ℂ : |z| = 1} ⇒ 
    isGroup(⟨K, ×⟩)
  )
} ↔

proof Circle_Group_Is_Group() {
  setVar(K: Set) →
  assert(K ⊆ ℂ) →
  assert(1 + 0i ∈ K) →  // identity element exists

  lemma Closure() {
    assert(
      ∀z,w ∈ K ⇒ (
        |z| = 1 ∧ |w| = 1 →
        |z×w| = |z|×|w| →
        |z×w| = 1 →
        z×w ∈ K
      )
    )
  } →

  lemma Inverse_Exists() {
    assert(
      ∀z ∈ K ⇒ (
        |z| = 1 →
        |1/z| = 1/|z| →
        |1/z| = 1 →
        1/z ∈ K ∧
        z × (1/z) = 1 + 0i
      )
    )
  } →

  lemma Complex_Associativity() {
    assert(
      ∀a,b,c ∈ K ⇒ 
      (a × b) × c = a × (b × c)
    )
  } →

  apply(Closure()) →
  apply(Inverse_Exists()) →
  apply(Complex_Associativity()) →
  
  assert(
    Closure() ∧ 
    Complex_Associativity() ∧
    (1 + 0i ∈ K) ∧ 
    Inverse_Exists() →
    isGroup(⟨K, ×⟩)
  )
}

lemma Alternative_Exponential_Proof() {
  assert(
    ∀z ∈ K ⇒ ∃θ ∈ [0,2π] : (
      z = exp(iθ) ∧
      exp(iθ) = cos(θ) + i×sin(θ)
    )
  ) →
  
  assert(
    ∀a,b ∈ ℂ ⇒
    exp(a + b) = exp(a) × exp(b)
  ) →

  assert(
    ∀x,y ∈ K, ∃s,t ∈ [0,2π] : (
      x = exp(is) ∧
      y = exp(it) →
      y⁻¹ = exp(-it) ∧
      x×y = exp(i(s-t)) ∈ K
    )
  )
}