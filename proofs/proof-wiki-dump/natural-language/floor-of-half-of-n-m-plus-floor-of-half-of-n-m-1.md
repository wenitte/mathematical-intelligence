# 

Source: https://proofwiki.org/wiki/Floor_of_Half_of_n%2Bm_plus_Floor_of_Half_of_n-m%2B1

Theorem
Let $n, m \in \Z$ be integers.

$\floor {\dfrac {n + m} 2} + \floor {\dfrac {n - m + 1} 2} = n$
where $\floor x$ denotes the floor of $x$.


Proof
Either $n + m$ or $n - m + 1$ is even.
Thus:

$\dfrac {n + m} 2 \bmod 1 + \dfrac {n - m + 1} 2 \bmod 1 = \dfrac 1 2 < 1$
and so:














\(\ds \floor {\dfrac {n + m} 2} + \floor {\dfrac {n - m + 1} 2}\)

\(=\)







\(\ds \floor {\dfrac {n + m} 2 + \dfrac {n - m + 1} 2}\)





Sum of Floors not greater than Floor of Sum














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {n + m + n - m + 1} 2}\)




















\(\ds \)

\(=\)







\(\ds \floor {n + \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds n\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $33 \ \text{(a)}$




