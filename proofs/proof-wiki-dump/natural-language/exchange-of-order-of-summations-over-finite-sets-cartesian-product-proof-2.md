# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summations_over_Finite_Sets/Cartesian_Product/Proof_2

Theorem
Let $f: S \times T \to \mathbb A$ be a mapping.

Then we have an equality of summations over finite sets:

$\ds \sum_{s \mathop \in S} \sum_{t \mathop \in T} \map f {s, t} = \sum_{t \mathop \in T} \sum_{s \mathop \in S} \map f {s, t}$


Proof
Let $m$ be the cardinality of $S$ and $n$ be the cardinality of $T$.
Let $\N_{< m}$ denote an initial segment of the natural numbers.
Let $\sigma: \N_{< m} \to S$ and $\tau : \N_{< n} \to T$ be bijections.
We have:














\(\ds \sum_{s \mathop \in S} \sum_{t \mathop \in T} \map f {s, t}\)

\(=\)







\(\ds \sum_{s \mathop \in S} \sum_{j \mathop = 0}^{n - 1} \map f {s, \map \tau j}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{m - 1} \sum_{j \mathop = 0}^{n - 1} \map f {\map \sigma i, \map \tau j}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \sum_{i \mathop = 0}^{m - 1} \map f {\map \sigma i, \map \tau j}\)





Exchange of Order of Indexed Summations over Rectangular Domain














\(\ds \)

\(=\)







\(\ds \sum_{t \mathop \in T} \sum_{i \mathop = 0}^{m - 1} \map f {\map \sigma i, t}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \sum_{t \mathop \in T} \sum_{s \mathop \in S} \map f {s, t}\)





Definition of Summation



$\blacksquare$





