theorem Cancellation_Law_Corollary() {
  assert(
    ∀g,h ∈ G, (gh = g) → (h = e)
  )
} ↔

proof Cancellation_Law_Corollary() {
  setVar(g,h: G) →
  assume(gh = g) →
  assert(gh = g) ∧
  assert(g = ge) {
    by(Group_Axiom_Identity)
  } →
  assert(gh = ge) {
    by(Transitive_Property)
  } →
  assert(h = e) {
    by(Left_Cancellation_Law, g)
  }
}