theorem Basis_Induces_Local_Basis() {
  given(S, τ: TopologicalSpace) →
  given(𝔹: AnalyticBasis(τ)) →
  given(x: ∈ S) →
  define(𝔹ₓ := {B ∈ 𝔹 | x ∈ B}) →
  assert(
    IsLocalBasis(𝔹ₓ, x)
  )
} ↔

proof Basis_Induces_Local_Basis() {
  let(U: OpenSet(τ)) →
  given(x ∈ U) →
  
  lemma AnalyticBasisProperty() {
    assert(∃𝔸 ⊆ 𝔹: U = ⋃𝔸)
  } →
  apply(AnalyticBasisProperty()) →
  
  lemma UnionMembership() {
    assert(x ∈ ⋃𝔸 → ∃B ∈ 𝔸: x ∈ B)
  } →
  apply(UnionMembership()) →
  
  setVar(B: ∈ 𝔸) →
  assert(x ∈ B) →
  assert(B ∈ 𝔹ₓ) by(definition(𝔹ₓ)) →
  
  lemma SubsetOfUnion() {
    assert(B ⊆ U)
  } →
  apply(SubsetOfUnion()) →
  
  assert(∀U ∈ OpenSet(τ), x ∈ U → ∃B ∈ 𝔹ₓ: B ⊆ U) →
  assert(IsLocalBasis(𝔹ₓ, x)) by(definition(LocalBasis))
}