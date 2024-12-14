theorem CartesianProductComposition() {
  assert(
    ∀I(IndexingSet) ∧
    ∀α∈I ∧
    ∀{S_α, T_α, U_α}(FamilyOfSets(I)) ∧
    ∀f_α: S_α → T_α ∧
    ∀g_α: T_α → U_α ∧
    let(S = ∏_{α∈I} S_α) ∧
    let(T = ∏_{α∈I} T_α) ∧
    let(U = ∏_{α∈I} U_α) ∧
    let(f = ∏_{α∈I} f_α) ∧
    let(g = ∏_{α∈I} g_α) ⇒
    g ∘ f = ∏_{α∈I} (g_α ∘ f_α)
  )
} ↔

proof CartesianProductComposition() {
  lemma DomainCompatibility() {
    setVar(α: I) →
    assert(Dom(g_α) = Cdm(f_α) = T_α) ∧
    assert(Cdm(f) = Dom(g) = T) →
    conclude(∀α∈I: g_α ∘ f_α is_defined) ∧
    conclude(g ∘ f is_defined)
  } →

  proof_body() {
    setVar(x: S) →
    assert(x = {x_α ∈ S_α}_{α∈I}) →
    
    equation_chain() {
      (g ∘ f)(x) →
      = (∏_{α∈I} g_α)((∏_{α∈I} f_α)(x)) →
      = (∏_{α∈I} g_α)({f_α(x_α)}_{α∈I}) →
      = {(g_α ∘ f_α)(x_α)}_{α∈I} →
      = (∏_{α∈I} (g_α ∘ f_α))(x)
    } →

    conclude(g ∘ f = ∏_{α∈I} (g_α ∘ f_α))
  }
}