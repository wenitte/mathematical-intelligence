theorem_definition(Schroeder_Bernstein) ↔
    If f: A → B and g: B → A are injective functions, then ∃h: A → B bijective
→

[initial_definitions(ID) ↔
    Let A₀ = A and B₀ = B
    Define recursively:
    Bₙ₊₁ = f[Aₙ]
    Aₙ₊₁ = A \ g[B \ Bₙ₊₁]
    ∀n ∈ ℕ: Bₙ₊₁ ⊆ Bₙ and Aₙ₊₁ ⊆ Aₙ]
→

[limit_sets(L) ↔
    Define Aω = ⋂ₙ∈ℕ Aₙ and Bω = ⋂ₙ∈ℕ Bₙ
    → Aω ⊆ A and Bω ⊆ B]
→

[first_bijection(FB) ↔
    f restricted to Aω is a bijection to Bω:
    ∀a ∈ Aω, a ∈ Aₙ ∀n → f(a) ∈ Bₙ₊₁ ∀n → f(a) ∈ Bω
    ∀b ∈ Bω, b ∈ Bₙ₊₁ ∀n → ∃aₙ ∈ Aₙ such that b = f(aₙ)
    Since f is injective, all aₙ = a → a ∈ Aω
    → f(Aω) = Bω]
→

[second_bijection(SB) ↔
    g restricted to B \ Bω is a bijection to A \ Aω:
    ∀b ∈ B \ Bω, ∃n such that b ∉ Bₙ₊₁
    → g(b) ∉ Aₙ₊₁ ∀n → g(b) ∉ Aω
    Conversely, ∀a ∈ A \ Aω, ∃n such that a ∉ Aₙ₊₁
    → ∃b ∉ Bₙ₊₁ such that g(b) = a
    Uniqueness follows since g is injective
    → g(B \ Bω) = A \ Aω]
→

[function_definition(FD) ↔
    Define h: A → B by:
    h(a) = f(a) if a ∈ Aω
    h(a) = g⁻¹(a) if a ∉ Aω]
→

[bijection_property(BP) ↔
    h is bijective:
    h restricted to Aω is f, which is bijective onto Bω
    h restricted to A \ Aω is g⁻¹, which is bijective onto B \ Bω
    → h(A) = B and h is injective
    → h is bijective]
→

[conclusion(C) ↔
    ∃h: A → B such that h is bijective
    ∴ Proved.]
