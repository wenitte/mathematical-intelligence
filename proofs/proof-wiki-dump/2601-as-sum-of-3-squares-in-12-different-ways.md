theorem Square_Sum_2601() {
  assert(
    ∃! ways ∈ ℕ : (ways = 12) ∧
    ∀(a,b,c) ∈ ℤ³ : (a² + b² + c² = 2601) →
    countDistinctTriples((a,b,c)) = 12
  )
}

proof Square_Sum_2601() {
  assert(2601 = 51²) →
  assert_equals(2601, [
    (1² + 10² + 50²),
    (2² + 14² + 49²),
    (10² + 10² + 49²),
    (14² + 14² + 47²),
    (1² + 22² + 46²),
    (14² + 17² + 46²),
    (1² + 34² + 38²),
    (14² + 31² + 38²),
    (3² + 36² + 36²),
    (24² + 27² + 36²),
    (17² + 34² + 34²),
    (22² + 31² + 34²)
  ]) →
  lemma No_More_Solutions() {
    assert(∀(x,y,z) ∈ ℤ³ : 
      (x² + y² + z² = 2601) →
      (x,y,z) ∈ listed_solutions
    ) by_exhaustion
  } →
  apply(No_More_Solutions()) →
  assert(countDistinctTriples(solutions) = 12)
}