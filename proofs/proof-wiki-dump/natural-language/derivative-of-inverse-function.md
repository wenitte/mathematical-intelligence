# 

Source: https://proofwiki.org/wiki/Derivative_of_Inverse_Function


This page has been identified as a candidate for refactoring of medium complexity.In particular: Worth considering splitting this up into parts.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $I = \closedint a b$ and $J = \closedint c d$ be closed real intervals.
Let $I^o = \openint a b$ and $J^o = \openint c d$ be the corresponding open real intervals.

Let $f: I \to J$ be a real function which is continuous on $I$ and differentiable on $I^o$ such that $J = f \sqbrk I$.
Let either:

$\forall x \in I^o: D \map f x > 0$
or:

$\forall x \in I^o: D \map f x < 0$

Then:

$f^{-1}: J \to I$ exists and is continuous on $J$
$f^{-1}$ is differentiable on $J^o$
$\forall y \in J^o: D \map {f^{-1} } y = \dfrac 1 {D \map f x}$


Proof
From Derivative of Monotone Function, it follows that $f$ is either:

strictly increasing on $I$ (if $\forall x \in I^o: D \, \map f x > 0$)
or:

strictly decreasing on $I$ (if $\forall x \in I^o: D \, \map f x < 0$).
Therefore from Inverse of Strictly Monotone Function‎ it follows that $f^{-1}: J \to I$ exists.
As $f$ is continuous, from Image of Interval by Continuous Function is Interval it follows that $J$ is an interval.
By the Corollary to Limit of Increasing Function and the Corollary to Limit of Decreasing Function, $f^{-1}: J \to I$ is continuous.

Next its derivative is to be considered.
Suppose $f$ is strictly increasing.
Let $y \in J^o$.
Then $\map {f^{-1} } y \in I^o$.
Let $k = \map {f^{-1} } {y + h} - \map {f^{-1} } y$.
Thus:

$\map {f^{-1} } {y + h} = \map {f^{-1} } y + k = x + k$
Thus:

$y + h = \map f {x + k}$
and hence:

$h = \map f {x + k} - y = \map f {x + k} - \map f x$
Since $f^{-1}$ is continuous on $J$, it follows that $k \to 0$ as $h \to 0$.
Also, $f^{-1}$ is strictly increasing from Inverse of Strictly Monotone Function‎ and so $k \ne 0$ unless $h = 0$.
So by Limit of Composite Function we get:

$\dfrac {\map {f^{-1} } {y + h} - \map {f^{-1} } y} h = \dfrac k {\map f {x + k} - \map f x}$
Thus:

$\dfrac {\map {f^{-1} } {y + h} - \map {f^{-1} } y} h \to \dfrac 1 {D \map f x}$
as $h \to 0$.

Suppose $f$ is strictly decreasing.
Exactly the same argument applies.
$\blacksquare$


Also presented as
When Leibniz's notation for derivatives $\paren {\dfrac {\d y} {\d x} }$ is being used, Derivative of Inverse Function is usually seen presented as:

$\dfrac {\d x} {\d y} = \dfrac 1 {\frac {\d y} {\d x} }$
or:

$\dfrac {\d x} {\d y} = \dfrac 1 {\d y / \d x}$
where:

$\dfrac {\d x} {\d y}$ is the derivative of $x$ with respect to $y$
$\dfrac {\d y} {\d x}$ is the derivative of $y$ with respect to $x$.
This must not be interpreted to mean that derivative can be treated as fractions; it is simply a convenient notation.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Leibniz's Theorem for Differentiation of a Product: $3.3.9$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: General Rules of Differentiation: $13.12$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $5$. Differential Calculus: Appendix: Differentiation Rules: $6.$ Inverse functions
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.15 \ (5)$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.10$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inverse function




