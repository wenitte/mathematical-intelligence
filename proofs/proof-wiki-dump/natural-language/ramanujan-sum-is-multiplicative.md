# 

Source: https://proofwiki.org/wiki/Ramanujan_Sum_is_Multiplicative

Theorem
Let $q \in \N_{>0}$, $n \in \N$.
Let $\map {c_q} n$ be the Ramanujan sum.
Then $\map {c_q} n$ is multiplicative in $q$.


Proof
Let $q, r \in \N$ such that:

$\gcd \set {q, r} = 1$
where $\gcd \set {q, r}$ denotes the greatest common divisor of $q$ and $r$.
Then:














\(\ds \map {c_q} n \, \map {c_r} n\)

\(=\)







\(\ds \sum_{d_1 \mathop \divides \gcd \set {n, q} } d_1 \, \map \mu {\frac q {d_1} } \sum_{d_2 \mathop \divides \gcd \set {n, r} } d_2 \, \map \mu {\frac r {d_2} }\)





Kluyver's Formula for Ramanujan's Sum














\(\ds \)

\(=\)







\(\ds \sum_{\substack {d_1 \mathop \divides \gcd \set {n, q} \\ d_2 \mathop \divides \gcd \set {n, r} } } d_1 d_2 \, \map \mu {\frac q {d_1} } \, \map \mu {\frac r {d_2} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides \gcd \set {n, q} \gcd \set {n, r} } d \, \map \mu {\frac {q r} d}\)





Möbius Function is Multiplicative, and setting $d = d_1 d_2$














\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides \gcd \set {n, q r} } d \, \map \mu {\frac {q r} d}\)





GCD with One Fixed Argument is Multiplicative Function














\(\ds \)

\(=\)







\(\ds \map {c_{q r} } n\)





Kluyver's Formula for Ramanujan's Sum



This completes the proof.
$\blacksquare$





