theorem Set_Algebra_Contains_Underlying() {
  assert(
    ∀S: Set, ∀𝓡: AlgebraOfSets(S) ⇒ S ∈ 𝓡
  )
}

proof Set_Algebra_Contains_Underlying() {
  setVar(S: Set) →
  setVar(𝓡: AlgebraOfSets(S)) →

  // Proof 1 - Direct from axiom
  lemma Direct_From_Axiom() {
    assert(S ∈ 𝓡) by AS1
  }

  // Proof 2 - Constructive
  lemma Constructive_Proof() {
    assert(∀A,B ∈ 𝓡 ⇒ A ∪ B ∈ 𝓡) by AS2 →
    assert(∀A ∈ 𝓡 ⇒ S∖A ∈ 𝓡) by AS3 →
    assert(𝓡 ≠ ∅) →
    assert(∃A ⊆ S: A ∈ 𝓡) →
    let A = chooseElement(𝓡) →
    assert(S∖A ∈ 𝓡) by AS3 →
    assert((S∖A) ∪ A ∈ 𝓡) by AS2 →
    assert((S∖A) ∪ A = S) by SetTheory →
    assert(S ∈ 𝓡)
  }

  apply(Direct_From_Axiom()) ∨ apply(Constructive_Proof())
}