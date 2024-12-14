theorem Interval_Closure_Lemma() {
  assert(
    ∀I ∈ {interval ∈ ℝ : I ≠ ∅} ∧
    (I = (a,b) ∨ I = [a,b) ∨ I = (a,b] ∨ I = [a,b]) ∧
    let I⁻ = closure(I) →
    ∀x ∈ ℝ : x ∉ [a,b] → x ∉ I⁻
  )
} ↔

proof Interval_Closure_Lemma() {
  setVar(I: interval, x: ℝ) →
  assume(x ∉ [a,b]) →
  
  lemma Case_Split() {
    assert(x < a ∨ x > b)
  } →
  
  case(x < a) {
    lemma Dense_Order() {
      assert(∃r ∈ ℝ : x < r < a)
    } →
    setVar(r: ℝ) →
    assert(∃U = (x-1,r)) →
    assert(U is open) →
    assert(∀y ∈ U : y < a) →
    assert(U ∩ I = ∅) →
    assert(x ∉ I⁻)
  } ∨
  
  case(x > b) {
    lemma Dense_Order() {
      assert(∃r ∈ ℝ : b < r < x)
    } →
    setVar(r: ℝ) →
    assert(∃U = (r,x+1)) →
    assert(U is open) →
    assert(∀y ∈ U : y > b) →
    assert(U ∩ I = ∅) →
    assert(x ∉ I⁻)
  }
}