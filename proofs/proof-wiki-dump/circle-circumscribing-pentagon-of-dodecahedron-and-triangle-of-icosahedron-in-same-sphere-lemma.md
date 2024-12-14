theorem PentagonCircleSquares() {
  assert(
    ∀circle(ABC) ∧ ∀pentagon(regular) ∧ inscribed(pentagon, ABC) →
    ∀AC(pentagon_side) ∧ ∀D(center) ∧ ∀DF⊥AC →
    BA² + AC² = 5·DE²
  )
} ↔

proof PentagonCircleSquares() {
  construct(
    circle(ABC),
    point(D: center),
    line(DF⊥AC),
    extend(DF → BE),
    join(AB, AE)
  ) →
  
  lemma DiameterDouble() {
    assert(BE = 2·ED)
  } →
  apply(DiameterDouble()) →
  assert(BE² = 4·ED²) →

  lemma ThalesTheorem() {
    assert(∀triangle(BAE) ∧ BE(diameter) →
    ∠BAE = 90°)
  } →
  apply(ThalesTheorem()) →
  
  lemma Pythagoras() {
    assert(∀triangle(BAE) ∧ ∠BAE = 90° →
    AB² + AE² = BE²)
  } →
  apply(Pythagoras()) →
  
  assert(AB² + AE² = BE²) →
  substitute(BE² = 4·ED²) →
  assert(AB² + AE² + ED² = 5·ED²) →
  
  lemma PentagonSideSquare() {
    cite("Book XIII, Prop 10") →
    assert(AC² = DE² + EA²)
  } →
  apply(PentagonSideSquare()) →
  
  substitute(AC² = DE² + EA²) →
  assert(BA² + AC² = 5·DE²)
}