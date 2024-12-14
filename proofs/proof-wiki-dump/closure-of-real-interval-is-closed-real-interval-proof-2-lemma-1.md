theorem Interval_Closure_Lemma() {
  assert(
    let I: RealInterval ∧
    (I = (a,b) ∨ I = [a,b) ∨ I = (a,b] ∨ I = [a,b]) ∧
    I ≠ ∅ ∧
    let I⁻: Closure(I) →
    ∀x ∈ [a,b] ⇒ x ∈ I⁻
  )
} ↔

proof Interval_Closure_Lemma() {
  setVar(x: ℝ) ∧
  assume(x ∈ [a,b]) →
  setVar((c,d): OpenInterval) ∧
  assume(x ∈ (c,d)) →
  
  case_split(
    case1(a < x < b) {
      assert(x ∈ I) →
      assert(x ∈ (c,d)) →
      conclude((c,d) ∩ I ≠ ∅)
    } ∨
    
    case2(x = a) {
      if(a ∈ I) {
        assert(x ∈ I) →
        conclude((c,d) ∩ I ≠ ∅)
      } →
      if(a ∉ I) {
        assert(a < b) →
        setVar(r = min(d,b)) →
        assert(a < r) →
        apply(Dense_Ordering_Reals) {
          ∃s ∈ ℝ: (a < s < r)
        } →
        assert(c < a < s < r ≤ d) ∧
        assert(a < s < b) →
        conclude(s ∈ (c,d) ∧ s ∈ I)
      }
    } ∨
    
    case3(x = b) {
      setVar(l = max(c,a)) →
      apply(Dense_Ordering_Reals) {
        ∃s ∈ ℝ: (l < s < b)
      } →
      assert(c ≤ l < s < b < d) ∧
      assert(a ≤ l < s < b) →
      conclude(s ∈ (c,d) ∧ s ∈ I)
    }
  ) →
  
  conclude(x ∈ I⁻)
}