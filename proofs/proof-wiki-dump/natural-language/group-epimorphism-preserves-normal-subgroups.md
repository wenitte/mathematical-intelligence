# 

Source: https://proofwiki.org/wiki/Group_Epimorphism_Preserves_Normal_Subgroups

Theorem
Let $\struct {G, \circ}$ and $\struct {H, *}$ be groups.
Let $\phi: G \to H$ be a group epimorphism.
Let $N \lhd G$, where $\lhd$ denotes that $N$ is a normal subgroup of $G$.

Then $\phi \sqbrk N \lhd H$.

That is, the image under $\phi$ of a normal subgroup is itself normal.


Proof
Let $N' := \phi \sqbrk N$.
From Group Homomorphism Preserves Subgroups, $N'$ is a subgroup of $H$.
It remains to show that $N'$ is normal in $H$.

Let $h \in H$ be arbitrary.
Let $n' \in N'$ be arbitrary.

Because $\phi$ is an epimorphism, it is by definition surjective.
Therefore:

$\exists n \in N: \map \phi n = n'$
$\exists g \in G: \map \phi g = h$
Then:














\(\ds g \circ n \circ g^{-1}\)

\(\in\)







\(\ds N\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds \map \phi {g \circ n \circ g^{-1} }\)

\(\in\)







\(\ds N'\)





as $N'$ is the image of $N$








\(\ds \leadsto \ \ \)





\(\ds \map \phi g * \map \phi n * \map \phi {g^{-1} }\)

\(\in\)







\(\ds N'\)





as $\phi$ has the morphism property








\(\ds \leadsto \ \ \)





\(\ds \map \phi g * \map \phi n * \paren {\map \phi g}^{-1}\)

\(\in\)







\(\ds N'\)





Group Homomorphism Preserves Inverses








\(\ds \leadsto \ \ \)





\(\ds h * n' * h^{-1}\)

\(\in\)







\(\ds N'\)





Definition of $g$ and $n$




As $h$ and $n'$ were arbitrary, it follows that:

$\forall h \in H, n' \in N': h * n' * h^{-1} \in N'$
and so $N'$ is a normal subgroup of $H$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.20 \ \text {(a)}$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.10$: Theorem $29$




