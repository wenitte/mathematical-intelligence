theorem Cantor_Space_Homeomorphism() {
  assert(
    ∀n ∈ ℕ: [An = (({0,2}, τn) as discrete space)] ∧
    [A = ∏(n=1→∞) An] ∧
    [(A,τ) as product space] 
    ⇒ [A ≅ C] where C is Cantor space
  )
} ↔

proof Cantor_Space_Homeomorphism() {
  lemma Basis_Cantor() {
    assert(
      ∀x ∈ C, ∀ε ∈ ℝ>0:
      {y: |x-y| < ε} forms basis for C
    )
  } →
  
  lemma Basis_Product() {
    assert(
      {(ai) ∈ ∏An: ai fixed for 1≤i≤n} forms basis for τ
    )
  } →
  
  setMap(f: ∏An → C) →
  assert(
    ∀(a1,a2,...) ∈ ∏An:
    f((a1,a2,...)) = 0.a1a2...base3
  ) →
  
  lemma Continuity() {
    assert(
      f(basis_elements) → basis_elements ∧
      f⁻¹(basis_elements) → basis_elements
    ) →
    assert(
      f is continuous ∧ f⁻¹ is continuous
    )
  } →
  
  conclude(
    f is homeomorphism ⇒ A ≅ C
  )
}