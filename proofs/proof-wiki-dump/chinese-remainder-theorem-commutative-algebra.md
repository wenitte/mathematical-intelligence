theorem ChineseRemainderTheorem() {
  let(A: CommutativeUnitaryRing) →
  let(I[1..n]: Ideals(A), n ≥ 1) →
  let(φ: A → A/I₁ × ... × A/I_n) →
  define(φ(x) = (x + I₁, ..., x + I_n)) →
  assert(
    ker(φ) = ⋂ᵢ₌₁ⁿ Iᵢ ∧
    (φ is surjective ↔ ∀i,j(i≠j → Iᵢ + I_j = A)) ∧
    (φ surjective → ∃ isomorphism(A/⋂ᵢ₌₁ⁿ Iᵢ ≅ A/I₁ × ... × A/I_n))
  )
}

proof ChineseRemainderTheorem() {
  // First show φ is homomorphism
  assert(∀i(φᵢ: A → A/Iᵢ is ring homomorphism)) →
  assert(ker(φ) = ⋂ᵢ₌₁ⁿ Iᵢ) →
  
  // Define helper elements
  let(eᵢ = (0,...,0,1_A/Iᵢ,0,...,0)) →

  // Necessary condition
  lemma NecessaryCondition() {
    assume(φ is surjective) →
    assert(∀i ∃aᵢ∈A (φ(aᵢ) = eᵢ)) →
    assert(∀i,j(i≠j → φⱼ(aᵢ) = 0 ∧ φᵢ(1-aᵢ) = 0)) →
    assert(∀i,j(i≠j → 1 = aᵢ + (1-aᵢ) ∈ Iⱼ + Iᵢ)) →
    conclude(∀i,j(i≠j → Iᵢ + I_j = A))
  }

  // Sufficient condition
  lemma SufficientCondition() {
    assume(∀i,j(i≠j → Iᵢ + I_j = A)) →
    assert(∀i,j(i≠j ∃uᵢⱼ∈Iᵢ,vᵢⱼ∈Iⱼ (uᵢⱼ + vᵢⱼ = 1))) →
    define(aᵢ = ∏ₖ≠ᵢ vᵢₖ) →
    assert(∀k≠i(aᵢ ∈ Iₖ)) →
    assert(∀i(φᵢ(aᵢ) = 1)) →
    conclude(φ is surjective)
  }

  // Final isomorphism
  apply(FirstIsomorphismTheorem) →
  conclude(φ surjective → A/⋂ᵢ₌₁ⁿ Iᵢ ≅ A/I₁ × ... × A/I_n)
}