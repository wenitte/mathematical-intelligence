# 

Source: https://proofwiki.org/wiki/Bijection_between_S_x_T_and_T_x_S

Theorem
Let $S$ and $T$ be sets.
Let $S \times T$ be the Cartesian product of $S$ and $T$.

Then there exists a bijection from $S \times T$ to $T \times S$.


Proof
Let $\phi: S \times T \to T \times S$ be the mapping defined as:

$\forall \tuple {s, t} \in S \times T: \map \phi {s, t} = \tuple {t, s}$

Then $\phi$ is the bijection required, as follows:

The domain of $\phi$ is $S \times T$.
Let $\tuple {t, s} \in T \times S$.
Then there exists $\tuple {s, t} \in S \times T$ such that $\map \phi {s, t} = \tuple {t, s}$.
Thus $\phi$ is a surjection.

Let $\map \phi {s_1, t_1} = \map \phi {s_2, t_2}$ for some $\tuple {s_1, t_1}$ and $\tuple {s_2, t_2}$ in $S \times T$.
Then:














\(\ds \map \phi {s_1, t_1}\)

\(=\)







\(\ds \map \phi {s_2, t_2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {t_1, s_1}\)

\(=\)







\(\ds \tuple {t_2, s_2}\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \tuple {s_1, t_1}\)

\(=\)







\(\ds \tuple {s_2, t_2}\)





Definition of Ordered Pair



and so $\phi$ is an injection.
Hence the result by definition of bijection.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 13 \beta$




