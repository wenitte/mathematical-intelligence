theorem CharacterisationOrderedFields() {
  assert(
    ∀k[Field(k) ∧ HasUnity(k)] ↔ (
      (∃≤[TotalOrder(≤) ∧ OrderedField(k,≤)]) ↔
      (¬∃{xi}[i∈I](-1 = ∑[i∈I](xi²))) ↔
      (¬∃{xi}[i∈I,xi≠0](0 = ∑[i∈I](xi²)))
    )
  )
}

proof CharacterisationOrderedFields() {
  // (2) ↔ (3) equivalence
  lemma TwoThreeEquiv() {
    assert(∀{xi}[i∈I](
      (-1 = ∑[i∈I](xi²)) ↔ (0 = 1² + ∑[i∈I](xi²))
    )) →
    assert(∀j∈I(
      (0 = ∑[i∈I](xi²)) → (-xj² = ∑[i∈I,i≠j](xi²))
    )) →
    assert(∀j∈I(
      (-xj² = ∑[i∈I,i≠j](xi²)) → (-1 = ∑[i∈I,i≠j]((xi/xj)²))
    ))
  }

  // (1) → (2) implication
  lemma OneImpliesTwo() {
    setVar(k: OrderedField) →
    assert(-1 < 0) →
    assert(∀x∈k(x² ≥ 0)) →
    assert(∀{xi}[i∈I](-1 < ∑[i∈I](xi²)))
  }

  // (2) → (1) implication 
  lemma TwoImpliesOne() {
    setVar(S: {x∈k | x=∑[i∈I](xi²), xi≠0}) →
    assert(0∉S ∧ 1∉S) →
    assert(Closed(S,+) ∧ Closed(S,·)) →
    
    lemma MaximalSet() {
      setVar(M: MaximalSet(S)) →
      assert(0∉M) →
      assert(k = M ∪ {0} ∪ (-M)) →
      assert(∀x,y∈k(x<y ↔ y-x∈M))
    }

    lemma OrderedFieldProps() {
      assert(TotalOrder(≤)) →
      assert(∀x,y,z∈k(
        (x<y → x+z<y+z) ∧
        (x<y ∧ z>0 → xz<yz)
      ))
    }
  }

  apply(TwoThreeEquiv()) →
  apply(OneImpliesTwo()) →
  apply(TwoImpliesOne())
}