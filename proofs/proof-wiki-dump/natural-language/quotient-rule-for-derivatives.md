# 

Source: https://proofwiki.org/wiki/Quotient_Rule_for_Derivatives



Theorem
Let $\map j x, \map k x$ be real functions defined on the open interval $I$.
Let $\xi \in I$ be a point in $I$ at which both $j$ and $k$ are differentiable.

Define the real function $f$ on $I$ by:

$\ds \map f x = \begin {cases} \dfrac {\map j x} {\map k x} & : \map k x \ne 0 \\ 0 & : \text {otherwise} \end {cases}$

Then, if $\map k \xi \ne 0$, $f$ is differentiable at $\xi$, and furthermore:

$\map {f'} \xi = \dfrac {\map {j'} \xi \map k \xi - \map j \xi \map {k'} \xi} {\paren {\map k \xi}^2}$

It follows from the definition of derivative that if $j$ and $k$ are both differentiable on the interval $I$, then:

$\ds \forall x \in I: \map k x \ne 0 \implies \map {f'} x = \frac {\map {j'} x \map k x - \map j x \map {k'} x} {\paren {\map k x}^2}$


Proof
Let $\xi$ be such that $\map k \xi \ne 0$.
From Differentiable Function is Continuous‎, $k$ is continuous at $\xi$.
It follows that there exists an $\epsilon > 0$, such that $\size h < \epsilon \implies \map k {\xi + h} \ne 0$.

So let $\size h < \epsilon$.
Then we have:














\(\ds \frac {\map f {\xi + h} - \map f \xi} h\)

\(=\)







\(\ds \frac 1 h \paren {\frac {\map j {\xi + h} } {\map k {\xi + h} } - \frac {\map j \xi} {\map k \xi } }\)





as $\map k \xi, \map k {\xi + h} \ne 0$














\(\ds \)

\(=\)







\(\ds \frac {\map j {\xi + h} \map k \xi - \map k {\xi + h} \map j \xi} {h \map k {\xi + h} \map k \xi}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map k {\xi + h} \map k \xi} \paren {\frac {\map j {\xi + h} - \map j \xi} h \map k \xi - \map j \xi \frac {\map k {\xi + h} - \map k \xi} h}\)





algebraic manipulation




Hence:














\(\ds \)

\(\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {\xi + h} - \map f \xi} h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 {\map k {\xi + h} \map k \xi} \paren {\frac {\map j {\xi + h} - \map j \xi} h \map k \xi - \map j \xi \frac {\map k {\xi + h} - \map k \xi} h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 {\map k {\xi + h} \map k \xi} \cdot \lim_{h \mathop \to 0} \paren {\frac {\map j {\xi + h} - \map j \xi} h \map k \xi - \map j \xi \frac {\map  k {\xi + h} - \map k \xi} h}\)





Product Rule for Limits of Real Functions




Thus by:

continuity of $k$ at $\xi$
differentiability of $j$ and $k$ at $\xi$
Combined Sum Rule for Limits of Real Functions:
it is concluded that:

$\ds \lim_{h \mathop \to 0} \frac {\map f {\xi + h} - \map f \xi} h = \frac 1 {\map k \xi^2} \paren {\map {j'} \xi \map k \xi - \map j \xi \map {k'} \xi}$

From the definition of differentiability, $f$ is differentiable at $\xi$, with stated value.
$\blacksquare$


Examples
Example: $\dfrac x {x + 1}$
$\map {\dfrac \d {\d x} } {\dfrac x {x + 1} } = \dfrac 1 {\paren {x + 1}^2}$


Example: $\dfrac {x + 1} {x - 1}$
$\map {\dfrac \d {\d x} } {\dfrac {x + 1} {x - 1} } = -\dfrac 2 {\paren {x - 1}^2}$


Example: $\dfrac {\sin x} x$
$\map {\dfrac \d {\d x} } {\dfrac {\sin x} x} = \dfrac {x \cos x - \sin x} {x^2}$


Example: $\dfrac x {\cos x}$
$\map {\dfrac \d {\d x} } {\dfrac x {\cos x} } = \dfrac {\cos x + x \sin x} {\cos^2 x}$


Example: $\dfrac {e^x} x$
$\map {\dfrac \d {\d x} } {\dfrac {e^x} x} = \dfrac {e^x \paren {x - 1} } {x^2}$


Example: $\dfrac {\paren {x - 1} \paren {2 x - 1} } {x - 2}$
$\map {\dfrac \d {\d x} } {\dfrac {\paren {x - 1} \paren {2 x - 1} } {x - 2} } = \dfrac {2 x^2 - 8 x + 5} {\paren {x - 2}^2}$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Derivatives: $3.3.4$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: General Rules of Differentiation: $13.9$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Differentiation Rules: $4.$ Quotient rule
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): quotient rule
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quotient rule
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quotient rule
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): differentiation (v)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): quotient rule




