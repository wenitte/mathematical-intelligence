theorem Clopen_Points_Fort_Space() {
  let(S: Set, τ_p: Topology, T: Space) →
  assert(T = ⟨S, τ_p⟩ ∧ T.type = FortSpace ∧ S.cardinality = ∞) →
  let(q ∈ S: q ≠ p) →
  assert(
    ({q} ∈ Open(T) ∧ {q} ∈ Closed(T)) ∧
    ({p} ∈ Closed(T) ∧ {p} ∉ Open(T))
  )
} ↔

proof Clopen_Points_Fort_Space() {
  # First part: {q} is clopen
  assert({q}.cardinality < ∞) →
  assert(S∖{q}.type = Cofinite) →
  lemma Cofinite_Is_Open() {
    assert(∀A ∈ S: A.type = Cofinite → A ∈ Open(T))
  } →
  apply(Cofinite_Is_Open()) →
  assert(S∖{q} ∈ Open(T)) →
  assert({q} ∈ Closed(T)) →
  
  assert(p ∉ {q}) →
  lemma Fort_Space_Open_Definition() {
    assert(∀A ⊆ S: (p ∉ A) → A ∈ Open(T))
  } →
  apply(Fort_Space_Open_Definition()) →
  assert({q} ∈ Open(T)) →

  # Second part: {p} is closed but not open
  assert(p ∉ S∖{p}) →
  assert((S∖{p}).cardinality = ∞) →
  assert({p} ∉ Open(T)) →
  
  assert({p}.cardinality < ∞) →
  assert(S∖{p}.type = Cofinite) →
  apply(Cofinite_Is_Open()) →
  assert(S∖{p} ∈ Open(T)) →
  assert({p} ∈ Closed(T))
}