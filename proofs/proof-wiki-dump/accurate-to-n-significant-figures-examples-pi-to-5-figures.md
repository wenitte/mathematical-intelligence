theorem Pi_5_Significant_Figures() {
  assert(
    ∃n ∈ ℝ: n ≈ π ∧ 
    n is accurate to 5 significant figures ∧
    n = 3.1416
  )
}

proof Pi_5_Significant_Figures() {
  setVar(π_expansion: ℝ) →
  assert(π_expansion = 3.14159265358979323846264338327950288419710...) →
  
  lemma Compare_Differences() {
    assert(
      3.1416 - 3.14159 < 3.14159... - 3.14150 ∧
      |3.1416 - π| < 5 × 10^(-5)
    )
  } →
  
  apply(Compare_Differences()) →
  
  lemma Rounding_Rule() {
    assert(
      ∀x ∈ ℝ: |x - rounded(x)| ≤ 5 × 10^(-n) → 
      rounded(x) is accurate to n significant figures
    )
  } →
  
  apply(Rounding_Rule()) →
  
  assert(
    3.1416 is π rounded to 5 significant figures
  )
}