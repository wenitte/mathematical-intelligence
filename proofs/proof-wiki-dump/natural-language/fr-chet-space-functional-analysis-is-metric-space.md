# 

Source: https://proofwiki.org/wiki/Fr%C3%A9chet_Space_(Functional_Analysis)_is_Metric_Space



Theorem
Let $\struct {\R^\omega, d}$ be the Fréchet space on $\R^\omega$.
Then $\struct {\R^\omega, d}$ is a metric space.


Proof
It is to be demonstrated that $d$ satisfies all the metric space axioms.
Recall from the definition of the Fréchet space that the distance function $d: \R^\omega \times \R^\omega \to \R$ is defined on $\R^\omega$ as:

$\forall x, y \in \R^\omega: \map d {x, y} = \ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - y_i} } {1 + \size {x_i - y_i} }$
where:

$x := \sequence {x_i}_{i \mathop \in \N} = \tuple {x_0, x_1, x_2, \ldots}$
$y := \sequence {y_i}_{i \mathop \in \N} = \tuple {y_0, y_1, y_2, \ldots}$
denote arbitrary elements of $\R^\omega$.

First it is confirmed that Fréchet Product Metric is Absolutely Convergent on arbitrary $x$ and $y$, as follows.


This article, or a section of it, needs explaining.In particular: Either prove it in a linked page or prove it here, but doing it in both places is contrary to the minimalist $\mathsf{Pr} \infty \mathsf{fWiki}$ approachYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
First note that:

$\dfrac {\size {x_i - y_i} } {1 + \size {x_i - y_i} } = 1 - \dfrac 1 {1 + \size {x_i - y_i} }$
implies that we have:

$0 \le \dfrac {\size {x_i - y_i} } {1 + \size {x_i - y_i} } < 1$
By the Ratio Test we have that the series is absolutely convergent.
An important property of absolutely convergent series is that any rearrangement of the terms of the series is also convergent and equal to the original series.
This will be used in the proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality.


Proof of Metric Space Axiom $(\text M 1)$













\(\ds \map d {x, x}\)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - x_i} } {1 + \size {x_i - x_i} }\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size 0} {1 + \size 0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac 0 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









So Metric Space Axiom $(\text M 1)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$













\(\ds \map d {x, y}\)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - y_i} } {1 + \size {x_i - y_i} }\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {y_i - x_i} } {1 + \size {y_i - x_i} }\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map d {y, x}\)





Definition of $d$



So Metric Space Axiom $(\text M 3)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$













\(\ds x\)

\(\ne\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \N: \, \)



\(\ds x_k\)

\(\ne\)







\(\ds y_k\)










Thus for such a $k \in \N$:














\(\ds x_k\)

\(\ne\)







\(\ds y_k\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_k - y_k}\)

\(>\)







\(\ds 0\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds 2^{-i} \size {x_k - y_k}\)

\(>\)







\(\ds 0\)


















\(\, \ds \land \, \)

\(\ds 1 + \size {x_k - y_k}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {2^{-k} \size {x_k - x_k} } {1 + \size {x_k - x_k} }\)

\(>\)







\(\ds 0\)










It has been established during the course of demonstrating compliance with Metric Space Axiom $(\text M 1)$ (and is in any case trivially obvious) that:

$x_j = y_j \implies \dfrac {2^{-j} \size {x_j - x_j} } {1 + \size {x_j - x_j} } = 0$

Thus $\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - x_i} } {1 + \size {x_i - x_i} }$ contains at least one term:

$\dfrac {2^{-k} \size {x_k - x_k} } {1 + \size {x_k - x_k} } > 0$
and any number of other terms:

$\dfrac {2^{-j} \size {x_j - x_j} } {1 + \size {x_j - x_j} } = 0$

Hence:

$\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - x_i} } {1 + \size {x_i - x_i} } > 0$
for $x \ne y$.

So Metric Space Axiom $(\text M 4)$ holds for $d$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Consider the real function:

$\forall a \in \R_{\ge 0}: \map f a = \dfrac a {1 + a}$
We want to show $f$ satisfies:

$\map f a \le \map f {a'}$
for $a \ge 0$ and $a' \ge a$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Identify the inequalities by means of labels, and refer to them explicitly. It is far from clear which one is which when they are being chatted about casually.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The first inequality follows since:

$\map f a = 1 - \dfrac 1 {1 + a}$
with $\dfrac 1 {1 + a}$ decreasing as $a$ increases.
We also want to show it satisfies :

$\map f a \le \map f {a + b} \le \map f a + \map f b$
for $a, b > 0$.
The first inequality here follows from the above inequality.
For the second inequality here we note $\dfrac {\map f a} a = \dfrac 1 {1 + a}$ gives:

$\dfrac {\map f a} a \ge \dfrac {\map f {a + b} } {a + b}$
$\dfrac {\map f b} b \ge \dfrac {\map f {a + b} } {a + b}$
for $a, b > 0$
from which we obtain $\map f a + \map f b \ge \dfrac {\map f {a + b} } {a + b} = \map f {a + b}$ (the inequality is immediately verified in cases where $a$ or $b$ is $0$).
We now use these inequalities to prove Metric Space Axiom $(\text M 2)$: Triangle Inequality:














\(\ds \map d {x, z}\)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - z_i} } {1 + \size {x_i - z_i} }\)





Definition of $d$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {\paren {x_i - y_i} + \paren {y_i - z_i} } } {1 + \size {\paren {x_i - y_i} + \paren {y_i - z_i} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} (\size {x_i - y_i} + \size {y_i - z_i} } {1 + \size {x_i - y_i} + \size {y_i - z_i} }\)





as $\size {\paren {x_i - y_i} + \paren {y_i - z_i} } \le \size {x_i - y_i} + \size {y_i - z_i}$ and $f(a) \le f(a')$ for $a' \ge a$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in \N} \paren {\dfrac {2^{-i} \size {x_i - y_i} } {1 + \size {x_i - y_i} } + \dfrac {2^{-i} \size {y_i - z_i} } {1 + \size {y_i - z_i} } }\)





as $\map f {\paren {x_i - y_i} + \paren {y_i - z_i} } \le \map f {x_i - y_i} + \map f {y_i - z_i}$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {x_i - y_i} } {1 + \size {x_i - y_i} } + \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {y_i - z_i} } {1 + \size {y_i - z_i} }\)





Fréchet Product Metric is Absolutely Convergent














\(\ds \)

\(=\)







\(\ds \map d {x, y} + \map d {y, z}\)





Definition of $d$




So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $d$.
$\Box$

Thus $d$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$





