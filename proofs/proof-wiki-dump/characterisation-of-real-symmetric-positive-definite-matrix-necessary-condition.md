theorem SymmetricPositiveDefiniteFactorization() {
  assert(
    ∀A ∈ ℝ^{n×n}: (isSymmetric(A) ∧ isPositiveDefinite(A)) ⇒
    ∃C ∈ ℝ^{n×n}: (isNonsingular(C) ∧ A = C^⊤C)
  )
} ↔

proof SymmetricPositiveDefiniteFactorization() {
  setVar(A: ℝ^{n×n}, isSymmetric(A), isPositiveDefinite(A)) →
  
  lemma OrthogonalDiagonalization() {
    assert(∃P,D: (isOrthogonal(P) ∧ isDiagonal(D) ∧ A = P^⊤DP))
  } →
  
  lemma PositiveEigenvalues() {
    assert(∀i ∈ [1,n]: D_{ii} > 0)
  } →
  
  constructMatrix(S: ℝ^{n×n}) {
    define(S_{ij} = case(i=j: √(D_{ii}), i≠j: 0))
  } →
  
  assert(S^2 = D) →
  
  assert(det(S) = √(∏_{i=1}^n D_{ii}) > 0) →
  
  setVar(C = P^⊤SP) →
  
  assert(det(P^⊤SP) = det(P^⊤)det(S)det(P) = det(S) > 0) →
  assert(isNonsingular(C)) →
  
  assert(
    C^⊤C = (P^⊤SP)^⊤(P^⊤SP) = 
    P^⊤S^⊤PP^⊤SP = 
    P^⊤S^⊤SP = 
    P^⊤S^2P = 
    P^⊤DP = 
    A
  )
}