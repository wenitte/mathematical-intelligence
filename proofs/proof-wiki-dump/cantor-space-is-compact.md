theorem Cantor_Space_Compact() {
  assert(
    let(C: CantorSet) ∧
    let(⟨ℝ,τd⟩: TopologicalSpace) ∧
    (C ⊂ ⟨ℝ,τd⟩) →
    isCompact(C)
  )
} ↔

proof Cantor_Space_Compact() {
  lemma Cantor_Is_Closed() {
    assert(isClosed(C, ⟨ℝ,τd⟩))
  } →
  
  setVar(x₀ = 0 ∈ C) →
  setVar(x₁ = 1 ∈ ℝ) →
  
  assert(
    ∀x ∈ C ⇒ d(0,x) ≤ 1
  ) →
  
  conclude(isBounded(C)) →
  
  lemma Heine_Borel() {
    assert(
      ∀S ⊂ ℝ ⇒
      (isClosed(S) ∧ isBounded(S)) ↔ isCompact(S)
    )
  } →
  
  apply(Heine_Borel(), {
    S := C,
    isClosed := Cantor_Is_Closed(),
    isBounded := isBounded(C)
  }) →
  
  conclude(isCompact(C))
}