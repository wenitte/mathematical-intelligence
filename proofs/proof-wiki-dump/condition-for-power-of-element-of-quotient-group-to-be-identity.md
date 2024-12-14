theorem QuotientGroupPower() {
  assume(
    G: Group,
    e: Identity(G),
    N: NormalSubgroup(G),
    a: Element(G)
  )
  assert(
    (aN)^n = Identity(G/N) ↔ a^n ∈ N
  )
}

proof QuotientGroupPower() {
  setVar(n: ℕ) →
  assert((aN)^n = Identity(G/N)) →
  
  lemma GroupIdentity() {
    assert(Identity(G/N) = N) 
  } →
  apply(GroupIdentity()) →
  
  assert((aN)^n = N) →
  
  lemma PowerCosetProduct() {
    assert((aN)^n = (a^n)N)
  } →
  apply(PowerCosetProduct()) →
  
  assert((a^n)N = N) →
  
  lemma CosetEquality() {
    assert(
      ∀x ∈ G, xN = N ↔ x ∈ N
    )
  } →
  apply(CosetEquality()) →
  
  assert(a^n ∈ N)
}