theorem Canonical_Injection_Monomorphism() {
  let(R: Ring, +_R: Operation, ×_R: Operation) →
  let(G: CartesianProduct, +: Operation, ∘: Operation)_R →
  let(G_n: Sequence[RModule]) →
  assert(
    ∀j ∈ [1,n] ⇒ inj_j: G_j → G is_monomorphism
  )
} ↔

proof Canonical_Injection_Monomorphism() {
  setVar(j: ℕ, j ∈ [1,n]) →
  
  lemma Injection_Properties() {
    assert(
      (∀x,y ∈ G_j: inj_j(x +_j y) = inj_j(x) + inj_j(y)) ∧
      (∀x_j ∈ G_j: ∀λ ∈ R: inj_j(λ ∘_j x_j) = λ ∘ inj_j(x_j))
    )
  } →

  apply(Canonical_Injection_is_Monomorphism()) →
  
  proof Scalar_Multiplication() {
    setVar(x_j: G_j, λ: R) →
    assert(
      inj_j(λ ∘_j x_j) = 
      (e₁,...,λ ∘_j x_j,...,e_n) by_def(Canonical_Injection) →
      λ ∘ (e₁,...,x_j,...,e_n) by_def(Cartesian_Product) →
      λ ∘ inj_j(x_j) by_def(Canonical_Injection)
    )
  } →

  assert(
    Injection_Properties() ∧ 
    Scalar_Multiplication() ⇒
    inj_j is_monomorphism
  )
}

theorem Alternative_Proof() {
  let(G: Function[A → ∪_{a∈A} G_a]) →
  
  proof Homomorphism_Cases() {
    setVar(a,b: A, x,y: G_a, r: R) →
    
    case b_equals_a() {
      assert(
        inj_a(x + y)(b) = x + y = inj_a(x)(b) + inj_a(y)(b) ∧
        inj_a(rx)(b) = rx = r·inj_a(x)(b)
      )
    } →
    
    case b_not_equals_a() {
      assert(
        inj_a(x + y)(b) = 0 = inj_a(x)(b) + inj_a(y)(b) ∧
        inj_a(rx)(b) = 0 = r·inj_a(x)(b)
      )
    }
  } →
  
  apply(Canonical_Injection_is_Injection()) →
  assert(inj_a is_monomorphism)
}