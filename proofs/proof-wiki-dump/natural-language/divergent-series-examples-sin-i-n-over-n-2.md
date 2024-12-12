# 

Source: https://proofwiki.org/wiki/Divergent_Series/Examples/sin_i_n_over_n%5E2

Example of Divergent Series
The complex series defined as:

$\ds S = \sum_{n \mathop = 1}^\infty \dfrac {\sin i n} {n^2}$
is divergent.


Proof













\(\ds \cmod {\dfrac {\sin i n} {n^2} }\)

\(=\)







\(\ds \cmod {\dfrac {\map \exp {i \paren {i n} } - \map \exp {-i \paren {i n} } } {2 i n^2} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \cmod {\dfrac {\map \exp {-n} - \exp n} {2 n^2} }\)




















\(\ds \)

\(>\)







\(\ds \dfrac {e^n - 1} {2 n^2}\)




















\(\ds \)

\(\to\)







\(\ds \infty\)










Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $2 \ \text {(v)}$




