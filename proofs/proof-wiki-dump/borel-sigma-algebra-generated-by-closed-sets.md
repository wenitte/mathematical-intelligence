theorem Borel_Sigma_Algebra_Generated_By_Closed_Sets() {
  let(S: Set, τ: Topology)
  let(𝔹(S,τ): Borel_Sigma_Algebra)
  let(O: OpenSets(S,τ))
  let(C: ClosedSets(S,τ))
  assert(
    𝔹(S,τ) = σ(O) ↔ 𝔹(S,τ) = σ(C)
  )
} ↔

proof Borel_Sigma_Algebra_Generated_By_Closed_Sets() {
  lemma Closed_Set_Definition() {
    assert(
      ∀F ∈ C ⇒ ∃G ∈ O: F = Sᶜ\G
    )
  } →
  
  lemma Generator_Complement_Equivalence() {
    cite("Sigma-Algebra Generated by Complements of Generators") →
    assert(
      ∀A,B ⊆ P(S): (
        (∀x ∈ A ⇔ ∃y ∈ B: x = yᶜ) →
        σ(A) = σ(B)
      )
    )
  } →
  
  apply(Closed_Set_Definition()) →
  apply(Generator_Complement_Equivalence()) →
  assert(σ(O) = σ(C))
}