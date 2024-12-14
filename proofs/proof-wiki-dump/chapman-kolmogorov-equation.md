theorem ChapmanKolmogorov() {
  let(X: MarkovChain, homogeneous) →
  let(P^(n): TransitionMatrix) →
  let(p_jk^(n) = P(X_n = k | X_0 = j)) →
  assert(
    P^(n+m) = P^(n)P^(m) ↔
    ∀i,j ∈ S: p_ij^(n+m) = ∑(k∈S)(p_ik^(n)p_kj^(m))
  )
}

proof ChapmanKolmogorov() {
  setVar(i,j,k: S) →
  assert(p_ij^(n+m) = P(X_(n+m) = j | X_0 = i)) →
  
  lemma UnionDecomposition() {
    assert(
      P(X_(n+m) = j | X_0 = i) = 
      P(⋃(k∈S)(X_(n+m) = j ∧ X_n = k) | X_0 = i)
    )
  } →
  
  apply(CountableAdditivity) →
  assert(
    = ∑(k∈S)P(X_(n+m) = j ∧ X_n = k | X_0 = i)
  ) →
  
  apply(ChainRule) →
  assert(
    = ∑(k∈S)P(X_(n+m) = j | X_n = k, X_0 = i) × P(X_n = k | X_0 = i)
  ) →
  
  apply(MarkovProperty) →
  assert(
    = ∑(k∈S)P(X_(n+m) = j | X_n = k) × P(X_n = k | X_0 = i)
  ) →
  
  apply(HomogeneousProperty) →
  assert(
    = ∑(k∈S)P(X_m = j | X_0 = k) × P(X_n = k | X_0 = i)
  ) →
  
  apply(TransitionProbabilityDef) →
  assert(
    = ∑(k∈S)p_ik^(n)p_kj^(m)
  )
}