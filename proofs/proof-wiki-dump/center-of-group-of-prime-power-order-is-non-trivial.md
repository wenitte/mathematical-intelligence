theorem Group_Prime_Power_Center_NonTrivial() {
  assert(
    ∀G: (|G| = p^r ∧ p ∈ ℙ ∧ r ∈ ℕ₊) ⇒ Z(G) ≠ {e}
  )
} ↔

proof Group_Prime_Power_Center_NonTrivial() {
  case Abelian_Group() {
    assert(G is abelian) →
    assert(Z(G) = G) →
    assert(|G| > 1) →
    conclude(Z(G) ≠ {e})
  } ∨
  
  case NonAbelian_Group() {
    assert(G is non-abelian) →
    assert(Z(G) ≠ G) →
    assert(G \ Z(G) ≠ ∅) →
    setVar(cl₁, cl₂, ..., clₘ: conjugacy classes of G \ Z(G)) →
    
    lemma Conjugacy_Class_Size() {
      assert(∀x ∉ Z(G): |cl(x)| > 1)
    } →
    
    lemma Conjugacy_Class_Equation() {
      assert(|Z(G)| = |G| - ∑ⱼ₌₁ᵐ |clⱼ|)
    } →
    
    lemma Conjugacy_Class_Order() {
      assert(∀j ∈ [1,m]: |clⱼ| | |G|)
    } →
    
    lemma Normalizer_Index() {
      assert(∀j ∈ [1,m]: [G:Nᴳ(xⱼ)] > 1 ⇒ p | [G:Nᴳ(xⱼ)])
    } →
    
    apply(Conjugacy_Class_Equation()) →
    apply(Conjugacy_Class_Order()) →
    apply(Normalizer_Index()) →
    
    assert(p | |G|) →
    conclude(p | |Z(G)|) →
    conclude(Z(G) ≠ {e})
  }
}