theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀A,B: Set ∧
    ∃f: A → B, g: B → A where
    (isInjective(f) ∧ isInjective(g)) ⇒
    (∃h: A → B where isBijective(h) ∧
    ∀x∈A,y∈B: (y = h(x) ⇒ (y = f(x) ∨ x = g(y))))
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  setVar(𝒫A: PowerSet(A)) →
  define(E: 𝒫A → 𝒫A, 
    E(S) = A \ g(B \ f(S))
  ) →

  lemma E_is_Increasing() {
    assert(∀S,T ∈ 𝒫A: S ⊆ T ⇒ E(S) ⊆ E(T)) ↔
    proof {
      setVar(S,T ∈ 𝒫A where S ⊆ T) →
      assert(f(S) ⊆ f(T)) →
      assert(B \ f(T) ⊆ B \ f(S)) →
      assert(g(B \ f(T)) ⊆ g(B \ f(S))) →
      assert(A \ g(B \ f(S)) ⊆ A \ g(B \ f(T))) →
      assert(E(S) ⊆ E(T))
    }
  } →

  apply(Knaster_Tarski_Lemma(E)) →
  setVar(X: FixedPoint(E)) →
  assert(E(X) = X) →
  assert(A \ g(B \ f(X)) = X) →
  
  define(f': f|_{X × f(X)}) →
  define(g': g|_{(B \ f(X)) × (A \ X)}) →
  
  assert(isBijective(f') ∧ isBijective(g')) →
  define(h: A → B, h = f' ∪ g'^{-1}) →
  
  assert(dom(f') = X ∧ dom(g') = B \ f(X)) →
  assert(cod(f') = f(X) ∧ cod(g') = A \ X) →
  assert(isDisjoint(dom(f'), cod(g'))) →
  assert(isDisjoint(dom(g'), cod(f'))) →
  
  apply(Union_Bijection_Lemma(f', g'^{-1})) →
  assert(isBijective(h: A → B)) →
  assert(∀x∈A,y∈B: (y = h(x) ⇒ (y = f(x) ∨ x = g(y))))
}