theorem Entire_Function_Power_Series() {
  assert(
    ∀f: ℂ → ℂ ↔ 
    (isEntire(f) ↔ 
      (∃{aₙ}ₙ∈ℕ: f(z) = ∑ₙ₌₀^∞ aₙzⁿ ∧ 
       limₙ→∞ ⁿ√|aₙ| = 0))
  )
}

proof Entire_Function_Power_Series() {
  // Sufficient direction
  proof_part_1() {
    setVar(f: ℂ → ℂ) →
    assume(isEntire(f)) →
    lemma Holomorphic_Implies_Analytic() {
      assert(
        ∀D ⊆ ℂ: isOpen(D) ∧ isHolomorphic(f,D) → 
        isAnalytic(f,D)
      )
    } →
    assert(isHolomorphic(f,ℂ)) →
    apply(Holomorphic_Implies_Analytic()) →
    assert(isAnalytic(f,ℂ))
  }

  // Necessary direction
  proof_part_2() {
    assume(isAnalytic(f,ℂ)) →
    lemma Power_Series_Differentiable() {
      assert(
        isAnalytic(f,ℂ) → isHolomorphic(f,ℂ)
      )
    } →
    apply(Power_Series_Differentiable()) →
    assert(isHolomorphic(f,ℂ)) →
    assert(isEntire(f)) →
    lemma Cauchy_Hadamard() {
      assert(
        limₙ→∞ ⁿ√|aₙ| = 0 ↔ 
        radius_of_convergence = ∞
      )
    } →
    apply(Cauchy_Hadamard()) →
    assert(∀z ∈ ℂ: series_converges(f,z))
  }
}