lemma TotallyBoundedSequentialCompactness() {
  assert(
    ∀A[MetricSpace(A, d)] ∧ TotallyBounded(A, d) →
    ∃f: ℤ₊ × A^ℕ → A^ℕ [
      ∀N ∈ ℤ₊, ∀{xₙ}ₙ∈ℕ ∈ A^ℕ →
      ({yₙ}ₙ∈ℕ := f(N, {xₙ}ₙ∈ℕ)) ∧
      IsSubsequence({yₙ}ₙ∈ℕ, {xₙ}ₙ∈ℕ) ∧
      ∀k,l ∈ ℕ: d(yₖ, yₗ) ≤ 1/N
    ]
  )
} ↔

proof TotallyBoundedSequentialCompactness() {
  setVar(N: ℤ₊) →
  assert(TotallyBounded(A, d) →
    ∃kₙ ∈ ℤ₊, ∃{c₁ᴺ,...,cₖₙᴺ} ∈ A [
      ∀x ∈ A: inf{d(cᵢᴺ,x): 1 ≤ i ≤ kₙ} ≤ 1/(2N)
    ]
  ) →
  
  define(Sₙ := (c₁ᴺ,...,cₖₙᴺ) ∈ ⋃ₖ∈ℤ₊ Aᵏ) →
  apply(CountableChoice()) →
  assert(∃{Sₙ}ₙ∈ℤ₊) →

  setVar({xₙ}ₙ∈ℕ: A^ℕ) →
  assert(ℕ = ⋃ᵢ₌₁ᵏᴺ {n ∈ ℕ: d(xₙ,cᵢᴺ) ≤ 1/(2N)}) →
  
  lemma InfiniteSubset() {
    assert(|ℕ| = ∞ →
      ∃i ∈ [1,kₙ]: |{n ∈ ℕ: d(xₙ,cᵢᴺ) ≤ 1/(2N)}| = ∞
    )
  } →
  
  define(iₙ := min{i ∈ [1,kₙ]: |{n ∈ ℕ: d(xₙ,cᵢᴺ) ≤ 1/(2N)}| = ∞}) →
  define(f(N,{xₙ}ₙ∈ℕ) := {xₘₙ}ₙ∈ℕ) →
  where({m₀ < m₁ < ...} = {n ∈ ℕ: d(xₙ,cᵢₙᴺ) ≤ 1/(2N)}) →
  
  apply(TriangleInequality) →
  assert(∀k,l ∈ ℕ:
    d(xₘₖ,xₘₗ) ≤ d(xₘₖ,cᵢₙᴺ) + d(cᵢₙᴺ,xₘₗ) ≤ 1/(2N) + 1/(2N) = 1/N
  )
}