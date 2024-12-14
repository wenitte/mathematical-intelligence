theorem Compact_Element_Characterization() {
  assert(
    ∀L(CompleteL(L)) ∧ ∀a ∈ L.S ↔ [
      (1) CompactElement(a) ↔
      (2) (∀I ⊆ L.S: Ideal(I) → (a ⊑ sup(I) → a ∈ I)) ↔
      (3) (∀A ⊆ L.S: a ⊑ sup(A) → ∃F ⊆ A: Finite(F) ∧ a ⊑ sup(F))
    ]
  )
}

proof Compact_Element_Characterization() {
  // (1) → (3)
  proof One_Implies_Three() {
    setVar(a: CompactElement) →
    setVar(A: Subset(L.S)) →
    assume(a ⊑ sup(A)) →
    let D = {b ∈ A | ∃F ⊆ A: Finite(F) ∧ b = sup(F)} →
    
    lemma D_Is_Directed() {
      setVar(x,y: Element(D)) →
      ∃F,G(Finite(F) ∧ Finite(G) ∧ x = sup(F) ∧ y = sup(G)) →
      let H = F ∪ G →
      assert(Finite(H)) →
      let z = sup(H) →
      assert(z ∈ D ∧ x ⊑ z ∧ y ⊑ z)
    } →

    lemma Sup_D_Equals_Sup_A() {
      assert(∀x ∈ D: x ⊑ sup(A)) →
      assert(∀b ∈ A: b ∈ D) →
      apply(Antisymmetry) →
      assert(sup(D) = sup(A))
    } →

    apply(CompactElement(a)) →
    ∃d(d ∈ D ∧ a ⊑ d) →
    ∃F(F ⊆ A ∧ Finite(F) ∧ a ⊑ sup(F))
  } →

  // (3) → (2)
  proof Three_Implies_Two() {
    assume(∀A ⊆ L.S: a ⊑ sup(A) → ∃F ⊆ A: Finite(F) ∧ a ⊑ sup(F)) →
    setVar(I: Ideal(L.S)) →
    assume(a ⊑ sup(I)) →
    ∃F(F ⊆ I ∧ Finite(F) ∧ a ⊑ sup(F)) →
    apply(JoinSemilatticeIdealAxioms) →
    assert(sup(F) ∈ I) →
    assert(a ∈ I)
  } →

  // (2) → (1)
  proof Two_Implies_One() {
    assume(∀I ⊆ L.S: Ideal(I) → (a ⊑ sup(I) → a ∈ I)) →
    setVar(D: DirectedSubset(L.S)) →
    assume(a ⊑ sup(D)) →
    let I = {b ∈ L.S | ∃d ∈ D: b ⊑ d} →
    
    lemma I_Is_Ideal() {
      assert(LowerSection(I)) →
      assert(JoinSubsemilattice(I)) →
      assert(Ideal(I))
    } →

    lemma Sup_I_Equals_Sup_D() {
      apply(Antisymmetry) →
      assert(sup(I) = sup(D))
    } →

    apply(hypothesis) →
    assert(a ∈ I) →
    ∃d(d ∈ D ∧ a ⊑ d) →
    assert(CompactElement(a))
  }
}