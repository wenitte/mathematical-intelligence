((hilbert_space_definition(H) ↔ (H = {f : f ∈ L^2[0,1] ∧ ∀m, n ⟨e_m, e_n⟩ = 1 if m = n ∧ 0 if m ≠ n})) ∧
(parseval_identity(G) ↔ (∀g ∈ H, ⟨g, g⟩ = ||g||^2 = Σ_{n} |⟨g, e_n⟩|^2))) →

((let_basis_relations(B) ↔ (⟨g, g⟩ = 1/3 ∧ ⟨g, e_0⟩ = 1/2 ∧ ⟨g, e_n⟩ = 1 / (2πin) for n ≠ 0)) →

((series_expansion(G) ↔ (1/3 = 1/4 + Σ_{n ∈ Z, n ≠ 0} (1 / (4π^2n^2)))) →

({ζ(2)} = {Σ_{n=1}^∞ (1 / n^2) : ζ(2) = π^2 / 6})))
