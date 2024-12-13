theorem PairingFromPowersAndReplacement() {
  assert(
    AxiomEmptySet() ∧ AxiomPowers() ∧ AxiomReplacement() → 
    AxiomPairing()
  )
}

proof PairingFromPowersAndReplacement() {
  setGoal(∀A,B ∃C: C = {A,B}) →
  
  lemma PowerOfEmpty() {
    assert(ℙ(∅) = {∅}) →
    assume(∃z ∈ ℙ(∅)) →
    assert(∀x: x ∈ z → x ∈ ∅) →
    assert(∀x: x ∈ z ↔ false) →
    apply(Transposition) →
    assert(∀x: x ∉ z) →
    apply(EmptySetUnique) →
    conclude(z = ∅)
  } →

  lemma PowerOfSingleton() {
    assert(ℙ({∅}) = {∅, {∅}}) →
    assert(∅ ∈ ℙ({∅})) by EmptySetIsSubset →
    assert({∅} ∈ ℙ({∅})) by SetIsSubsetOfItself →
    assert({∅, {∅}} ⊆ ℙ({∅})) →
    
    proofByContradiction(
      assume(∃S ∈ ℙ({∅}): S ≠ ∅ ∧ S ≠ {∅}) →
      assert(∃x ≠ ∅: x ∈ {∅}) →
      assert(false)
    ) →
    
    conclude(ℙ({∅}) = {∅, {∅}})
  } →

  setVar(2 := {∅, {∅}}) →
  apply(PowerOfEmpty()) →
  apply(PowerOfSingleton()) →
  
  defineFn(f: 2 → {A,B},
    f(x) = {
      case x = ∅: A,
      case x = {∅}: B
    }
  ) →
  
  apply(AxiomReplacement, domain:=2, mapping:=f) →
  conclude(∃C: C = {A,B})
}