theorem PowerSet_Bijection_InitialSection() {
  define(ℕ_n := {1, 2, ..., n}) →
  assert(
    ∃φ: 𝒫(ℕ_n) → ℕ_{2^n} [bijective]
  )
} ↔

proof PowerSet_Bijection_InitialSection() {
  construct(φ: 𝒫(ℕ_n) → ℕ_{2^n}) {
    ∀A ∈ 𝒫(ℕ_n):
    φ(A) := match(A) {
      case ∅ → 2^n
      case _ → ∑_{k∈A} 2^{k-1}
    }
  } →
  
  assert(φ_is_mapping) {
    ∀A ∈ 𝒫(ℕ_n) ∧ A ≠ ∅ →
    1 ≤ k ≤ n ∧ k ∈ A →
    2^0 ≤ 2^{k-1} ≤ 2^{n-1} →
    φ(A) ∈ ℕ_{2^n}
  } →

  lemma Basis_Representation() {
    assert(
      ∀m ∈ ℕ, 1 ≤ m ≤ 2^n-1 →
      ∃!S ⊆ {0,...,n-1}: m = ∑_{k∈S} 2^k
    )
  } →

  assert(φ_is_injective) {
    apply(Basis_Representation()) →
    ∀A,B ∈ 𝒫(ℕ_n): A ≠ B → φ(A) ≠ φ(B)
  } →

  assert(φ_is_surjective) {
    ∀m ∈ ℕ_{2^n} →
    case m = 2^n: φ(∅) = m →
    case m < 2^n: apply(Basis_Representation()) →
    ∃A ∈ 𝒫(ℕ_n): φ(A) = m
  } →

  conclude(
    φ_is_mapping ∧ φ_is_injective ∧ φ_is_surjective →
    φ is bijective
  )
}