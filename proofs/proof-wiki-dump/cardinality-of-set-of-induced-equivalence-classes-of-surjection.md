theorem Cardinality_Induced_Equivalence_Classes() {
  assert(
    ∀f: S → T ∧
    ∀Rf ⊆ (S × S) ∧
    (∀s₁,s₂ ∈ S: (s₁,s₂) ∈ Rf ↔ f(s₁) = f(s₂)) ∧
    isSurjective(f) →
    |Rf-classes| = |T|
  )
}

proof Cardinality_Induced_Equivalence_Classes() {
  setDef(Surjection: ∀t ∈ T ∃s ∈ S: f(s) = t) →
  
  lemma One_Class_Per_Image() {
    assert(
      ∀t ∈ T: ∃!C ∈ Rf-classes: 
      (∀s ∈ C: f(s) = t) ∧
      (∀s ∈ S: f(s) = t → s ∈ C)
    )
  } →
  
  lemma Bijective_Correspondence() {
    assert(
      ∃g: T → Rf-classes:
      isBijective(g) ∧
      ∀t ∈ T: g(t) = {s ∈ S: f(s) = t}
    )
  } →
  
  apply(Bijective_Correspondence()) →
  assert(|Rf-classes| = |T|)
}