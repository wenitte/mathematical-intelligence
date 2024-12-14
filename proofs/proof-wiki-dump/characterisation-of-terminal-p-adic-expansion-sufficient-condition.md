theorem Terminal_P_adic_Expansion_Sufficient() {
  assert(
    ∀p ∈ Primes ∧ ∀a ∈ ℕ ∧ ∀k ∈ ℤ ⇒
    let(x = a/p^k) ⇒
    is_terminal_p_adic(x)
  )
} ↔

proof Terminal_P_adic_Expansion_Sufficient() {
  apply(Basis_Representation_Theorem) →
  assert(
    ∃n ∈ ℕ ∧ ∃{dⱼ}ⱼ₌₀ⁿ ∈ ℕ ⇒
    (a = ∑ⱼ₌₀ⁿ dⱼp^j) ∧
    (p^n ≤ a < p^(n+1)) ∧
    (∀j ∈ [0,n]: 0 ≤ dⱼ < p)
  ) →
  
  setVar(x = a/p^k) →
  assert(x = (∑ⱼ₌₀ⁿ dⱼp^j)/p^k) →
  assert(x = ∑ⱼ₌₀ⁿ dⱼp^(j-k)) →
  
  letVar(i = j-k) →
  assert(x = ∑ᵢ₌₋ₖⁿ⁻ᵏ d_{i+k}p^i) →
  
  define(m = cases(
    -k when -k ≤ 0,
    0 when 0 < -k
  )) →
  
  define(eᵢ = cases(
    d_{i+k} when -k ≤ i ≤ n-k,
    0 when m ≤ i < -k,
    0 when i > n-k
  )) →
  
  assert(x = ∑ᵢ₌ₘ^∞ eᵢp^i) →
  assert(
    (∀i ≥ m: 0 ≤ eᵢ < p) ∧
    (∀i > n-k: eᵢ = 0)
  ) →
  
  apply(P_adic_Expansion_Uniqueness_Theorem) →
  conclude(is_terminal_p_adic(x))
}