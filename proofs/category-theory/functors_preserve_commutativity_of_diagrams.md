functor_diagram(F) ↔
    F maps between categories C and D
    Square(S) = {f: a → b, g: b → c, h: a → d, i: d → c}
    Commutes(S) ↔ g ∘ f = i ∘ h
→

[functor_properties(P) ↔
    F(g ∘ f) = F(g) ∘ F(f)
    Square(F(S)) = {F(f): F(a) → F(b),
                    F(g): F(b) → F(c),
                    F(h): F(a) → F(d),
                    F(i): F(d) → F(c)}]
→

[preservation_proof(R) ↔
    Commutes(S) → g ∘ f = i ∘ h
    F(g ∘ f) = F(i ∘ h)
    F(g) ∘ F(f) = F(i) ∘ F(h)
    ∴ Commutes(F(S))]
