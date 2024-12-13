# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_1000

Theorem
To at least $100$ decimal places:

$\map \zeta {1000} \approx 1$
where $\zeta$ denotes the Riemann zeta function.


Proof
By definition of the general harmonic numbers:

$\ds \map \zeta r = \lim_{n \mathop \to \infty} H_n^{\paren r} = \sum_{k \mathop \ge 1} \frac 1 {k^r}$
From Sequence of General Harmonic Numbers Converges for Index Greater than 1:














\(\ds \map \zeta {1000}\)

\(\le\)







\(\ds \dfrac {2^{1000} } {2^{1000} - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - 2^{-1000} }\)









which is $1 \cdot 000 \ldots$ to a good few hundred decimal places.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $12$




