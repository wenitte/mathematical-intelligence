theorem_definition(div3) ↔
    ∀n,d ∈ ℕ,
    number(n,d) mod 3 = sumdigits(n,d) mod 3 →

[definitions ↔
    number(n,d) := n * d^len(n) ∧
    sumdigits(n,d) := sum(digits(n,d)) ∧
    digits(n,d) := sequence of base-d digits of n]