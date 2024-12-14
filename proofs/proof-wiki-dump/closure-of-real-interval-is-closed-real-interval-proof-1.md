theorem Closure_Of_Real_Interval_Is_Closed() {
  assert(
    ∀I ∈ {intervals} ∧
    (I = (a,b) ∨ I = [a,b) ∨ I = (a,b] ∨ I = [a,b]) ∧
    I^- := closure(I) 
    ⇒ I^- = [a,b]
  )
} ↔

proof Closure_Of_Real_Interval_Is_Closed() {
  cases() {
    case1() {
      assume(I = (a,b)) →
      apply(Closure_Of_Open_Real_Interval()) →
      assert(I^- = [a,b])
    } →
    
    case2() {
      assume(I = [a,b)) →
      apply(Closure_Of_Half_Open_Interval()) →
      assert(I^- = [a,b])
    } →
    
    case3() {
      assume(I = (a,b]) →
      apply(Closure_Of_Half_Open_Interval()) →
      assert(I^- = [a,b])
    } →
    
    case4() {
      assume(I = [a,b]) →
      lemma Closed_Interval_Is_Closed() {
        assert(I is closed in ℝ)
      } →
      apply(Set_Is_Closed_Iff_Equals_Closure()) →
      assert(I^- = I = [a,b])
    }
  } →
  
  apply(Proof_By_Cases()) →
  assert(∀I: I^- = [a,b])
}