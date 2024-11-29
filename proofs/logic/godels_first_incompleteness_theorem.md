∀F(FormalSystem(F) ∧ Contains(F, Q) ∧ Consistent(F) →
  ∃GF(Independent(F, GF) ∧ GF ↔ ¬ProvF(⌜GF⌝))).

FormalSystem(F) ∧ Contains(F, Q) ∧ Consistent(F) →
(∀A(⌜A⌝ ∈ ℕ)) ∧
(∀x∀y(PrfF(x, y) ↔ x is the Gödel number of a proof of y in F)) ∧
(∀y(ProvF(y) ↔ ∃x(PrfF(x, y)))) ∧
(DiagonalizationLemma(¬ProvF(x)) → ∃GF(GF ↔ ¬ProvF(⌜GF⌝))) ∧
(∀GF(Provable(F, GF) → ∃x(PrfF(x, ⌜GF⌝)) → GF ↔ ¬ProvF(⌜GF⌝) →
  Contradiction(ProvF(⌜GF⌝) ∧ ¬ProvF(⌜GF⌝)))) ∧
(∀GF(Provable(F, ¬GF) → ∃x(PrfF(x, ⌜¬GF⌝)) → GF ↔ ¬ProvF(⌜GF⌝) →
  Contradiction(ProvF(⌜¬GF⌝) ∧ ¬ProvF(⌜¬GF⌝)))) ∧
(¬Provable(F, GF) ∧ ¬Provable(F, ¬GF) → Independent(F, GF)) ∧
(∃GF(Independent(F, GF) ∧ GF ↔ ¬ProvF(⌜GF⌝))).
