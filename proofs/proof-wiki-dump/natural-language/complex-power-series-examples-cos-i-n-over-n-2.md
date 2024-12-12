# 

Source: https://proofwiki.org/wiki/Complex_Power_Series/Examples/cos_i_n_over_n%5E2

Example of Complex Power Series
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \dfrac {\cos i n} {n^2} z^n$

The complex power series:

$S = \ds \sum_{n \mathop \ge 0} a_n z^n$
has a radius of convergence of $\dfrac 1 e$.


Proof
Let $R$ denote the radius of convergence of $S$.
Thus:














\(\ds R\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n - 1} } {a_n} }\)





Radius of Convergence from Limit of Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\cos i \paren {n - 1} } {\paren {n - 1}^2} / \dfrac {\cos i n} {n^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\cos i \paren {n - 1} } {\cos i n} \dfrac {n^2} {\paren {n - 1}^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\exp \paren {i \paren {i \paren {n - 1} } } + \exp \paren {-i \paren {i \paren {n - 1} } } } {\exp \paren {i \paren {i n} } + \exp \paren {-i \paren {i n} } } \dfrac 1 {\paren {1 - \frac 1 n}^2} }\)





Euler's Cosine Identity and simplifying














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\exp \paren {-\paren {n - 1} } + \exp \paren {n - 1} } {\exp \paren {-n} + \exp \paren n} } \cmod {\dfrac 1 {\paren {1 - \frac 1 n}^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\exp \paren {n - 1} } {\exp \paren n}\)





as $\sequence {\dfrac 1 n}$ is a basic null sequence and $e^{-n} \to 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\exp \paren n \exp \paren {-1} } {\exp \paren n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 e\)









$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $3 \ \text {(iv)}$




