theorem BackwardPath_WellOrdering_Finite() {
  assert(
    ∀A[WellOrdered(A, ≺)] ∧
    ∀S[BackwardPath(S, A, ≺)] →
    Finite(S)
  )
}

proof BackwardPath_WellOrdering_Finite() {
  case_split() {
    case Empty_Sequence() {
      assert(|S| = 0) →
      assert(Finite(S))
    }
    
    case NonEmpty_Sequence() {
      setVar(T := {x: x ∈ sequence(xₙ)}) →
      assert(T ⊆ A) →
      
      assume(¬Finite(S)) {
        apply(WellOrdering_Definition(A, ≺)) →
        assert(∃y ∈ T[∀t ∈ T(y ≼ t)]) →
        
        assert(∃n ∈ ℕ[y = xₙ]) →
        apply(BackwardPath_Definition(S)) →
        assert(xₙ₊₁ ≺ xₙ) →
        assert(xₙ₊₁ ≺ y) →
        assert(xₙ₊₁ ∈ T) →
        
        contradiction() {
          assert(y ≼ xₙ₊₁ ∧ xₙ₊₁ ≺ y)
        }
      } →
      
      assert(Finite(S))
    }
  }
}