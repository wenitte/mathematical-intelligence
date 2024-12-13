theorem Banach_Alaoglu() {
  let(X: NormedVectorSpace, separable) →
  let(X*: DualSpace(X)) →
  let(B*: ClosedUnitBall(X*)) →
  assert(
    B* is sequentially_compact(weak_star_topology)
  )
} ↔

proof Banach_Alaoglu() {
  let(B: ClosedUnitBall(X)) →
  let(F: Function[B → [-1,1]]) →
  let(R: Map[B* → F]) →
  
  lemma Restriction_Map() {
    assert(
      ∀ψ ∈ B*: R(ψ) = ψ|_B
    )
  } →
  
  lemma Tychonoff() {
    assert(
      F is compact(product_topology)
    )
  } →
  
  lemma Closed_Image() {
    assert(
      R(B*) is closed_subset(F)
    )
  } →
  
  lemma Homeomorphism() {
    assert(
      R: B*(weak*) ≅ R(B*)(product_topology)
    )
  } →
  
  apply(Tychonoff()) →
  apply(Closed_Image()) →
  apply(Homeomorphism()) →
  
  assert(
    B*(weak*) ≅ R(B*) ∧
    R(B*) is closed(F) ∧
    F is compact →
    R(B*) is compact
  ) →
  
  assert(
    X separable ∧
    R(B*) compact →
    R(B*) sequentially_compact
  ) →
  
  assert(
    R(B*) sequentially_compact ∧
    B*(weak*) ≅ R(B*) →
    B*(weak*) sequentially_compact
  )
}