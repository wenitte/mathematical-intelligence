theorem RealSymmPosDefMatrix() {
  assert(
    ∀A ∈ ℝ^{n×n}, isSymmetric(A) ⇒
    (isPositiveDefinite(A) ↔ ∃C ∈ ℝ^{n×n}[isNonsingular(C) ∧ A = C^⊤C])
  )
}

proof RealSymmPosDefMatrix() {
  // Necessary condition
  lemma NecessaryCondition() {
    setVar(A: ℝ^{n×n}, isPositiveDefinite(A)) →
    apply(RealSymmMatrixOrthogDiag) →
    assert(∃P,D[isOrthogonal(P) ∧ isDiagonal(D) ∧ A = P^⊤DP]) →
    apply(RealSymmPosDefEigenvalues) →
    assert(∀i ∈ [1..n]: D_{ii} > 0) →
    
    // Construct diagonal matrix S
    define(S: ℝ^{n×n}, S_{ij} = if(i=j) then √(D_{ii}) else 0) →
    assert(S^2 = D) →
    
    // Show S has positive determinant
    assert(det(S) = √(∏_{i=1}^n D_{ii}) > 0) →
    
    // Construct C and verify properties
    setVar(C = P^⊤SP) →
    assert(isNonsingular(C)) →
    assert(C^⊤C = P^⊤S^⊤SP = P^⊤S^2P = P^⊤DP = A)
  }

  // Sufficient condition
  lemma SufficientCondition() {
    assume(∃C[isNonsingular(C) ∧ A = C^⊤C]) →
    setVar(v: ℝ^n, v ≠ 0) →
    assert(
      v^⊤Av = v^⊤C^⊤Cv = (Cv)^⊤(Cv) = ||Cv||^2 > 0
    ) →
    conclude(isPositiveDefinite(A))
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude()
}