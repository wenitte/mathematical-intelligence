theorem Paracompactness_Characterization_Lemma10() {
  let T = ⟨X, τ⟩: TopologicalSpace
  let 𝒰: OpenCover(T)
  let 𝒜 = ⋃_{n∈ℕ} 𝒜_n: σ-DiscreteRefinement(𝒰)
  let V_n: OpenNeighborhood(Δ_X) for n∈ℕ
  assert(
    ∀n∈ℕ ∀x∈X ⇒ |{A∈𝒜_n: V_n(x)∩V_n[A]≠∅}| ≤ 1 ∧
    ∀A∈𝒜 ∃U_A∈𝒰: A⊆U_A ∧
    let 𝒲_n = {U_A∩V_n[A]: A∈𝒜_n} ∧
    let 𝒲 = ⋃_{n∈ℕ} 𝒲_n
    ⇒ 𝒲 is OpenSigmaDiscreteRefinement(𝒰)
  )
} ↔

proof Paracompactness_Characterization_Lemma10() {
  proof OpenSets() {
    setVar(W∈𝒲) →
    assert(∃n∈ℕ, A∈𝒜: W=U_A∩V_n[A]) →
    assert(U_A∈τ) →
    apply(OpenNeighborhoodDiagonalImage()) →
    assert(V_n[A]∈τ) →
    apply(OpenSetIntersection()) →
    assert(W∈τ) →
    conclude(𝒲⊆τ)
  } →

  proof Cover() {
    setVar(x∈X) →
    assert(∃A∈𝒜: x∈A) →
    let n = min{m∈ℕ: A∈𝒜_m} →
    assert(Δ_X⊆V_n) →
    assert(∀a∈A: ⟨a,a⟩∈V_n) →
    assert(A⊆V_n[A]) →
    assert(A⊆U_A) →
    apply(SubsetIntersection()) →
    assert(x∈U_A∩V_n[A]) →
    assert(U_A∩V_n[A]∈𝒲) →
    conclude(𝒲 covers X)
  } →

  proof Refinement() {
    setVar(W∈𝒲) →
    assert(∃n∈ℕ, A∈𝒜: W=U_A∩V_n[A]) →
    apply(IntersectionSubset()) →
    assert(W⊆U_A ∧ U_A∈𝒰) →
    conclude(𝒲 refines 𝒰)
  } →

  proof DiscreteProperty() {
    setVar(n∈ℕ) →
    setVar(x∈X) →
    assert(|{A∈𝒜_n: V_n(x)∩V_n[A]≠∅}| ≤ 1) →
    apply(DisjointSubsets()) →
    apply(CardinalitySubset()) →
    define(f: {A∈𝒜_n} → {W∈𝒲_n}, f(A)=V_n[A]∩U_A) →
    assert(f is surjective) →
    assert(|{W∈𝒲_n: V_n(x)∩W≠∅}| ≤ 1) →
    conclude(𝒲_n is discrete)
  } →

  conclude(𝒲 is OpenSigmaDiscreteRefinement(𝒰))
}