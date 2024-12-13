# 

Source: https://proofwiki.org/wiki/Measurable_Image


It has been suggested that this page or section be merged into Characterization of Measurable Functions.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\mathfrak M$ be the set of measurable sets of $\R$.
For any extended real-valued function $f: \R \to \R \cup \set {-\infty, +\infty}$ whose domain is measurable, the following statements are equivalent:

$(1): \quad \forall \alpha \in \R: \set {x: \map f x > \alpha} \in \mathfrak M$
$(2): \quad \forall \alpha \in \R: \set {x: \map f x \ge \alpha} \in \mathfrak M$
$(3): \quad \forall \alpha \in \R: \set {x: \map f x < \alpha} \in \mathfrak M$
$(4): \quad \forall \alpha \in \R: \set {x: \map f x \le \alpha} \in \mathfrak M$
These statements imply:

$(5): \quad \forall \alpha \in \R \cup \set {-\infty, +\infty}: \set {x: \map f x = \alpha} \in \mathfrak M$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Proof
Let the domain of $f$ be $D$.

We have that Measurable Sets form Algebra of Sets.
First we note that, from Properties of Algebras of Sets, the difference of two measurable sets is measurable.
So:

$\set {x: \map f x \le \alpha} = D - \set {x: \map f x > \alpha}$
and so $(1) \iff (4)$.
Similarly, $(2) \iff (3)$.

Next we note that, also from Properties of Algebras of Sets, the intersection of a sequence of measurable sets is measurable.

Now:

$\ds \set {x: \map f x \ge \alpha} = \bigcap_{n \mathop = 1}^\infty \set {x: \map f x > \alpha -\dfrac 1 n}$
because if:

$x \in \set {x: \map f x \ge \alpha}$
that is:

$\map f x \ge \alpha$
and since:

$\forall n \in \N: n > 0: \alpha > \alpha - \dfrac 1 n$
then:

$\forall n \in \N: n > 0: \map f x > \alpha - \dfrac 1 n$
That is:

$\forall n \in \N: n > 0: x \in \set {x: \map f x > \alpha - \dfrac 1 n}$
Hence:

$\ds x \in \bigcap_{n \mathop = 1}^\infty \set {x: \map f x > \alpha - \dfrac 1 n}$

Conversely, suppose:

$\ds x \in \bigcap_{n \mathop = 1}^\infty \set {x: \map f x > \alpha - \dfrac 1 n}$
that is:

$\forall n \in \N: n > 0: x \in \set {x: \map f x > \alpha - \dfrac 1 n}$
Claim $\map f x \ge \alpha $.
Otherwise $\map f x < \alpha$, say for example $\map f x = \alpha - \size \epsilon$.
Choose $N = \ceiling {\dfrac 1 {\size \epsilon} } + 1 \in \N$.
Therefore:

$N > \ceiling {\dfrac 1 {\size \epsilon} } \ge \dfrac 1 {\size \epsilon}$
and so:

$\alpha - \dfrac 1 N > \alpha - \size \epsilon$
By hypothesis:

$\forall N \in \N: \map f x > \alpha - \dfrac 1 N$
and therefore by the just previous:

$\map f x > \alpha - \size \epsilon$
But we had $\map f x = \alpha - \size \epsilon$, a contradiction.
Therefore:

$\map f x \ge \alpha $
that is:
$x \in \set {x: \map f x \ge \alpha}$
which was to be shown.
So $(1) \implies (2)$.

Similarly:

$\ds \set {x: \map f x > \alpha} = \bigcup_{n \mathop = 1}^\infty \set {x: \map f x \ge \alpha + \dfrac 1 n}$
and so $(2) \implies (1)$.

This shows that $(1) \iff (2) \iff (3) \iff (4)$.

For the fifth statement, we have:

$\set {x: \map f x = \alpha} = \set {x: \map f x \ge \alpha} \cap \set {x: \map f x \le \alpha}$
and so $(3) \land (4) \implies (5)$ for $\alpha \in \R$.

Since:

$\ds \set {x: \map f x = +\infty} = \bigcap_{n \mathop = 1}^\infty \set {x: \map f x \ge n}$
we have that $(2) \implies (5)$ for $\alpha = +\infty$.
Similarly $(4) \implies (5)$ for $\alpha = - \infty$.
$\blacksquare$





