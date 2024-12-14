theorem ChangeBasisMatrix() {
  let(R: CommutativeRingWithUnity) ∧
  let(G, H: FreeUnitaryRModule, dim(G) = n > 0, dim(H) = m > 0) ∧
  let(a[1...n]: OrderedBasis(G)) ∧
  let(b[1...m]: OrderedBasis(H)) ∧
  let(A, B: Matrix(m×n, R)) ∧
  assert(
    ∃P: NonsingularMatrix(n×n) ∧
    ∃Q: NonsingularMatrix(m×m) ∧
    B = Q⁻¹AP →
    ∃u: LinearTransformation(G→H) ∧
    ∃a'[1...n]: OrderedBasis(G) ∧
    ∃b'[1...m]: OrderedBasis(H) ∧
    (A = [u; b[1...m], a[1...n]] ∧
     B = [u; b'[1...m], a'[1...n]])
  )
} ↔

proof ChangeBasisMatrix() {
  let(P = [α[1...n]]) ∧
  let(Q = [β[1...m]]) →
  
  assert(∀j ∈ [1,n]: a'[j] = Σ(i=1→n)(α[i,j]·a[i])) ∧
  assert(∀j ∈ [1,m]: b'[j] = Σ(i=1→m)(β[i,j]·b[i])) →
  
  lemma InvertibleMatrixBasisChange() {
    assert(
      isOrderedBasis(a'[1...n], G) ∧
      isOrderedBasis(b'[1...m], H)
    )
  } →
  
  assert(P = BasisChangeMatrix(a→a')) ∧
  assert(Q = BasisChangeMatrix(b→b')) →
  assert(Q⁻¹ = BasisChangeMatrix(b'→b)) →
  
  let(L_R(G,H): SetOfLinearTransformations(G→H)) →
  
  lemma LinearTransformationMatrixIsomorphism() {
    assert(∃u ∈ L_R(G,H): A = [u; b[1...m], a[1...n]])
  } →
  
  lemma ChangeBasisMatrixTransformation() {
    assert([u; b'[1...m], a'[1...n]] = Q⁻¹AP)
  } →
  
  assert(B = Q⁻¹AP = [u; b'[1...m], a'[1...n]])
}

corollary ChangeBasisMatrixOperator() {
  let(G: FreeUnitaryRModule, dim(G) = n) ∧
  let(a[1...n]: OrderedBasis(G)) ∧
  let(A, B: Matrix(n×n, R)) ∧
  assert(
    ∃P: NonsingularMatrix(n×n) ∧
    B = P⁻¹AP →
    ∃u: LinearOperator(G) ∧
    ∃a'[1...n]: OrderedBasis(G) ∧
    (A = [u; a[1...n]] ∧
     B = [u; a'[1...n]])
  )
}