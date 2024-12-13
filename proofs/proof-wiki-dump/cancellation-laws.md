theorem CancellationLaws() {
  assert(
    ∀G: Group ∧ ∀a,b,c ∈ G ⇒
    ((b·a = c·a → b = c) ∧ (a·b = a·c → b = c))
  )
}

proof CancellationLaws_Direct() {
  setVar(G: Group) →
  setVar(a,b,c: G) →
  setVar(a⁻¹: inverse(a)) →
  
  assume(b·a = c·a) →
  
  assert((b·a)·a⁻¹ = (c·a)·a⁻¹) →
  assert(b·(a·a⁻¹) = c·(a·a⁻¹)) by AssociativeProperty →
  assert(b·e = c·e) by InverseProperty →
  assert(b = c) by IdentityProperty →
  
  conclude(b·a = c·a → b = c)
}

theorem Corollary1() {
  assert(
    ∀G: Group ∧ ∀g,h ∈ G ⇒
    (g·h = g → h = e)
  )
}

theorem Corollary2() {
  assert(
    ∀G: Group ∧ ∀g,h ∈ G ⇒
    (h·g = g → h = e)
  )
}

proof CancellationLaws_Alternative() {
  setVar(G: Group) →
  assert(G isA Monoid) →
  assert(∀x ∈ G ⇒ isInvertible(x)) →
  
  lemma MonoidInvertibleElement() {
    assert(isInvertible(x) → isCancellable(x))
  } →
  
  apply(MonoidInvertibleElement()) →
  conclude(∀x ∈ G ⇒ isCancellable(x))
}

proof CancellationLaws_LatinSquare() {
  setVar(G: Group) →
  setVar(a,b,c: G) →
  
  assume(x = b·a = c·a) →
  assert(∃!y ∈ G: x = y·a) by LatinSquareProperty →
  conclude(b = c) →
  
  assume(x = a·b = a·c) →
  assert(∃!y ∈ G: x = a·y) by LatinSquareProperty →
  conclude(b = c)
}