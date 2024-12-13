theorem AbelianGroupPrimePowerOrder() {
  assert(
    ∀G: Group, (
      isPrimePowerOrder(G) ∧ isAbelian(G) ∧
      ∃a ∈ G: (isMaximalOrder(a, G))
    ) ⇒ 
    ∃K ≤ G: G ≅ ⟨a⟩ × K
  )
}

proof AbelianGroupPrimePowerOrder() {
  setVar(G: Group, p: Prime, n: ℕ) →
  assert(|G| = p^n) →
  
  inductionBase(n = 1) {
    apply(PrimeGroupIsCyclic) →
    assert(G = ⟨a⟩ × ⟨e⟩)
  } →

  inductionHyp(k < n) {
    assume(∀H: (|H| = p^k ∧ isAbelian(H)) ⇒ 
           ∃a,K: H ≅ ⟨a⟩ × K)
  } →

  inductionStep() {
    setVar(a: maximalOrderElement(G)) →
    setVar(m: ℕ, |a| = p^m) →
    assert(∀x ∈ G: x^(p^m) = e) →
    
    lemma IntersectionTrivial() {
      setVar(b ∈ G: b ∉ ⟨a⟩) →
      assert(b^p ∈ ⟨a⟩) →
      setVar(i ∈ ℤ: b^p = a^i) →
      assert(p | i) →
      setVar(c = a^(-j)b: j = i/p) →
      assert(|c| = p ∧ c ∉ ⟨a⟩) →
      assert(⟨a⟩ ∩ ⟨b⟩ = ⟨e⟩)
    } →

    setVar(G̅ = G/⟨b⟩) →
    assert(|a̅| = |a| = p^m) →
    assert(|G̅| = p^(n-1)) →
    
    apply(inductionHyp(G̅)) →
    assert(∃K̅: G̅ ≅ ⟨a̅⟩ × K̅) →
    
    setVar(K = preimage(K̅)) →
    assert(|K| = p|K̅|) →
    assert(⟨a⟩ ∩ K = ⟨e⟩) →
    assert(|⟨a⟩K| = |⟨a⟩||K| = |G|) →
    
    apply(InternalDirectProductTheorem) →
    assert(G ≅ ⟨a⟩ × K)
  }
}