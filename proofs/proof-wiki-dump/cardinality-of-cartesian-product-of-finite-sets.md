theorem Cardinality_Cartesian_Product() {
  assert(
    ∀S,T[finite_sets(S,T) ⇒ |S × T| = |S| × |T|]
  )
} ↔

proof Cardinality_Cartesian_Product() {
  setVar(S: Set, T: Set, n: ℕ, m: ℕ) →
  assert(|S| = n ∧ |T| = m) →
  
  lemma Zero_Case() {
    assert(n = 0 ∨ m = 0 ⇒ S × T = ∅) →
    assert(|∅| = 0) →
    assert(n × m = 0 = |S × T|)
  } →

  assume(n > 0 ∧ m > 0) →
  
  lemma Single_Element_Product() {
    setVar(a: Element, g_a: Function) →
    assert(∀a ∈ S, g_a: T → {a} × T) →
    assert(∀y ∈ T, g_a(y) = (a,y)) →
    assert(bijective(g_a)) →
    assert(|{a} × T| = m)
  } →
  
  lemma Partition_Construction() {
    setVar(𝕋: Set, h: Function) →
    assert(𝕋 = {{a} × T: a ∈ S}) →
    assert(h: S → 𝕋) →
    assert(∀a ∈ S, h(a) = {a} × T) →
    assert(bijective(h)) →
    assert(|𝕋| = n)
  } →
  
  apply(Single_Element_Product()) →
  apply(Partition_Construction()) →
  assert(𝕋 partitions S × T) →
  apply(Number_Elements_Partition()) →
  assert(|S × T| = n × m) →
  assert(|S × T| = |S| × |T|)
}

corollary Cardinality_Symmetric() {
  assert(
    ∀S,T[finite_sets(S,T) ⇒ |S × T| = |T × S|]
  )
} ↔

theorem General_Product_Cardinality() {
  assert(
    ∀n ∈ ℕ, ∀(S_k)_{k=1}^n[finite_sets(S_k) ⇒ 
    |∏_{k=1}^n S_k| = ∏_{k=1}^n |S_k|]
  )
}