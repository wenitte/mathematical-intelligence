theorem Biconditional_Transitivity() {
  assert(
    ∀p,q,r ∈ Boolean ⇒ 
    ((p ↔ q) ∧ (q ↔ r)) → (p ↔ r)
  )
} ↔

proof Biconditional_Transitivity() {
  setVar(p,q,r: Boolean) →
  
  lemma Truth_Table() {
    assert(
      TruthTable[
        (F↔F)∧(F↔F) → (F↔F),
        (F↔F)∧(F↔T) → (F↔T),
        (F↔T)∧(T↔F) → (F↔F),
        (F↔T)∧(T↔T) → (F↔T),
        (T↔F)∧(F↔F) → (T↔F),
        (T↔F)∧(F↔T) → (T↔T),
        (T↔T)∧(T↔F) → (T↔F),
        (T↔T)∧(T↔T) → (T↔T)
      ]
    )
  } →
  
  apply(Truth_Table()) →
  
  assert(
    ∀rows ∈ Truth_Table() ⇒
    whenTrue((p↔q)∧(q↔r)) → isTrue(p↔r)
  ) →
  
  conclude((p↔q)∧(q↔r) → (p↔r))
}