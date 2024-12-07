theorem_definition(cantor) ↔
    ∀A, A ⊂ P(A) →

proof(cantor) ↔
    ∀A, define(f : A → P(A)) ↔ f(a) = {a} →
    ∀a₁, a₂ ∈ A, f(a₁) = f(a₂) → {a₁} = {a₂} → a₁ = a₂ → f is injective →
    ∀g : A → P(A), assume g is bijective →
    define(S) ↔ S = {a ∈ A | a ∉ g(a)} →
    S ∈ P(A) ∧ g is surjective → ∃x ∈ A, g(x) = S →
    (x ∈ S ↔ x ∉ g(x)) → contradiction:
        (x ∈ S → x ∉ S) ∧ (x ∉ S → x ∈ S) →
    ¬∃g : A → P(A) where g is bijective →
    A ⊂ P(A) →

conclusion ↔ A ⊂ P(A) ∧ A ≠ P(A) ∴ Proved.