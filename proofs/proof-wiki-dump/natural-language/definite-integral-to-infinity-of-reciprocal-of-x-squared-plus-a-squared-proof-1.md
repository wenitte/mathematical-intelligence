# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_x_Squared_plus_a_Squared/Proof_1

Theorem
$\ds \int_0^\infty \dfrac {\d x} {x^2 + a^2} = \frac \pi {2 a}$
for $a \ne 0$. 


Proof













\(\ds \int_0^\infty \dfrac {\d x} {x^2 + a^2}\)

\(=\)







\(\ds \int_0^{\mathop \to +\infty} \dfrac {\d x} {x^2 + a^2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to +\infty} \int_0^\gamma \dfrac {\d x} {x^2 + a^2}\)





Definition of Improper Integral on Closed Interval Unbounded Above














\(\ds \)

\(=\)







\(\ds \lim_{\gamma \mathop \to +\infty} \intlimits {\frac 1 a \arctan \frac x a} 0 \gamma\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \lim_{\gamma \mathop \to +\infty} \paren {\arctan \frac \gamma a - \arctan 0}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \lim_{\gamma \mathop \to +\infty} \arctan \frac \gamma a\)





Arctangent of Zero is Zero














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac \pi 2\)





Arctangent Tends to Half Pi as Argument Tends to Infinity



Hence the result.
$\blacksquare$





