theorem Composition_Linear_Trans_Matrix_Isomorphism() {
  assume(
    R: Ring ∧ hasUnity(R) ∧
    F,G,H: FreeRModule ∧
    p,n,m: ℕ⁺ ∧
    dim(F) = p ∧ dim(G) = n ∧ dim(H) = m ∧
    a[p]: OrderedBasis(F) ∧
    b[n]: OrderedBasis(G) ∧
    c[m]: OrderedBasis(H) ∧
    LL_R(G,H): LinearTransformationSet ∧
    MM_R(m,n): MatrixSpace(R) ∧
    M: LL_R(G,H) → MM_R(m,n)
  ) →
  assert(
    ∀u ∈ LL_R(G,H): M(u) = [u; c[m], b[n]] ∧
    ∀u ∈ LL_R(F,G), v ∈ LL_R(G,H):
      [v ∘ u; c[m], a[p]] = [v; c[m], b[n]] × [u; b[n], a[p]]
  )
} ↔

proof Composition_Linear_Trans_Matrix_Isomorphism() {
  reference(
    theorem: "Relative_Matrix_Composition_Linear_Transformations"
  ) →
  apply(
    ∀u,v: [v ∘ u; c[m], a[p]] = [v; c[m], b[n]] × [u; b[n], a[p]]
  ) →
  assert(
    conclusion: "Direct consequence of referenced theorem"
  )
}