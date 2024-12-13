# 

Source: https://proofwiki.org/wiki/Measurable_Functions_with_Equal_Integrals_on_Sub-Sigma-Algebra_are_A.E._Equal



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\GG$ be a sub-$\sigma$-algebra of $\Sigma$.
Suppose that $\mu \restriction_\GG$, the restriction of $\mu$ to $\GG$, is $\sigma$-finite.

Let $f, g: X \to \overline \R$ be $\GG$-measurable functions.
Suppose that, for all $G \in \GG$:

$\ds \int_G f \rd \mu = \int_G g \rd \mu$

Then $f = g$ $\mu$-almost everywhere.


Proof
First, assume that $f$ and $g$ are $\mu$-integrable.
Observe:




\(\text {(1)}: \quad\)









\(\ds \set {f \ne g}\)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty \set {\size {f - g} \ge \dfrac 1 n }\)









For each $n \in \N_{>0}$:














\(\ds \map \mu {\set {f - g \ge \dfrac 1 n} }\)

\(=\)







\(\ds \int_{\set {f - g \ge \frac{1}{n} } } 1 \rd \mu\)




















\(\ds \)

\(=\)







\(\ds n \int_{\set {f - g \ge \frac{1}{n} } } \dfrac 1 n \rd \mu\)




















\(\ds \)

\(\le\)







\(\ds n \int_{\set {f - g \ge \frac{1}{n} } } \paren {f - g} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds n \paren {\int_{\set {f - g \ge \frac{1}{n} } } f \rd \mu - \int_{\set {f - g \ge \frac{1}{n} } } g \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds 0\)





by hypothesis as $\set {f - g \ge \dfrac 1 n} \in \GG$



Swapping $f$ and $g$, we also have:














\(\ds \map \mu {\set {g - f \ge \dfrac 1 n} }\)

\(=\)







\(\ds 0\)









Thus:




\(\text {(2)}: \quad\)









\(\ds \map \mu {\set {\size {f - g} \ge \dfrac 1 n} }\)

\(=\)







\(\ds \map \mu {\set {f - g \ge \dfrac 1 n} } + \map \mu {\set {g - f \ge \dfrac 1 n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)










Therefore:














\(\ds \map \mu {\set {f \ne g} }\)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \set {\size {f - g} \ge \dfrac 1 n } }\)





by $\paren 1$














\(\ds \)

\(\le\)







\(\ds \sum _{n \mathop = 1}^\infty \map \mu { \set {\size {f - g} \ge \dfrac 1 n } }\)




















\(\ds \)

\(=\)







\(\ds 0\)





by $\paren 2$



Hence the result, by definition of almost-everywhere equality.
$\Box$

Now, consider general $f$ and $g$.
Recall that $\mu \restriction_\GG$　is $\sigma$-finite.
That is, there is an exhausting sequence $\sequence {E_n}_{n\in\N} \subseteq \GG$ such that:

$\map \mu {E_n} < \infty$
We define $\sequence {A_n}_{n\in\N} \subseteq \GG$ by:

$A_n := E_n \cap \set { \size f \le n} \cap \set {\size g \le n}$
Then $\sequence {A_n}_{n\in\N}$ is also an exhausting sequence.
Let $f_n := f \chi_{A_n}$ and $g_n := g \chi_{A_n}$.
Then $f_n$ and $g_n$ are $\mu$-integrable so that:

$\forall n \in \N : \map \mu {\set {f_n \ne g_n} } = 0$
On the other hand:

$\set {f_n \ne g_n} = \set {f \ne g} \cap A_n$
Therefore:














\(\ds \map \mu {\set {f \ne g} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {\set {f \ne g} \cap A_n }\)





Measure of Limit of Increasing Sequence of Measurable Sets














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {\set {f_n \ne g_n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)










$\blacksquare$


Also see
Integrable Functions with Equal Integrals on Sub-Sigma-Algebra are A.E. Equal


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.14 \ \text{(ii)}$




