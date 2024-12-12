# 

Source: https://proofwiki.org/wiki/Dirichlet_Integral


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$


Proof 1
By Fubini's Theorem:

$\ds \int_0^\infty \paren {\int_0^\infty e^{- x y} \sin x \rd y} \rd x = \int_0^\infty \paren {\int_0^\infty e^{- x y} \sin x \rd x} \rd y$

Then:














\(\ds \int_0^\infty e^{- x y} \sin x \rd y\)

\(=\)







\(\ds \intlimits {-e^{- x y} \frac {\sin x} x} 0 \infty\)





Primitive of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \frac {\sin x} x\)










and:














\(\ds \int_0^\infty e^{- x y} \sin x \rd x\)

\(=\)







\(\ds \intlimits {\frac {-e^{- x y} \paren {y \sin x + \cos x} } {y^2 + 1} } 0 \infty\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \frac 1 {y^2 + 1}\)










Hence:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 {y^2 + 1} \rd y\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {\arctan y} 0 \infty\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac \pi 2\)





as $\ds \lim_{y \mathop \to \infty} \arctan y = \frac \pi 2$



$\blacksquare$


Proof 2
$\ds \int_0^\infty \frac {\sin x} x \rd x$ is convergent as an improper integral.
Indeed, for all $n \in \N$:














\(\ds \int_0^{2\pi n}\frac {\sin x} {x} \rd x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1}\int_{\pi k}^{\pi \paren {k + 1} }\frac {\sin x} {x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1} {\paren {-1} }^k \int_0^\pi \frac {\sin x} {x + \pi k} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n \mathop - 1} \frac { {\paren {-1} }^k} {\pi k} \int_0^\pi \frac {\sin x} {1 + \frac x {\pi k} } \rd x\)









But:














\(\ds \size {\int_0^\pi \frac {\sin x} {1 + \frac x {\pi k} } \rd x - 2}\)

\(\le\)







\(\ds \int_0^\pi \sin x \size {\frac 1 {1 + \frac x {\pi k} } - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {k \pi} \int_0^\pi x \sin x \rd x\)









so that:

$\ds \int_0^\pi \frac {\sin x} {1 + \frac x {k \pi} } \rd x \to_{k \mathop \to \infty} 2$
Hence:

$\ds \int_0^{2\pi n }\frac {\sin x} x \rd x = \sum_{k \mathop = 0}^{n \mathop -1} \frac 1 {2 \pi k} \int_0^\pi \frac {\sin x} {1 + \frac x {2 \pi k} } \rd x - \frac 1 {\pi \paren {2 k + 1} } \int_0^\pi \frac {\sin x} {1 + \frac x {\pi \paren {2 k + 1} } } \rd x$
can be expressed as a series whose general term is equivalent to:

$\dfrac 2 \pi \times \dfrac 1 {2 k \paren {2 k + 1} }$
which is the term of an absolutely convergent series.

By Modulus of Sine of x Less Than or Equal To Absolute Value of x:

$\ds \size {\frac {e^{-\alpha x} \sin x} x} \le e^{-\alpha x}$
From Laplace Transform of Real Power: 

$\ds \int_0^\infty e^{-\alpha x} \rd x = \frac 1 \alpha$
Hence by Comparison Test for Improper Integral:

$\ds \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x$
converges whenever $\alpha > 0$.
So, we can define a real function $I : \openint 0 \infty \to \R$ by: 

$\ds \map I \alpha = \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x$
for each $\alpha \in \openint 0 \infty$.

Using Improper Integral of Partial Derivative on segments included in $\openint 0 \infty$:














\(\ds \map {I'} \alpha\)

\(=\)







\(\ds \frac \partial {\partial \alpha} \int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial \alpha} \frac {e^{-\alpha x} \sin x} x \rd x\)





Leibniz's Integral Rule














\(\ds \)

\(=\)







\(\ds -\int_0^\infty e^{-\alpha x} \sin x \rd x\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \intlimits {-\frac {e^{-\alpha x} \paren {-\alpha \sin x + \cos x} } {\paren {-\alpha}^2 + 1} } 0 \infty\)





Primitive of $e^{\alpha x} \sin b x$














\(\ds \)

\(=\)







\(\ds -\frac 1 {\alpha^2 + 1}\)









Therefore, by Derivative of Arctangent Function

$\map I \alpha = -\arctan \alpha + K$
for some $K \in \R$.
We also have: 














\(\ds \size {\map I \alpha}\)

\(=\)







\(\ds \size {\int_0^\infty \frac {e^{-\alpha x} \sin x} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \int_0^\infty \size {\frac {e^{-\alpha x} \sin x} x} \rd x\)





Triangle Inequality for Definite Integrals














\(\ds \)

\(\le\)







\(\ds \frac 1 \alpha\)









so:

$\ds \lim_{\alpha \mathop \to \infty} \size {\map I \alpha} = 0$
That is: 

$\ds \lim_{\alpha \mathop \to \infty} \map I \alpha = 0$
Therefore:

$\map I \alpha = \dfrac \pi 2 - \arctan \alpha$
since $\ds \arctan \alpha \to_{\alpha \mathop \to \infty} \frac \pi 2$.
Note that we have:

$\ds \map I \alpha \to_{\alpha \mathop \to 0} \frac \pi 2$
We now need to show that:

$\ds \map I \alpha \to_{\alpha \mathop \to 0} \int_0^\infty \frac {\sin x} x \rd x$
Observe for this purpose that:














\(\ds \map I \alpha\)

\(=\)







\(\ds \int_0^\infty \frac {\sin 2 x} x e^{-2 \alpha x} \rd x\)





change of variable $x \mapsto 2 x$














\(\ds \)

\(=\)







\(\ds 2 \int_0^\infty \frac {\sin x} x e^{-2 \alpha x} \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\sin^2 x} x e^{-2 \alpha x} } 0 \infty - 2 \int_0^\infty \sin x e^{-2 \alpha x} \paren {-\alpha \frac {\sin x} x + \frac {\cos x} x - \frac {\sin x} {x^2} } \rd x\)





integration by Parts for improper integral














\(\ds \)

\(=\)







\(\ds 2 \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + 2\int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x - \map I \alpha\)





by Continuous Real Function/Examples, $\dfrac {\sin x} x \to 1$ in $0$



where all the improper integrals appearing here are convergent by Comparison Test for Improper Integral, as used above for defining $\map I \alpha$.
Therefore:

$\ds \map I \alpha = \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x$

We also have:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds 2 \int_0^\infty \frac {\sin x} x \cos x \rd x\)





by change of variable $x \mapsto 2 x$














\(\ds \)

\(=\)







\(\ds 2 \intlimits {\frac {\sin^2 x} x} 0 \infty - 2\int_0^\alpha \frac {\sin x} x \cos x \rd x + 2\int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_0^\infty \frac {\sin x} x \rd x + 2 \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)









where the improper integrals on the right hand side are convergent because the first one identifies with $\ds \int_0^\infty \frac {\sin x} x \rd x$ and the second one because $\dfrac {\sin^2 x} {x^2}$ is integrable on $\openint 0 \infty$, since it has a finite limit at $0$ and is smaller than $\frac 1 {x^2}$ at $\infty$.
Hence:

$\ds \int_0^\infty \frac {\sin x} x \rd x = \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x$
where the second integral is absolutely convergent.
Moreover:














\(\ds \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x\)

\(=\)







\(\ds \alpha \int_0^\infty \frac {\sin^2 \frac x \alpha} x e^{-2 x} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \alpha \paren {\int_0^\alpha \frac {\frac {x^2} {\alpha^2} } x \rd x + \int_\alpha^1 \frac 1 x \rd x + \int_1^\infty e^{-2 x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \alpha \paren {\frac 1 2 - \ln \alpha + \frac 1 {2 e^2} }\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds 0\)









whenever $\alpha \le 1$.
Also:

$\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2\alpha x} \rd x \to_{\alpha\to 0} \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x$
This is because, for any positive $R$ and $\alpha$:














\(\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x\)

\(=\)







\(\ds \int_0^{\frac 1 {\sqrt \alpha} } {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x + \int_{\frac 1 {\sqrt \alpha} }^\infty {\paren {\frac {\sin x} x} }^2 \paren {1 - e^{-2 \alpha x} }\rd x\)




















\(\ds \)

\(\le\)







\(\ds \paren {1 - e^{-2 \sqrt \alpha} } \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x + \int_{\frac 1 {\sqrt \alpha} }^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds 0\)









because $\dfrac {\sin^2 x} {x^2}$ is integrable on $\openint 0 \infty$.

Finally, we have:














\(\ds \map I \alpha\)

\(=\)







\(\ds \alpha \int_0^\infty \frac {\sin^2 x} x e^{-2 \alpha x} \rd x + \int_0^\infty {\paren {\frac {\sin x} x} }^2 e^{-2 \alpha x} \rd x\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds \int_0^\infty {\paren {\frac {\sin x} x} }^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\sin x} x \rd x\)









as well as:














\(\ds \map I \alpha\)

\(=\)







\(\ds \frac \pi 2 - \arctan \alpha\)




















\(\ds \)

\(\to_{\alpha \mathop \to 0}\)







\(\ds \frac \pi 2\)









So that, by uniqueness of limits:

$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$
$\blacksquare$


Proof 3
Let:

$\map f x = \begin {cases} \dfrac {e^{i x} - 1} x & x \ne 0 \\ i & x = 0 \end {cases}$
We have, by Euler's Formula, for $x \in \R$:

$\map \Im {\map f x} = \begin {cases} \dfrac {\sin x} x & x \ne 0 \\ 1 & x = 0 \end {cases}$
So: 

$\ds \map \Im {\int_0^\infty \dfrac {e^{i x} - 1} x \rd x} = \int_0^\infty \dfrac {\sin x} x \rd x$
Let $C_R$ be the arc of the circle of radius $R$ centred at the origin connecting $R$ and $-R$ anticlockwise.
Let $\Gamma_R = C_R \cup \closedint {-R} R$.
Then, by Contour Integral of Concatenation of Contours:

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = \int_{C_R} \frac {e^{i x} - 1} x \rd x + \int_{-R}^R \frac {e^{i x} - 1} x \rd x$
From Linear Combination of Contour Integrals, we write: 

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = \int_{C_R} \frac {e^{i x} } x \rd x - \int_{C_R} \frac {\rd x} x + \int_{-R}^R \frac {e^{i x} - 1} x \rd x$
Note that $f$ is holomorphic inside our contour. 
It then follows from the Cauchy-Goursat Theorem, that:

$\ds \oint_{\Gamma_R} \frac {e^{i x} - 1} x \rd x = 0$
We also have: 














\(\ds \size {\int_{C_R} \frac { e^{i x} } x \rd x}\)

\(\le\)







\(\ds \pi \max_{0 \mathop \le \theta \mathop \le \pi} \size {\frac 1 {R e^{i \theta} } }\)





Jordan's Lemma














\(\ds \)

\(=\)







\(\ds \frac \pi R\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to \infty$



Therefore: 

$\ds \lim_{R \mathop \to \infty} \int_{C_R} \frac {\rd x} x = \lim_{R \mathop \to \infty} \int_{-R}^R \frac {e^{i x} - 1} x \rd x = \int_{-\infty}^\infty \frac {e^{i x} - 1} x \rd x$
Evaluating the integral on the left hand side: 














\(\ds \int_{C_R} \frac {\rd x} x\)

\(=\)







\(\ds \int_0^\pi \frac {i R e^{i \theta} } {R e^{i \theta} } \rd \theta\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds i \int_0^\pi \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \pi i\)









So:

$\ds \int_{-\infty}^\infty \frac {e^{i x} - 1} x \rd x = \pi i$
Taking the imaginary part:

$\ds \int_{-\infty}^\infty \frac {\sin x} x \rd x = \pi$
From Definite Integral of Even Function:

$\ds \int_{-\infty}^\infty \frac {\sin x} x \rd x = 2 \int_0^\infty \frac {\sin x} x \rd x$
Hence: 

$\ds \int_0^\infty \frac {\sin x} x \rd x = \frac \pi 2$
$\blacksquare$


Proof 4
From Integral to Infinity of Function over Argument:

$\ds \int_0^\infty {\dfrac {\map f x} x} = \int_0^{\to \infty} \map F u \rd u$
for a real function $f$ and its Laplace transform $\laptrans f = F$, provided they exist.
Let $\map f x := \sin x$.
Then from Laplace Transform of Sine:

$\laptrans {\map f x} = \dfrac 1 {s^2 + 1}$

Hence:














\(\ds \int_0^\infty \frac {\sin x} x \rd x\)

\(=\)







\(\ds \int_0^{\to \infty} \dfrac {\d u} {u^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {\arctan u} 0 \infty\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac \pi 2\)









$\blacksquare$


Proof 5
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


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.





