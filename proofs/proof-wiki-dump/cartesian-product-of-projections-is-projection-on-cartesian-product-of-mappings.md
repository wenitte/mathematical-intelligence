theorem CartesianProductProjections() {
  let(I: Set) →
  let(S_α: Family(Set, I)) →
  let(T_α: Family(Set, I)) →
  let(f_α: ∀α∈I → Mapping(S_α, T_α)) →
  assert(
    ∃!f: Mapping(∏(α∈I)S_α, ∏(α∈I)T_α) ∧
    ∀α∈I → (pr_α ∘ f = f_α ∘ pr_α)
  )
} ↔

proof CartesianProductProjections() {
  // Existence proof
  let(x: ∏(α∈I)S_α) →
  assert(x = {x_α ∈ S_α | α∈I}) →
  define(f: ∏(α∈I)S_α → ∏(α∈I)T_α) {
    ∀x ∈ ∏(α∈I)S_α → f(x) = {f_α(x_α) | α∈I}
  } →

  // Verify f satisfies required property
  assert(∀x ∈ ∏(α∈I)S_α → 
    (f_α ∘ pr_α)(x) = f_α(pr_α(x)) = f_α(x_α)
  ) →
  assert(∀x ∈ ∏(α∈I)S_α →
    (pr_α ∘ f)(x) = pr_α({f_α(x_α) | α∈I}) = f_α(x_α)
  ) →
  conclude(pr_α ∘ f = f_α ∘ pr_α) →

  // Uniqueness proof
  let(g: Mapping(∏(α∈I)S_α, ∏(α∈I)T_α)) →
  assume(∀α∈I → pr_α ∘ g = f_α ∘ pr_α) →
  assert(∀x ∈ ∏(α∈I)S_α →
    pr_α(g(x)) = (pr_α ∘ g)(x) = (f_α ∘ pr_α)(x) = f_α(x_α)
  ) →
  conclude(∀x ∈ ∏(α∈I)S_α → g(x) = {f_α(x_α) | α∈I} = f(x)) →
  conclude(g = f)
}