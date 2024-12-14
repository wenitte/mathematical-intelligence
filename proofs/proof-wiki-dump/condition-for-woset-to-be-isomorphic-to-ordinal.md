theorem Woset_Ordinal_Isomorphism() {
  assert(
    ∀S(isWoset(S, ≼) ∧
    (∀a ∈ S → isOrderIsomorphic(S_a, ordinal)) →
    ∃ord(isOrderIsomorphic(S, ord)))
  )
} ↔

proof Woset_Ordinal_Isomorphism() {
  setVar(S: Woset) →
  setVar(a: Element(S)) →
  
  define(g_a: Function(S_a → Z(a))) {
    assert(isOrderIsomorphism(g_a)) ∧
    assert(isOrdinal(Z(a)))
  } →
  
  lemma Uniqueness() {
    assert(isomorphicOrdinalsEqual ∧ 
           uniqueWosetIsomorphism →
           unique(Z(a)) ∧ unique(g_a))
  } →
  
  define(W: Set) {
    assert(W = {Z(a) | a ∈ S})
  } →
  
  define(f: Function(S → W)) {
    assert(∀x ∈ S → f(x) = Z(x))
  } →
  
  lemma Order_Preservation() {
    assert(∀x,y ∈ S(x ≺ y → Z(x) ⊂ Z(y))) {
      assume(x ≺ y) →
      assert(g_x: S_x ≅ Z(x)) →
      assert(S_x = {z ∈ S | z ≺ x} = {z ∈ S_y | z ≺ x}) →
      assert(g_y|S_x: S_x → (Z(y))_(g_y(x))) →
      assert(Z(x) = (Z(y))_(g_y(x))) →
      conclude(Z(x) ⊂ Z(y))
    }
  } →
  
  lemma Bijective_Isomorphism() {
    assert(isBijection(f) ∧ 
           isOrderIsomorphism(f: S → ⟨W,⊆⟩))
  } →
  
  lemma W_Is_Ordinal() {
    setVar(y: Element(S)) →
    assert(isOrdinal(Z(y))) →
    assert(∀x(x ≺ y → Z(x) = g_y(x))) →
    assert(W_(Z(y)) = {Z(x) | Z(x) ⊂ Z(y)}
                    = {Z(x) | x ≺ y}
                    = {g_y(x) | x ≺ y}
                    = g_y(S_y)
                    = Z(y)) →
    conclude(isOrdinal(W))
  } →
  
  conclude(isOrderIsomorphic(S, W) ∧ isOrdinal(W))
}