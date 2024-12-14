theorem Closed_Interval_With_Successor() {
  let S be naturally_ordered_semigroup(operation: ∘, order: ⪯)
  assert(
    ∀m,n ∈ S: m ⪯ n ⇒ [m,n∘1] = [m,n] ∪ {n∘1}
  )
}

proof Closed_Interval_With_Successor() {
  setVar(m,n: S, m ⪯ n) →
  
  lemma Main_Equivalence() {
    assert(
      ∀x ∈ S: x ∈ [m,n∘1] ↔
      (m ⪯ x ∧ x ⪯ (n∘1)) ↔
      (m ⪯ x ∧ (x ≺ n∘1 ∨ x = n∘1)) ↔
      (x ∈ [m,n] ∪ {n∘1}) ↔
      (m ⪯ x ∧ (x ⪯ n ∨ x = n∘1)) ↔
      (m ⪯ x ∧ (x ≺ n ∨ x = n ∨ x = n∘1)) ↔
      (m ⪯ x ∧ (x ≺ n∘1 ∨ x = n∘1))
    )
  } →
  
  applyDef(closed_interval) →
  applyDef(strictly_precede) →
  applyDef(set_union) →
  
  apply(Main_Equivalence()) →
  
  conclude([m,n∘1] = [m,n] ∪ {n∘1})
}