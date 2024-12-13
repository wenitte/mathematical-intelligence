theorem Cancellation_Laws_Corollary() {
  assert(
    ∀G: Group, ∀g,h ∈ G, ∃e: identity(G) ⇒
    (g·h = g → h = e)
  )
}

proof Cancellation_Laws_Corollary_1() {
  setVar(G: Group, g,h ∈ G, e: identity(G)) →
  assume(g·h = g) →
  assert(g·h = g·e) by GroupAxiom_Identity() →
  apply(Left_Cancellation_Law(g)) →
  conclude(h = e)
}

proof Cancellation_Laws_Corollary_2() {
  setVar(G: Group, g,h ∈ G, e: identity(G)) →
  assume(g·h = g) →
  assert(g⁻¹·(g·h) = g⁻¹·g) by GroupAxiom_Identity() →
  assert((g⁻¹·g)·h = g⁻¹·g) by GroupAxiom_Associativity() →
  assert(e·h = e) by GroupAxiom_Inverse() →
  assert(h = e) by GroupAxiom_Identity()
}