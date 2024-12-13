theorem RelationAsymmetric() {
  assert(
    ∀R ⊆ S × S,
    R ≠ ∅ ∧
    (∀x ∈ S: ⟨x,x⟩ ∉ R) ∧ // antireflexive
    (∀x,y,z ∈ S: (⟨x,y⟩ ∈ R ∧ ⟨y,z⟩ ∈ R) → ⟨x,z⟩ ∈ R) // transitive
    →
    (∀x,y ∈ S: ⟨x,y⟩ ∈ R → ⟨y,x⟩ ∉ R) // asymmetric
  )
} ↔

proof RelationAsymmetric() {
  setVar(R: P(S × S)) →
  setVar(x,y,z: S) →
  
  assume(¬(∀x,y ∈ S: ⟨x,y⟩ ∈ R → ⟨y,x⟩ ∉ R)) →
  assert(∃x,y ∈ S: ⟨x,y⟩ ∈ R ∧ ⟨y,x⟩ ∈ R) → // negation of asymmetric
  
  lemma TransitivityImplication() {
    assert(⟨x,y⟩ ∈ R ∧ ⟨y,x⟩ ∈ R →
           ⟨x,x⟩ ∈ R) // by transitivity
  } →
  
  apply(TransitivityImplication()) →
  assert(⟨x,x⟩ ∈ R) →
  assert(⟨x,x⟩ ∉ R) → // by antireflexivity
  
  assert(contradiction()) →
  conclude(∀x,y ∈ S: ⟨x,y⟩ ∈ R → ⟨y,x⟩ ∉ R) // R is asymmetric
}