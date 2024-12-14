theorem Closed_Ball_Is_Compact() {
  assert(
    ∀x ∈ ℝ^n ∧ ∀ε ∈ ℝ_{>0} ⇒ 
    isCompact(B_ε^-(x))
  )
} ↔

proof Closed_Ball_Is_Compact() {
  setVar(x: ℝ^n) →
  setVar(ε: ℝ_{>0}) →
  
  lemma Closed_Ball_Is_Closed() {
    assert(isClosed(B_ε^-(x)))
  } →
  
  assert(
    ∀a ∈ B_ε^-(x) ⇒ d(x,a) ≤ ε
  ) →
  
  assert(
    [∀a ∈ B_ε^-(x) ⇒ d(x,a) ≤ ε] ⇒ isBounded(B_ε^-(x))
  ) →
  
  lemma Heine_Borel() {
    assert(
      [isClosed(S) ∧ isBounded(S) ∧ S ⊆ ℝ^n] ⇒ isCompact(S)
    )
  } →
  
  apply(Heine_Borel(), S = B_ε^-(x)) →
  assert(isCompact(B_ε^-(x)))
}