theorem AbelianGroupPrimeFactorization() {
  assert(
    ∀G:Group(G.isFinite() ∧ G.isAbelian()) ⇒
    ∃H₁...Hₖ:Subgroup ⇒ (
      G.order() = ∏ᵢ₌₁ᵏ pᵢⁿⁱ ∧
      G = ∏ᵢ₌₁ᵏ Hᵢ ∧
      ∀i ∈ [1,k]: Hᵢ = {x ∈ G: x^(pᵢⁿⁱ) = e} ∧
      isUnique(factorization, upToOrdering=true)
    )
  )
}

proof AbelianGroupPrimeFactorization() {
  setVar(G: Group, G.isFinite() ∧ G.isAbelian()) →
  setVar(k: ℕ) →
  setVar(order: G.order() = ∏ᵢ₌₁ᵏ pᵢⁿⁱ) →
  
  inductionPrinciple(k) {
    base(k=1) {
      assert(trivialCase) →
      conclude(theorem.holds(k=1))
    } →
    
    hypothesis(k-1) {
      assert(
        ∀G':Group(
          G'.order() = ∏ᵢ₌₁ᵏ⁻¹ pᵢⁿⁱ ⇒
          theorem.holds(G')
        )
      )
    } →
    
    step(k) {
      apply(AbelianGroupFactoredByPrime, p₁) →
      assert(H₁ = {x ∈ G: x^(p₁ⁿ¹) = e}) →
      setVar(K: Group, K.order() = ∏ᵢ₌₂ᵏ pᵢⁿⁱ) →
      apply(inductionHypothesis, K) →
      conclude(G = H₁ × ∏ᵢ₌₂ᵏ Hᵢ) →
      
      lemma SubgroupProperties() {
        apply(AbelianSubgroupNormal) →
        apply(SylowPSubgroupDef) →
        conclude(∀i: Hᵢ.isNormalSylowP())
      } →
      
      apply(UniqueSylowPSubgroup) →
      conclude(isUnique(factorization, upToOrdering=true))
    }
  }
}