theorem Conditional_Iff_Biconditional() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ ((p → q) ↔ (q ↔ (p ∨ q)))
  )
} ↔

proof Conditional_Iff_Biconditional() {
  setVar(p: 𝔹) →
  setVar(q: 𝔹) →
  lemma Truth_Table() {
    assert(
      TruthTable[
        [F, T, F] ↔ [F, T, F, F, F],
        [F, T, T] ↔ [T, T, F, T, T],
        [T, F, F] ↔ [F, F, T, T, F],
        [T, T, T] ↔ [T, T, T, T, T]
      ]
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀[p,q] → ((p → q) ↔ (q ↔ (p ∨ q)))
  )
}