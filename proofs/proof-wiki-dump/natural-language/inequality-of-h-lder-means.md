# 

Source: https://proofwiki.org/wiki/Inequality_of_H%C3%B6lder_Means

Theorem
Let $p, q \in \overline \R$ be extended real numbers such that $p < q$.
Let $x_1, x_2, \ldots, x_n \ge 0$ be real numbers.
If $p < 0$, then we require that $x_1, x_2, \ldots, x_n > 0$.

Then the Hölder mean satisfies the inequality:

$\map {M_p} {x_1, x_2, \ldots, x_n} \le \map {M_q} {x_1, x_2, \ldots, x_n}$
Equality holds if and only if:

$x_1 = x_2 = \cdots = x_n$
or:

$q < 0$ and $x_k = 0$ for at least one $k \in \set {1, 2, \ldots, n}$.

Note that in particular:

$\forall p \in \R: \map {M_{-\infty} } {x_1, x_2, \ldots, x_n} \le \map {M_p} {x_1, x_2, \ldots, x_n}$
and:

$\forall p \in \R: \map {M_\infty} {x_1, x_2, \ldots, x_n} \ge \map {M_p} {x_1, x_2, \ldots, x_n}$


Proof
For real $p \ne 0$, the Hölder mean is defined as:

$\ds \map {M_p} {x_1, x_2, \ldots, x_n} = \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{1 / p}$
whenever the above expression is defined.

First we note that by definition of Hölder mean with $p = \infty$:

$\map {M_\infty} {x_1, x_2, \ldots, x_n} = \max \set {x_1, x_2, \ldots, x_n}$
This is justified by Limit of Hölder Mean as Exponent tends to Infinity:

$\ds \lim_{p \mathop \to +\infty} \map {M_p} {x_1, x_2, \ldots, x_n} = \max \set {x_1, x_2, \ldots, x_n}$
From Maximum is Greater than or Equal to Hölder Mean:

$\max \set {x_1, x_2, \ldots, x_n} \ge \map {M_p} {x_1, x_2, \ldots, x_n}$
and so:

$\forall p \in \R: \map {M_\infty} {x_1, x_2, \ldots, x_n} \ge \map {M_p} {x_1, x_2, \ldots, x_n}$
$\Box$

Similarly, by definition of Hölder mean with $p = -\infty$:

$\map {M_{-\infty} } {x_1, x_2, \ldots, x_n} = \min \set {x_1, x_2, \ldots, x_n}$
This is justified by Limit of Hölder Mean as Exponent tends to Negative Infinity:

$\ds \lim_{p \mathop \to -\infty} \map {M_p} {x_1, x_2, \ldots, x_n} = \min \set {x_1, x_2, \ldots, x_n}$
From Minimum is Less than or Equal to Hölder Mean:

$\min \set {x_1, x_2, \ldots, x_n} \le \map {M_p} {x_1, x_2, \ldots, x_n}$
and so:

$\forall p \in \R: \map {M_{-\infty} } {x_1, x_2, \ldots, x_n} \le \map {M_p} {x_1, x_2, \ldots, x_n}$
$\Box$

Let either $p = 0$ or $q = 0$.
By definition of Hölder mean with $p = 0$:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
where $G$ denotes the geometric mean.
This is justified by Limit of Hölder Mean as Exponent tends to Zero is Geometric Mean:

$\ds \lim_{p \mathop \to 0} \map {M_p} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
It remains to resolve the inequality for $p, q \in \R_{\ge 0}$.

Consider the function $\phi: \R_{\ge 0} \to \R_{\ge 0}$ defined as:

$\forall x \in \R_{\ge 0}: \map \phi x = x^{q/p}$
By the Power Rule for Derivatives:

$\map {D_x} {x^{q / p} } = \dfrac q p x^{q / p - 1}$
From Real Function is Strictly Convex iff Derivative is Strictly Increasing:

$\phi$ is strictly convex if $q > 0$.
From Real Function is Strictly Concave iff Derivative is Strictly Decreasing:

$\phi$ is strictly concave if $q < 0$.

This article contains statements that are justified by handwavery.In particular: The above needs to be amplified, as it is far from clear why.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now apply Jensen's inequality to ${x_1}^p, {x_2}^p, \ldots, {x_n}^p$.
For $q > 0$, this gives:

$\ds \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{q/p} \le \frac 1 n \sum_{k \mathop = 1}^n {x_k}^q$
For $q < 0$, the reverse inequality holds.
Also by Jensen's inequality, equality holds if and only if $x_1 = x_2 = \cdots = x_n$.
In either case, the result follows.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Relation Between Arithmetic, Geometric, Harmonic and Generalized Means: $3.2.4$




