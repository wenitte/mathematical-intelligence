# 

Source: https://proofwiki.org/wiki/Kluyver%27s_Formula_for_Ramanujan%27s_Sum

Theorem
Let $q \in \N_{>0}$.
Let $n \in \N$.
Let $\map {c_q} n$ be Ramanujan's sum.
Let $\mu$ denote the Möbius function.

Then:

$\ds \map {c_q} n = \sum_{d \mathop \divides \gcd \set {q, n} } d \map \mu {\frac q d}$
where $\divides$ denotes divisibility.


Proof
Let $\alpha \in \R$.
Let $e: \R \to \C$ be the mapping defined as:

$\map e \alpha := \map \exp {2 \pi i \alpha}$
Let $\zeta_q$ be a primitive $q$th root of unity.
Let:

$\ds \map {\eta_q} n := \sum_{1 \mathop \le a \mathop \le q} \map e {\frac {a n} q}$
By Complex Roots of Unity in Exponential Form this is the sum of $n$th powers of all $q$th roots of unity.

Therefore:

$\ds \map {\eta_q} n = \sum_{d \mathop \divides q} \map {c_d} n$
By the Möbius Inversion Formula, this gives:

$\ds \map {c_q} n = \sum_{d \mathop \divides q} \map {\eta_d} n \map \mu {\frac q d}$
Now by Sum of Powers of Primitive Complex Roots of Unity, we have:

$\ds \map {\eta_d} n = \begin{cases} d & : d \divides n \\ 0 & : d \nmid n \end{cases}$

Therefore:














\(\ds \map {c_q} n\)

\(=\)







\(\ds \sum_{d \mathop \divides q} \map {\eta_d} n \map \mu {\frac q d}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {d \mathop \divides q \\ d \mathop \nmid n} } \map {\eta_d} n \map \mu {\frac q d} + \sum_{\substack {d \mathop \divides q \\ d \mathop \divides n} } \map {\eta_d} n \map \mu {\frac q d}\)




















\(\ds \)

\(=\)







\(\ds 0 + \sum_{\substack {d \mathop \divides q \\ d \mathop \divides n} } d \map \mu {\frac q d}\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides \gcd \set {q, n} } d \map \mu {\frac q d}\)





Common Divisor Divides GCD



as required.
$\blacksquare$


Source of Name
This entry was named for Jan Cornelis Kluyver.





