# 

Source: https://proofwiki.org/wiki/Cardinality_of_Cartesian_Product_of_Finite_Sets/Corollary/Proof_2

Corollary to Cardinality of Cartesian Product of Finite Sets
$\card {S \times T} = \card {T \times S}$


Proof
Let $f: S \times T \to T \times S$ be the mapping defined as:

$\forall \tuple {s, t} \in S \times T: \map f {s, t} = \tuple {t, s}$
which is shown to be bijective as follows:















\(\ds \map f {s_1, t_1}\)

\(=\)







\(\ds \map f {s_2, t_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {t_1, s_1}\)

\(=\)







\(\ds \tuple {t_2, s_2}\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \tuple {s_1, t_1}\)

\(=\)







\(\ds \tuple {s_2, t_2}\)





Equality of Ordered Pairs



showing $f$ is an injection.

Let $\tuple {t, s} \in T \times S$.
Then:

$\exists \tuple {s, t} \in S \times T: \map f {s, t} = \tuple {t, s}$
showing that $f$ is a surjection.

So we have demonstrated that there exists a bijection from $S \times T$ to $T \times S$.
The result follows by definition of set equivalence.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{P}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Example $8.1$




