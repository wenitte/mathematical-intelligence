theorem_definition(De_Moivre) ↔
    ∀n ∈ ℕ, (cos x + i sin x)ⁿ = cos(nx) + i sin(nx)
→

[base_case(B) ↔
    n = 1:
    (cos x + i sin x)¹ = cos(1x) + i sin(1x)
    → Valid]
→

[inductive_hypothesis(IH) ↔
    Assume for n = k:
    (cos x + i sin x)ᵏ = cos(kx) + i sin(kx)]
→

[inductive_step(IS) ↔
    Prove for n = k + 1:
    (cos x + i sin x)ᵏ⁺¹ = (cos x + i sin x)ᵏ (cos x + i sin x)
    = (cos(kx) + i sin(kx))(cos x + i sin x)
    = cos(kx)cos x − sin(kx)sin x + i (sin(kx)cos x + cos(kx)sin x)
    = cos((k+1)x) + i sin((k+1)x)]
→

[conclusion(C) ↔
    By mathematical induction, ∀n ∈ ℕ, (cos x + i sin x)ⁿ = cos(nx) + i sin(nx)
    ∴ Proved.]
