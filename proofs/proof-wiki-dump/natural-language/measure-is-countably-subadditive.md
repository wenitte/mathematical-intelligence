# 

Source: https://proofwiki.org/wiki/Measure_is_countably_subadditive

Theorem
Let $\left({X, \Sigma, \mu}\right)$ be a measure space.

Then $\mu$ is $\sigma$-subadditive, that is:

$\ds\forall \sequence {A_n} _{n \in \N} \subseteq \Sigma: \map \mu {\bigcup _{n \in \N} A_n} \le \sum _{n \in \N} \map \mu {A_n}$
Proof
For each $n\in\N$, let:

$\ds A'_n := A_n \setminus \bigcup _{i=0} ^{n-1} A_i$
Then, by (SA3) and (SA2'):

$\forall n\in\N : A'_n \in \Sigma$
Furthermore, by construction:

$\bigcup _{n \in \N} A'_n = \bigcup _{n \in \N} A_n$
$\sequence {A'_n} _{n \in \N}$ are pairwise disjoint
$\forall n\in\N : A' _n\subseteq A_n$
Therefore:














\(\ds \map \mu {\bigcup _{n \in \N} A_n}\)

\(=\)







\(\ds \map \mu {\bigcup _{n \in \N} A'_n}\)




















\(\ds \)

\(=\)







\(\ds \sum _{n \in \N} \map \mu {A' _n}\)





(2) of definition of measure














\(\ds \)

\(\le\)







\(\ds \sum _{n \in \N} \map \mu {A_n}\)





Measure is Monotone



$\blacksquare$





