# 

Source: https://proofwiki.org/wiki/Riesz-Markov-Kakutani_Representation_Theorem/Lemma_2



Lemma for Riesz-Markov-Kakutani Representation Theorem
Let $\struct {X, \tau}$ be a locally compact Hausdorff space.
Let $\map {C_c} X$ be the space of continuous complex functions with compact support on $X$.
Let $\Lambda$ be a positive linear functional on $\map {C_c} X$.
There exists a $\sigma$-algebra $\MM$ over $X$ which contains the Borel $\sigma$-algebra of $\struct {X, \tau}$.
There exists a unique complete Radon measure $\mu$ on $\MM$ such that:

$\ds \forall f \in \map {C_c} X: \Lambda f = \int_X f \rd \mu$


Notation
For an open set $V \in \tau$ and a mapping $f \in \map {C_c} X$:

$f \prec V \iff \supp f \subset V$
where $\supp f$ denotes the support of $f$.


The validity of the material on this page is questionable.In particular: The proof does not work with this definition. Something should be forgotten. Maybe, $f \prec V \iff 0 \le f \le {\mathbf 1}_V$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

For a compact set $K \subset X$ and a mapping $f \in \map {C_c} X$:

$K \prec f \iff \forall x \in K: \map f x = 1$


Construction of $\mu$ and $\MM$
For every $V \in \tau$, define:

$\map {\mu_1} V = \sup \set {\Lambda f: f \prec V}$

The validity of the material on this page is questionable.In particular: The definition of $\mu_1$ seems wrong, as $\map {\mu_1} V \in \set {0, +\infty}$ for all $V$. Indeed, for each $c>0$, $f \prec V \iff c f \prec V $. This means $\map {\mu_1} V = c \map {\mu_1} V$ for all $c > 0$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Note that $\mu_1$ is monotonically increasing.
That is, for all $V, W \in \tau$ such that $V \subset W$, we have:














\(\ds \map {\mu_1} V\)

\(=\)







\(\ds \sup \set {\Lambda f: \supp f \subset V}\)




















\(\ds \)

\(\le\)







\(\ds \sup \set {\Lambda f: \supp f \subset W}\)

\(\ds = \map {\mu_1} W\)







$\Box$
For every other subset $E \subset X$, define:

$\map \mu E = \inf \set {\map {\mu_1} V: V \supset E \land V \in \tau}$
Since $\mu_1$ is monotonically increasing:

$\mu_1 = \mu {\restriction_\tau}$
Define:

$\MM_F = \set {E \subset X : \map \mu E < \infty \land \map \mu E = \sup \set {\map \mu K: K \subset E \land K \text { compact} } }$
Define:

$\MM = \set {E \subset X : \forall K \subset X \text { compact}: E \cap K \in \MM_F}$


Lemma
Let $K \subset X$ be compact.
Then:

$K \in \MM_F$
and:

$\map \mu K = \inf \set {\Lambda f : K \prec f}$


Proof
Let $f \in \map {C_c} X: K \prec f$.
Let $\alpha \in \R \cap \openint 0 1$.


This article, or a section of it, needs explaining.In particular: Why not just Let $\alpha \in \openint 0 1$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define:

$V_\alpha = \map {f^{-1} } {\openint \alpha \to}$
Then $K \in V_\alpha$ and:

$\forall g: \map {C_c} X: g \prec V_\alpha: \alpha g \le f$

There is believed to be a mistake here, possibly a typo.In particular: This is wrong, because $g$ may be arbitrarily big on $V_\alpha$. Indeed, for all $c > 0$, we have $g \prec V_\alpha \iff c g \prec V_\alpha$. Probably, some condition is forgotten related to $\prec$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus:














\(\ds \map \mu K\)

\(\le\)







\(\ds \map \mu {V_\alpha}\)




















\(\ds \)

\(=\)







\(\ds \sup \set {\Lambda g : g \prec V_\alpha}\)




















\(\ds \)

\(\le\)







\(\ds \alpha^{-1} \Lambda f\)










Since $\alpha$ can be arbitrarily close to $1$:

$\map \mu K \le \inf \set {\Lambda f: K \prec f}$
By definition of $\mu$, for all $\epsilon \in \R_{>0}$, there exists a $V \in \tau: V \supset K$ such that:

$\map \mu V < \map \mu K + \epsilon$
By Urysohn's Lemma, there exists an Urysohn function $f$ for $K$ and $V$.
By definition of $\mu$:

$\Lambda f \le \map \mu V < \map \mu K + \epsilon$
Since $\epsilon$ was arbitrary:

$\map \mu K \ge \inf \set {\Lambda f: K \prec f}$
Therefore:

$\map \mu K = \inf \set {\Lambda f: K \prec f}$
By definition of positive linear functional, $\Lambda$ is finite.
Thus:

$\map \mu K < \infty$
So:

$K \in \MM_F$
$\blacksquare$





