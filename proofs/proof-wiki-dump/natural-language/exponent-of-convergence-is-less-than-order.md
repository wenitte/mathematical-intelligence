# 

Source: https://proofwiki.org/wiki/Exponent_of_Convergence_is_Less_Than_Order


This article needs to be linked to other articles.In particular: Some notation needs to be explainedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $f: \C \to \C$ be an entire function.
Let $\omega$ be its order.
Let $\tau$ be its exponent of convergence.

Then $\tau \le \omega$.


Proof
We may assume $\map f 0 \ne 0$.

Let $f$ have finitely many zeroes.
Then:

$\tau = 0 \le \omega$
$\Box$

Let $f$ have infinitely many zeroes.
Let $\sequence {a_n}$ be the sequence of nonzero zeroes of $f$, repeated according to multiplicity and ordered by increasing modulus.
Let $r_n = \size {a_n}$ and $R_n = 2 \size {a_n}$.
By Jensen's Inequality:

$n \le \dfrac {\map \log {\max_{\size z \le R_n} \size f} - \log \size {\map f 0} } {\log 2}$
for all $n \in \N$.
Let $\epsilon > 0$.
Because $f$ has order $\omega$:

$n \ll_\epsilon \size {a_n}^{\omega + \epsilon}$
Thus:

$\size {a_n}^{-\paren {\omega + \epsilon} } \ll_\epsilon n^{-1}$
By Convergence of P-Series:

$\omega + \epsilon \ge \tau$
Because $\epsilon$ is arbitrary:

$\omega \ge \tau$
$\blacksquare$


Also see
Order is Maximum of Exponent of Convergence and Degree


Sources
1932: A.E. Ingham: The Distribution of Prime Numbers: Chapter III: Further Theory of $\zeta(s)$. Applications: $\S 7$: Integral functions: Theorem $\text F 2$




