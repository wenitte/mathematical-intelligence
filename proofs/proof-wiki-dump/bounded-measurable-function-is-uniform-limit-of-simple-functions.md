theorem BoundedMeasurableFunctionUniformLimit() {
  let(X: MeasurableSpace, Σ: SigmaAlgebra) →
  let(f: X → ℝ̄, bounded: true, measurable: true) →
  assert(
    ∃{fn}n∈ℕ ∈ E(Σ) : [
      (∀ε > 0 : ∃n ∈ ℕ : ∀x ∈ X : |f(x) - fn(x)| < ε) ∧
      (∀n ∈ ℕ : |fn| ≤ |f|)
    ]
  )
}

proof BoundedMeasurableFunctionUniformLimit() {
  # Positive function case
  lemma PositiveCase() {
    assume(f ≥ 0) →
    ∀n ∈ ℕ: define(Akn := {
      {k2^(-n) ≤ f < (k+1)2^(-n)} if k ≠ n2^n,
      {f ≥ n} if k = n2^n
    }) →
    assert(∀k,j: k≠j → Akn ∩ Ajn = ∅) →
    assert(∪k=0^(n2^n) Akn = X) →
    
    define(fn := ∑k=0^(n2^n) k2^(-n)χ(Akn)) →
    
    ∀x ∈ X: when(f(x) < n) → {
      ∃k < n2^n: x ∈ Akn →
      assert(|f(x) - fn(x)| = |f(x) - k2^(-n)| < 2^(-n))
    }
  } →

  # Main proof
  let(ε > 0) →
  choose(n ∈ ℕ: 2^(-n) < ε) →
  assert(∀m ≥ n, ∀x ∈ X: |f(x) - fm(x)| < 2^(-n) < ε) →

  # General case
  define(f = f⁺ - f⁻) →
  apply(PositiveCase(), f⁺) →
  apply(PositiveCase(), f⁻) →
  
  ∃n,n' ∈ ℕ: [
    (∀m ≥ n: ∀x ∈ X: |f⁺(x) - fm⁺(x)| < ε/2) ∧
    (∀m ≥ n': ∀x ∈ X: |f⁻(x) - fm⁻(x)| < ε/2)
  ] →
  
  apply(TriangleInequality()) →
  let(M := max(n,n')) →
  assert(∀m ≥ M, ∀x ∈ X: |f(x) - fm(x)| < ε) →
  
  assert(∀n ∈ ℕ, ∀x ∈ X: |fn(x)| ≤ |f(x)|)
}