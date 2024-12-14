theorem Compact_Linear_Transformations_Composition() {
  assert(
    ∀H,K ∈ HilbertSpace ∧
    ∀T ∈ B₀(H,K) ∧ 
    ∀A ∈ B(H) ∧
    ∀B ∈ B(K) ⇒
    (T∘A ∈ B₀(H,K) ∧ B∘T ∈ B₀(H,K))
  )
} ↔

proof Compact_Linear_Transformations_Composition() {
  // First part: proving T∘A is compact
  letSeq(h_n: H, n ∈ ℕ) →
  assert(∃M > 0: ∀n ∈ ℕ, ∥h_n∥_H ≤ M) →
  
  lemma Bounded_Image_Under_A() {
    assert(
      ∀n ∈ ℕ: ∥Ah_n∥_H ≤ ∥A∥_B(H) ∥h_n∥_H ≤ ∥A∥_B(H) M
    )
  } →
  
  apply(T.compactness, {Ah_n}) →
  assert(∃{n_k}: {TAh_{n_k}} converges in K) →
  conclude(T∘A is compact) →

  // Second part: proving B∘T is compact
  letSeq(k_n: K, n ∈ ℕ) →
  assume(sequence {k_n} is bounded) →
  
  apply(T.compactness, {k_n}) →
  assert(∃{n_r}: {Tk_{n_r}} converges in H) →
  
  lemma Operator_Continuity() {
    assert(B is continuous by bounded_linear_operator_continuity)
  } →
  
  apply(B.continuity, {Tk_{n_r}}) →
  assert({BTk_{n_r}} converges in K) →
  conclude(B∘T is compact)
}