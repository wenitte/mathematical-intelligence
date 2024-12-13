# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Square_of_Sine_p_x_over_x_Squared

Theorem
$\ds \int_0^\infty \paren {\frac {\sin p x} x}^2 \rd x = \frac {\pi \size p} 2$
where $p$ is a real number.


Proof
We have: 














\(\ds \map {\frac \d {\d x} } {\sin^2 p x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\sin p x} \map {\frac \d {\map \d {\sin p x} } } {\sin^2 p x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 2 p \cos p x \sin p x\)





Derivative of Sine of a x, Derivative of Power














\(\ds \)

\(=\)







\(\ds p \sin 2 p x\)





Double Angle Formula for Sine



We also have, by Primitive of Power: 

$\ds \int \frac {\d x} {x^2} = -\frac 1 x + C$
So: 














\(\ds \int_0^\infty \paren {\frac {\sin p x} x}^2 \rd x\)

\(=\)







\(\ds \intlimits {-\frac {\sin^2 p x} x} 0 \infty - \int_0^\infty \paren {-\frac {p \sin 2 p x} x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds - \lim_{x \mathop \to \infty} \paren {\frac {\sin^2 p x} x} + \lim_{x \mathop \to 0} \paren {\frac {\sin^2 p x} x} + p \int_0^\infty \frac {\sin 2 p x} x \rd x\)










We have, from Real Sine Function is Bounded, that: 

$0 \le \sin^2 p x \le 1$
for all real $x$. 
Therefore: 

$0 \le \dfrac {\sin^2 p x} x \le \dfrac 1 x$
for all strictly positive real $x$.
We have: 

$\ds \lim_{x \mathop \to \infty} \frac 1 x = 0$
Therefore, by the Squeeze Theorem, we have: 

$\ds \lim_{x \mathop \to \infty} \paren {\frac {\sin^2 p x} x} = 0$

As to the other limit, note that: 














\(\ds \lim_{x \mathop \to 0} \frac {\sin p x} x\)

\(=\)







\(\ds \lim_{p x \mathop \to 0} \frac {\sin p x} {\frac {p x} p}\)




















\(\ds \)

\(=\)







\(\ds p \lim_{u \mathop \to 0} \frac {\sin u} u\)





letting $u = p x$














\(\ds \)

\(=\)







\(\ds p\)





Limit of $\dfrac {\sin x} x$ at Zero



So:














\(\ds \lim_{x \mathop \to 0} \frac {\sin^2 p x} x\)

\(=\)







\(\ds \paren {\lim_{x \mathop \to 0} \sin p x} \paren {\lim_{x \mathop \to 0} \frac {\sin p x} x}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds p \map \sin {0 p}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Zero is Zero




So: 

$\ds \int_0^\infty \paren {\frac {\sin p x} x}^2 \rd x = p \int_0^\infty \frac {\sin 2 p x} x \rd x$
By Integral to Infinity of Sine p x over x, we have: 

$\ds \int_0^\infty \frac {\sin 2 p x} x \rd x = \begin{cases} \dfrac \pi 2 & : p > 0 \\
0 & : p = 0 \\
-\dfrac \pi 2 & : p < 0 \end{cases}$
So:

$\ds p \int_0^\infty \frac {\sin 2 p x} x \rd x = \begin{cases} \dfrac \pi 2 p & : p > 0 \\
0 & : p = 0 \\
-\dfrac \pi 2 p & : p < 0 \end{cases}$
Hence:

$\ds p \int_0^\infty \frac {\sin 2 p x} x \rd x = \frac {\pi \size p} 2$
Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.36$




