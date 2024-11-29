∀F(FormalSystem(F) ∧ Contains(F, Q) ∧ Consistent(F) →
  ¬Provable(F, Cons(F))).

FormalSystem(F) ∧ Contains(F, Q) ∧ Consistent(F) →
(∀A(⌜A⌝ ∈ ℕ)) ∧
(∀x∀y(PrfF(x, y) ↔ x is the Gödel number of a proof of y in F)) ∧
(ProvF(y) ↔ ∃x(PrfF(x, y))) ∧
(Cons(F) ↔ ¬ProvF(⌜⊥⌝)) ∧
LöbConditions(F) ∧
(∀A(F ⊢ A → ProvF(⌜A⌝))) ∧
(∀A(F ⊢ ProvF(⌜A⌝) → ProvF(⌜ProvF(⌜A⌝)⌝))) ∧
(∀A∀B(F ⊢ ProvF(⌜A⌝) ∧ ProvF(⌜A → B⌝) → ProvF(⌜B⌝))) ∧
(∃GF(GF ↔ ¬ProvF(⌜GF⌝))) ∧
(F ⊢ GF ↔ Cons(F)) →
¬Provable(F, Cons(F)).
