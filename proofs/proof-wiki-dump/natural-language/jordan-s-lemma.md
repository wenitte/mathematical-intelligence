# 

Source: https://proofwiki.org/wiki/Jordan%27s_Lemma



Theorem
Let $r > 0$ be a real number.
Let:

$C_r = \set {r e^{i \theta}: 0 \le \theta \le \pi}$
Let $g : C_r \to \C$ be a continuous function.
Define $f : C_r \to \C$ by: 

$\map f z = e^{i a z} \map g z$
for each $z \in C_r$, for some real number $a > 0$. 

Then:

$\ds \size {\int_{C_r} \map f z \rd z} \le \frac \pi a \paren {\max_{0 \mathop \le \theta \mathop \le \pi} \size {\map g {r e^{i \theta} } } }$


Proof
We have: 














\(\ds \size {\int_{C_r} \map f z \rd z}\)

\(=\)







\(\ds \size {\int_{C_r} e^{i a z} \map g z \rd z}\)




















\(\ds \)

\(=\)







\(\ds \size {i r} \size {\int_0^\pi e^{i a r e^{i \theta} } \map g {r e^{i \theta} } e^{i \theta} \rd \theta}\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \size {i r} \size {\int_0^\pi e^{i a r \paren {i \sin \theta + \cos \theta} } \map g {r e^{i \theta} } e^{i \theta} \rd \theta}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds r \size {\int_0^\pi e^{a r \paren {i \cos \theta - \sin \theta} } \map g {r e^{i \theta} } e^{i \theta} \rd \theta}\)





$i^2 = -1$, $\size i = 1$














\(\ds \)

\(\le\)







\(\ds r \int_0^\pi \size {e^{i a r \cos \theta} } \size {e^{-a r \sin \theta} } \size {\map g {r e^{i \theta} } } \size {e^{i \theta} } \rd \theta\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds r \int_0^\pi e^{-a r \sin \theta} \size {\map g {r e^{i \theta} } } \rd \theta\)





$\size {e^{i \theta} } = 1$ for real $\theta$














\(\ds \)

\(\le\)







\(\ds r \int_0^\pi e^{-a r \sin \theta} \max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } \rd \theta\)





Definition of Supremum of Real-Valued Function



From Definite Integral of Constant Multiple of Real Function, we can write:

$\ds r \int_0^\pi e^{-a r \sin \theta} \max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } \rd \theta = r \paren {\max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } } \int_0^\pi e^{-a r \sin \theta} \rd \theta$
We now focus on: 

$\ds \int_0^\pi e^{-a r \sin \theta} \rd \theta$
We have: 














\(\ds \int_0^\pi e^{-a r \sin \theta} \rd \theta\)

\(=\)







\(\ds \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta + \int_{\pi/2}^\pi e^{-a r \sin \theta} \rd \theta\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta - \int_{\pi/2}^0 e^{-a r \map \sin {\pi - \theta} } \rd \theta\)





substituting $\theta \mapsto \pi - \theta$]]














\(\ds \)

\(=\)







\(\ds \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta + \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta\)





Sine of Angle plus Integer Multiple of Pi, Sine Function is Odd














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta\)









Note that we also have, from Jordan's Inequality: 

$\sin \theta \ge \dfrac {2 \theta} \pi$
We therefore have: 














\(\ds 2 \int_0^{\pi/2} e^{-a r \sin \theta} \rd \theta\)

\(\le\)







\(\ds 2 \int_0^\pi e^{-\paren {2 a r \theta} / \pi} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {-\frac {\pi e^{\paren {2 a r \theta} / \pi} } {2 a r} } 0 \pi\)





Primitive of Exponential of a x, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {\pi \paren {1 - e^{-2 a r} } } {a r}\)




















\(\ds \)

\(\le\)







\(\ds \frac \pi {a r}\)





$e^{-a r} < 1$ for positive $a, r$



So:














\(\ds \size {\int_{C_r} \map f z \rd z}\)

\(\le\)







\(\ds r \paren {\max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } } \int_0^\pi e^{-a r \sin \theta} \rd \theta\)




















\(\ds \)

\(\le\)







\(\ds \frac \pi {a r} \times r \times \paren {\max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi a \paren {\max_{0 \le \theta \le \pi} \size {\map g {r e^{i \theta} } } }\)









$\blacksquare$


Also see
Estimation Lemma for Contour Integrals


Source of Name
This entry was named for Marie Ennemond Camille Jordan.





