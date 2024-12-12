# 

Source: https://proofwiki.org/wiki/Complex_Power_Series/Examples/3%5En-1_over_2%5En%2B1

Example of Complex Power Series
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \dfrac {3^n - 1} {2^n + 1}$

The complex power series:

$S = \ds \sum_{n \mathop \ge 0} a_n z^n$
has a radius of convergence of $\dfrac 2 3$.


Proof
Let $R$ denote the radius of convergence of $S$.
By Radius of Convergence from Limit of Sequence:

$R = \ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n - 1} } {a_n} }$

Thus:














\(\ds a_n\)

\(=\)







\(\ds \dfrac {3^n - 1} {2^n + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\frac {3^n} {2^n} - \frac 1 {2^n} } {1 + \frac 1 {2^n} }\)





multiplying top and bottom by $\dfrac 1 {2^n}$














\(\ds \)

\(\to\)







\(\ds \dfrac {3^n} {2^n}\)





as $n \to \infty$




Thus:














\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n - 1} } {a_n} }\)

\(=\)







\(\ds \cmod {\dfrac {3^{n-1} / 2^{n-1} } {3^n / 2^n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {3 / 2}\)





multiplying top and bottom by $3^{n-1} / 2^{n-1}$














\(\ds \)

\(=\)







\(\ds \frac 2 3\)









$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $3 \ \text {(ii)}$




