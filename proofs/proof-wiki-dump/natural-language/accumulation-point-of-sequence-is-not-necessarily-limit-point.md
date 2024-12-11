# 

Source: https://proofwiki.org/wiki/Accumulation_Point_of_Sequence_is_not_necessarily_Limit_Point

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\sequence {a_n}$ be a sequence in $T$.
Let $q \in S$ be an accumulation point of $\sequence {a_n}$.

Then it is not necessarily the case that $q$ is also a limit of $\sequence {a_n}$.


Proof
Proof by Counterexample:
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.
Let $\sequence {a_n}$ be the sequence defined as:














\(\ds \sequence {a_n}\)

\(=\)







\(\ds \begin {cases} 1 & : \text {$n$ odd} \\ n / 2 & : \text {$n$ even} \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \sequence {1, 1, 1, 2, 1, 3, 1, 4, \dotsc}\)










Then $\sequence {a_n}$ has exactly one accumulation point, that is $1$.
However, $1$ is not a limit of $\sequence {a_n}$, as $\sequence {a_n}$ has no limit.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $3$




