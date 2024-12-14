theorem Euclidean_Borel_Open_Closed() {
  let(𝒪ⁿ: Collection[OpenSets[ℝⁿ]]) ∧
  let(𝒞ⁿ: Collection[ClosedSets[ℝⁿ]]) ∧
  let(σ: SetFunction[Collection → σ-algebra]) ∧
  assert(
    σ(𝒪ⁿ) = σ(𝒞ⁿ)
  )
} ↔

proof Euclidean_Borel_Open_Closed() {
  lemma Closed_Set_Definition() {
    assert(
      ∀C ∈ 𝒞ⁿ ∃O ∈ 𝒪ⁿ : C = Complement(O)
    )
  } →
  
  lemma Sigma_Algebra_Complement_Generators() {
    assert(
      ∀A,B: Collection[Sets] →
      (∀x ∈ A ∃y ∈ B: x = Complement(y)) →
      σ(A) = σ(B)
    )
  } →
  
  apply(Closed_Set_Definition()) →
  apply(Sigma_Algebra_Complement_Generators()) →
  assert(σ(𝒪ⁿ) = σ(𝒞ⁿ))
}