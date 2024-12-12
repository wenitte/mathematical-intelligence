# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Cosine_m_x_over_x_Squared_plus_a_Squared


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
$\ds \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x = \frac \pi {2 a} e^{-m a}$
where $m$ and $a$ are positive real numbers. 


Proof
From Definite Integral of Even Function:

$\ds \frac 1 2 \int_{-\infty}^\infty \frac {\cos m x} {x^2 + a^2} \rd x = \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x$
Let $R$ be a positive real number with $R > a$.
Let $C_1$ be the straight line segment from $-R$ to $R$.
Let $C_2$ be the arc of the circle of radius $R$ centred at the origin connecting $R$ and $-R$ anticlockwise.


This article, or a section of it, needs explaining.In particular: What is the context of $C_1$ and $C_2$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\Gamma = C_1 \cup C_2$. 
Let: 

$\map f z = \dfrac {e^{i m z} } {z^2 + a^2}$
From Euler's Formula, we have: 

$\map f z = \dfrac {\cos m z} {z^2 + a^2} + i \dfrac {\sin m z} {z^2 + a^2}$
So: 














\(\ds \int_{-\infty}^\infty \map f x \rd x\)

\(=\)







\(\ds \int_{-\infty}^\infty \frac {\cos m x} {x^2 + a^2} \rd x + i \int_{-\infty}^\infty \frac {\sin m x} {x^2 + a^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \frac {\cos m x} {x^2 + a^2} \rd x\)





Definite Integral of Odd Function



Note that the integrand is meromorphic with simple poles where $z^2 + a^2 = 0$. 
That is, at $z = a i$ and $z = -a i$. 
As our semi-circular contour lies in the upper half-plane, the only pole of concern is $a i$.
As $R > a$, these poles do not lie on $C_2$, but are enclosed by the curve $\Gamma$.
We have: 














\(\ds \int_C \map f z \rd z\)

\(=\)







\(\ds \int_{C_1} \frac {e^{i m z} } {z^2 + a^2} \rd z + \int_{C_2} \frac {e^{i m z} } {z^2 + a^2} \rd z\)





Contour Integral of Concatenation of Contours














\(\ds \)

\(=\)







\(\ds \int_{-R}^R \frac {e^{i m x} } {x^2 + a^2} \rd x + \int_{C_2} \frac {e^{i m z} } {z^2 + a^2} \rd z\)





Definition of Complex Contour Integral



The integral over $C_2$ can be shown to vanish as $R \to \infty$:














\(\ds \size {\int_{C_2} \frac {e^{i m z} } {z^2 + a^2} \rd z}\)

\(\le\)







\(\ds \frac \pi m \max_{0 \le \theta \le \pi} \size {\frac 1 {R^2 e^{2 i \theta} + 1} }\)





Jordan's Lemma














\(\ds \)

\(=\)







\(\ds \frac \pi m \paren {\frac 1 {R^2 - 1} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



Taking $R \to \infty$, we have: 














\(\ds \int_{-\infty}^\infty \frac {e^{i m x} } {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int_C \frac {e^{i m z} } {z^2 + a^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i \Res {\frac {e^{i m z} } {z^2 + a^2} } {a i}\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds 2 \pi i \paren {\frac {e^{i m z} } {2 z} }_{z = a i}\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds 2 \pi i \frac {e^{-m a} } {2 a i}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi a e^{-m a}\)









So: 

$\ds \int_{-\infty}^\infty \frac {\cos m x} {x^2 + a^2} \rd x = \frac \pi a e^{-m a}$
giving:

$\ds \int_0^\infty \frac {\cos m x} {x^2 + a^2} \rd x = \frac \pi {2 a} e^{-m a}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.40$




