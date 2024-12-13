theorem Ordinal_Alternative_Definition() {
  assert(
    ∀S: Set ↔ (
      isOrdinal(S) ↔ (
        isTransitive(S) ∧ 
        ∀x,y ∈ S: (x ∈ y ∨ x = y ∨ y ∈ x)
      )
    )
  )
}

proof Ordinal_Alternative_Definition() {
  // Forward direction
  lemma Forward_Implication() {
    setVar(S: Set) →
    assume(isOrdinal(S)) →
    apply(Alternative_Definition_of_Ordinal) →
    assert(isTransitive(S) ∧ isStrictWellOrdered(S, ∈)) →
    apply(Strict_Well_Ordering_is_Strict_Total_Ordering) →
    assert(∀x,y ∈ S: (x ∈ y ∨ x = y ∨ y ∈ x))
  }

  // Reverse direction
  lemma Reverse_Implication() {
    setVar(S: Set) →
    assume(
      isTransitive(S) ∧ 
      ∀x,y ∈ S: (x ∈ y ∨ x = y ∨ y ∈ x)
    ) →
    
    // Prove ∈ is strict ordering
    lemma Prove_Asymmetric() {
      setVar(x,y: Element(S)) →
      apply(Epsilon_Relation_is_Strictly_Well_Founded) →
      assert(∃m ∈ {x,y}: isStrictMinimal(m, ∈)) →
      assert(¬(x ∈ y ∧ y ∈ x))
    }

    lemma Prove_Transitive() {
      setVar(x,y,z: Element(S)) →
      assume(x ∈ y ∧ y ∈ z) →
      byContradiction({
        assume(x = z) →
        assert(x ∈ y ∧ y ∈ x) →
        apply(Prove_Asymmetric()) →
        contradiction()
      }) →
      byContradiction({
        assume(z ∈ x) →
        assert(¬∃m ∈ {x,y,z}: isStrictMinimal(m, ∈)) →
        apply(Epsilon_Relation_is_Strictly_Well_Founded) →
        contradiction()
      }) →
      assert(x ∈ z)
    }

    // Prove well-ordering
    lemma Prove_Well_Ordering() {
      setVar(T: Set) →
      assume(T ⊆ S ∧ T ≠ ∅) →
      apply(Epsilon_Relation_is_Strictly_Well_Founded) →
      assert(∃m ∈ T: isStrictMinimal(m, ∈)) →
      apply(Strictly_Minimal_Element_is_Minimal_Element) →
      apply(Minimal_Element_in_Toset_is_Unique_and_Smallest) →
      assert(isStrictWellOrdered(S, ∈))
    }

    apply(Alternative_Definition_of_Ordinal) →
    assert(isOrdinal(S))
  }

  apply(Forward_Implication()) →
  apply(Reverse_Implication()) →
  assert(theorem)
}