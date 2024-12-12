# 

Source: https://proofwiki.org/wiki/Bijection_between_R_x_(S_x_T)_and_(R_x_S)_x_T

Theorem
Let $R$, $S$ and $T$ be sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$.

Then there exists a bijection from $R \times \paren {S \times T}$ to $\paren {R \times S} \times T$.
Hence:

$\card {R \times \paren {S \times T} } = \card {\paren {R \times S} \times T}$


Proof
Let $\phi: R \times \paren {S \times T} \to \paren {R \times S} \times T$ be the mapping defined as:

$\forall \tuple {r, \tuple {s, t} } \in R \times \paren {S \times T}: \map \phi {s, t} = \tuple {\tuple {r, s}, t}$

Then $\phi$ is the bijection required, as follows:

The domain of $\phi$ is $R \times \paren {S \times T}$.
Let $\tuple {\tuple {r, s}, t} \in \paren {R \times S} \times T$.
Then there exists $\tuple {r, \tuple {s, t} } \in R \times \paren {S \times T}$ such that $\map \phi {r, \tuple {s, t} } = \tuple {\tuple {r, s}, t}$.
Thus $\phi$ is a surjection.

Let $\map \phi {r_1, \tuple {s_1, t_1} } = \map \phi {r_2, \tuple {s_2, t_2} }$ for some $\tuple {r_1, \tuple {s_1, t_1} }$ and $\tuple {r_2, \tuple {s_2, t_2} }$ in $R \times \paren {S \times T}$.
Then:














\(\ds \map \phi {r_1, \tuple {s_1, t_1} }\)

\(=\)







\(\ds \map \phi {r_2, \tuple {s_2, t_2} }\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {\tuple {r_1, s_1}, t_1}\)

\(=\)







\(\ds \tuple {\tuple {r_2, s_2}, t_2}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \tuple {r_1, \tuple {s_1, t_1} }\)

\(=\)







\(\ds \tuple {r_2, \tuple {s_2, t_2} }\)





Definition of Ordered Pair



and so $\phi$ is an injection.
Hence the result by definition of bijection.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $9 \ \text {(ii)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{P}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 13 \gamma$




