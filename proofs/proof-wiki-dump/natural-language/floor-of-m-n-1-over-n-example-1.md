# 

Source: https://proofwiki.org/wiki/Floor_of_m%2Bn-1_over_n/Example_1

Example of use of Floor of $\frac {m + n - 1} n$
Let $n \in \Z$.
Then:

$\floor {\dfrac {n + 2 - \floor {n / 25} } 3} = \floor {\dfrac {8 n + 24} {25} }$


Proof













\(\ds \floor {\dfrac {n + 2 - \floor {n / 25} } 3}\)

\(=\)







\(\ds \floor {\dfrac {\paren {n - \floor {n / 25} } + 3 - 1} 3}\)





rearrangement














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {n - \floor {n / 25} } 3}\)





Floor of $\dfrac {m + n - 1} n$














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {n + \ceiling {-n / 25} } 3}\)





Ceiling of Negative equals Negative of Floor














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {\ceiling {n - n / 25} } 3}\)





Ceiling of Number plus Integer














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {\ceiling {24 n / 25} } 3}\)





simplification














\(\ds \)

\(=\)







\(\ds \ceiling {\dfrac {8 n} {25} }\)





Ceiling of $\dfrac {x + m} n$: Corollary














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {8 n + 25 - 1} {25} }\)





Floor of $\dfrac {m + n - 1} n$














\(\ds \)

\(=\)







\(\ds \floor {\dfrac {8 n + 24} {25} }\)





simplification



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $48 \ \text{(b)}$




