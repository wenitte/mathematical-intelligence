theorem FunctionalExtremumCondition() {
  let(S: SetOf(Mappings))
  let(y,h ∈ S: ℝ → ℝ)
  let(J[y]: S → ℝ, differentiable)
  assert(
    HasExtremum(J[y;h], y=ŷ) →
    (δJ[y;h])|_(y=ŷ) = 0
  )
} ↔

proof FunctionalExtremumCondition() {
  assume(HasMinimum(J[y;h], y=ŷ)) →
  assert(ΔJ[ŷ;h] ≥ 0) →
  
  lemma DifferentiableFunctional() {
    assert(ΔJ[y;h] = δJ[y;h] + ε||h||) ∧
    assert(lim_(||h||→0) ε = 0)
  } →
  
  apply(DifferentiableFunctional()) →
  assert(∃δ>0: ||h||<δ → sign(ΔJ[y;h]) = sign(δJ[y;h])) →
  assert(||h|| small → δJ[ŷ;h] ≥ 0) →
  
  proof_by_contradiction() {
    assume(∃h₀∈S: δJ[y;h₀] ≠ 0) →
    assert(∀α>0: δJ[y;-αh₀] = -δJ[y;αh₀]) →
    assert(∀||h||>0: sign(ΔJ[y;h]) arbitrary) →
    
    lemma MinimumCondition() {
      assert(HasMinimum(J[y;h], y=ŷ) → 
        ∃δ>0: ||h||<δ → ΔJ[ŷ;h] = J[ŷ+h] - J[ŷ] ≥ 0)
    } →
    
    apply(MinimumCondition()) →
    assert(sign(δJ[y;h]) fixed) →
    assert(contradiction)
  } →
  
  conclude(∀h: (δJ[y;h])|_(y=ŷ) = 0)
}