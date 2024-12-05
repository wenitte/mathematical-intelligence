theorem_definition(Ballot_Theorem_Induction) ↔
∀k, a, b (k ≥ 1 ∧ a ≥ kb →
Nk(a, b) = C(a + b, a) * (a - kb) / (a + b)).
→

[base_case(Verification) ↔
∀a, b (Nk(a, 0) = 1 ∧ Nk(kb, b) = 0)].
→

[recurrence_relation(Induction_Step) ↔
∀a, b (Nk(a, b) = Nk(a, b - 1) + Nk(a - 1, b))].
→

[last_vote_analysis(Combinatorial_Argument) ↔
∀a, b (Nk(a, b) =
((a - k)(b - 1) / (a + b - 1)) * C(a + b - 1, a) +
((a - 1 - kb) / (a + b - 1)) * C(a + b - 1, a - 1))].
→

[inductive_proof(Simplification) ↔
Nk(a, b) = (a - kb) / (a + b) * C(a + b, a)].
→

[conclusion(C) ↔
∀k, a, b (k ≥ 1 ∧ a ≥ kb →
Nk(a, b) = C(a + b, a) * (a - kb) / (a + b)).
∴ Proved.]