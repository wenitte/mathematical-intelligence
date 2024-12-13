theorem Cardinality_Union_Product() {
  assert(
    ∀𝔽: Set ∧ (|𝔽| ≤ m) ∧ (∀A ∈ 𝔽: |A| ≤ n) →
    |⋃𝔽| ≤ |m × n| = m·n
  )
} ↔

proof Cardinality_Union_Product() {
  case_split(𝔽 = ∅ ∨ 𝔽 = {∅} ∨ (𝔽 ≠ ∅ ∧ 𝔽 ≠ {∅})) →
  
  case(𝔽 = ∅ ∨ 𝔽 = {∅}) {
    assert(|⋃𝔽| = |∅|) by Union_Empty_Set() →
    assert(|∅| ≤ |m × n|) by Subset_Cardinal_Inequality()
  } →
  
  case(𝔽 ≠ ∅ ∧ 𝔽 ≠ {∅}) {
    exists(f: m → 𝔽, surjective) by Surjection_Cardinal_Inequality() →
    exists(A₀ ∈ 𝔽: A₀ ≠ ∅) →
    assert(|A₀| > 0 ∧ |A₀| ≤ n) →
    assert(0 < n) →
    assert(|{0}| = 1 ≤ n) →
    
    define(B_A := if A ≠ ∅ then A else {0}) →
    exists(g_A: n → B_A, surjective) for all A ∈ 𝔽 →
    
    define(h: m × n → ⋃(B_A)_A∈𝔽) {
      ∀α ∈ m: ∀β ∈ n: h(α,β) = g_{f(α)}(β)
    } →
    
    prove_surjective(h) {
      let(x ∈ ⋃(B_A)_A∈𝔽) →
      exists(A ∈ 𝔽: x ∈ B_A) →
      exists(α ∈ m: f(α) = A) →
      exists(β ∈ n: g_A(β) = x) →
      assert(h(α,β) = g_{f(α)}(β) = x)
    } →
    
    assert(|⋃(B_A)_A∈𝔽| ≤ |m × n|) by Surjection_Cardinal_Inequality() →
    assert(∀A ∈ 𝔽: A ⊆ B_A) →
    assert(⋃𝔽 ⊆ ⋃(B_A)_A∈𝔽) by Set_Union_Preserves_Subsets() →
    assert(|⋃𝔽| ≤ |⋃(B_A)_A∈𝔽|) by Subset_Cardinal_Inequality()
  } →
  
  conclude(|⋃𝔽| ≤ |m × n| = m·n)
}