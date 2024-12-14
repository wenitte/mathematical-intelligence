theorem Compact_Closure_Increasing() {
  assert(
    ∀(S: OrderedSet) ∧
    ∀x,y ∈ S ∧
    (x ⪯ y) ⇒
    (x^compact ⊆ y^compact)
  )
}

proof Compact_Closure_Increasing() {
  setVar(S: OrderedSet) →
  setVar(x,y: S) →
  assume(x ⪯ y) →
  
  let(z ∈ x^compact) →
  
  lemma Compact_Closure_Definition() {
    assert(
      z ∈ x^compact ↔
      (isCompact(z) ∧ z ⪯ x)
    )
  } →
  
  apply(Compact_Closure_Definition()) →
  assert(isCompact(z) ∧ z ⪯ x) →
  
  lemma Transitivity() {
    assert(
      (z ⪯ x ∧ x ⪯ y) ⇒ z ⪯ y
    )
  } →
  
  apply(Transitivity()) →
  assert(z ⪯ y) →
  
  apply(Compact_Closure_Definition()) →
  assert(z ∈ y^compact) →
  
  conclude(x^compact ⊆ y^compact)
}