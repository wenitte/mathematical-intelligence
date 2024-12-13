theorem Set_Algebra_Contains_Empty() {
  assert(
    ∀S: Set, ∀R: AlgebraOfSets(S) ⇒ 
    ∅ ∈ R
  )
}

proof Set_Algebra_Contains_Empty() {
  setVar(S: Set, R: AlgebraOfSets(S)) →
  
  // Proof 1 - via Ring of Sets definition
  lemma Via_Ring_Definition() {
    assert(R.isRingOfSets() ∧ R.hasUnit()) →
    apply(RingOfSets.Definition2) →
    assert(∅ ∈ R)
  } →

  // Proof 2 - via Complement property
  lemma Via_Complement() {
    assert(∀A ∈ R ⇒ S∖A ∈ R) →  // AS3: Closure under complement
    assert(S ∈ R) →              // Algebra contains underlying set
    assert(S∖S ∈ R) →           // Apply complement closure to S
    assert(S∖S = ∅) →           // Relative complement with self
    assert(∅ ∈ R)
  } →

  // Either proof is sufficient
  apply(Via_Ring_Definition() ∨ Via_Complement())
}