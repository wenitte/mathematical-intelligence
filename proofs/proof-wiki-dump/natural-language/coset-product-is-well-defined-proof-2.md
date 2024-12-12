# 

Source: https://proofwiki.org/wiki/Coset_Product_is_Well-Defined/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $a, b \in G$.

Then the coset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \paren {a \circ b} \circ N$
is well-defined.


Proof
Let $N \lhd G$ where $G$ is a group.

Consider $\paren {a \circ N} \circ \paren {b \circ N}$ as a subset product:

$\paren {a \circ N} \circ \paren {b \circ N} = \set {a \circ n_1 \circ b \circ n_2: n_1, n_2 \in N}$
This is justified by Coset Product of Normal Subgroup is Consistent with Subset Product Definition.

Since $N$ is normal, each conjugate $b^{-1} \circ N \circ b$ is contained in $N$.
So for each $n_1 \in N$ there is some $n_3 \in N$ such that $b^{-1} \circ n_1 \circ b = n_3$.
So, if $a \circ n_1 \circ b \circ n_2 \in \paren {a \circ N} \circ \paren {b \circ N}$, it follows that:














\(\ds a \circ n_1 \circ b \circ n_2\)

\(=\)







\(\ds a \circ b \circ b^{-1} \circ n_1 \circ b \circ n_2\)




















\(\ds \)

\(=\)







\(\ds a \circ b \circ n_3 \circ n_2\)




















\(\ds \)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Definition of Subset Product














\(\ds \)

\(\in\)







\(\ds N \circ b^{-1}\)





Definition of Normal Subgroup



That is:

$\paren {a \circ N} \circ \paren {b \circ N} \subseteq \paren {a \circ b} \circ N$

Let $n \in N$ be arbitrary.
Then:














\(\ds \paren {a \circ b} \circ n\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e \circ b} \circ n\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e} \circ \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ b} \circ N\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ e} \circ \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds a \circ  \paren {b \circ n}\)

\(\in\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {b \circ N}\)

\(\subseteq\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ N\)

\(\subseteq\)







\(\ds \paren {a \circ N} \circ \paren {b \circ N}\)





Subset Product within Semigroup is Associative: Corollary




So:

$\paren {a \circ N} \circ \paren {b \circ N} \subseteq \paren {a \circ b} \circ N$
and

$\paren {a \circ b} \circ N \subseteq \paren {a \circ N} \circ \paren {b \circ N}$
The result follows by definition of set equality.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Quotient Groups: Theorem $3$




