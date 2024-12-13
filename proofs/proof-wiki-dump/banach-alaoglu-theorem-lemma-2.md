theorem BanachAlaogluLemma2() {
  assert(
    ∀X: NormedVectorSpace ∧ isSeparable(X) ∧
    ∀X*: DualSpace(X) ∧
    ∀{ln}n∈ℕ: BoundedSequence(X*) ∧
    ∀{xn}n∈ℕ: CountableDenseSubset(X) ∧
    ∀j∈ℕ: (∃Λj⊆ℕ: Λ1⊃Λ2⊃... ∧ lim(k→∞,k∈Λj)[lk(xj)]=aj:=l(xj)) ∧
    Λ: DiagonalSequence(Λj) 
    ⇒ 
    lk →w* l as k→∞, k∈Λ
  )
}

proof BanachAlaogluLemma2() {
  setVar(x∈X: x = lim(j→∞,j∈J)[xj]) →
  
  lemma TriangleInequality() {
    assert(
      |lk(x) - l(x)| ≤ 
      |lk(x - xj)| + |l(x - xj)| + |lk(xj) - l(xj)|
    )
  } →
  
  lemma NormBound() {
    assert(
      |lk(x) - l(x)| ≤ 
      (sup(i∈Λ)||li||X* + ||l||X*)||x - xj||X + |lk(xj) - l(xj)|
    )
  } →
  
  lemma Convergence() {
    setVar(ε > 0) →
    assert(∃j∈J: (sup(i∈Λ)||li||X* + ||l||X*)||x - xj||X < ε/2) →
    assert(∃kε: ∀k≥kε, k∈Λ ⇒ |lk(xj) - l(xj)| < ε/2)
  } →
  
  apply(TriangleInequality()) →
  apply(NormBound()) →
  apply(Convergence()) →
  
  assert(∀ε>0: ∃kε: ∀k≥kε, k∈Λ ⇒ |lk(x) - l(x)| < ε)
}