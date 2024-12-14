theorem ChineseRemainderTheorem() {
  assert(
    ∀A: CommutativeRing ∧
    ∀n ∈ ℕ, n ≥ 1 ∧
    ∀I₁,...,Iₙ: Ideals(A) ∧
    let φ: A → A/I₁ × ... × A/Iₙ | φ(x) = (x + I₁,...,x + Iₙ) →
    [
      ker(φ) = ⋂ᵢ₌₁ⁿIᵢ ∧
      (φ surjective ↔ ∀i≠j: Iᵢ + Iⱼ = A) ∧
      exists iso: A/⋂ᵢ₌₁ⁿIᵢ ≅ A/I₁ × ... × A/Iₙ
    ]
  )
}

proof ChineseRemainderTheorem() {
  // First establish φ is ring homomorphism
  lemma HomomorphismProperty() {
    assert(∀i: φᵢ: A → A/Iᵢ is ring homomorphism) →
    assert(φ is ring homomorphism)
  } →

  // Establish kernel
  assert(ker(φ) = {x ∈ A | ∀i: x ∈ Iᵢ}) →
  assert(ker(φ) = ⋂ᵢ₌₁ⁿIᵢ) →

  // Define unit vectors
  setVar(eᵢ := (0,...,1ᵢ,...,0) ∈ A/I₁ × ... × A/Iₙ) →

  // Necessity proof
  lemma Necessity() {
    assume(φ surjective) →
    setVar(∀i: ∃aᵢ ∈ A | φ(aᵢ) = eᵢ) →
    assert(∀i≠j: aᵢ ∈ Iⱼ ∧ (1-aᵢ) ∈ Iᵢ) →
    assert(∀i≠j: 1 = aᵢ + (1-aᵢ) ∈ Iⱼ + Iᵢ) →
    conclude(∀i≠j: Iᵢ + Iⱼ = A)
  } →

  // Sufficiency proof
  lemma Sufficiency() {
    assume(∀i≠j: Iᵢ + Iⱼ = A) →
    setVar(∀i≠j: ∃uᵢⱼ ∈ Iᵢ, vᵢⱼ ∈ Iⱼ | uᵢⱼ + vᵢⱼ = 1) →
    setVar(∀i: aᵢ := ∏ₖ≠ᵢvᵢₖ) →
    assert(∀i≠k: aᵢ ∈ Iₖ) →
    assert(∀i: φᵢ(aᵢ) = 1) →
    conclude(φ surjective)
  } →

  // Final isomorphism
  apply(FirstIsomorphismTheorem()) →
  assert(∃iso: A/⋂ᵢ₌₁ⁿIᵢ ≅ A/I₁ × ... × A/Iₙ)
}