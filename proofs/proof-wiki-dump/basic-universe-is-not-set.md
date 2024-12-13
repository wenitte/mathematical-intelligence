theorem Basic_Universe_Not_Set() {
  assert(
    ∀V [isBasicUniverse(V) → ¬isSet(V)]
  )
}

proof Basic_Universe_Not_Set() {
  setVar(V: Class) →
  assume(isBasicUniverse(V)) →
  lemma Contradiction() {
    assume(isSet(V)) →
    assert(isSwelled(V)) by AxiomOfSwelledness() →
    assert(∀S [S ⊆ V → isSet(S)]) by def(isSwelled) →
    lemma SubclassNotElement() {
      assert(∃S [S ⊆ V ∧ S ∉ V]) by ClassHasSubclassNotElement()
    } →
    setVar(S: Class) →
    apply(SubclassNotElement()) →
    assert(S ⊆ V ∧ S ∉ V) →
    assert(S ∈ V) by def(isBasicUniverse, V) →
    assert(contradiction(S ∈ V, S ∉ V))
  } →
  apply(ProofByContradiction(Contradiction())) →
  assert(¬isSet(V))
}