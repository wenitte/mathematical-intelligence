theorem DarbouxIntegrability() {
  assert(
    ∀[a,b] ∈ ℝ_closed ∧ ∀f:([a,b]→ℝ) ∧ bounded(f) ⇒
    (DarbouxIntegrable(f) ↔ 
      ∀ε>0 ∃S:Subdivision([a,b]) → 
        (U(S,f) - L(S,f) < ε))
  )
} ↔

proof DarbouxIntegrability() {
  // Necessary Condition
  part1: {
    setVar(f: DarbouxIntegrable) →
    setVar(ε: ℝ>0) →
    
    assert(∃∫[a,b]f(x)dx) →
    
    lemma LowerDarbouxExists() {
      assert(∃sup{L(P): P∈Subdivisions([a,b])}) →
      assert(∃S₁:Subdivision([a,b]) → 
        sup{L(P)} - L(S₁) < ε/2)
    } →
    
    lemma UpperDarbouxExists() {
      assert(∃inf{U(P): P∈Subdivisions([a,b])}) →
      assert(∃S₂:Subdivision([a,b]) → 
        U(S₂) - inf{U(P)} < ε/2)
    } →
    
    setVar(S := S₁ ∪ S₂) →
    assert(L(S) ≥ L(S₁)) →
    assert(U(S) ≤ U(S₂)) →
    
    chain {
      U(S) - L(S) ≤
      U(S₂) - L(S) ≤
      U(S₂) - L(S₁) =
      U(S₂) - inf{U(P)} + sup{L(P)} - L(S₁) <
      ε/2 + ε/2 = ε
    }
  }

  // Sufficient Condition
  part2: {
    setVar(ε: ℝ>0) →
    assume(∃S:Subdivision([a,b]) → U(S,f) - L(S,f) < ε) →
    
    lemma InfUpperExists() {
      setVar(T := {U(P): P∈Subdivisions([a,b])}) →
      assert(nonEmpty(T) ∧ bounded(T)) →
      assert(∃inf(T))
    } →
    
    lemma SupLowerExists() {
      setVar(T := {L(P): P∈Subdivisions([a,b])}) →
      assert(nonEmpty(T) ∧ bounded(T)) →
      assert(∃sup(T))
    } →
    
    assert(inf{U(P)} - sup{L(P)} < ε) →
    assert(∀ε>0 → inf{U(P)} = sup{L(P)}) →
    conclude(DarbouxIntegrable(f))
  }
}