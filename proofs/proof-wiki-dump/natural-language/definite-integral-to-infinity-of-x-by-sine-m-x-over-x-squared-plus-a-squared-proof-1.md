# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_x_by_Sine_m_x_over_x_Squared_plus_a_Squared/Proof_1

Theorem
$\ds \int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x = \frac \pi 2 e^{-m a}$


Proof
From Definite Integral of Even Function:

$\ds \frac 1 2 \int_{-\infty}^\infty \frac {x \sin m x} {x^2 + a^2} \rd x = \int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x$

With the aim of integrating over the domain, we split the domain up into $2$ components as follows:
Let $R$ be a positive real number with $R > a$.
Let $C_1$ be the straight line segment from $-R$ to $R$.
Let $C_2$ be the arc of the circle of radius $R$ centred at the origin connecting $R$ and $-R$ anticlockwise.
Let $\Gamma = C_1 \cup C_2$. 
Let: 

$\map f x = \dfrac {x e^{i m x} } {x^2 + a^2}$
From Euler's Formula, we have: 

$\map f x = \dfrac {x \cos m x} {x^2 + a^2} + i \dfrac {x \sin m x} {x^2 + a^2}$
So:














\(\ds \int_{-\infty}^\infty \map f x \rd x\)

\(=\)







\(\ds \int_{-\infty}^\infty \frac {x \cos m x} {x^2 + a^2} \rd x + i \int_{-\infty}^\infty \frac {x \sin m x} {x^2 + a^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds i \int_{-\infty}^\infty \frac {x \sin m x} {x^2 + a^2} \rd x\)





Definite Integral of Odd Function



Note that the integrand is meromorphic with simple poles where $x^2 + a^2 = 0$. 
That is, at $x = a i$ and $x = -a i$. 
As our semi-circular contour lies in the upper half-plane, the only pole of concern is $a i$.
As $R > a$, these poles do not lie on $C_2$, but are enclosed by the curve $\Gamma$.
We have:














\(\ds \int_{\Gamma} \map f x \rd x\)

\(=\)







\(\ds \int_{C_1} \frac {x e^{i m x} } {x^2 + a^2} \rd x + \int_{C_2} \frac {x e^{i m x} } {x^2 + a^2} \rd x\)





Contour Integral of Concatenation of Contours














\(\ds \)

\(=\)







\(\ds \int_{-R}^R \frac {x e^{i m x} } {x^2 + a^2} \rd x + \int_{C_2} \frac {x e^{i m x} } {x^2 + a^2} \rd x\)





Definition of Complex Contour Integral



The integral over $C_2$ can be shown to vanish as $R \to \infty$:














\(\ds \size {\int_{C_2} \frac {x e^{i m x} } {x^2 + a^2} \rd x}\)

\(\le\)







\(\ds \frac \pi m \max_{0 \le \theta \le \pi} \size {\frac {R e^{i \theta} } {R^2 e^{2 i \theta} + 1} }\)





Jordan's Lemma














\(\ds \)

\(=\)







\(\ds \frac \pi m \paren {\frac R {R^2 - 1} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



Taking $R \to \infty$, we have:














\(\ds \int_{-\infty}^\infty \frac {x e^{i m x} } {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int_{C_1} \frac {x e^{i m x} } {x^2 + a^2} \rd x + 0\)





The integral over $C_2$ vanished














\(\ds \)

\(=\)







\(\ds 2 \pi i \Res {\frac {x e^{i m x} } {x^2 + a^2} } {a i}\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds 2 \pi i \paren {\lim_{x \mathop \to ai} \paren {x - a i} \frac {x e^{i m x} } {\paren {x + a i} \paren {x - a i} } }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds 2 \pi i \paren {\frac {x e^{i m x} } {x + a i} }_{x = a i}\)




















\(\ds \)

\(=\)







\(\ds \pi i e^{-m a}\)









So: 

$\ds \int_{-\infty}^\infty \frac {x \sin m x} {x^2 + a^2} \rd x = \pi e^{-m a}$
giving:

$\ds \int_0^\infty \frac {x \sin m x} {x^2 + a^2} \rd x = \frac \pi 2 e^{-m a}$
$\blacksquare$





