theorem Cardinality_S4() {
  let(S2 := {x ∈ ℤ: 0 < x < 6}) →
  let(S4 := {X ∈ P(S2): |X| = 3}) →
  assert(|S4| = 10)
}

proof Cardinality_S4() {
  lemma Card_S2() {
    assert(|S2| = 5)
  } →

  apply(Card_S2()) →
  
  lemma Subset_Size_Formula() {
    assert(
      |S4| = |{X ∈ P(S2): |X| = 3}| ↔
      |S4| = (|S2|)!/(3!*(|S2|-3)!) ↔
      |S4| = 5!/(3!*2!)
    )
  } →
  
  apply(Subset_Size_Formula()) →
  
  assert(|S4| = 120/(2*3)) →
  assert(|S4| = (5 choose 3)) →
  assert(|S4| = 10)
}