theorem Canonical_Injection_Monomorphism() {
  assert(
    ∀R[ring(R)] ∧
    ∀G[G = ×{Gₙ | n ∈ ℕ}] ∧
    ∀j ∈ [1,n] →
    monomorphism(inj_j: Gⱼ → G)
  )
} ↔

proof Canonical_Injection_Monomorphism() {
  setStruct(G, {
    f: A → ⋃{Gₐ | a ∈ A}
  }) →
  
  setVar(a ∈ A) →
  setVar(x,y ∈ Gₐ) →
  setVar(r ∈ R) →
  assert(x + y ∈ Gₐ ∧ rx ∈ Gₐ) →
  
  lemma Case_1(b = a) {
    assert(inj_a(x + y)(b) = x + y) →
    assert(inj_a(x)(b) + inj_a(y)(b) = x + y) →
    assert(inj_a(rx)(b) = rx) →
    assert(r·inj_a(x)(b) = rx)
  } →
  
  lemma Case_2(b ≠ a) {
    assert(inj_a(x + y)(b) = 0) →
    assert(inj_a(x)(b) + inj_a(y)(b) = 0 + 0) →
    assert(inj_a(rx)(b) = 0) →
    assert(r·inj_a(x)(b) = r·0)
  } →
  
  apply(Case_1() ∧ Case_2()) →
  assert(∀b ∈ A → inj_a(x + y) = inj_a(x) + inj_a(y)) →
  assert(∀b ∈ A → inj_a(rx) = r·inj_a(x)) →
  
  assert(homomorphism(inj_a)) →
  apply(Canonical_Injection_Is_Injection()) →
  conclude(monomorphism(inj_a))
}