morphism_associativity(M) ↔
    Given morphisms f: a → b, g: b → c, h: c → d
    Show: (h ∘ g) ∘ f = h ∘ (g ∘ f)
→

[category_definition(C) ↔
    Morphisms can be composed
    Every object has an identity morphism]
→

[composition_exists(E) ↔
    g ∘ f is defined when cod(f) = dom(g)
    h ∘ (g ∘ f) exists ↔ (h ∘ g) ∘ f exists]
→

[associativity_proof(A) ↔
    Let x be any element in dom(f)
    ((h ∘ g) ∘ f)(x) = (h ∘ g)(f(x)) = h(g(f(x)))
    (h ∘ (g ∘ f))(x) = h((g ∘ f)(x)) = h(g(f(x)))
    ∴ (h ∘ g) ∘ f = h ∘ (g ∘ f)]
