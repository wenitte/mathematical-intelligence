theorem Closed_Set_Fort_Space_Is_GDelta() {
  let(T = ⟨S,τ_p⟩: FortSpace) ∧
  let(S: CountablyInfinite) ∧
  let(H ⊆ S: Closed) →
  assert(H ∈ G_δ)
} ↔

proof Closed_Set_Fort_Space_Is_GDelta() {
  setDef(FortSpace) →
  assert(H.isFinite() ∨ p ∈ H) →
  
  define(𝔻 = {S ∖ {z} | z ∉ H}) →
  
  assert(S ∖ H: CountablyInfinite) →
  assert(|𝔻| = |S ∖ H|) →
  assert(𝔻: CountablyInfinite) →
  assert(∀V ∈ 𝔻 → V: Open) →
  
  lemma Contains_H() {
    let(r ∈ H) →
    assert(∀z ∈ S → (z ∉ H → r ∈ S ∖ {z})) →
    assert(H ⊆ ⋂_{V ∈ 𝔻} V)
  } →
  
  lemma Complement_Contains() {
    let(r ∉ H) →
    assert(∃z ∈ S → r ∉ (S ∖ {z}) ∈ 𝔻) →
    assert((S ∖ H) ⊆ (S ∖ ⋂_{V ∈ 𝔻} V))
  } →
  
  apply(Contains_H()) →
  apply(Complement_Contains()) →
  assert(H = ⋂_{V ∈ 𝔻} V) →
  assert(H ∈ G_δ)
}