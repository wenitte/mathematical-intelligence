# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_x_Squared_plus_a_Squared



Theorem
$\ds \int_0^\infty \dfrac {\d x} {x^2 + a^2} = \frac \pi {2 a}$
for $a \ne 0$. 


Corollary
$\ds \int_0^\infty \dfrac {\d x} {1 + x^2} = \frac \pi 2$
for $a \ne 0$. 


Proof 1













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


Proof 2













\(\ds \int_0^\infty \dfrac {\d x} {x^2 + a^2}\)

\(=\)







\(\ds \frac \pi { 2 a^{2 - 1} } \csc \left({\frac \pi 2}\right)\)





Definite Integral to Infinity of $\dfrac 1 {1 + x^n}$: Corollary














\(\ds \)

\(=\)







\(\ds \frac \pi {2 a}\)





Sine of Right Angle




$\blacksquare$


Proof 3
Let $C_R$ be the semicircular contour of radius $R$ situated on the upper half plane, centred at the origin, traversed anti-clockwise.
Let $\Gamma_R = C_R \cup \closedint {-R} R$.
Then, by Contour Integral of Concatenation of Contours:

$\ds \oint_{\Gamma_R} \frac {\d z} {z^2 + a^2} = \int_{C_R} \frac {\d z} {z^2 + a^2} + \int_{-R}^R \frac {\d x} {x^2 + a^2}$
we have: 














\(\ds \size {\int_{C_R} \frac {\d z} {z^2 + a^2} }\)

\(\le\)







\(\ds \pi R \cdot \max_{0 \mathop \le \theta \mathop \le \pi} \size {\frac 1 {R^2 e^{2 i \theta} + a^2} }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac {\pi R} {R^2 + a^2}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\pi R} {R^2}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi R\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



from which:

$\ds \lim_{R \mathop \to \infty} \oint_{\Gamma_R} \frac {\d z} {z^2 + a^2} = \lim_{R \mathop \to \infty} \int_{-R}^R \frac {\d x} {x^2 + a^2} = \int_{-\infty}^\infty \frac {\d x} {x^2 + a^2}$
The integrand is meromorphic.
So by Cauchy's Residue Theorem:

$\ds \lim_{R \mathop \to \infty} \oint_{\Gamma_R} \frac {\d z} {z^2 + a^2} = 2 \pi i \sum \Res {\frac 1 {z^2 + a^2} } {z_0}$
where the summation runs over the poles of $\dfrac 1 {z^2 + a^2}$.
The integrand can be written as:

$\dfrac 1 {\paren {z - a i} \paren {z + a i} }$
From this it can be observed that the integrand has only two simple poles: $z_0 = a i$ and $z_0 = -a i$.
Only the former of these lies in the contour, so:














\(\ds \lim_{R \mathop \to \infty} \oint_{\Gamma_R} \frac {\d z} {z^2 + a^2}\)

\(=\)







\(\ds 2 \pi i \Res {\frac 1 {z^2 + a^2} } {a i}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i \cdot \frac 1 {\map {\frac \d {\d z} } {z^2 + a^2}_{z \mathop = a i} }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds 2 \pi i \cdot \frac 1 {2 a i}\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac \pi a\)









So: 

$\ds \int_{-\infty}^\infty \frac {\d x} {x^2 + a^2} = \frac \pi a$
From Definite Integral of Even Function:

$\ds \int_{-\infty}^\infty \frac {\d x} {x^2 + a^2} = 2 \int_0^\infty \frac {\d x} {x^2 + a^2}$
Hence: 

$\ds \int_0^\infty \frac {\d x} {x^2 + a^2} = \frac \pi {2 a}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.18$




