# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Power_Series_Expansion_for_Cosine_Function



Theorem
The cosine function has the complex power series expansion:














\(\ds \map C z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {z^2} {2!} + \frac {z^4} {4!} - \frac {z^6} {6!} + \cdots\)









which is the power series expansion of the cosine function.

This is valid for all $z \in \C$.


Proof
Applying Radius of Convergence from Limit of Sequence: Complex Case, we find that:














\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\frac {\paren {-1}^{n + 1} } {\paren {2 \paren {n + 1} }!} } {\frac {\paren {-1}^n} {\paren {2 n}!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\paren {2 n}!} {\paren {2 \paren {n + 1} }!} }\)





as $\cmod {\paren {-1}^n} = 1$ for all $n$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac 1 {\paren {2 n + 1} \paren {2 n + 2} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Reciprocals is Null Sequence



Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Cosine Function


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.4$. Power Series: Example $\text {(iii)}$




