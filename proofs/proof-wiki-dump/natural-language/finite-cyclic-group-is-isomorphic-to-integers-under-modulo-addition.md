# 

Source: https://proofwiki.org/wiki/Finite_Cyclic_Group_is_Isomorphic_to_Integers_under_Modulo_Addition



Theorem
Let $\struct {G, \circ}$ be a finite group whose identity element is $e$.

Then $\struct {G, \circ}$ is cyclic of order $n$ if and only if $\struct {G, \circ}$ is isomorphic with the additive group of integers modulo $n$ $\struct {\Z_n, +_n}$.


Proof
Necessary Condition
Let $\struct {G, \circ}$ be a cyclic group of order $n$.
From List of Elements in Finite Cyclic Group:

$G = \set {a^0, a^1, a^2, \ldots, a^n}$
where $a^0 = e, a^1 = a$.
From the definition of integers modulo $n$, $\Z_n$ can be expressed as:

$\Z_n = \set {\eqclass 0 n, \eqclass 1 n, \ldots, \eqclass {n - 1} n}$
where $\eqclass x n$ is the residue class of $x$ modulo $n$.

Let $\phi: G \to \Z_n$ be the mapping defined as:

$\forall k \in \set {0, 1, \ldots, n - 1}: \map \phi {a^k} = \eqclass k n$
By its definition it is clear that $\phi$ is a bijection.

Also:














\(\ds \map \phi {a^r \circ a^s}\)

\(=\)







\(\ds \map \phi {a^{r + s} }\)





Powers of Group Elements: Sum of Indices














\(\ds \)

\(=\)







\(\ds \eqclass {r + s} n\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \eqclass r n +_n \eqclass s n\)





Definition of Modulo Addition














\(\ds \)

\(=\)







\(\ds \map \phi {a^r} +_n \map \phi {a^s}\)





Definition of $\phi$



Thus the morphism property of $\phi$ is demonstrated, and $\phi$ is thus a group homomorphism.
By definition, a group isomorphism is a group homomorphism which is also a bijection.
$\Box$


Sufficient Condition
Now suppose $G$ is a group such that $\phi: \Z_n \to G$ is a group isomorphism.
Let $a = \map \phi {\eqclass 1 n}$.
Let $g \in G$.
Then $g = \map \phi {\eqclass k n}$ for some $\eqclass k n \in \Z_n$.
Therefore:














\(\ds g\)

\(=\)







\(\ds \map \phi {\eqclass k n}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\eqclass 1 n +_n \cdots (k) \cdots +_n \eqclass 1 n}\)




















\(\ds \)

\(=\)







\(\ds a^k\)









So every element of $G$ is a power of $a$.
So by definition $G$ is cyclic.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 63$




