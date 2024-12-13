theorem BrouwerFixedPoint1D() {
  let(f: [a,b] → [a,b]) →
  assert(
    continuous(f) ∧ [a,b] ∈ ℝ →
    ∃ξ ∈ [a,b]: f(ξ) = ξ
  )
} ↔

proof BrouwerFixedPoint1D() {
  lemma IntervalConnected() {
    assert([a,b] is_connected)
  } →
  
  assumeContradiction() {
    assume(¬∃x ∈ [a,b]: f(x) = x) →
    assert(f(a) > a ∧ f(b) < b) →
    
    setVar(U := {x ∈ [a,b] | f(x) > x}) →
    setVar(V := {x ∈ [a,b] | f(x) < x}) →
    
    assert(
      open_in(U, [a,b]) ∧
      open_in(V, [a,b])
    ) →
    
    assert(
      a ∈ U ∧
      b ∈ V ∧
      U ≠ ∅ ∧
      V ≠ ∅
    ) →
    
    assert(U ∪ V = [a,b]) →
    
    conclude(¬is_connected([a,b])) →
    contradicts(IntervalConnected())
  } →
  
  conclude(∃ξ ∈ [a,b]: f(ξ) = ξ)
}