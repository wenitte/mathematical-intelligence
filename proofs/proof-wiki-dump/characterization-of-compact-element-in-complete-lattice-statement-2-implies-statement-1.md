theorem CompactElement_From_IdealCondition() {
  assert(
    ∀L(CompleteLattice(L)) ∧
    ∀a ∈ L.S(
      (∀I ⊆ L.S(IsIdeal(I) ∧ a ⪯ sup(I) → a ∈ I)) →
      IsCompactElement(a)
    )
  )
} ↔

proof CompactElement_From_IdealCondition() {
  setVar(L: CompleteLattice) →
  setVar(a: L.S) →
  setVar(D: DirectedSet(L.S)) →
  assume(a ⪯ sup(D)) →
  
  let(I = {b ∈ L.S | ∃d ∈ D: b ⪯ d}) →
  
  lemma I_Is_Ideal() {
    lemma I_Is_LowerSection() {
      ∀x ∈ I(
        ∀y ∈ L.S(
          y ⪯ x →
          (∃d ∈ D: x ⪯ d) →
          y ⪯ d →
          y ∈ I
        )
      )
    } →
    
    lemma I_Is_JoinSubsemilattice() {
      ∀x,y ∈ I(
        ∃d₁,d₂ ∈ D(x ⪯ d₁ ∧ y ⪯ d₂) →
        ∃d ∈ D(d₁ ⪯ d ∧ d₂ ⪯ d) →
        x ⪯ d ∧ y ⪯ d →
        x ∨ y ⪯ d →
        x ∨ y ∈ I
      )
    } →
    
    assert(IsIdeal(I))
  } →

  lemma Sup_I_Equals_Sup_D() {
    assert(
      (∀x ∈ I(∃d ∈ D: x ⪯ d) → x ⪯ sup(D)) →
      sup(I) ⪯ sup(D) ∧
      (∀d ∈ D: d ∈ I) →
      sup(D) ⪯ sup(I) →
      sup(I) = sup(D)
    )
  } →

  apply(hypothesis, I_Is_Ideal()) →
  assert(a ∈ I) →
  assert(∃d ∈ D: a ⪯ d) →
  
  conclude(
    ∀D(DirectedSet(D) ∧ a ⪯ sup(D) → ∃d ∈ D: a ⪯ d) →
    IsCompactElement(a)
  )
}