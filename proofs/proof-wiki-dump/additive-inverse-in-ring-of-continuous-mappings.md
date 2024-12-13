theorem AddInvContMap() {
  let(S: TopSpace, τ_S: Topology) →
  let(R: TopRing, +: BinOp, *: BinOp, τ_R: Topology, 0_R: Element) →
  let(C(S,R): ContMapRing) →
  let(f: Element ∈ C(S,R)) →
  assert(
    ∀s ∈ S ⇒ (-f)(s) = -(f(s))
  )
} ↔

proof AddInvContMap() {
  let(R^S: MapRing) →
  
  lemma ContMapSubring() {
    assert(C(S,R) ⊆ R^S)
  } →
  
  lemma RingOpsInduced() {
    assert(
      ∀f ∈ R^S ⇒ 
      ∃(-f) ∈ R^S ∧
      ∀s ∈ S ⇒ (-f)(s) = -(f(s))
    )
  } →
  
  apply(ContMapSubring()) →
  apply(RingOpsInduced()) →
  
  assert(
    f ∈ C(S,R) →
    f ∈ R^S →
    ∃(-f) ∈ R^S ∧
    (-f)(s) = -(f(s))
  )
}