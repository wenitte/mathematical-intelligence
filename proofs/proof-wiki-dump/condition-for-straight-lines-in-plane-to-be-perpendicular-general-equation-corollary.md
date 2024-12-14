theorem StraightLinePerpendicular() {
  assert(
    ∀L,L' ∈ Plane ∧
    ∃l,m,n,k ∈ ℝ ∧
    (L: lx + my + n = 0) ⇒
    (L ⊥ L' ↔ L': mx - ly = k)
  )
} ↔

proof StraightLinePerpendicular() {
  setVar(L: Plane) →
  setVar(l,m,n ∈ ℝ) →
  assert(L: lx + my + n = 0) →
  
  lemma SlopeForm() {
    assert(my = -lx - n) →
    assert(y = -(l/m)x + n/m)
    assert(slope(L) = -l/m)
  } →
  
  apply(SlopeForm()) →
  
  lemma PerpendicularSlope() {
    assert(L ⊥ L' ⇒ slope(L') = m/l) →
    assert(L': y = (m/l)x + r) where r ∈ ℝ
  } →
  
  apply(PerpendicularSlope()) →
  
  assert(l(y = (m/l)x + r)) →
  assert(ly = mx + lr) →
  assert(mx - ly = -lr) →
  setVar(k := -lr) →
  assert(mx - ly = k) →
  
  lemma Converse() {
    assert(L': mx - ly = k) →
    assert(L': y = (m/l)x + (-k/l)) →
    assert(slope(L') = m/l) →
    assert(slope(L) · slope(L') = -1) →
    assert(L ⊥ L')
  } →
  
  apply(Converse())
}