theorem Conditional_Entropy_Decreases() {
  let(Ω, Σ, Pr: ProbabilitySpace)
  let(A, C, D ⊆ Σ: FiniteSubSigmaAlgebra)
  assert(
    C ⊆ D → H(A|C) ≥ H(A|D)
  )
} ↔

proof Conditional_Entropy_Decreases() {
  // Define generated finite partitions
  setVar(ξ := ξ(A)) →
  setVar(η := ξ(C)) →
  setVar(γ := ξ(D)) →
  
  lemma Partition_Order() {
    assert(C ⊆ D → η ≤ γ)
  } →
  
  lemma Refinement_Property() {
    assert(∀B∈η, ∀D∈γ → (D⊆B ∨ B∩D=∅)) ∧
    assert(∀B∈η, ∀D∈γ → Pr(B∩D) = {
      Pr(D) if D⊆B
      0     if B∩D=∅
    })
  } →
  
  lemma Probability_Ratio() {
    ∀A∈ξ, ∀B∈γ, Pr(B)>0 →
    assert(
      Pr(A∩B)/Pr(B) = 
      (1/Pr(B))∑[D∈γ,D⊆B]Pr(A∩D) =
      ∑[D∈γ,Pr(D)>0](Pr(B∩D)/Pr(B))(Pr(A∩D)/Pr(D))
    )
  } →
  
  lemma Phi_Concavity() {
    assert(∀x>0 → φ''(x) = -1/x < 0) ∧
    apply(JensensInequality) →
    assert(
      φ(Pr(A∩B)/Pr(B)) ≥ 
      ∑[D∈γ,Pr(D)>0](Pr(B∩D)/Pr(B))φ(Pr(A∩D)/Pr(D))
    )
  } →
  
  // Final entropy comparison
  assert(
    H(ξ|η) = 
    ∑[B∈η,Pr(B)>0]Pr(B)∑[A∈ξ]φ(Pr(A∩B)/Pr(B)) ≥
    ∑[D∈γ,Pr(D)>0]∑[A∈ξ]Pr(D)φ(Pr(A∩D)/Pr(D)) =
    H(ξ|γ)
  ) →
  
  conclude(H(A|C) ≥ H(A|D))
}

corollary Entropy_Bound() {
  assert(H(A) ≥ H(A|D))
}