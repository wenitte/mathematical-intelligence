theorem ChangeOfBasisMatrix() {
  letRing(R: CommutativeRingWithUnity) ∧
  letModule(G, H: FreeUnitaryRModule) ∧
  assert(dim(G) = n > 0 ∧ dim(H) = m > 0) ∧
  letBases(
    a[n], a'[n]: OrderedBasis(G),
    b[m], b'[m]: OrderedBasis(H)
  ) ∧
  letMap(u: LinearTransformation(G → H)) ∧
  letMatrix(
    A = [u; b[m], a[n]],
    B = [u; b'[m], a'[n]],
    P = ChangeBasisMatrix(a[n] → a'[n]),
    Q = ChangeBasisMatrix(b[m] → b'[m])
  ) ⇒
  assert(B = Q⁻¹AP)
} ↔

proof ChangeOfBasisMatrix() {
  assert(u = I_H ∘ u ∘ I_G) →
  assert(Q⁻¹ = [I_H; b'[m], b[m]]) →
  
  lemma MatrixComposition() {
    assert(Q⁻¹AP = 
      [I_H; b'[m], b[m]] × [u; b[m], a[n]] × [I_G; a[n], a'[n]])
  } →
  
  apply(MatrixComposition()) →
  assert([I_H ∘ u ∘ I_G; b'[m], a'[n]] = B) →
  conclude(B = Q⁻¹AP)
}

theorem ChangeOfBasisMatrix_Converse() {
  letRing(R: CommutativeRingWithUnity) ∧
  letModule(G, H: FreeUnitaryRModule) ∧
  assert(dim(G) = n > 0 ∧ dim(H) = m > 0) ∧
  letBases(a[n]: OrderedBasis(G), b[m]: OrderedBasis(H)) ∧
  letMatrix(
    A, B: Matrix(m×n, R),
    P: NonsingularMatrix(n×n),
    Q: NonsingularMatrix(m×m)
  ) ∧
  assert(B = Q⁻¹AP) ⇒
  exists(
    u: LinearTransformation(G → H),
    a'[n]: OrderedBasis(G),
    b'[m]: OrderedBasis(H)
  ) ∧
  assert(
    A = [u; b[m], a[n]] ∧
    B = [u; b'[m], a'[n]]
  )
}

corollary ChangeOfBasisMatrix_SingleModule() {
  letRing(R: CommutativeRingWithUnity) ∧
  letModule(G: FreeUnitaryRModule) ∧
  assert(dim(G) = n > 0) ∧
  letBases(a[n], a'[n]: OrderedBasis(G)) ∧
  letMap(u: LinearTransformation(G → G)) ∧
  letMatrix(
    A = [u; a[n]],
    B = [u; a'[n]],
    P = ChangeBasisMatrix(a[n] → a'[n])
  ) ⇒
  assert(B = P⁻¹AP)
}