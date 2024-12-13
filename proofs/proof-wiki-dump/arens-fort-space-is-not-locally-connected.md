theorem ArensFort_Not_Locally_Connected() {
  let T = (S, τ) be ArensfortSpace
  assert(
    ¬(T is_locally_connected)
  )
} ↔

proof ArensFort_Not_Locally_Connected() {
  setVar(𝒰₀: local_basis(⟨0,0⟩)) →
  setVar(U ∈ 𝒰₀) →
  assert(U is_open_in T) →
  
  lemma SinglePoint_Not_Open() {
    assert({⟨0,0⟩} is_not_open_in T)
  } →
  apply(SinglePoint_Not_Open()) →
  assert(U ≠ {⟨0,0⟩}) →
  
  assert(∃p ∈ U: p ≠ ⟨0,0⟩) →
  assert({p} ⊆ U) →
  
  lemma Point_Is_Clopen() {
    assert(∀p ∈ S: {p} is_clopen_in T)
  } →
  apply(Point_Is_Clopen()) →
  
  assert(⟨0,0⟩ ∈ U) →
  assert(U ≠ {p}) →
  assert({p} ⊊ U) →
  
  lemma Connected_Characterization() {
    assert(
      X is_connected ↔ ¬∃A⊊X: A is_clopen_in X
    )
  } →
  apply(Connected_Characterization()) →
  assert(U is_not_connected) →
  
  assert(∀V ∈ 𝒰₀: V is_not_connected) →
  conclude(T is_not_locally_connected)
}