theorem GroupElementsInSubgroup() {
  assert(
    ∀G[Group] ∧ ∀H[Subgroup(G)] ∧ ∀x,y ∈ G ∧
    (|{x,y,xy} ∩ H| ≥ 2) ⇒
    {x,y,xy} ⊆ H
  )
} ↔

proof GroupElementsInSubgroup() {
  setVar(G: Group, H: Subgroup(G), x,y: Element(G)) →
  assert(H is_group) →

  case1: {
    assume(x ∈ H ∧ y ∈ H) →
    apply(GroupAxiom_G0(H)) →
    assert(xy ∈ H)
  } →

  case2: {
    assume(x ∈ H ∧ xy ∈ H) →
    apply(GroupAxiom_G3(H)) →
    assert(x⁻¹ ∈ H) →
    apply(GroupAxiom_G0(H)) →
    assert(x⁻¹(xy) ∈ H) →
    assert(y ∈ H)
  } →

  case3: {
    assume(y ∈ H ∧ xy ∈ H) →
    apply(GroupAxiom_G3(H)) →
    assert(y⁻¹ ∈ H) →
    apply(GroupAxiom_G0(H)) →
    assert((xy)y⁻¹ ∈ H) →
    assert(x ∈ H)
  } →

  assert(
    (|{x,y,xy} ∩ H| ≥ 2) ⇒
    case1 ∨ case2 ∨ case3
  ) →
  assert({x,y,xy} ⊆ H)
}