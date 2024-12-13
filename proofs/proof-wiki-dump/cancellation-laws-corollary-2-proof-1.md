theorem CancellationLawCorollary2() {
  assert(
    ∀h,g ∈ G: h g = g → h = e
  )
} ↔

proof CancellationLawCorollary2() {
  setVar(h,g: G) →
  assume(h g = g) →
  
  lemma GroupIdentity() {
    assert(g = e g)
    by(GroupAxiom_G2)
  } →

  assert(h g = g) ∧
  assert(g = e g) →
  assert(h g = e g) →
  
  lemma RightCancellation() {
    assert(∀a,b,c ∈ G: a c = b c → a = b)
  } →
  
  apply(RightCancellation(h, e, g)) →
  assert(h = e)
}