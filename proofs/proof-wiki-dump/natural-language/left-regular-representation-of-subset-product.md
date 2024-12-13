# 

Source: https://proofwiki.org/wiki/Left_Regular_Representation_of_Subset_Product

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $T \subseteq S$ be a subset of $S$.
Let $\lambda_a: S \to S$ be the left regular representation of $S$ with respect to $a$.
Then:

$\lambda_a \sqbrk T = \set a \circ T = a \circ T$
where $a \circ T$ denotes subset product with a singleton.


Proof













\(\ds \lambda_a \sqbrk T\)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s = \map {\lambda_a} t}\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \set {s \in S: \exists t \in T: s = a \circ t}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \set {a \circ t: t \in T}\)




















\(\ds \)

\(=\)







\(\ds a \circ T\)





Definition of Subset Product



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 41$. Multiplication of subsets of a group




