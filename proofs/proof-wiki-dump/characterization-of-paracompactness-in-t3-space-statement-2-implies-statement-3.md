theorem Paracompactness_T3_Space() {
  assert(
    ∀T = ⟨X,τ⟩ [T is T₃ space] ∧
    (∀U[U is open cover of T → ∃R[R is locally finite refinement of U]) →
    (∀U[U is open cover of T → ∃R[R is closed locally finite refinement of U])
  )
} ↔

proof Paracompactness_T3_Space() {
  setVar(T: TopologicalSpace) →
  assume(T is T₃) →
  assume(∀U[U is open cover of T → ∃R[R is locally finite refinement of U]]) →
  
  setVar(𝒰: OpenCover(T)) →
  define(𝒱 := {V ∈ τ | ∃U ∈ 𝒰: V⁻ ⊆ U}) →
  
  lemma Cover_Property() {
    assert(𝒱 is open cover of T)
  } →
  
  apply(assumption) →
  assert(∃𝒜[𝒜 is locally finite refinement of 𝒱]) →
  
  define(ℬ := {A⁻ | A ∈ 𝒜}) →
  
  apply(Closures_Of_Locally_Finite_Is_Locally_Finite) →
  assert(ℬ is locally finite) →
  
  lemma Closed_Cover() {
    assert(ℬ is cover of T) ∧
    assert(∀B ∈ ℬ: B is closed)
  } →
  
  lemma Refinement_Property() {
    assert(ℬ is refinement of 𝒰)
  } →
  
  conclude(∀U[U is open cover of T → ∃R[R is closed locally finite refinement of U]]) →
  QED
}