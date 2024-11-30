
identity_properties(I) ↔
    f ∈ Mor(a,b)
    id_a ∈ Mor(a,a)
    id_b ∈ Mor(b,b)
→

[left_identity(L) ↔
    f ∘ id_a = f
    ∀x ∈ a, (f ∘ id_a)(x) = f(x)]
→

[right_identity(R) ↔
    id_b ∘ f = f
    ∀x ∈ a, (id_b ∘ f)(x) = f(x)]
→

[uniqueness(U) ↔
    ∀e ∈ Mor(a,a), e ∘ f = f
    → e ∘ f = id_a ∘ f
    → e = id_a]
