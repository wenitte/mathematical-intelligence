theorem Compact_Closure_Intersection() {
  let(L: BoundedBelowJoinSemilattice) →
  let(S, ∨, ⪯: Components(L)) →
  let(x: Element(S)) →
  assert(
    x^compact = x^⪯ ∩ K(L)
  )
} ↔

proof Compact_Closure_Intersection() {
  let(y: Element(S)) →
  
  assert(
    y ∈ x^compact ↔ 
    (y ⪯ x ∧ isCompact(y))
  ) by def_compact_closure →
  
  assert(
    (y ⪯ x ∧ isCompact(y)) ↔
    (y ∈ x^⪯ ∧ isCompact(y))
  ) by def_lower_closure →
  
  assert(
    (y ∈ x^⪯ ∧ isCompact(y)) ↔
    (y ∈ x^⪯ ∧ y ∈ K(L))
  ) by def_compact_subset →
  
  assert(
    (y ∈ x^⪯ ∧ y ∈ K(L)) ↔
    y ∈ (x^⪯ ∩ K(L))
  ) by def_intersection →
  
  conclude(
    y ∈ x^compact ↔ y ∈ (x^⪯ ∩ K(L))
  ) →
  
  conclude(
    x^compact = x^⪯ ∩ K(L)
  ) by def_set_equality
}