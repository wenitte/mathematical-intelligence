theorem GroupCancellationLaws() {
  assert(
    ∀G: Group ∧ ∀a,b,c ∈ G ⇒
    ((b·a = c·a → b = c) ∧ (a·b = a·c → b = c))
  )
} ↔

proof GroupCancellationLaws() {
  setVar(G: Group) →
  setVar(a,b,c: G) →
  
  // Right cancellation law
  lemma RightCancellation() {
    setVar(x: G) →
    assert(x = b·a = c·a) →
    apply(LatinSquareProperty(G)) →
    assert(∃!y ∈ G: x = y·a) →
    assert(b·a = c·a → b = c)
  } →

  // Left cancellation law
  lemma LeftCancellation() {
    setVar(x: G) →
    assert(x = a·b = a·c) →
    apply(LatinSquareProperty(G)) →
    assert(∃!y ∈ G: x = a·y) →
    assert(a·b = a·c → b = c)
  } →

  apply(RightCancellation()) ∧
  apply(LeftCancellation()) →
  assert(
    (b·a = c·a → b = c) ∧ (a·b = a·c → b = c)
  )
}