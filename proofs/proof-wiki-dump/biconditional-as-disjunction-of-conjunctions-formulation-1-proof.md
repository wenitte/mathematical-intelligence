theorem Biconditional_As_Disjunction() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p ↔ q) ≡ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
} ↔

proof Biconditional_As_Disjunction() {
  setVar(p,q: 𝔹) →
  lemma Truth_Table() {
    assert(
      truth_values[
        [F,F,F, F,F,F, T,T,F,T,T,F],
        [F,F,T, F,F,T, F,T,F,F,F,T],
        [T,F,F, T,F,F, F,F,T,F,T,F],
        [T,T,T, T,T,T, T,F,T,F,F,T]
      ]
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀rows ∈ Truth_Table() ⇒
    eval(p ↔ q) ≡ eval((p ∧ q) ∨ (¬p ∧ ¬q))
  ) →
  conclude(
    (p ↔ q) ≡ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
}