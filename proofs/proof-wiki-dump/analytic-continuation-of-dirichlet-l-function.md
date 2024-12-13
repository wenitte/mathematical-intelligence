theorem Dirichlet_L_Function_Analytic_Continuation() {
  assert(
    ∀χ: (ℤ/qℤ)ˣ → ℂˣ [χ is Dirichlet character mod q] ∧
    let L(s,χ) be Dirichlet L-function for χ →
    (χ trivial → L(s,χ) has analytic continuation to ℂ\{1} with simple pole at s=1) ∧
    (χ non-trivial → L(s,χ) is analytic on Re(s) > 0)
  )
}

proof Dirichlet_L_Function_Analytic_Continuation() {
  case(χ trivial) {
    assert(L(s,χ) = ζ(s)∙∏[p|q](1 - p⁻ˢ)) →
    apply(Poles_Of_Riemann_Zeta) {
      assert(ζ(s) analytic on ℂ\{1} with simple pole at s=1)
    } →
    assert(L(s,χ) = ζ(s)∙[constant term]) →
    conclude(L(s,χ) analytic on ℂ\{1} with simple pole at s=1)
  }

  case(χ non-trivial) {
    apply(Orthogonality_Relations) {
      assert(∑[x∈G] χ(x) = 0)
    } →
    assert(χ is q-periodic ∧ χ(n)=0 when gcd(n,q)≠1) →
    
    lemma Bounded_Partial_Sums() {
      setVar(M,N ∈ ℕ) →
      setVar(d: M+qd ≤ N ≤ M+q(d+1)) →
      assert(∑[n=M→N] χ(n) = ∑[n=M+qd→N] χ(n)) →
      assert(|∑[n=M+qd→N] χ(n)| ≤ q)
    } →
    
    apply(Convergence_Dirichlet_Series_Bounded_Sums) {
      assert(bounded partial sums → local uniform convergence) →
      conclude(L(s,χ) analytic on Re(s) > 0)
    }
  }
}