theorem Conditional_Equiv_Negation_Conjunction() {
  assert(
    ∀p,q ∈ BOOL ⇒ (p → q) ↔ ¬(p ∧ ¬q)
  )
} ↔

proof Conditional_Equiv_Negation_Conjunction() {
  setVar(p: BOOL) →
  setVar(q: BOOL) →
  
  lemma Truth_Table() {
    define(table: [
      [F,T,F] → [T,F,F,T,F],
      [F,T,T] → [T,F,F,F,T],
      [T,F,F] → [F,T,T,T,F],
      [T,T,T] → [T,T,F,F,T]
    ]) →
    assert(∀row ∈ table ⇒ 
      evaluate(p → q, row) = evaluate(¬(p ∧ ¬q), row)
    )
  } →
  
  apply(Truth_Table()) →
  assert(
    (p → q) ↔ ¬(p ∧ ¬q)
  )
}