theorem RightTransversalCondition() {
  assert(
    setVar(G: Group) ∧
    setVar(H: Subgroup(G)) ∧
    setVar(n: ℕ) ∧
    setVar(S: Set) ∧
    assert(index(G,H) = n) ∧
    assert(S ⊆ G) ∧
    assert(|S| = n)
  ) ⇒
  assert(
    isRightTransversal(S,H,G) ⟺
    ∀x,y ∈ S: (x ≠ y → xy⁻¹ ∉ H)
  )
}

proof RightTransversalCondition() {
  lemma TransversalDef() {
    assert(
      isRightTransversal(S,H,G) ⟺
      ∀c ∈ rightCosets(H,G): |S ∩ c| = 1
    )
  } →

  assert(|rightCosets(H,G)| = n) ∧
  assert(|S| = n) →

  lemma Contrapositive() {
    assert(
      ¬isRightTransversal(S,H,G) ⟺
      ∃c ∈ rightCosets(H,G): |S ∩ c| > 1
    )
  } →

  lemma SameCosetLemma() {
    assert(
      ∀x,y ∈ G: (x,y ∈ sameRightCoset(H) ⟺ xy⁻¹ ∈ H)
    )
  } →

  apply(SameCosetLemma()) →
  assert(
    ∃c ∈ rightCosets(H,G): |S ∩ c| > 1 ⟺
    ∃x,y ∈ S: (x ≠ y ∧ xy⁻¹ ∈ H)
  ) →

  apply(logicalEquivalence()) →
  assert(
    isRightTransversal(S,H,G) ⟺
    ∀x,y ∈ S: (x ≠ y → xy⁻¹ ∉ H)
  )
}