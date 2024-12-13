# 

Source: https://proofwiki.org/wiki/Identity_is_only_Idempotent_Element_in_Group/Proof_2

Theorem
Every group has exactly one idempotent element: the identity.


Proof
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $x \in G$ such that $x \circ x = x$.














\(\ds e\)

\(=\)







\(\ds x \circ x^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ x^{-1}\)





by hypothesis: $x \circ x = x$














\(\ds \)

\(=\)







\(\ds x \circ \paren {x \circ x^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ e\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x\)





Definition of Identity Element



$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 2$: The Axioms of Group Theory: $(1.14)$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Lemma $1$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups: Theorem $1.2 \text{(i)}$




