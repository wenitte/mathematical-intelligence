# 

Source: https://proofwiki.org/wiki/Composite_of_Relation_Isomorphisms_is_Relation_Isomorphism

Theorem
Let $\struct {S_1, \RR_1}$, $\struct {S_2, \RR_2}$ and $\struct {S_3, \RR_3}$ be relational structures.
Let:

$\phi: \struct {S_1, \RR_1} \to \struct {S_2, \RR_2}$
and:

$\psi: \struct {S_2, \RR_2} \to \struct {S_3, \RR_3}$
be relation isomorphisms.

Then $\psi \circ \phi: \struct {S_1, \RR_1} \to \struct {S_3, \RR_3}$ is also a relation isomorphism.


Proof
From Composite of Bijections is Bijection, $\psi \circ \phi$ is a bijection, as, by definition, an relation isomorphism is also a bijection.

By definition of composition of mappings:

$\map {\psi \circ \phi} x = \map \psi {\map \phi x}$

As $\phi$ is a relation isomorphism, we have:

$\forall x_1, y_1 \in S_1: x_1 \mathrel {\RR_1} y_1 \implies \map \phi {x_1} \mathrel {\RR_2} \map \phi {y_1}$

As $\psi$ is a relation isomorphism, we have:

$\forall x_2, y_2 \in S_2: x_2 \mathrel {\RR_2} y_2 \implies \map \psi {x_2} \mathrel {\RR_3} \map \psi {y_2}$

By setting $x_2 = \map \phi {x_1}, y_2 = \map \phi {y_1}$, it follows that:

$\forall x_1, y_1 \in S_1: x_1 \mathrel {\RR_1} y_1 \implies \map \psi {\map \phi {x_1} } \mathrel {\RR_3} \map \psi {\map \phi {y_1} }$

Similarly we can show that:

$\forall x_3, y_3 \in S_3: x_3 \mathrel {\RR_3} y_3 \implies \map {\phi^{-1} } {\map {\psi^{-1} } {x_3} } \mathrel {\RR_1} \map {\phi^{-1} } {\map {\psi^{-1} } {y_3} }$

Hence the result, by definition of a relation isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.9 \ \text{(b)}$




