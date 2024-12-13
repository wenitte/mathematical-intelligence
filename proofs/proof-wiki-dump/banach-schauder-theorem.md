theorem Banach_Schauder() {
  let(X: BanachSpace, Y: BanachSpace)
  let(T: LinearTransformation(X → Y))
  assert(
    isSurjective(T) ∧ isBounded(T) ⇒ isOpenMapping(T)
  )
} ↔

proof Banach_Schauder() {
  setDef(B_X(x,r) := OpenBall(X, x, r)) →
  setDef(B_Y(y,r) := OpenBall(Y, y, r)) →
  
  assert(X = ⋃_{n=1}^∞ B_X(0,n)) →
  assert(T[X] = ⋃_{n=1}^∞ T[B_X(0,n)]) →
  assert(Y = T[X]) →
  
  lemma Baire_Category() {
    assert(isBanachSpace(Y) ⇒ isBaireSpace(Y))
  } →
  
  apply(Baire_Category()) →
  assert(∃m ∈ ℕ: ¬isNowhereDense(T[B_X(0,m)])) →
  assert(∃U ⊆ X: isOpen(U) ∧ U ⊆ closure(T[B_X(0,m)])) →
  
  let(y ∈ U)
  assert(∃r > 0: B_Y(y,r) ⊆ U) →
  
  lemma Ball_Translation() {
    assert(B_Y(0,r) ⊆ closure(T[B_X(0,m)]))
  } →
  
  lemma Double_Ball() {
    assert(B_Y(0,r) ⊆ T[B_X(0,2m)])
  } →
  
  forall(V: Set) {
    assume(isOpen(V)) →
    let(y ∈ T[V]) →
    assert(∃x ∈ V: y = T(x)) →
    assert(∃δ > 0: B_X(x,δ) ⊆ V) →
    
    assert(B_Y(T(x), (δ/(2m))r) ⊆ T[V]) {
      let(v ∈ B_Y(T(x), (δ/(2m))r)) →
      assert(‖v - T(x)‖_Y < (δ/(2m))r) →
      assert((2m/δ)(v - T(x)) ∈ B_Y(0,r)) →
      apply(Double_Ball()) →
      assert(∃u: ‖u‖_X < 1 ∧ v = T(x + δu)) →
      assert(x + δu ∈ B_X(x,δ)) →
      assert(v ∈ T[V])
    } →
    
    assert(isOpen(T[V]))
  } →
  
  conclude(isOpenMapping(T))
}