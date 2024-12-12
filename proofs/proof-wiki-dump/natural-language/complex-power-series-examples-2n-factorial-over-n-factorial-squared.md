# 

Source: https://proofwiki.org/wiki/Complex_Power_Series/Examples/2n_Factorial_over_n_Factorial_Squared

Example of Complex Power Series
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \dfrac {\paren {2 n}!} {\paren {n!}^2} z^n$

The complex power series:

$S = \ds \sum_{n \mathop \ge 0} a_n z^n$
has a radius of convergence of $\dfrac 1 4$.


Proof
Let $R$ denote the radius of convergence of $S$.
Thus:














\(\ds R\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n - 1} } {a_n} }\)





Radius of Convergence from Limit of Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\paren {2 \paren {n - 1} }!} {\paren {\paren {n - 1}!}^2} / \dfrac {\paren {2 n}!} {\paren {n!}^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\paren {2 n - 2}!} {\paren {2 n}!} \dfrac {\paren {n!}^2} {\paren {\paren {n - 1}!}^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {n^2} {\paren {2 n} \paren {2 n - 1} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {n^2} {4 n^2 - 2 n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac 1 {4 - \frac 2 n} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4\)





as $\sequence {\dfrac 1 n}$ is a basic null sequence



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $3 \ \text {(iii)}$




