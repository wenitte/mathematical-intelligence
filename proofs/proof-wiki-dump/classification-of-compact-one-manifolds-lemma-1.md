theorem Compact_One_Manifolds_Lemma_1() {
  assert(
    ∀f: [a,b] → ℝ,
    (f ∈ C^∞ ∧ 
     ∃c ∈ (a,b): 
       (∀x ∈ [a,b]\{c}: f'(x) > 0)) →
    ∃g: [a,b] → ℝ: 
      (g ∈ C^∞ ∧ 
       ∀x ∈ [a,b]: g'(x) > 0 ∧
       ∃ε > 0: ∀x ∈ ([a,a+ε] ∪ [b-ε,b]): g(x) = f(x))
  )
} ↔

proof Compact_One_Manifolds_Lemma_1() {
  setVar(f: [a,b] → ℝ, c ∈ (a,b)) →
  
  lemma Exists_Bump_Function() {
    assert(
      ∃r ∈ C^∞([a,b]) : 
        (r ≥ 0 ∧
         supp(r) ⊂ (a,b) ∧
         ∃δ > 0: ∀x ∈ (c-δ,c+δ): r(x) = 1 ∧
         ∫[a,b] r(s)ds = 1)
    )
  } →

  apply(Exists_Bump_Function()) →
  setVar(r: bump_function) →
  
  define(
    k = f(b) - f(a) - ∫[a,b] f'(s)(1-r(s))ds
  ) →
  
  define(
    g(x) = f(a) + ∫[a,x] (k·r(s) + f'(s)(1-r(s)))ds
  ) →
  
  assert(
    g ∈ C^∞([a,b]) ∧
    ∀x ∈ [a,b]: g'(x) = k·r(x) + f'(x)(1-r(x)) > 0 ∧
    g(a) = f(a) ∧
    g(b) = f(b)
  )
}