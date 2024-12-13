# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Derivatives



Theorem
Let $\map f x, \map j x, \map k x$ be real functions defined on the open interval $I$.
Let $\xi \in I$ be a point in $I$ at which both $j$ and $k$ are differentiable.

Let $\map f x = \map j x \map k x$.

Then:

$\map {f'} \xi = \map j \xi \map {k'} \xi + \map {j'} \xi \map k \xi$

It follows from the definition of derivative that if $j$ and $k$ are both differentiable on the interval $I$, then:

$\forall x \in I: \map {f'} x = \map j x \map {k'} x + \map {j'} x \map k x$

Using Leibniz's notation for derivatives, this can be written as:

$\map {\dfrac \d {\d x} } {y \, z} = y \dfrac {\d z} {\d x} + \dfrac {\d y} {\d x} z$
where $y$ and $z$ represent functions of $x$.


General Result
Let $\map {f_1} x, \map {f_2} x, \ldots, \map {f_n} x$ be real functions differentiable on the open interval $I$.
then:

$\forall x \in I: \ds \map {D_x} {\prod_{i \mathop = 1}^n \map {f_i} x} = \sum_{i \mathop = 1}^n \paren {\map {D_x} {\map {f_i} x} \prod_{j \mathop \ne i} \map {f_j} x}$


Proof
First we note that from Differentiable Function is Continuous‎, $j$ is continuous at $\xi$.
Hence:

$(1): \quad \map j {\xi + h} \to \map j \xi$ as $h \to 0$

So:














\(\ds \map {f'} \xi\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {\xi + h} - \map f \xi} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map j {\xi + h} \map k {\xi + h} - \map j \xi \map k \xi} h\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map j {\xi + h} \map k {\xi + h} - \map j {\xi + h} \map k \xi + \map j {\xi + h} \map k \xi - \map j \xi \map k \xi} h\)





adding $\pm \map j {\xi + h} \map k \xi$ to numerator














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} \frac {\map k {\xi + h} - \map k \xi} h + \frac {\map j {\xi + h} - \map j \xi} h \map k \xi}\)





simplifying














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} \frac {\map k {\xi + h} - \map k \xi} h} +  \lim_{h \mathop \to 0} \paren {\frac {\map j {\xi + h} - \map j \xi} h \map k \xi}\)





Sum Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} } \lim_{h \mathop \to 0} \paren {\frac {\map k {\xi + h} - \map k \xi} h} + \lim_{h \mathop \to 0} \paren {\frac {\map j {\xi + h} - \map j \xi} h} \lim_{h \mathop \to 0} \paren {\map k \xi}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map j {\xi + h} } \map {k'} \xi + \map {j'} \xi \lim_{h \mathop \to 0} \paren {\map k \xi}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \map j \xi \map {k'} \xi + \map {j'} \xi \map k \xi\)





from $(1)$



$\blacksquare$


Examples
Example: $2 a x e^{a x^2}$
$\map {\dfrac \d {\d x} } {2 a x e^{a x^2} } = 2 a e^{a x^2} \paren {1 + 2 a x^2}$


Example: $x \sin x$
$\map {\dfrac \d {\d x} } {x \sin x} = x \cos x + \sin x$


Example: $x \cot x$
$\map {\dfrac \d {\d x} } {x \cot x} = \cot x - x \cosec^2 x$


Example: $x^2 \arctan x$
$\map {\dfrac \d {\d x} } {x^2 \arctan x} = 2 x \arctan x + \dfrac {x^2} {1 + x^2}$


Example: $x e^x \sin x$
$\map {\dfrac \d {\d x} } {x e^x \sin x} = e^x \paren {\paren {1 + x} \sin x + x \cos x}$


Also see
Derivative of Product of Real Function and Vector-Valued Function
Derivative of Vector Cross Product of Vector-Valued Functions
Derivative of Dot Product of Vector-Valued Functions
Derivative of Product of Operator-Valued Functions
Leibniz's Rule in One Variable, of which this is the special case of the first derivative


Historical Note
The Product Rule for Derivatives was first obtained by Gottfried Wilhelm von Leibniz in $1677$.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Derivatives: $3.3.3$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: General Rules of Differentiation: $13.7$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Differentiation Rules: $3.$ Product rule
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Leibniz theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): product rule (for differentiation)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Leibniz theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): product rule (for differentiation)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives




