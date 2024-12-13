# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Sine_p_x_Sine_q_x_over_x_Squared



Theorem
$\ds \int_0^\infty \frac {\sin p x \sin q x} {x^2} \rd x = \begin {cases} \dfrac {\pi p} 2 & : 0 < p \le q \\ \quad \\ \dfrac {\pi q} 2 & : p \ge q > 0 \end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int f g' \rd t = f g - \int f' g \rd t$
let:














\(\ds f\)

\(=\)







\(\ds \sin p x \sin q x\)














\(\ds \leadsto \ \ \)





\(\ds f'\)

\(=\)







\(\ds p \cos p x \sin q x + q \sin p x \cos q x\)





Product Rule for Derivatives and Derivative of $\sin a x$














\(\ds g'\)

\(=\)







\(\ds \frac 1 {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds -\frac 1 x\)





Chain Rule for Derivatives




So:














\(\ds \int_0^\infty \frac {\sin p x \sin q x} {x^2} \rd x\)

\(=\)







\(\ds \intlimits {-\frac {\sin p x \sin q x} x} 0 \infty + \int_0^\infty \frac {p \cos p x \sin q x + q \sin p x \cos q x} x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds 0 + \int_0^\infty \frac {p \cos p x \sin q x + q \sin p x \cos q x} x \rd x\)





evaluating limits using L'Hôpital's Rule and Product Rule for Limits of Functions














\(\ds \)

\(=\)







\(\ds p \cdot \int_0^\infty \frac {\cos p x \sin q x} x \rd x + q \cdot \int_0^\infty \frac {\sin p x \cos q x} x \rd x\)





Linear Combination of Definite Integrals





Case $0 < p = q$













\(\ds \)

\(\)







\(\ds p \cdot \int_0^\infty \frac {\cos p x \sin q x} x \rd x + q \cdot \int_0^\infty \frac {\sin p x \cos q x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 p \cdot \int_0^\infty \frac {\cos p x \sin p x} x \rd x\)





Substitute $p$ for $q$














\(\ds \)

\(=\)







\(\ds 2 p \cdot \frac \pi 4\)





Integral to Infinity of $\dfrac {\sin p x \cos q x} x$














\(\ds \)

\(=\)







\(\ds \frac {\pi p} 2 = \frac {\pi q} 2\)









$\Box$


Case $0 < p \le q$:
Suppose $0 < p < q$.
Then:














\(\ds \)

\(\)







\(\ds p \cdot \int_0^\infty \frac {\cos p x \sin q x} x \rd x + q \cdot \int_0^\infty \frac {\sin p x \cos q x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds p \cdot \frac \pi 2 + q \cdot 0\)





Integral to Infinity of $\dfrac {\sin p x \cos q x} x$














\(\ds \)

\(=\)







\(\ds \frac {\pi p} 2\)





simplifying



Adjoin to the case where $p = q$.
$\Box$


Case $p \ge q > 0$:
Suppose $p > q > 0$.
Then:














\(\ds \)

\(\)







\(\ds p \cdot \int_0^\infty \frac {\cos p x \sin q x} x \rd x + q \cdot \int_0^\infty \frac {\sin p x \cos q x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds p \cdot 0 + q \cdot \frac \pi 2\)





Integral to Infinity of $\dfrac {\sin p x \cos q x} x$














\(\ds \)

\(=\)







\(\ds \frac {\pi q} 2\)





simplifying



Adjoin to the case where $p = q$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.35$




