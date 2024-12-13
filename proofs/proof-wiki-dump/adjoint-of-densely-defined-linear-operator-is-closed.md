theorem Adjoint_Densely_Defined_Operator_is_Closed() {
  let H: HilbertSpace(ℂ) →
  let ⟨D_T, T⟩: DenselyDefinedLinearOperator(H) →
  let ⟨D_T*, T*⟩: AdjointOperator(⟨D_T, T⟩) →
  assert(
    isClosed(⟨D_T*, T*⟩)
  )
} ↔

proof Adjoint_Densely_Defined_Operator_is_Closed() {
  let H×H: HilbertSpaceDirectSum(H, H, ⟨·,·⟩_H×H) →
  
  lemma Norm_Equivalence() {
    assert(
      isEquivalent(innerProductNorm(H×H), directProductNorm(H×H))
    )
  } →

  define V: Function(H×H → H×H) {
    ∀(x,y) ∈ H×H: V(x,y) = (-y,x)
  } →

  lemma Graph_Adjoint_Characterization() {
    assert(
      G(T*) = (V[G(T)])⊥
    )
  } →

  apply(Norm_Equivalence()) →
  assert(
    isClosed(G(T*)) ↔ isClosed(G(T*), ⟨·,·⟩_H×H)
  ) →

  apply(Graph_Adjoint_Characterization()) →
  assert(
    isClosed((V[G(T)])⊥, ⟨·,·⟩_H×H)
  ) →

  lemma Orthocomplement_Closed() {
    assert(
      ∀S ⊆ H×H: isClosed(S⊥)
    )
  } →

  apply(Orthocomplement_Closed()) →
  assert(
    isClosed(G(T*))
  ) →
  
  conclude(
    isClosed(⟨D_T*, T*⟩)
  )
}