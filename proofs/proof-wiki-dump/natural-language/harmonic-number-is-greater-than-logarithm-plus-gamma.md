# 

Source: https://proofwiki.org/wiki/Harmonic_Number_is_Greater_than_Logarithm_plus_Gamma

Theorem
$H_n > \ln n + \gamma$
where:

$H_n$ denotes the $n$th harmonic number
$\gamma$ denotes the Euler-Mascheroni constant.


Proof
From Approximate Size of Sum of Harmonic Series:

$H_n \approx \ln n + \gamma + \dfrac 1 {2 n} - \dfrac 1 {12 n^2} + \dfrac 1 {120 n^4} - \epsilon$
where $0 < \epsilon < \dfrac 1 {252 n^6}$.

We have that:

$\dfrac 1 {2 n} + \dfrac 1 {120 n^4} > \dfrac 1 {12 n^2} + \dfrac 1 {252 n^6}$
and the result follows.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $4$




