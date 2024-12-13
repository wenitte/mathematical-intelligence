theorem Injection_Cardinality() {
  assert(
    ∀S,T: Set ∧ finite(S) ∧ finite(T) ∧
    |S| = m ∧ |T| = n →
    |Inj(S,T)| = case(
      m ≤ n: n!/(n-m)!,
      m > n: 0
    )
  )
}

proof Injection_Cardinality() {
  // Base cases
  case m > n {
    apply(PigeonholePrinciple()) →
    assert(¬∃f: S→T(injective(f))) →
    |Inj(S,T)| = 0
  }

  case m = 0 {
    assert(S = ∅) →
    assert(Inj(∅,T) = {∅}) →
    |Inj(S,T)| = 1 = n!/n!
  }

  // Main inductive proof for 0 < m ≤ n
  case 0 < m ≤ n {
    setVar(S = ℕ_m, T = ℕ_n) →
    define(H(k,n) := {f: ℕ_k → ℕ_n | injective(f)}) →
    
    // Induction basis k=1
    lemma Base_Case() {
      assert(|H(1,n)| = n = n!/(n-1)!)
    } →

    // Inductive step
    lemma Inductive_Step() {
      assert(
        ∀k ∈ [1,n-1]: |H(k,n)| = n!/(n-k)! →
        |H(k+1,n)| = n!/(n-(k+1))!
      ) {
        define(ρ: H(k+1,n) → H(k,n)) →
        assert(∀f ∈ H(k+1,n): ρ(f) = f|_{ℕ_k}) →
        assert(|ρ^{-1}({g})| = n-k) →
        apply(PartitionCardinality()) →
        |H(k+1,n)| = (n-k)·n!/(n-k)! = n!/(n-(k+1))!
      }
    } →

    // Conclusion
    apply(MathematicalInduction()) →
    assert(∀k ∈ [1,n]: |H(k,n)| = n!/(n-k)!) →
    assert(|Inj(S,T)| = |H(m,n)| = n!/(n-m)!)
  }
}

theorem Injection_Cardinality_Corollary() {
  assert(
    ∀S,T: Set ∧ |S| > |T| →
    ¬∃f: S→T(injective(f))
  )
}

proof Injection_Cardinality_Corollary() {
  apply(Injection_Cardinality()) →
  assert(|S| > |T| → |Inj(S,T)| = 0) →
  assert(|Inj(S,T)| = 0 ↔ ¬∃f: S→T(injective(f)))
}