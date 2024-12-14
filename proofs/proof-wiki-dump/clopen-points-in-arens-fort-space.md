theorem Clopen_Points_Arens_Fort() {
  let(T = ⟨S,τ⟩: ArensForSpace)
  let(q ∈ S: q ≠ ⟨0,0⟩)
  assert(
    ({q} is_open ∧ {q} is_closed in T) ∧
    ({⟨0,0⟩} is_closed ∧ ¬({⟨0,0⟩} is_open in T))
  )
} ↔

proof Clopen_Points_Arens_Fort() {
  // First part: proving {q} is clopen
  assert({q} is_finite) →
  assert(S\{q} is_cofinite) →
  lemma Cofinite_Is_Open() {
    assert(∀X ⊆ S: X is_cofinite → X is_open in T)
  } →
  apply(Cofinite_Is_Open()) →
  assert(S\{q} is_open) →
  assert({q} is_closed) ∧

  assert(⟨0,0⟩ ∉ {q}) →
  lemma ArensFort_Open_Sets() {
    assert(∀X ⊆ S: ⟨0,0⟩ ∉ X → X is_open in T)
  } →
  apply(ArensFort_Open_Sets()) →
  assert({q} is_open) →

  // Second part: proving {⟨0,0⟩} properties
  assert(⟨0,0⟩ ∉ S\{⟨0,0⟩}) →
  assert(¬(S\{⟨0,0⟩} is_open in T)) →
  assert({⟨0,0⟩} is_finite) →
  assert(S\{⟨0,0⟩} is_cofinite) →
  apply(Cofinite_Is_Open()) →
  assert({⟨0,0⟩} is_closed)
}