theorem Clopen_Contains_Components() {
  require(T: TopologicalSpace(S, τ)) →
  require(H: Subset(S)) →
  require(H: Clopen(T)) →
  assert(
    ∀x ∈ H ⇒ Comp_x(T) ⊆ H
  )
}

proof Clopen_Contains_Components() {
  setDef(H: Clopen(T)) →
  assert(H ∈ τ ∧ ∁_S(H) ∈ τ) →
  
  lemma Partition() {
    assert(
      H ∩ ∁_S(H) = ∅ ∧
      H ∪ ∁_S(H) = S
    )
  } →

  lemma Separated() {
    assert(H: Closed ∧ ∁_S(H): Closed) →
    assert(H ∩ cl(∁_S(H)) = ∅ ∧ cl(H) ∩ ∁_S(H) = ∅) →
    conclude(Separated(H, ∁_S(H)))
  } →

  byContradiction() {
    assume(∃x ∈ H: Comp_x(T) ⊈ H) →
    assert(∃z ∈ Comp_x(T): z ∈ ∁_S(H)) →
    assert(Connected(H ∪ ∁_S(H))) →
    apply(Separated()) →
    contradiction(
      Connected(H ∪ ∁_S(H)) ∧ 
      Separated(H, ∁_S(H))
    )
  } →
  
  conclude(
    ∀x ∈ H ⇒ Comp_x(T) ⊆ H
  )
}