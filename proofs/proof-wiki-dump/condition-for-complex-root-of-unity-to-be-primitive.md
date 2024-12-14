theorem Primitive_Root_Unity_Condition() {
  assert(
    ∀n,k ∈ ℕ ⇒ (
      αₖ = exp(2πik/n) is_primitive_nth_root ↔ gcd(n,k) = 1
    )
  )
} ↔

proof Primitive_Root_Unity_Condition() {
  setVar(Uₙ = {exp(2πik/n) : 0 ≤ k ≤ n-1}) →
  setVar(V = {1,...,αₖⁿ⁻¹}) →
  
  lemma Forward_Direction() {
    assert(gcd(n,k) = d > 1) →
    ∃n',k' ∈ ℕ : (
      n' = dn ∧ k' = dk
    ) →
    assert(αₖ = exp(2πik'/n')) →
    assert(αₖⁿ' = exp(2πik') = 1) →
    assert(V = {1,...,αⁿ'⁻¹}) →
    assert(|V| = n' < n = |Uₙ|) →
    conclude(Uₙ ≠ V)
  } →

  lemma Reverse_Direction() {
    assert(gcd(n,k) = 1) →
    setVar(exp(2πik/n)ᵈ = exp(2πik/n) = 1) →
    assert(kd/n ∈ ℤ) →
    apply(gcd(n,k) = 1) →
    assert(n|d) →
    assert(d ≥ n) →
    assert(∀i,j < n : i ≠ j ⇒ αᵢ ≠ αⱼ) →
    assert(|V| = |Uₙ|) →
    assert(∀v ∈ V : ∃k ∈ [0,n-1] : v = exp(2πik/n)) →
    conclude(V = Uₙ)
  } →

  apply(Forward_Direction()) ∧
  apply(Reverse_Direction()) →
  conclude(
    αₖ = exp(2πik/n) is_primitive_nth_root ↔ gcd(n,k) = 1
  )
}