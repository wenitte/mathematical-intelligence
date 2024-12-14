theorem ClosedSets_RightOrderSpace() {
  assert(
    let T = ⟨ℝ,τ⟩ be right_order_space(ℝ) ⇒
    ∀H ⊆ ℝ: is_closed(H,T) ↔ (
      (H = ∅ ∨ H = ℝ) ∨
      (∃a ∈ ℝ: H = (-∞,a])
    )
  )
}

proof ClosedSets_RightOrderSpace() {
  lemma OpenSets_Definition() {
    assert(
      ∀U ⊆ ℝ: is_open(U,T) ↔ (
        (U = ∅ ∨ U = ℝ) ∨
        (∃a ∈ ℝ: U = (a,∞))
      )
    )
  } →

  lemma Set_Complements() {
    assert(
      ℝ\∅ = ℝ ∧
      ℝ\ℝ = ∅ ∧
      ∀a ∈ ℝ: ℝ\(a,∞) = (-∞,a]
    )
  } →

  apply(OpenSets_Definition()) →
  apply(Set_Complements()) →
  
  assert(
    is_closed(H,T) ↔ 
    ℝ\H is_open(T) ↔
    ((ℝ\H = ∅ ∨ ℝ\H = ℝ) ∨ (∃a ∈ ℝ: ℝ\H = (a,∞))) ↔
    (H = ℝ ∨ H = ∅ ∨ (∃a ∈ ℝ: H = (-∞,a]))
  )
}