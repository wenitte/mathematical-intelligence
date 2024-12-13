theorem Eight_Queens_Problem() {
  assert(
    ∃ arrangements: Set(ChessConfig) ∧
    |arrangements| = 12 ∧
    ∀config ∈ arrangements : (
      countQueens(config) = 8 ∧
      isNonAttacking(config)
    ) ∧
    isMaximal(8)
  )
} ↔

proof Eight_Queens_Problem() {
  lemma Valid_Solutions() {
    assert(∃ configs: List(ChessConfig)) →
    setVar(configs = [
      {(a7,b5,c3,d1,e6,f8,g2,h4)},
      {(a7,b4,c2,d8,e6,f1,g3,h5)},
      {(a7,b3,c8,d2,e5,f1,g6,h4)},
      {(a6,b4,c2,d8,e5,f7,g1,h3)},
      {(a6,b3,c7,d2,e8,f5,g1,h4)},
      {(a6,b3,c5,d8,e1,f4,g2,h7)},
      {(a5,b7,c2,d6,e3,f1,g8,h4)},
      {(a5,b3,c8,d4,e7,f1,g6,h2)},
      {(a5,b3,c1,d7,e2,f8,g6,h4)},
      {(a4,b2,c7,d3,e6,f8,g1,h5)},
      {(a4,b2,c7,d3,e6,f8,g5,h1)},
      {(a3,b6,c8,d1,e4,f7,g5,h2)}
    ]) →
    assert(∀config ∈ configs : isNonAttacking(config))
  } →

  lemma Eight_Is_Maximum() {
    assert(¬∃config: ChessConfig : (
      countQueens(config) = 9 ∧
      isNonAttacking(config)
    )) →
    apply(PigeonholePrinciple(8_rows, 9_queens)) →
    assert(∃row: Row : countQueensInRow(row) ≥ 2) →
    assert(areAttacking(sameRow))
  } →
  
  apply(Valid_Solutions()) ∧
  apply(Eight_Is_Maximum()) →
  assert(conclusion)
}