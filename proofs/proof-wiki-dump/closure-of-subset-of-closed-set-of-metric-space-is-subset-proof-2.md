theorem Closure_Subset_Closed_Set() {
  let(M = ⟨A,d⟩: MetricSpace) →
  let(F: Set, F ⊆ M, isClosed(F)) →
  let(H: Set, H ⊆ F) →
  let(H⁻: Set, H⁻ = closure(H)) →
  assert(H⁻ ⊆ F)
} ↔

proof Closure_Subset_Closed_Set() {
  let(x ∈ H⁻) →
  
  lemma Point_In_Closure() {
    assert(x ∈ H⁻ ↔ ∃{aₙ}(
      isSequence({aₙ}) ∧
      ∀n(aₙ ∈ H) ∧
      lim(n→∞)(aₙ) = x
    ))
  } →
  
  apply(Point_In_Closure()) →
  setVar({aₙ}: Sequence, ∀n(aₙ ∈ H)) →
  assert(H ⊆ F → ∀n(aₙ ∈ F)) →
  
  lemma Closed_Set_Contains_Limits() {
    assert(
      isClosed(F) ↔ 
      ∀{xₙ}(
        (isSequence({xₙ}) ∧ ∀n(xₙ ∈ F) ∧ ∃l(lim(n→∞)(xₙ) = l)) →
        l ∈ F
      )
    )
  } →
  
  apply(Closed_Set_Contains_Limits()) →
  assert(x = lim(n→∞)(aₙ) → x ∈ F) →
  conclude(x ∈ H⁻ → x ∈ F) →
  conclude(H⁻ ⊆ F)
}