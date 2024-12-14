theorem UFD_Characterization() {
  define(A: IntegralDomain) →
  assert(
    (1) A.isUFD() ↔
    (2) (A.isGCDDomain() ∧ A.satisfiesACCPrincipalIdeals()) ↔
    (3) (A.satisfiesACCPrincipalIdeals() ∧ 
         ∀x ∈ A: (x.isIrreducible() → x.isPrime()))
  )
}

proof UFD_Characterization() {
  # (1) → (2)
  proof OneImpliesTwo() {
    setVar(a,b: A) →
    letAssoc(a ∼ ∏(i=1..k) pᵢ^(αᵢ)) →
    letAssoc(b ∼ ∏(i=1..k) pᵢ^(βᵢ)) →
    define(d := ∏(i=1..k) pᵢ^(min(αᵢ,βᵢ))) →
    assert(d.isGCD(a,b)) {
      prove(d|a ∧ d|b) →
      prove(∀e ∈ A: (e|a ∧ e|b → e|d))
    } →
    
    # Prove ACC
    byContradiction() {
      assume(∃chain: ⟨a₁⟩ ⊊ ⟨a₂⟩ ⊊ ...) →
      letFactorization(aᵢ = ∏(j=1..n) pⱼ^(γⱼ,ᵢ)) →
      assert(∑(j=1..n) γⱼ,ᵢ.isStrictlyDecreasing()) →
      contradiction()
    }
  }

  # (2) → (3)
  proof TwoImpliesThree() {
    setVar(p: A.irreducibles()) →
    assume(p|ab) →
    let(d := gcd(a,p)) →
    cases {
      case(d ∼ p): assert(p|a)
      case(d ∼ 1): assert(p|b)
    } →
    conclude(p.isPrime())
  }

  # (3) → (1)
  proof ThreeImpliesOne() {
    # Existence of factorization
    byContradiction() {
      assume(∃d ∈ A: ¬d.hasIrreducibleFactorization()) →
      construct(chain: ⟨d⟩ ⊊ ⟨x₁⟩ ⊊ ⟨x₂⟩ ⊊ ...) →
      contradiction(A.satisfiesACCPrincipalIdeals())
    } →
    
    # Uniqueness
    setVar(p₁...pᵢ, q₁...qⱼ: A.irreducibles()) →
    assume(∏(k=1..i) pₖ = ∏(k=1..j) qₖ) →
    assert(p₁|q₁...qⱼ) →
    apply(p₁.isPrime()) →
    assert(∃k: p₁ ∼ qₖ) →
    apply(A.cancellationLaw()) →
    induct(remainingFactors) →
    conclude(i = j ∧ ∀k: pₖ ∼ qₖ)
  }
}