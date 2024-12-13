theorem AbelianizationIsAbelian() {
  assert(
    ∀G[isGroup(G) ∧ hasIdentity(G, e)] →
    isAbelianGroup(abelianization(G))
  )
} ↔

proof AbelianizationIsAbelian() {
  setVar(G: Group) →
  define(abelianization(G) = G/[G,G]) →
  
  lemma DerivedSubgroupNormal() {
    assert(
      isNormalSubgroup([G,G], G)
    )
  } →
  
  assert(
    ∀x,y ∈ G → [x,y] ∈ [G,G]
  ) →
  
  lemma QuotientGroupAbelianCondition() {
    assert(
      ∀H,N[isGroup(H) ∧ isNormalSubgroup(N,H)] →
      (isAbelian(H/N) ↔ ∀x,y ∈ H[[x,y] ∈ N])
    )
  } →
  
  apply(DerivedSubgroupNormal()) →
  apply(QuotientGroupAbelianCondition()) →
  
  conclude(
    isAbelianGroup(G/[G,G]) ↔
    isAbelianGroup(abelianization(G))
  )
}