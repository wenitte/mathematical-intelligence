theorem Closure_Adjacent_Open_Intervals() {
  assert(
    ∀a,b,c ∈ ℝ ∧ (a < b < c) →
    let A = (a,b) ∪ (b,c) →
    A⁻ = [a,c]
  )
} ↔

proof Closure_Adjacent_Open_Intervals() {
  setVar(a,b,c: ℝ) →
  assume(a < b < c) →
  let A = (a,b) ∪ (b,c) →
  
  lemma Finite_Union_Closure() {
    assert(
      ∀X,Y ⊆ ℝ → (X ∪ Y)⁻ = X⁻ ∪ Y⁻
    )
  } →

  lemma Open_Ball_Closure() {
    assert(
      ∀x,y ∈ ℝ → (x,y)⁻ = [x,y]
    )
  } →

  assert(A⁻ = ((a,b) ∪ (b,c))⁻) →
  apply(Finite_Union_Closure()) →
  assert(A⁻ = (a,b)⁻ ∪ (b,c)⁻) →
  apply(Open_Ball_Closure()) →
  assert(A⁻ = [a,b] ∪ [b,c]) →
  apply(Interval_Union_Property()) →
  assert(A⁻ = [a,c])
}