theorem CartesianProduct_Is_Set() {
  assert(
    ∀V,A,B [IsBasicUniverse(V) ∧ IsSet(A,V) ∧ IsSet(B,V)] →
    IsSet(A × B)
  )
} ↔

proof CartesianProduct_Is_Set() {
  setVar(V: Universe, A: Set, B: Set) →
  assume(IsBasicUniverse(V)) →
  assume(IsSet(A,V) ∧ IsSet(B,V)) →

  lemma PairingAndUnion() {
    assert(IsSet({A,B})) by AxiomOfPairing() →
    assert(IsSet(⋃{A,B})) by AxiomOfUnions() →
    assert(A ∪ B = ⋃{A,B})
  } →

  lemma PowerSets() {
    assert(IsSet(℘(A ∪ B))) by AxiomOfPowers() →
    assert(IsSet(℘(℘(A ∪ B)))) by AxiomOfPowers()
  } →

  lemma SubsetOfPowerPower() {
    ∀x [x ∈ (A × B)] → {
      ∃a,b [a ∈ A ∧ b ∈ B ∧ x = (a,b)] →
      assert(x = {⟨a⟩, {a,b}}) by OrderedPairDef() →
      
      assert(A ⊆ A ∪ B ∧ B ⊆ A ∪ B) by SubsetOfUnion() →
      assert(a ∈ A ∪ B ∧ b ∈ A ∪ B) →
      assert(⟨a⟩ ⊆ A ∪ B ∧ {a,b} ⊆ A ∪ B) →
      assert(⟨a⟩ ∈ ℘(A ∪ B) ∧ {a,b} ∈ ℘(A ∪ B)) →
      assert(x ⊆ ℘(A ∪ B)) →
      assert(x ∈ ℘(℘(A ∪ B)))
    } →
    assert(A × B ⊆ ℘(℘(A ∪ B)))
  } →

  apply(PairingAndUnion()) →
  apply(PowerSets()) →
  apply(SubsetOfPowerPower()) →
  assert(IsSet(A × B)) by AxiomOfSwelledness()
}