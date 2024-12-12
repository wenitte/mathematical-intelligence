# 

Source: https://proofwiki.org/wiki/Ceiling_of_Half_of_n%2Bm_plus_Ceiling_of_Half_of_n-m%2B1

Theorem
Let $n, m \in \Z$ be integers.

$\ceiling {\dfrac {n + m} 2} + \ceiling {\dfrac {n - m + 1} 2} = n + 1$
where $\ceiling x$ denotes the ceiling of $x$.


Proof
Either $n + m$ or $n - m + 1$ is even.
Thus either $\dfrac {n + m} 2$ or $\dfrac {n - m + 1} 2$ is an integer.
So:














\(\ds \ceiling {\dfrac {n + m} 2} + \ceiling {\dfrac {n - m + 1} 2}\)

\(=\)







\(\ds \ceiling {\dfrac {n + m} 2 + \dfrac {n - m + 1} 2}\)





Sum of Ceilings not less than Ceiling of Sum














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {n + m + n - m + 1} 2}\)




















\(\ds \)

\(=\)







\(\ds \ceiling {n + \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds n + 1\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $33 \ \text{(b)}$




