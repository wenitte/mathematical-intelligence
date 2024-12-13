theorem Birkhoff_Kakutani() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X: TopologicalVectorSpace, τ: Topology) →
  assert(
    X.isPseudometrizable() ↔ X.isFirstCountable() ∧
    (X.isPseudometrizable() → 
      ∃d: InvariantPseudometric(
        induces(d, τ) ∧
        ∀b ∈ OpenBalls(X, d): isBalanced(b)
      )
    )
  )
}

proof Birkhoff_Kakutani() {
  // Sufficient Condition
  setVar(X: TopologicalVectorSpace) →
  assume(X.isFirstCountable()) →
  let(U_n: LocalBasis(0_X)) →
  let(V_1 = U_1) →
  
  lemma InductiveConstruction() {
    ∀j ≥ 2: ∃V_j: OpenNeighborhood(0_X) →
    assert(V_j + V_j ⊆ V_{j-1} ∩ U_{j-1})
  } →
  
  let(D = {r ∈ ℝ | r = Σ(c_j(r)2^(-j), j=1..∞) ∧ c_j(r) ∈ {0,1} ∧ ∃N: ∀j>N: c_j(r)=0}) →
  
  define(A_r: X → P(X)) {
    case(r ≥ 1): X
    case(r ∈ D): Σ(c_j(r)V_j, j=1..∞)
  } →
  
  define(f: X → [0,∞)) {
    f(x) = inf{r ∈ D ∪ [1,∞) | x ∈ A_r}
  } →
  
  define(d: X×X → [0,∞)) {
    d(x,y) = f(x-y)
  } →

  // Metric axioms verification
  proof_M1() {
    assert(∀x: d(x,x) = 0)
  } →
  
  proof_M2() {
    assert(∀x,y,z: d(x,z) ≤ d(x,y) + d(y,z))
  } →
  
  proof_M3() {
    assert(∀x,y: d(x,y) = d(y,x))
  } →
  
  proof_TranslationInvariance() {
    assert(∀x,y,z: d(x,y) = d(x+z,y+z))
  } →
  
  // Properties (1) and (2)
  proof_Properties() {
    assert(induces(d, τ)) →
    assert(∀b ∈ OpenBalls(X,d): isBalanced(b))
  } →
  
  conclude(X.isPseudometrizable())
}

corollary Metrizability() {
  assert(
    X.isMetrizable() ↔ 
    (X.isFirstCountable() ∧ X.isHausdorff())
  )
}