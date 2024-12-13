theorem CartesianMetricRotationInvariance() {
  assert(
    ∀δ[metric], ∀A[rotation_matrix], ∀e_i,e_j[basis_vectors] ⇒
    (δ'_ij = δ_ij)
    where δ_ij = ⟨e_i,e_j⟩
    where δ'_ij = ⟨Ae_i,Ae_j⟩
  )
} ↔

proof CartesianMetricRotationInvariance() {
  setVar(δ_ij: metric) →
  setVar(A: rotation_matrix) →
  setVar(e_i,e_j: basis_vectors) →
  
  assert(δ_ij = ⟨e_i,e_j⟩) →
  assert(δ'_ij = ⟨Ae_i,Ae_j⟩) →
  
  lemma InnerProductMatrixFactor() {
    assert(∀x,y: ⟨Ax,y⟩ = ⟨x,A^Ty⟩)
  } →
  
  apply(InnerProductMatrixFactor()) →
  assert(δ'_ij = ⟨e_i,A^TAe_j⟩) →
  
  lemma RotationMatrixProperty() {
    assert(∀A[rotation_matrix]: A^T = A^{-1})
  } →
  
  apply(RotationMatrixProperty()) →
  assert(δ'_ij = ⟨e_i,A^{-1}Ae_j⟩) →
  assert(δ'_ij = ⟨e_i,Ie_j⟩) →
  assert(δ'_ij = ⟨e_i,e_j⟩) →
  assert(δ'_ij = δ_ij)
}