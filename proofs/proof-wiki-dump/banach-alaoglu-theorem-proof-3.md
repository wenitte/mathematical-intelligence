theorem Banach_Alaoglu_Sequential_Compact() {
  assert(
    ∀X(isNormedVectorSpace(X) ∧ isSeparable(X)) →
    isSequentiallyCompact(closedUnitBall(X*), weak_star_topology)
  )
} ↔

proof Banach_Alaoglu_Sequential_Compact() {
  setVar(X: NormedVectorSpace) →
  setVar(B_X*: Set := {f ∈ X* : ∥f∥ ≤ 1}) →
  setVar(w*: Topology) →
  
  assert(B_X* = {f: X → 𝔽 | |f(x)| ≤ ∥x∥ ∧ isLinear(f)}) →
  
  ∀x ∈ X(
    setVar(K_x: Set := {λ ∈ 𝔽 : |λ| ≤ ∥x∥})
  ) →
  
  setVar(K: Set := ∏(x∈X) K_x) →
  assert(K.topology = productTopology) →
  
  ∀f ∈ K, x ∈ X(
    assert(f(x) ∈ K_x ↔ |f(x)| ≤ ∥x∥)
  ) →
  
  assert(B_X* = {f ∈ K : isLinear(f)}) →
  
  setVar(pr_x: Function := λf.f(x)) →
  
  lemma Initial_Topology() {
    assert(K.topology = initialTopology({pr_x : x ∈ X})) ∧
    assert(B_X*.topology = initialTopology({pr_x|B_X* : x ∈ X}))
  } →
  
  apply(Tychonoff_Theorem(K)) →
  assert(isCompact(K)) →
  
  assert(B_X* = ⋂(x,y∈X, λ,μ∈𝔽) (λpr_x + μpr_y - pr_{λx+μy})⁻¹({0})) →
  
  apply(Linear_Combination_Continuous()) →
  assert(∀x,y∈X, λ,μ∈𝔽(isContinuous(λpr_x + μpr_y - pr_{λx+μy}))) →
  
  assert(isClosed(B_X*, K)) →
  apply(Closed_Subspace_Compact()) →
  
  conclude(isCompact(B_X*, w*))
}