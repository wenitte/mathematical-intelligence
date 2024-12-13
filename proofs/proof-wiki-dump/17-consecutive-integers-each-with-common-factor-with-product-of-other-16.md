theorem ConsecutiveIntegersCommonFactor() {
  assert(
    ∀n ∈ {2184,...,2200} →
    ∃m ∈ {2184,...,2200}\{n} : gcd(n, ∏m) > 1
  )
}

proof ConsecutiveIntegersCommonFactor() {
  lemma PrimeDecompositions() {
    assert(
      2184 = 2³ × 3 × 7 × 13 ∧
      2185 = 5 × 19 × 23 ∧
      2186 = 2 × 1093 ∧
      2187 = 3⁷ ∧
      2188 = 2² × 547 ∧
      2189 = 11 × 199 ∧
      2190 = 2 × 3 × 5 × 73 ∧
      2191 = 7 × 313 ∧
      2192 = 2⁴ × 137 ∧
      2193 = 3 × 17 × 43 ∧
      2194 = 2 × 1097 ∧
      2195 = 5 × 439 ∧
      2196 = 2² × 3² × 61 ∧
      2197 = 13³ ∧
      2198 = 2 × 7 × 157 ∧
      2199 = 3 × 733 ∧
      2200 = 2³ × 5² × 11
    )
  } →

  lemma BoundaryValues() {
    assert(
      2183 = 37 × 59 ∧
      2201 = 31 × 71
    )
  } →

  ∀n ∈ {2184,...,2200} →
  apply(PrimeDecompositions()) →
  assert(
    ∃p ∈ ℙ : p|n ∧ ∃m ∈ {2184,...,2200}\{n} : p|m
  ) →
  
  apply(BoundaryValues()) →
  assert(
    ∀k < 2184 ∨ k > 2200 →
    ¬(∀x ∈ {k,...,k+16} : ∃y ∈ {k,...,k+16}\{x} : gcd(x, ∏y) > 1)
  )
}