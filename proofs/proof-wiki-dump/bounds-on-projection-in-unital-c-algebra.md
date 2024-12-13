theorem Projection_Bounds_CStarAlgebra() {
  letStruct(A: CStarAlgebra, {
    ast: Operation,
    norm: Norm,
    isUnital: true
  }) →
  let(≤_A: CanonicalPreordering(A)) →
  let(p: Projection(A)) →
  assert(
    0_A ≤_A p ≤_A 1_A
  )
} ↔

proof Projection_Bounds_CStarAlgebra() {
  assert(isHermitian(p)) →
  
  lemma Spectrum_Of_Projection() {
    assert(σ_A(p) ⊆ {0,1})
  } →
  
  lemma Hermitian_Element_Bounds() {
    assert(
      isHermitian(x) ∧ 
      σ_A(x) ⊆ [a,b] →
      a·1_A ≤_A x ≤_A b·1_A
    )
  } →
  
  apply(Spectrum_Of_Projection()) →
  apply(Hermitian_Element_Bounds(), {
    x: p,
    a: 0,
    b: 1
  }) →
  
  assert(0_A ≤_A p ≤_A 1_A)
}