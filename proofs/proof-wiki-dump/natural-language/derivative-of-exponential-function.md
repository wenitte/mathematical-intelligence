# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function



Theorem
Let $\exp$ be the exponential function.
Then:

$\map {\dfrac \d {\d x} } {\exp x} = \exp x$


Corollary 1
Let $a \in \R$.
Then:

$\map {\dfrac \d {\d x} } {\map \exp {a x} } = a \map \exp {a x}$


Corollary 2
Let $a \in \R_{>0}$.
Let $a^x$ be $a$ to the power of $x$.

Then:

$\map {\dfrac \d {\d x} } {a^x} = a^x \ln a$


Corollary 3
$\map {\dfrac \d {\d x} } {\map \exp {-x} } = -\map \exp {-x}$


Proof 1













\(\ds \map {\frac \d {\d x} } {\exp x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \exp {x + h} - \exp x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \cdot \exp h - \exp x} h\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \paren {\exp h - 1} } h\)




















\(\ds \)

\(=\)







\(\ds \exp x \paren {\lim_{h \mathop \to 0} \frac {\exp h - 1} h}\)





Multiple Rule for Limits of Real Functions, as $\exp x$ is constant














\(\ds \)

\(=\)







\(\ds \exp x\)





Derivative of Exponential at Zero



$\blacksquare$


Proof 2
We use the fact that the exponential function is the inverse of the natural logarithm function:

$y = e^x \iff x = \ln y$













\(\ds \dfrac {\d x} {\d y}\)

\(=\)







\(\ds \dfrac 1 y\)





Derivative of Natural Logarithm Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \dfrac 1 {1 / y}\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds y\)




















\(\ds \)

\(=\)







\(\ds e^x\)









$\blacksquare$


Proof 3













\(\ds \map {\frac \d {\d x} } {\ln e^x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } x\)





Exponential of Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {e^x} \map {\frac \d {\d x} } {e^x}\)

\(=\)







\(\ds 1\)





Chain Rule for Derivatives, Derivative of Natural Logarithm Function, Derivative of Identity Function








\(\ds \leadsto \ \ \)





\(\ds \map {\frac \d {\d x} } {e^x}\)

\(=\)







\(\ds e^x\)





multiply both sides by $e^x$



$\blacksquare$


Proof 4
This proof assumes the power series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}$

From Series of Power over Factorial Converges, the interval of convergence of $\exp$ is the entirety of $\R$.
So we may apply Differentiation of Real Power Series to $\exp$ for all $x \in \R$.

Thus we have:














\(\ds \frac \d {\d x} \exp x\)

\(=\)







\(\ds \frac \d {\d x} \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac k {k!} x^{k - 1}\)





Differentiation of Real Power Series, with $n = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {x^{k - 1} } {\paren {k - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds \exp x\)










Hence the result.
$\blacksquare$


Proof 5
This proof assumes the limit definition of $\exp$.
So let:

$\forall n \in \N: \forall x \in \R: \map {f_n} x = \paren {1 + \dfrac x n}^n$
Let $x_0 \in \R$.
Consider $I := \closedint {x_0 - 1} {x_0 + 1}$.
Let:

$N = \ceiling {\max \set {\size {x_0 - 1}, \size {x_0 + 1} } }$
where $\ceiling {\, \cdot \,}$ denotes the ceiling function.

From Closed Real Interval is Compact in Metric Space, $I$ is compact.
From Chain Rule for Derivatives:

$\dfrac \d {\d x} \map {f_n} x = \dfrac n {n + x} \map {f_n} x$


Lemma
$\forall x \in \R : n \ge \ceiling {\size x} \implies \sequence {\dfrac n {n + x} \paren {1 + \dfrac x n}^n}$ is increasing.
$\Box$

From the lemma:

$\forall x \in I: \sequence {\dfrac \d {\d x} \map {f_{n + N} } x}$ is increasing
Hence, from Dini's Theorem, $\sequence {\dfrac \d {\d x} f_{n + N} }$ is uniformly convergent on $I$.

Therefore, for $x \in I$:














\(\ds \frac \d {\d x} \exp x\)

\(=\)







\(\ds \frac \d {\d x} \lim_{n \mathop \to \infty} \map {f_n} x\)




















\(\ds \)

\(=\)







\(\ds \frac \d {\d x} \lim_{n \mathop \to \infty} \map {f_{n + N} } x\)





Tail of Convergent Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac \d {\d x} \map {f_{n + N} } x\)





Derivative of Uniformly Convergent Sequence of Differentiable Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac n {n + x} \map {f_n} x\)





from above














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {f_n} x\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \exp x\)










In particular:

$\dfrac \d {\d x} \exp x_0 = \exp x_0$
$\blacksquare$


Also see
Equivalence of Definitions of Exponential Function where it is shown that $\dfrac \d {\d x} \exp x = \exp x$ can be used to define the (real) exponential function.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Derivatives of fundamental functions: $5.$ Exponential function
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2 \cdotp 718 \, 281 \, 828 \, 459 \, 045 \, 235 \, 360 \, 287 \, 471 \, 352 \, 662 \, 497 \, 757 \, 247 \, 093 \, 699 \ldots$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2 \cdotp 71828 \, 18284 \, 59045 \, 23536 \, 02874 \, 71352 \, 66249 \, 77572 \, 47093 \, 69995 \ \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check sources' placementIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 5.4$




