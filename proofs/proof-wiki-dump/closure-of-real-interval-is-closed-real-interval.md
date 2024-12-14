theorem Interval_Closure_Is_Closed() {
  assert(
    ∀I ∈ RealIntervals ∧
    (I = (a,b) ∨ I = [a,b) ∨ I = (a,b] ∨ I = [a,b]) →
    Closure(I) = [a,b]
  )
} ↔

proof Interval_Closure_Is_Closed() {
  setVar(I: RealInterval) →
  cases(
    case(I = (a,b)) {
      apply(Open_Interval_Closure_Theorem()) →
      assert(Closure(I) = [a,b])
    },
    case(I = [a,b)) {
      apply(Half_Open_Interval_Closure_Theorem()) →
      assert(Closure(I) = [a,b])
    },
    case(I = (a,b]) {
      apply(Half_Open_Interval_Closure_Theorem()) →
      assert(Closure(I) = [a,b])
    },
    case(I = [a,b]) {
      assert(I.isClosed()) →
      apply(Closed_Set_Equals_Closure()) →
      assert(Closure(I) = [a,b])
    }
  ) →
  
  lemma Point_In_Closure_Characterization() {
    assert(
      ∀x ∈ ℝ →
      (x ∈ Closure(I) ↔ 
       ∀U ∈ OpenSets(ℝ) → 
       (x ∈ U → ∃y ∈ I ∩ U))
    )
  } →
  
  lemma Points_In_Closed_Interval_In_Closure() {
    assert(
      ∀x ∈ [a,b] → x ∈ Closure(I)
    )
  } →
  
  lemma Points_Outside_Closed_Interval_Not_In_Closure() {
    assert(
      ∀x ∉ [a,b] → x ∉ Closure(I)
    )
  } →
  
  apply(Points_In_Closed_Interval_In_Closure()) →
  apply(Points_Outside_Closed_Interval_Not_In_Closure()) →
  assert(Closure(I) = [a,b])
}