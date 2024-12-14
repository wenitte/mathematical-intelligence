theorem Conditional_Entropy_Join_Sum() {
  let(Ω, Σ, Pr: ProbabilitySpace) →
  let(𝔸, ℂ, 𝔻 ⊆ Σ: FiniteSubSigmaAlgebra) →
  assert(
    H(𝔸 ∨ ℂ | 𝔻) = H(𝔸 | 𝔻) + H(ℂ | 𝔸 ∨ 𝔻)
  )
} ↔

proof Conditional_Entropy_Join_Sum() {
  setVar(ξ := ξ(𝔸): FinitePartition) →
  setVar(η := ξ(ℂ): FinitePartition) →
  setVar(γ := ξ(𝔻): FinitePartition) →

  assert(
    H(ξ ∨ η | γ) = ∑_{D∈γ, Pr(D)>0} Pr(D) ∑_{B∈ξ∨η} φ(Pr(B∩D)/Pr(D))
  ) →
  
  apply(Join_Finite_Partitions) →
  assert(
    = ∑_{D∈γ, Pr(D)>0} Pr(D) ∑_{A∈ξ, C∈η} φ(Pr(A∩C∩D)/Pr(D))
  ) →

  apply(Phi_Definition) →
  assert(
    = -∑_{(A,C,D)∈ξ×η×γ, Pr(A∩C∩D)>0} Pr(A∩C∩D) log(Pr(A∩C∩D)/Pr(D))
  ) →

  let(L := ∑_{(A,C,D)} Pr(A∩D)φ(Pr(A∩C∩D)/Pr(A∩D))) →
  let(R := ∑_{(A,C,D)} (Pr(A∩C∩D)Pr(D)/Pr(A∩D))φ(Pr(A∩D)/Pr(D))) →

  assert(H(ξ ∨ η | γ) = L + R) →
  
  lemma L_Evaluation() {
    assert(L = H(η | ξ ∨ γ))
  } →

  lemma R_Evaluation() {
    assert(R = H(ξ | γ))
  } →

  apply(L_Evaluation) →
  apply(R_Evaluation) →
  assert(H(ξ ∨ η | γ) = H(ξ | γ) + H(η | ξ ∨ γ)) →
  
  apply(Partition_To_Algebra_Correspondence) →
  conclude(H(𝔸 ∨ ℂ | 𝔻) = H(𝔸 | 𝔻) + H(ℂ | 𝔸 ∨ 𝔻))
}