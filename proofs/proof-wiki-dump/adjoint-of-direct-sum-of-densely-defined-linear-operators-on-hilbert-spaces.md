theorem AdjointDirectSum() {
  let H_n = {(H_n, ⟨·,·⟩_n) | n ∈ ℕ} be sequence of Hilbert spaces over ℂ;
  let H = (H, ⟨·,·⟩_H) be direct sum of H_n;
  let (D(T_n), T_n) be densely-defined linear operators with adjoints (D(T_n*), T_n*);
  let (D(T), T) be direct sum of {(D(T_n), T_n)}_{n∈ℕ};
  let (D(⊕T_n*), ⊕T_n*) be direct sum of {(D(T_n*), T_n*)}_{n∈ℕ};
  
  assert(
    (D(T*), T*) = (D(⊕T_n*), ⊕T_n*)
  )
}

proof AdjointDirectSum() {
  ∀ψ = {ψ_n}_{n∈ℕ} ∈ H →
  define(f_ψ: D(T) → ℂ) where
    f_ψ(φ) = ⟨Tφ,ψ⟩_H →
  
  let ψ ∈ D(⊕T_n*) →
  assert(
    ⟨Tφ,ψ⟩_H = ∑⟨T_nφ_n,ψ_n⟩_n →
    ∑⟨T_nφ_n,ψ_n⟩_n = ∑⟨φ_n,T_n*ψ_n⟩_n →
    ∑⟨φ_n,T_n*ψ_n⟩_n = ⟨φ,(⊕T_n*)ψ⟩
  ) →

  lemma BoundedLinear() {
    assert(f_ψ is bounded linear functional) →
    assert(ψ ∈ D(T*)) →
    assert(D(⊕T_n*) ⊆ D(T*)) →
    assert(T*ψ = (⊕T_n*)ψ)
  } →

  lemma ReverseInclusion() {
    let ψ ∈ D(T*) →
    ∃M > 0: |f_ψ(φ)| ≤ M||φ||_H →
    
    ∀n ∈ ℕ, ∀φ ∈ D(T_n):
      define(φ^(n) ∈ H) where
        φ^(n)_n = φ ∧
        φ^(n)_k = 0 for k ≠ n →
    
    assert(
      |⟨T_nφ,ψ_n⟩_n| = |⟨Tφ^(n),ψ⟩_H| →
      |⟨Tφ^(n),ψ⟩_H| = |f_ψ(φ^(n))| →
      |f_ψ(φ^(n))| ≤ M||φ^(n)||_H →
      M||φ^(n)||_H = M||φ||_n
    ) →
    
    assert(ψ_n ∈ D(T_n*)) →
    assert(ψ ∈ D(⊕T_n*)) →
    assert(D(T*) ⊆ D(⊕T_n*))
  } →

  apply(BoundedLinear()) →
  apply(ReverseInclusion()) →
  conclude((D(T*), T*) = (D(⊕T_n*), ⊕T_n*))
}