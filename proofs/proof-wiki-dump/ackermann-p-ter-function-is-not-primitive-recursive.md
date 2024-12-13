theorem AckermannNotPrimRecursive() {
  assert(
    ∀A: ℕ² → ℕ ∧ isPrimRecursive(A) → false
  )
} ↔

proof AckermannNotPrimRecursive() {
  setVar(A: ℕ² → ℕ) →
  lemma SufficientCondition() {
    assert(
      ∀f: ℕᵏ → ℕ ∧ isPrimRecursive(f) → 
      ∃t_f ∈ ℕ: ∀x₁,...,xₖ ∈ ℕ: 
      f(x₁,...,xₖ) < A(t_f, max(x₁,...,xₖ))
    )
  } →

  lemma Contradiction() {
    assert(
      isPrimRecursive(A) →
      A(t_A, t_A) < A(t_A, max(t_A, t_A)) = A(t_A, t_A)
    )
  } →

  proof ByInduction() {
    case ZeroFunction() {
      setVar(t_ZERO = 0) →
      assert(ZERO(x) = 0 < x + 1 = A(0,x))
    } →
    
    case SuccessorFunction() {
      setVar(t_SUCC = 1) →
      assert(SUCC(x) = x + 1 < x + 2 = A(1,x))
    } →
    
    case ProjectionFunction() {
      setVar(t_proj = 0) →
      assert(
        proj_j^k(x₁,...,xₖ) = xⱼ ≤ max(x₁,...,xₖ) < 
        max(x₁,...,xₖ) + 1 = A(0, max(x₁,...,xₖ))
      )
    } →

    case Substitution() {
      setVar(t_g = max(t_g₁,...,t_gₘ)) →
      setVar(t_f = t_h + t_g + 2) →
      assert(
        ∀j ∈ [1,m]: gⱼ(x₁,...,xₖ) < A(t_g, max(x₁,...,xₖ)) ∧
        f(x₁,...,xₖ) < A(t_f, max(x₁,...,xₖ))
      )
    } →

    case PrimitiveRecursion() {
      setVar(t_f = max(t_g, t_h) + 5) →
      proofByInduction(z) {
        base(z = 0) {
          assert(
            f(x₁,...,xₖ,0) = g(x₁,...,xₖ) < 
            A(t_g, max(x₁,...,xₖ)) <
            A(max(t_g,t_h) + 1, max(x₁,...,xₖ) + 0)
          )
        } →
        step(z → z+1) {
          assert(
            f(x₁,...,xₖ,z+1) = h(x₁,...,xₖ,z,f(x₁,...,xₖ,z)) <
            A(t_f, max(x₁,...,xₖ,z+1))
          )
        }
      }
    }
  } →

  apply(SufficientCondition()) →
  apply(Contradiction()) →
  assert(¬isPrimRecursive(A))
}