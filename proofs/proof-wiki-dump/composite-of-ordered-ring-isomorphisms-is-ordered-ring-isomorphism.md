theorem Composite_Ordered_Ring_Isomorphisms() {
  define(S1: OrderedRing(+1, ∘1, ⪯1)) ∧
  define(S2: OrderedRing(+2, ∘2, ⪯2)) ∧
  define(S3: OrderedRing(+3, ∘3, ⪯3)) ∧
  define(φ: Isomorphism(S1 → S2)) ∧
  define(ψ: Isomorphism(S2 → S3)) →
  assert(
    ψ ∘ φ: OrderedRingIsomorphism(S1 → S3)
  )
} ↔

proof Composite_Ordered_Ring_Isomorphisms() {
  lemma Order_Iso_Composite() {
    assert(
      ψ ∘ φ: OrderIsomorphism(⟨S1, ⪯1⟩ → ⟨S3, ⪯3⟩)
    )
  } →
  
  lemma Algebraic_Structure_Composite() {
    assert(
      ψ ∘ φ: AlgebraicStructureIsomorphism(S1 → S3)
    )
  } →
  
  lemma Group_Preservation() {
    assert(
      ψ ∘ φ: GroupIsomorphism(⟨S1, +1⟩ → ⟨S3, +3⟩)
    )
  } →
  
  lemma Semigroup_Preservation() {
    assert(
      ψ ∘ φ: SemigroupIsomorphism(⟨S1, ∘1⟩ → ⟨S3, ∘3⟩)
    )
  } →
  
  apply(Order_Iso_Composite()) ∧
  apply(Algebraic_Structure_Composite()) ∧
  apply(Group_Preservation()) ∧
  apply(Semigroup_Preservation()) →
  conclude(
    ψ ∘ φ: OrderedRingIsomorphism(S1 → S3)
  )
}