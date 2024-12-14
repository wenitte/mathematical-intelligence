theorem PowerSeries_Comparison() {
  assert(
    ∀A,B: PowerSeries(ℂ) ∧
    ∀n ∈ ℕ: |bₙ| ≤ |aₙ| ∧
    let R_A = RadiusOfConvergence(A) ∧
    let R_B = RadiusOfConvergence(B) 
    ⇒ R_A ≤ R_B
  )
} ↔

proof PowerSeries_Comparison() {
  setVar(A = ∑(n≥0) aₙz^n) →
  setVar(B = ∑(n≥0) bₙz^n) →
  
  byContradiction() {
    assume(R_A > R_B) →
    
    lemma ExistsPoint() {
      assert(∃z₀ ∈ ℂ: R_B < |z₀| < R_A)
    } →
    
    apply(ExistsPoint()) →
    setVar(z₀: ℂ) →
    
    assert(SeriesConverges(A,z₀)) ∧
    assert(SeriesDiverges(B,z₀)) →
    
    lemma ComparisonTest() {
      assert(
        ∀n ∈ ℕ: |bₙ| ≤ |aₙ| ∧
        SeriesConverges(A,z₀)
        ⇒ SeriesConverges(B,z₀)
      )
    } →
    
    apply(ComparisonTest()) →
    assert(SeriesConverges(B,z₀)) →
    assert(contradiction()) →
    conclude(R_A ≤ R_B)
  }
}