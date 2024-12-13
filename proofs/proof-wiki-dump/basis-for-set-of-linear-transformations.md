theorem Linear_Transformation_Basis() {
  assert(
    ∀R[CommutativeRing(R) ∧ Unity(R,1_R) ∧ Zero(R,0_R)] ∧
    ∀G,H[UnitaryRModule(G) ∧ UnitaryRModule(H)] ∧
    dim(G) = n ∧ dim(H) = m ∧
    ∀a[OrderedBasis(a,G,n)] ∧
    ∀b[OrderedBasis(b,H,m)] ∧
    ∀i∈[1,n],j∈[1,m] [
      ∃!φ_{ij}[LinearTransform(φ_{ij},G,H) ∧
      ∀k∈[1,n](φ_{ij}(a_k) = δ_{ik}b_j)]
    ] ⇒
    Basis({φ_{ij}: i∈[1,n], j∈[1,m]}, LL_R(G,H))
  )
} ↔

proof Linear_Transformation_Basis() {
  setVar(B = {φ_{ij}: i∈[1,n], j∈[1,m]}) →
  
  lemma Linear_Independence() {
    assert(∀λ_{ij}[Σ_{j=1}^m Σ_{i=1}^n λ_{ij}φ_{ij} = 0 ⇒
           ∀k∈[1,n](Σ_{j=1}^m Σ_{i=1}^n λ_{ij}φ_{ij}(a_k) = 
           Σ_{j=1}^m λ_{kj}b_j = 0)]) →
    assert(∀k,j[λ_{kj} = 0]) →
    conclude(LinearIndependent(B))
  } →

  lemma Spanning_Set() {
    setVar(φ ∈ LL_R(G,H)) →
    assert(∀i∈[1,n] ∃α_{ij}[φ(a_i) = Σ_{j=1}^m α_{ij}b_j]) →
    assert(∀k∈[1,n][φ(a_k) = 
           (Σ_{j=1}^m Σ_{i=1}^n α_{ij}φ_{ij})(a_k)]) →
    apply(LinearTransformGeneratedModule) →
    conclude(φ = Σ_{j=1}^m Σ_{i=1}^n α_{ij}φ_{ij})
  } →

  apply(Linear_Independence()) →
  apply(Spanning_Set()) →
  conclude(Basis(B, LL_R(G,H)))
}