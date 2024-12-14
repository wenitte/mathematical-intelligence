theorem CompactElementCharacterization() {
  assert(
    let L = ⟨S,⪯⟩ be a frame ∧
    let a ∈ S ∧
    (1) ↔ (2) ↔ (3) ↔ (4)
    where
      (1) := isCompactElement(a)
      (2) := ∀I⊆S: (isIdeal(I) → (a⪯sup(I) → a∈I))
      (3) := ∀A⊆S: (a⪯sup(A) → ∃F⊆A: (isFinite(F) ∧ a⪯sup(F)))
      (4) := ∀A⊆S: (a=sup(A) → ∃F⊆A: (isFinite(F) ∧ a=sup(F)))
  )
} ↔

proof CompactElementCharacterization() {
  setDef(frame := completeLattice ∧ satisfies(infiniteJoinDistributiveLaw)) →
  setDef(infiniteJoinDistributiveLaw := 
    ∀a∈L,S⊆L: a∧⋁S = ⋁{a∧s: s∈S}
  ) →
  
  lemma ThreeEquiv() {
    assert((1) ↔ (2) ↔ (3))
    // By reference to CompactElementCharacterization in Complete Lattice
  } →

  lemma ThreeImpliesFour() {
    assume(satisfies(a, (3))) →
    let A⊆S: a=sup(A) →
    apply((3)) →
    obtain(F⊆A: isFinite(F) ∧ a⪯sup(F)) →
    assert(sup(F)⪯sup(A)=a) → // By Supremum of Subset
    apply(transitivity) →
    conclude(a=sup(F))
  } →

  lemma FourImpliesThree() {
    assume(satisfies(a, (4))) →
    let A⊆S: a⪯sup(A) →
    assert(a = a∧sup(A)) → // By Predecessor is Infimum
    apply(infiniteJoinDistributiveLaw) →
    assert(a = sup{a∧x: x∈A}) →
    apply((4)) →
    obtain(F⊆A: isFinite(F) ∧ a=sup{a∧x: x∈F}) →
    apply(infiniteJoinDistributiveLaw) →
    assert(a = a∧sup(F)) →
    apply(PredecessorIsInfimum) →
    conclude(a⪯sup(F))
  } →

  apply(ThreeEquiv) →
  apply(ThreeImpliesFour) →
  apply(FourImpliesThree) →
  conclude((1) ↔ (2) ↔ (3) ↔ (4))
}