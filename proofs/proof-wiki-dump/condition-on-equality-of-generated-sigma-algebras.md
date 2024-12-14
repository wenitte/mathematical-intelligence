theorem Equality_Generated_Sigma_Algebras() {
  assert(
    let(X: Set) ∧
    let(𝔾, ℍ: Set[Set[X]]) ∧
    (𝔾 ⊆ ℍ ⊆ σ(𝔾)) →
    (σ(𝔾) = σ(ℍ))
  )
} ↔

proof Equality_Generated_Sigma_Algebras() {
  lemma Generated_Sigma_Algebra_Preserves_Subset() {
    assert(
      ∀A,B: Set[Set[X]] →
      (A ⊆ B) →
      (σ(A) ⊆ σ(B))
    )
  } →
  
  apply(Generated_Sigma_Algebra_Preserves_Subset()) →
  assert(σ(𝔾) ⊆ σ(ℍ)) →
  
  lemma Sigma_Algebra_Properties() {
    assert(
      is_sigma_algebra(σ(𝔾)) ∧
      ℍ ⊆ σ(𝔾)
    )
  } →
  
  apply(Definition_Generated_Sigma_Algebra()) →
  assert(σ(ℍ) ⊆ σ(𝔾)) →
  
  apply(Definition_Set_Equality(σ(𝔾), σ(ℍ))) →
  assert(σ(𝔾) = σ(ℍ))
}