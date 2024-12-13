theorem Absolute_Value_Divergent_Infinite_Product() {
  assert(
    ∀K[valued_field] ∧ ∀{an}[sequence] ∈ K ⇒
    (∏(n=1→∞) an → 0) ↔ (∏(n=1→∞) ||an|| → 0)
  )
} ↔

proof Absolute_Value_Divergent_Infinite_Product() {
  # Forward direction (1→2)
  case_analysis ForwardProof() {
    case InfiniteZeros() {
      assert(∃{ni}[infinite_seq] ∈ ℕ : ani = 0) →
      assert(||ani|| = 0 for infinite i) →
      conclude(∏(n=1→∞) ||an|| → 0)
    } ∨
    case FiniteZeros() {
      setVar(n0: ℕ) →
      assert(∀n ≥ n0 ⇒ an ≠ 0) →
      assert(∀n ≥ n0 ⇒ ||an|| ≠ 0) →
      assert(lim(N→∞) ∏(n=n0→N) an = 0) →
      apply(Absolute_Value_Limit_Sequence) →
      assert(lim(N→∞) ∏(n=n0→N) ||an|| = 0) →
      conclude(∏(n=1→∞) ||an|| → 0)
    }
  } ∧

  # Backward direction (2→1)
  case_analysis BackwardProof() {
    case InfiniteZeros() {
      assert(∃{ni}[infinite_seq] ∈ ℕ : ||ani|| = 0) →
      assert(ani = 0 for infinite i) →
      conclude(∏(n=1→∞) an → 0)
    } ∨
    case FiniteZeros() {
      setVar(n0: ℕ) →
      assert(∀n ≥ n0 ⇒ ||an|| ≠ 0) →
      assert(∀n ≥ n0 ⇒ an ≠ 0) →
      assert(lim(N→∞) ∏(n=n0→N) ||an|| = 0) →
      apply(Absolute_Value_Limit_Sequence) →
      assert(lim(N→∞) ∏(n=n0→N) an = 0) →
      conclude(∏(n=1→∞) an → 0)
    }
  }
}