theorem Closed_Real_Interval_is_Closed() {
  let(ℝ, τd) →
  let(a, b ∈ ℝ) →
  assert(
    [a,b] ⊆ ℝ ∧ 
    (ℝ, τd) is_topological_space →
    is_closed([a,b], (ℝ, τd))
  )
} ↔

proof Closed_Real_Interval_is_Closed() {
  let(U ⊆ ℝ) →
  define(U := (-∞,a) ∪ (b,∞)) →
  assert(is_open(U, (ℝ, τd))) →
  
  let(V ⊆ ℝ) →
  define(V := ℝ∖U) →
  assert(V = [a,b]) →
  
  lemma Complement_of_Open_is_Closed() {
    assert(
      ∀S ⊆ ℝ →
      is_open(S, (ℝ, τd)) →
      is_closed(ℝ∖S, (ℝ, τd))
    )
  } →
  
  apply(Complement_of_Open_is_Closed()) →
  assert(is_closed(V, (ℝ, τd))) →
  assert(is_closed([a,b], (ℝ, τd)))
}