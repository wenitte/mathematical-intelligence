# 

Source: https://proofwiki.org/wiki/Inverse_in_Monoid_is_Unique



Theorem
Let $\struct {S, \circ}$ be a monoid.

Then an element $x \in S$ can have at most one inverse for $\circ$.


Proof
Let $e$ be the identity element of $\struct {S, \circ}$.
Suppose $x \in S$ has two inverses: $y$ and $z$.

Then:














\(\ds y\)

\(=\)







\(\ds y \circ e\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds y \circ \paren {x \circ z}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {y \circ x} \circ z\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ z\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds z\)





Definition of Identity Element




Similarly:














\(\ds y\)

\(=\)







\(\ds e \circ y\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {z \circ x} \circ y\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds z \circ \paren {x \circ y}\)





Monoid Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds z \circ e\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds z\)





Definition of Identity Element



So whichever way round you do it, $y = z$ and the inverse of $x$ is unique.
$\blacksquare$


Also see
Inverse not always Unique for Non-Associative Operation
Identity is Unique
Inverse in Group is Unique


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Theorem $4.2$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups: Theorem $1.2 \text{(iii)}$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $2$: Examples of Groups and Homomorphisms: $2.2$ Definitions $\text{(ii)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 31.2$ Identity element and inverses
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids
1999: J.C. Rosales and P.A. García-Sánchez: Finitely Generated Commutative Monoids ... (previous) ... (next): Chapter $1$: Basic Definitions and Results




