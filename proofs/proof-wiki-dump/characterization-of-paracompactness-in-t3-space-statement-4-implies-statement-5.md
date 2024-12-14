theorem Paracompactness_Even_To_SigmaDiscrete() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ isTopologicalSpace(T)) →
    [isEvenCover(∀U ∈ OpenCovers(T))] →
    [∀U ∈ OpenCovers(T) → ∃R(isOpenSigmaDiscreteRefinement(R,U))]
  )
} ↔

proof Paracompactness_Even_To_SigmaDiscreteRefinement() {
  setVar(T: TopologicalSpace) →
  assume(isEvenCover(∀U ∈ OpenCovers(T))) →
  setVar(U: OpenCover(T)) →

  lemma ExistsSigmaDiscreteRefinement() {
    assert(∃A(isSigmaDiscreteRefinement(A,U)))
  } →
  
  apply(ExistsSigmaDiscreteRefinement()) →
  setVar(A: SigmaDiscreteSet) →
  assert(A = ⋃{n∈ℕ} Aₙ ∧ ∀n∈ℕ(isDiscreteSet(Aₙ))) →
  
  setVar(X×X: CartesianProduct(X,X)) →
  setVar(τ_X×X: ProductTopology(X×X)) →
  setVar(T×T: ⟨X×X, τ_X×X⟩) →

  lemma DiscreteNeighborhood() {
    assert(
      ∀B(isDiscreteSet(B) →
      ∃W(isOpenNeighborhood(W,Δ_X) ∧
      ∀x∈X(|{B∈B: W(x)∩W[B]≠∅}| ≤ 1)))
    )
  } →

  apply(DiscreteNeighborhood()) →
  assert(∀n∈ℕ(∃Vₙ(
    isNeighborhood(Vₙ,Δ_X) ∧
    ∀x∈X(|{A∈Aₙ: Vₙ(x)∩Vₙ[A]≠∅}| ≤ 1)
  ))) →

  assert(∀A∈A(∃U_A∈U(A⊆U_A))) →
  
  setVar(Wₙ: {U_A∩Vₙ[A]: A∈Aₙ}) →
  setVar(W: ⋃{n∈ℕ} Wₙ) →

  lemma W_is_SigmaDiscreteRefinement() {
    assert(isOpenSigmaDiscreteRefinement(W,U))
  } →

  apply(W_is_SigmaDiscreteRefinement()) →
  conclude(∀U∈OpenCovers(T)(∃R(isOpenSigmaDiscreteRefinement(R,U))))
}