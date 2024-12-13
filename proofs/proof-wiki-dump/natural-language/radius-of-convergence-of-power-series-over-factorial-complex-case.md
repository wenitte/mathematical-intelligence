# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Power_Series_over_Factorial/Complex_Case

Theorem
Let $\xi \in \C$ be a complex number.
Let $\ds \map f z = \sum_{n \mathop = 0}^\infty \dfrac {\paren {z - \xi}^n} {n!}$.

Then $\map f z$ converges absolutely for all $z \in \C$.
That is, the radius of convergence of the power series $\ds \sum_{n \mathop = 0}^\infty \frac {\paren {z - \xi}^n} {n!}$ is infinite.


Proof
This is a power series in the form $\ds \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ where $\sequence {a_n} = \sequence {\dfrac 1 {n!} }$.
Applying Radius of Convergence from Limit of Sequence: Complex Case, we find that:














\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {a_{n + 1} } {a_n} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {\frac 1 {\paren {n + 1}!} } {\frac 1 {n!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac {n!} {\paren {n + 1}!} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {\dfrac 1 {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Reciprocals is Null Sequence



Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.4$. Power Series: Example $\text {(ii)}$




