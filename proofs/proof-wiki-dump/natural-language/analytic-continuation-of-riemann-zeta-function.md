# 

Source: https://proofwiki.org/wiki/Analytic_Continuation_of_Riemann_Zeta_Function


This page has been identified as a candidate for refactoring of medium complexity.In particular: this page should eventually be deleted, see talk pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
The Riemann zeta function is meromorphic on $\C$.


Proof
The (yet to be confirmed) meromorphic continuation of the Riemann zeta function to the half-plane $\set {s: \map \Re s > 0}$ is given by Integral Representation of Riemann Zeta Function in terms of Fractional Part:

$(1): \quad \ds \map \zeta s = \frac s {s - 1} - s \int_1^\infty \fractpart x x^{-s - 1} \rd x$
where $\fractpart x$ is the fractional part of $x$.
Let $\map \Re s \le 0$.
Then the value of $\map \zeta s$ can be computed from the relation:

$\map \Gamma {\dfrac s 2} \pi^{-s/2} \map \zeta s = \map \Gamma {\dfrac {s - 1} 2} \pi^{\frac {1 - s} 2} \map \zeta {1 - s}$
That is:

$\map \xi s = \map \xi {1 - s}$
where $\xi$ is the completed zeta function.

First we show that $(1)$ is analytic for $\map \Re s > 0$.
For $n \ge 1$, let:














\(\ds a_n\)

\(=\)







\(\ds s \int_n^{n + 1} \fractpart x x^{-s - 1}\rd x\)




















\(\ds \)

\(\ll\)







\(\ds s \int_n^{n + 1} x^{-s - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {-x^{-s} } n {n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {n^s} - \frac 1 {\paren {n + 1}^s}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {n + 1}^s - n^s} {n^s \paren {n + 1}^s}\)









Here $\ll$ is the order notation.
By the Mean Value Theorem, for some $n \le \theta \le n + 1$:

$\paren {n + 1}^s - n^s = s \theta^{s - 1} \le s \paren {n + 1}^{s-1}$
Thus if $s = \sigma + i t$:

$\size {a_n} \le \size {\dfrac s {n^{s + 1} } } = \dfrac {\sigma^2 + t^2} {n^{\sigma + 1} }$
Since:

$\ds \map \zeta s = \frac s {s - 1} - \sum_{n \mathop \ge 1} a_n$
it follows that this representation converges absolutely uniformly on $\map \Re s > 0$.
Thus by Uniform Limit of Analytic Functions is Analytic $\map \zeta s$ is analytic for $\map \Re s > 0$ and $s \ne 1$.

For all $s$ with $\map \Re s < \dfrac 1 2$, $\map \zeta s$ is simply the reflection of $\zeta$ in the upper half-plane.
Therefore, $\zeta$ is also analytic for all $s$ with $\map \Re s < 0$.
$\blacksquare$





