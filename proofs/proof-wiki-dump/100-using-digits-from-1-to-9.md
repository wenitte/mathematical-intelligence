theorem MakeHundred() {
  assert(
    ∃e ∈ Expressions: (
      useDigits(1..9) ∧
      useOperators({+, -, ×, ÷, ()}) ∧
      evaluate(e) = 100
    )
  )
} ↔

proof MakeHundred() {
  let Solution1 := {
    setExpr(1 + 2 + 3 + 4 + 5 + 6 + 7 + (8 × 9)) →
    assert(evaluate(Solution1) = 100)
  } →

  let Solution2 := {
    setExpr(123 - 45 - 67 + 89) →
    assert(evaluate(Solution2) = 100)
  } →

  let Solution3 := {
    setExpr(98 - 76 + 54 + 3 + 21) →
    assert(evaluate(Solution3) = 100)
  } →

  let Solution4 := {
    setExpr((9 × 8) + 7 + 6 + 5 + 4 + 3 + 2 + 1) →
    assert(evaluate(Solution4) = 100)
  } →

  lemma ValidSolutions() {
    assert(
      ∀s ∈ {Solution1, Solution2, Solution3, Solution4}:
      (digitSet(s) = {1,2,3,4,5,6,7,8,9} ∧
       operators(s) ⊆ {+, -, ×, ÷, ()})
    )
  } →
  
  apply(ValidSolutions()) →
  assert(∃e ∈ Expressions: evaluate(e) = 100)
}