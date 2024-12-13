theorem Affirming_The_Consequent() {
  assert(
    ∀p,q ∈ Propositions ⇒
    ((p → q) ∧ q) ⇏ p
  )
}

proof Affirming_The_Consequent() {
  setVars(p,q: Propositions) →
  
  lemma Truth_Table() {
    define(
      table: [
        [p, "→", q, "q", "p"],
        [F, T, F, F, F],
        [F, T, T, T, F],
        [T, F, F, F, T],
        [T, T, T, T, T]
      ]
    )
  } →
  
  apply(Truth_Table()) →
  
  assert(
    ∃row ∈ Truth_Table() ⇒
    (row[3] = T ∧ row[1] = F)
  ) →
  
  conclude(
    (p → q) ∧ q ⇏ p
  )
}