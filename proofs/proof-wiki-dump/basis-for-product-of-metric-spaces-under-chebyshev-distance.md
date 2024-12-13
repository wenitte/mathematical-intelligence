theorem Product_Metric_Space_Basis() {
  let M[i] := struct(A[i], d[i]) for i ∈ {1..n} ⊆ ℕ →
  let 𝔸 := ∏[i=1..n](A[i]) →
  let d[∞]: 𝔸 × 𝔸 → ℝ →
  define(
    d[∞](x,y) = max[i=1..n]{d[i](x[i],y[i])}
    where x = (x[1],...,x[n]), y = (y[1],...,y[n]) ∈ 𝔸
  ) →
  let U[i] be open in M[i] for i ∈ {1..n} →
  assert(
    {∏[i=1..n](U[i])} forms_basis_for(open_sets(struct(𝔸,d[∞])))
  )
} ↔

proof Product_Metric_Space_Basis() {
  let U be open_set(struct(𝔸,d[∞])) →
  assert(
    ∀a ∈ U ⇒ ∃δ ∈ ℝ₊(
      B[δ](a) ⊆ U
    )
  ) →
  
  lemma Basic_Open_Set() {
    assert(
      ∀a ∈ U ⇒ 
      ∪[i=1..n](B[δ](a[i])) ⊆ U
    )
  } →
  
  apply(Basic_Open_Set()) →
  
  assert(
    {∏[i=1..n](U[i])} generates(open_sets(struct(𝔸,d[∞])))
  )
}