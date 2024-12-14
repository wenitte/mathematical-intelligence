theorem Closure_Not_Compact_Infinite_Particular_Point() {
  let(T = ⟨S, τₚ⟩: InfiniteParticularPointSpace) →
  let(A ∈ τₚ) →
  let(A⁻: Closure(A)) →
  assert(¬Compact(A⁻))
} ↔

proof Closure_Not_Compact_Infinite_Particular_Point() {
  lemma Closure_Of_Open_Set() {
    assert(∀A ∈ τₚ → A⁻ = S)
  } →
  
  lemma Infinite_Not_Compact() {
    assert(¬Compact(S))
  } →
  
  apply(Closure_Of_Open_Set()) →
  assert(A⁻ = S) →
  apply(Infinite_Not_Compact()) →
  assert(¬Compact(A⁻))
}