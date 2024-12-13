# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Power_Series_Expansion_for_Sine_Function



Theorem
The sine function has the complex power series expansion:














\(\ds S \paren z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds z - \frac {z^3} {3!} + \frac {z^5} {5!} - \frac {z^7} {7!} + \cdots\)









which is the power series expansion of the sine function.

This is valid for all $z \in \C$.


Proof
Applying Radius of Convergence from Limit of Sequence: Complex Case, we find that:














\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\frac {\paren {-1}^{n + 1} } {\paren {2 \paren {n + 1} + 1}!} } {\frac {\paren {-1}^n} {\paren {2 n + 1}!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\paren {2 n + 1}!} {\paren {2 \paren {n + 1} + 1}!} }\)





as $\cmod {\paren {-1}^n} = 1$ for all $n$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac 1 {\paren {2 n + 2} \paren {2 n + 3} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Reciprocals is Null Sequence



Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Sine Function


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.4$. Power Series: Example $\text {(iii)}$




