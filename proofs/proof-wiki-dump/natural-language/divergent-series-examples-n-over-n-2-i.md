# 

Source: https://proofwiki.org/wiki/Divergent_Series/Examples/n_over_n%5E2_%2B_i

Example of Divergent Series
The complex series defined as:

$\ds S = \sum_{n \mathop = 1}^\infty \dfrac n {n^2 + i}$
is divergent.


Proof













\(\ds S\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac n {n^2 + i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {n \paren {n^2 - i} } {\paren {n^2 + i} \paren {n^2 - i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {n^3 - i n^2} {n^4 + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\frac {n^3} {n^4 + 1} - \frac {i n^2} {n^4 + 1} }\)










Then we have:














\(\ds \sum_{n \mathop = 1}^\infty \frac {n^3} {n^4 + 1}\)

\(\ge\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {n^3} {2 n^4}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 1}^\infty \frac 1 n\)










From Harmonic Series is Divergent, $\ds \sum_{n \mathop = 1}^\infty \dfrac 1 n$ is a divergent series.
The result follows from Convergence of Series of Complex Numbers by Real and Imaginary Part.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $2 \ \text {(ii)}$




