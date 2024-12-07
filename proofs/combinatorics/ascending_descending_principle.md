theorem_definition(ascending_descending_principle) ↔
∀L (L is an infinite sequence of real numbers →
∃S (S ⊆ L ∧ S is infinite ∧ (S is ascending ∨ S is descending))).

proof(ascending_descending_principle) ↔
assume(L is an infinite sequence of real numbers) →
define ω = {n ∈ ℕ | n indexes elements of L} →
define f : [ω]^2 → {0, 1} by 
f({n, m}) = 0 ↔ (n < m ∧ L(n) ≤ L(m)) →
apply Ramsey's theorem to f to obtain a homogeneous infinite subset A ⊆ ω →
assume(A has color 0) →
for all n, m ∈ A with n < m → L(n) ≤ L(m) →
S = {L(n) | n ∈ A} →
S is infinite and ascending →
assume(A has color 1) →
for all n, m ∈ A with n < m → L(n) > L(m) →
S = {L(n) | n ∈ A} →
S is infinite and descending →
conclude ∃S (S ⊆ L ∧ S is infinite ∧ (S is ascending ∨ S is descending)).