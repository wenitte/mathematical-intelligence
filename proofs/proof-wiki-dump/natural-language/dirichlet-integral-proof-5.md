# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral/Proof_5

Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof
Let $M \in \R_{>0}$.
Define a real function $I_M : \R \to \R$ by:

$\ds \map {I_M} \alpha := \int_0^M \dfrac {\sin x} x e^{-\alpha x} \rd x$
Then, for $\alpha > 0$:














\(\ds \size {\map {I_M} \alpha}\)

\(\le\)







\(\ds \int_0^M \size {\dfrac {\sin x} x e^{-\alpha x} } \rd x\)





Absolute Value of Definite Integral














\(\ds \)

\(\le\)







\(\ds \int_0^M e^{-\alpha x} \rd x\)





Sine Inequality $\size {\sin x} \le \size x$














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {e^{-\alpha x} } {-\alpha} } 0 M\)





Primitive of $e^{ax}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \alpha - \dfrac {e^{-\alpha M} } \alpha\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \dfrac 1 \alpha\)










On the other hand:














\(\ds \map {I'_M} \alpha\)

\(=\)







\(\ds \int_0^M \dfrac \partial {\partial \alpha} \paren {\dfrac {\sin x} x e^{-\alpha x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^M - \sin x e^{-\alpha x} \rd x\)





Primitive of $e^{ax}$














\(\ds \)

\(=\)







\(\ds \intlimits {-\frac {e^{-\alpha x} \paren {-\alpha \sin x + \cos x} } {\paren {-\alpha}^2 + 1} } 0 M\)





Primitive of $e^{\alpha x} \sin b x$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {-1} {\alpha^2 + 1} + \cos M \dfrac {e^{-\alpha M} }{\alpha^2 + 1} + \sin M \dfrac {\alpha e^{-\alpha M} }{\alpha^2 + 1}\)









Thus:














\(\ds \map {I_M} A - \map {I_M} 0\)

\(=\)







\(\ds \int_0^A \map {I'_M} \alpha \rd \alpha\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds - \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} + \cos M \int_0^A \dfrac {e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha + \sin M \int_0^A \dfrac {\alpha e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha\)





by $\paren 2$ and Linear Combination of Integrals



Thus:














\(\ds \size {\map {I_M} A - \map {I_M} 0 + \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} }\)

\(=\)







\(\ds \size {\cos M \int_0^A \dfrac {e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha + \sin M \int_0^A \dfrac {\alpha e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha}\)




















\(\ds \)

\(\le\)







\(\ds \size {\cos M \int_0^A \dfrac {e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha} + \size {\sin M \int_0^A \dfrac {\alpha e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \int_0^A \dfrac {e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha + \int_0^A \dfrac {\alpha e^{-\alpha M} }{\alpha^2 + 1} \rd \alpha\)




















\(\ds \)

\(\le\)







\(\ds 2 \int_0^A e^{-\alpha M} \rd \alpha\)










\(\text {(3)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \dfrac 2 M\)





similarly to $\paren 1$



Therefore:














\(\ds \size {\map {I_M} 0 - \dfrac \pi 2}\)

\(=\)







\(\ds \size {\paren {\map {I_M} A - \map {I_M} A } + \map {I_M} 0 + \paren {-\int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} + \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} } -\dfrac \pi 2}\)





adding zero














\(\ds \)

\(=\)







\(\ds \size {\map {I_M} A - \paren {\map {I_M} A -\map {I_M} 0 + \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} } + \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} -\dfrac \pi 2}\)





rearranging














\(\ds \)

\(\le\)







\(\ds \size {\map {I_M} A} + \size {\map {I_M} A -\map {I_M} 0 + \int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} } + \size {\int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} - \dfrac \pi 2}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \dfrac 1 A + \dfrac 2 M + \size {\int_0^A \dfrac {\rd \alpha} {\alpha^2 + 1} - \dfrac \pi 2}\)





by $\paren 1$ and $\paren 3$














\(\ds \)

\(\to\)







\(\ds \dfrac 2 M\)





as $A \to +\infty$ by Definite Integral to Infinity of $\dfrac 1 {x^2 + a^2}$



As:

$\ds \map {I_M} 0 = \int_0^M \dfrac {\sin x} x \rd x$
we have shown:

$\ds \forall  M \in \R_{>0} : \size {\int_0^M \dfrac {\sin x} x \rd x - \dfrac \pi 2} \le \dfrac 2 M$
In particular:














\(\ds \int_0^\infty \dfrac {\sin x} x \rd x\)

\(=\)







\(\ds \lim_{M \mathop \to +\infty} \int_0^M \dfrac {\sin x} x \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \dfrac \pi 2\)









$\blacksquare$





