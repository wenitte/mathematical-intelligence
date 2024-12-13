# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Exponential_of_-t%5E2



Theorem
$\ds \int_0^\infty \map \exp {-t^2} \rd t = \dfrac {\sqrt \pi} 2$


Proof 1
Let $\ds I = \int_0^\infty \map \exp {-t^2} \rd t$.
Let $\ds I_P = \int_0^P \map \exp {-x^2} \rd x = \int_0^P \map \exp {-y^2} \rd y$.
Then we have:

$I = \ds \lim_{P \mathop \to \infty} I_P$
Hence:














\(\ds {I_P}^2\)

\(=\)







\(\ds \paren {\int_0^P \map \exp {-x^2} \rd x} \paren {\int_0^P \map \exp {-y^2} \rd y}\)




















\(\ds \)

\(=\)







\(\ds \int_0^P \int_0^P \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \iint_{\mathscr R_P} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)










where $\mathscr R_P$ is the square $\Box OACE$ in the figure below:




Because the integrand is positive:




\(\text {(1)}: \quad\)









\(\ds \iint_{\mathscr R_1} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \iint_{\mathscr R_2} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)









where $\mathscr R_1$ and $\mathscr R_2$ are the regions in the first quadrant bounded by the circles with centers $O$ and radii $P$ and $P \sqrt 2$ respectively.

Using polar coordinates, we can express $(1)$ as:




\(\text {(1)}: \quad\)









\(\ds \int_{\theta \mathop = 0}^{\frac \pi 2} \int_{r \mathop = 0}^P \map \exp {-r^2} r \rd r \rd \theta\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \int_{\theta \mathop = 0}^{\frac \pi 2} \int_{r \mathop = 0}^{P \sqrt 2} \map \exp {-r^2} r \rd r \rd \theta\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 4 \paren {1 - \map \exp {-P^2} }\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \dfrac \pi 4 \paren {1 - \map \exp {-2 P^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{P \mathop \to \infty} {I_P}^2\)

\(=\)







\(\ds I^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac \pi 4\)














\(\ds \leadsto \ \ \)





\(\ds I\)

\(=\)







\(\ds \dfrac {\sqrt \pi} 2\)









$\blacksquare$


Proof 2
Let $\lambda$ be a non-negative real number. 
Then, we have: 

$\ds \size {\frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} } \le \frac 1 {1 + x^2}$
for each $x \in \R$.
Note that from Definite Integral to Infinity of $\dfrac 1 {x^2 + a^2}$:

$\ds \int_0^\infty \frac 1 {x^2 + 1} \rd x = \frac \pi 2$
So by the Comparison Test for Improper Integral:

$\ds \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x$ converges.
We can therefore define a real function $I : \hointr 0 \infty \to \R$ by: 

$\ds \map I \lambda = \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x$
for each $\lambda \in \hointr 0 \infty$.

We then have from Definite Integral of Partial Derivative, for $\lambda > 0$:














\(\ds \map {I'} \lambda\)

\(=\)







\(\ds \frac \d {\d \lambda} \paren {\int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \lambda} \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 \lambda \int_0^\infty e^{-\lambda^2 \paren {1 + x^2 } } \rd x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -2 \lambda e^{-\lambda^2} \int_0^\infty e^{-\paren {\lambda x}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 e^{-\lambda^2} \int_0^\infty e^{-t^2} \rd t\)





substituting $t \mapsto \lambda x$



We have, using Definite Integral to Infinity of $\dfrac 1 {x^2 + a^2}$ again: 

$\ds \map I 0 = \int_0^\infty \frac 1 {1 + x^2} \rd x = \frac \pi 2$
We also have, for $\lambda > 0$:














\(\ds 0\)

\(\le\)







\(\ds \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-\lambda^2 \paren {1 + x^2} } \rd x\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty e^{-\lambda x} \rd x\)





since $x \le 1 + x^2$














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda\)





Laplace Transform of Real Power



so:

$\ds \lim_{\lambda \to \infty} \int_0^\infty \frac {e^{-\lambda^2 \paren {1 + x^2} } } {1 + x^2} \rd x = 0$

Now we have: 














\(\ds \int_0^\infty \map {I'} \lambda \rd \lambda\)

\(=\)







\(\ds \lim_{R \to \infty} \int_0^R \map {I'} \lambda \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds \lim_{R \to \infty} \paren {\map I R - \map I 0}\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 2\)









On the other hand: 














\(\ds \int_0^\infty \map {I'} \lambda \rd \lambda\)

\(=\)







\(\ds -2 \lim_{R \to \infty} \int_0^R \map {I'} \lambda \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds -2 \int_0^\infty e^{-t^2} \rd t \lim_{R \to \infty} \int_0^R e^{-\lambda^2} \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds -2 \paren {\int_0^\infty e^{-t^2} \rd t}^2\)





Definition of Improper Integral on Closed Interval Unbounded Above



So:

$\ds \paren {\int_0^\infty e^{-t^2} \rd t}^2 = \frac \pi 4$
Since:

$\ds \int_0^\infty e^{-t^2} \rd t \ge 0$
we have: 

$\ds \int_0^\infty e^{-t^2} \rd t = \frac {\sqrt \pi} 2$
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Gamma Function: $29$




