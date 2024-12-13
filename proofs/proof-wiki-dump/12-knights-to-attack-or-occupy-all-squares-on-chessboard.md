theorem Min_Knights_Chessboard() {
  assert(
    ∀board ∈ Chessboard ⇒ 
    min_knights(board) = 12
    where min_knights(b) := min{k ∈ ℕ | ∀square ∈ b: (occupied(square) ∨ attacked(square))}
  )
} ↔

proof Min_Knights_Chessboard() {
  // Part 1: Prove 11 or fewer knights insufficient
  lemma Lower_Bound() {
    setVar(critical_squares := {a1, a2, b2, a8, b8, b7, h8, h7, g7, h1, g1, g2}) →
    assert(∀s1, s2 ∈ critical_squares, s1 ≠ s2 ⇒ 
           ¬∃knight_pos: (attacks(knight_pos, s1) ∧ attacks(knight_pos, s2))) →
    assert(|critical_squares| = 12) →
    conclude(∀k < 12 ⇒ ¬sufficient_coverage(k))
  } →

  // Part 2: Prove 12 knights sufficient
  lemma Upper_Bound() {
    setVar(solution := {b3, c3, c4, c7, c6, d6, g6, f6, f5, f2, f3, e3}) →
    assert(|solution| = 12) →
    assert(∀square ∈ board: 
           (∃pos ∈ solution: pos = square ∨ attacks(pos, square))) →
    conclude(sufficient_coverage(12))
  } →

  apply(Lower_Bound()) →
  apply(Upper_Bound()) →
  conclude(min_knights(board) = 12)
}