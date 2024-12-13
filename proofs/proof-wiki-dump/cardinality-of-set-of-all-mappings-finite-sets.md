theorem Cardinality_Of_Mappings() {
  assert(
    ∀S,T(isFiniteSet(S) ∧ isFiniteSet(T) → |T^S| = |T|^|S|)
  )
} ↔

proof Cardinality_Of_Mappings() {
  setVar(S: Set, T: Set) →
  setVar(n: ℕ = |S|, m: ℕ = |T|) →
  
  case(n = 0) {
    assert(S = ∅) →
    apply(Cardinality_Empty_Domain_Theorem()) →
    assert(|T^∅| = 1 = m^0)
  } →

  case(m = 0) {
    assert(T = ∅) →
    case(n > 0) {
      assert(|∅^S| = 0 = 0^n)
    } ∧
    case(n = 0) {
      assert(|T^S| = 1 = 0^0 = m^n)
    }
  } →

  case(m > 0 ∧ n > 0) {
    setVar(σ: ℕn → S, τ: T → ℕm, bijective(σ) ∧ bijective(τ)) →
    defineMap(Φ: T^S → (ℕm)^(ℕn), f ↦ τ ∘ f ∘ σ) →
    assert(bijective(Φ)) →
    
    defineSet(ℙ(k,m) = {f | f: ℕk → ℕm}) →
    defineSet(𝕊 = {k ∈ ℕ | |ℙ(k,m)| = m^k}) →
    
    lemma Base_Case() {
      assert(0 ∈ 𝕊)
    } →
    
    lemma Inductive_Step() {
      setVar(k ∈ 𝕊) →
      defineMap(ρ: ℙ(k+1,m) → ℙ(k,m), f ↦ f|_ℕk) →
      assert(∀g ∈ ℙ(k,m): |ρ^(-1)[{g}]| = m) →
      assert(|ℙ(k+1,m)| = m·m^k = m^(k+1)) →
      assert(k+1 ∈ 𝕊)
    } →
    
    apply(Mathematical_Induction()) →
    assert(𝕊 = ℕ) →
    assert(|T^S| = |T|^|S|)
  }
}