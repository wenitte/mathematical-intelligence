theorem Complement_Upper_Closure_Open() {
  assert(
    ∀T = ⟨S,⪯,τ⟩ [relational structure with lower topology] ∧
    ∀x ∈ S ⇒
    (S∖x⪰ ∈ τ ∧ x⪰ is closed)
  )
} ↔

proof Complement_Upper_Closure_Open() {
  setVar(T: ⟨S,⪯,τ⟩) →
  setVar(x: S) →
  
  define(B := {S∖y⪰ : y ∈ S}) →
  
  lemma Lower_Topology_SubBasis() {
    assert(B is sub-basis of T)
  } →
  
  lemma SubBasis_Property() {
    assert(B ⊆ τ)
  } →
  
  assert(S∖x⪰ ∈ B) →
  apply(SubBasis_Property()) →
  assert(S∖x⪰ ∈ τ) →
  
  lemma Closed_Set_Definition() {
    assert(A is closed ↔ S∖A ∈ τ)
  } →
  
  apply(Closed_Set_Definition()) →
  assert(x⪰ is closed)
}