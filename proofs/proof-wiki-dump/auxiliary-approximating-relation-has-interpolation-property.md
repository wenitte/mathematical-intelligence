theorem Auxiliary_Approximating_Relation_Interpolation() {
  let(L: CompleteLattice[S, ∨, ∧, ⪯]) →
  let(x,z: S) →
  assume(x ≪ z ∧ x ≠ z) →
  let(R: AuxiliaryApproximatingRelation[S]) →
  assert(
    ∃y ∈ S: (⟨x,y⟩ ∈ R ∧ ⟨y,z⟩ ∈ R ∧ x ≠ y)
  )
} ↔

proof Auxiliary_Approximating_Relation_Interpolation() {
  define(I := {u ∈ S | ∃y ∈ S: ⟨u,y⟩ ∈ R ∧ ⟨y,z⟩ ∈ R}) →
  
  lemma I_Nonempty() {
    assert(⟨⊥,⊥⟩ ∈ R ∧ ⟨⊥,z⟩ ∈ R) →
    assert(⊥ ∈ I)
  } →

  lemma I_Lower_Section() {
    let(a ∈ I, b ∈ S) →
    assume(b ⪯ a) →
    assert(∃s ∈ S: ⟨a,s⟩ ∈ R ∧ ⟨s,z⟩ ∈ R) →
    apply(AuxiliaryRelation.reflexivity()) →
    assert(⟨b,s⟩ ∈ R) →
    assert(b ∈ I)
  } →

  lemma I_Directed() {
    let(a,b ∈ I) →
    assert(∃s,t ∈ S: ⟨a,s⟩ ∈ R ∧ ⟨s,z⟩ ∈ R ∧ ⟨b,t⟩ ∈ R ∧ ⟨t,z⟩ ∈ R) →
    apply(AuxiliaryRelation.congruent()) →
    assert(⟨a ∨ b, s ∨ t⟩ ∈ R) →
    assert(⟨s ∨ t, z⟩ ∈ R) →
    assert(a ∨ b ∈ I) →
    assert(a ⪯ a ∨ b ∧ b ⪯ a ∨ b)
  } →

  lemma I_Subset_RSegment() {
    let(a ∈ I) →
    assert(∃s ∈ S: ⟨a,s⟩ ∈ R ∧ ⟨s,z⟩ ∈ R) →
    assert(a ⪯ s) →
    assert(⟨a,z⟩ ∈ R) →
    assert(a ∈ z^R)
  } →

  lemma Sup_I_Equals_Z() {
    assert(sup(I) ⪯ sup(z^R) = z) →
    byContradiction(sup(I) ≠ z) {
      assert(sup(I) ≺ z) →
      assert(z ⋠ sup(I)) →
      assert(∃y ∈ S: ⟨y,z⟩ ∈ R ∧ y ⋠ sup(I)) →
      assert(∃u ∈ S: ⟨u,y⟩ ∈ R ∧ u ⋠ sup(I)) →
      assert(u ∈ I) →
      assert(contradiction(u ⪯ sup(I)))
    }
  } →

  apply(WayBelow_iff_Second_Preceding_Supremum()) →
  assert(x ∈ I) →
  assert(∃s ∈ S: ⟨x,s⟩ ∈ R ∧ ⟨s,z⟩ ∈ R) →
  apply(QuasiInterpolationProperty()) →
  assert(∃y ∈ S: x ⪯ y ∧ ⟨y,z⟩ ∈ R ∧ x ≠ y) →
  define(Y := s ∨ y) →
  assert(s ⪯ Y ∧ y ⪯ Y) →
  assert(x ≠ Y) →
  assert(⟨x,Y⟩ ∈ R ∧ ⟨Y,z⟩ ∈ R) →
  assert(∃y ∈ S: ⟨x,y⟩ ∈ R ∧ ⟨y,z⟩ ∈ R ∧ x ≠ y)
}