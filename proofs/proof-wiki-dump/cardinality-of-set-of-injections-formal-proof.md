theorem Cardinality_Of_Injections() {
  let(S, T: FiniteSet)
  let(m = |S|, n = |T|)
  assert(
    |Inj(S,T)| = {
      n!/(n-m)! if m ≤ n
      0         if m > n
    }
  )
} ↔

proof Cardinality_Of_Injections() {
  case m > n {
    apply(PigeonholePrinciple()) →
    assert(¬∃f:S→T(Injective(f))) →
    conclude(|Inj(S,T)| = 0)
  } ∧

  case m = 0 {
    assert(S = ∅) →
    assert(Inj(∅,T) = {∅}) →
    conclude(|Inj(S,T)| = 1 = n!/n!)
  } ∧

  case 0 < m ≤ n {
    setVar(S = ℕ_m, T = ℕ_n) →
    define(H(k,n) = Inj(ℕ_k, ℕ_n)) →
    define(S = {k ∈ [1,n] : |H(k,n)| = n!/(n-k)!}) →

    lemma Base_Case() {
      assert(|H(1,n)| = n) →
      assert(n = n!/(n-1)!) →
      conclude(1 ∈ S)
    } →

    lemma Inductive_Step() {
      setVar(k ∈ S, k < n) →
      define(ρ: H(k+1,n) → H(k,n)) {
        ∀f ∈ H(k+1,n): ρ(f) = f|_{ℕ_k}
      } →
      define(g_a(x) = {
        g(x) if x ∈ ℕ_k
        a    if x = k
      }) →
      assert(∀g ∈ H(k,n): ρ⁻¹({g}) = {g_a: a ∈ ℕ_n - g(ℕ_k)}) →
      assert(|ℕ_n - g(ℕ_k)| = n-k) →
      assert(|H(k+1,n)| = (n-k)|H(k,n)|) →
      assert(|H(k+1,n)| = (n-k)n!/(n-k)! = n!/(n-(k+1))!) →
      conclude(k+1 ∈ S)
    } →

    apply(InductionPrinciple()) →
    conclude(S = [1,n]) →
    conclude(m ∈ S) →
    conclude(|Inj(S,T)| = n!/(n-m)!)
  }
}