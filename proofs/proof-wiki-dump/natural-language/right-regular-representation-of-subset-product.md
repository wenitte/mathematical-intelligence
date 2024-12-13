# 

Source: https://proofwiki.org/wiki/Right_Regular_Representation_of_Subset_Product



Theorem
Let $\struct {S, \circ}$ be a magma.
Let $T \subseteq S$ be a subset of $S$.
Let $\rho_a: S \to S$ be the right regular representation of $S$ with respect to $a$.
Then:

$\rho_a \sqbrk T = T \circ \set a = T \circ a$
where $T \circ a$ denotes subset product with a singleton.


Proof













\(\ds \rho_a \sqbrk T\)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s = \map {\rho_a} t}\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s = t \circ a}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \set {t \circ a: t \in T}\)




















\(\ds \)

\(=\)







\(\ds T \circ a\)





Definition of Subset Product



$\blacksquare$


Also see
Left Regular Representation of Subset Product


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 41$. Multiplication of subsets of a group




