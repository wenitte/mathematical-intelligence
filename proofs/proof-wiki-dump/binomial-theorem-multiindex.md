theorem Binomial_Theorem_Multiindex() {
  assert(
    ∀α: MultiIndex, ∀x,y ∈ ℝⁿ where (
      α indexed_by {1,...,n} ∧
      ∀j ∈ {1,...,n}: α_j ≥ 0
    ) ⇒
    (x + y)^α = ∑_{0 ≤ β ≤ α} (α choose β)x^β y^{α-β}
  )
} ↔

proof Binomial_Theorem_Multiindex() {
  setVar(α: MultiIndex, x,y: ℝⁿ) →
  
  lemma MultiIndex_Power_Definition() {
    assert((x + y)^α = ∏_{k=1}^n (x_k + y_k)^{α_k})
  } →
  
  lemma Binomial_Expansion() {
    assert(
      ∏_{k=1}^n (x_k + y_k)^{α_k} = 
      ∏_{k=1}^n ∑_{β_k=0}^{α_k} (α_k choose β_k)x_k^{α_k-β_k}y_k^{β_k}
    )
  } →
  
  lemma Product_Expansion() {
    assert(
      ∏_{k=1}^n ∑_{β_k=0}^{α_k} (α_k choose β_k)x_k^{α_k-β_k}y_k^{β_k} =
      ∑_{β_1=0}^{α_1}...∑_{β_n=0}^{α_n} ∏_{k=1}^n (α_k choose β_k)x_k^{α_k-β_k}y_k^{β_k}
    )
  } →
  
  lemma MultiIndex_Sum_Equivalence() {
    assert(
      ∑_{β_1=0}^{α_1}...∑_{β_n=0}^{α_n} ∏_{k=1}^n (α_k choose β_k)x_k^{α_k-β_k}y_k^{β_k} =
      ∑_{0 ≤ β ≤ α} (α choose β)x^β y^{α-β}
    )
  } →
  
  apply(MultiIndex_Power_Definition()) →
  apply(Binomial_Expansion()) →
  apply(Product_Expansion()) →
  apply(MultiIndex_Sum_Equivalence()) →
  
  conclude((x + y)^α = ∑_{0 ≤ β ≤ α} (α choose β)x^β y^{α-β})
}