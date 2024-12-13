# 

Source: https://proofwiki.org/wiki/Normalizer_is_Subgroup

Theorem
Let $G$ be a group.

The normalizer of a subset $S \subseteq G$ is a subgroup of $G$.

$S \subseteq G \implies \map {N_G} S \le G$


Proof
Let $a, b \in \map {N_G} S$.
Then:














\(\ds S^{a b}\)

\(=\)







\(\ds \paren {S^b}^a\)





Conjugate of Set by Group Product














\(\ds \)

\(=\)







\(\ds S^a\)





Definition of Normal Subgroup














\(\ds \)

\(=\)







\(\ds S\)





Definition of Normal Subgroup



Therefore $a b \in \map {N_G} S$.

Now let $a \in \map {N_G} S$:

$a \in \map {N_G} S \implies S^{a^{-1} } = \paren {S^a}^{a^{-1} } = S^{a^{-1} a} = S$
Therefore $a^{-1} \in \map {N_G} S$.

Thus, by the Two-Step Subgroup Test, $\map {N_G} S \le G$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.20$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Exercise $5.15$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \gamma$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 48$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $12 \ \text{(i)}$




