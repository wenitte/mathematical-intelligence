# 

Source: https://proofwiki.org/wiki/Riesz-Markov-Kakutani_Representation_Theorem/Lemma_3



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
$\mu$ is countably additive over pairwise disjoint collections of compact sets.


Proof
Let $K_1$ and $K_2$ be disjoint compact subsets of $X$.
By Disjoint Compact Sets in Hausdorff Space have Disjoint Neighborhoods, there exists an open $V\supset K_1$ such that $V$ and $K_2$ are disjoint.
By Urysohn's Lemma, there exists a mapping $f \in \map{C_c} X$ such that:

$\map f {K_1} = \set 1$
and:

$\map f {K_2} = \set 0$
By Lemma 2 and union of compact sets is compact:

$\forall \epsilon \in \R_{>0}: \exists g \in \map {C_c} X: K_1 \cup K_2 \prec g \text{ and } \Lambda g < \map \mu {K_1 \cup K_2} + \epsilon$
Now:

$K_1 \prec f g$
and:

$K_2 = \prec \paren {1 - f} g$
By linearity of $\Lambda$ and Lemma 2:














\(\ds \map \mu {K_2} + \map \mu {K_2}\)

\(\le\)







\(\ds \map \Lambda {f g} + \map \Lambda {g - f g}\)




















\(\ds \)

\(=\)







\(\ds \Lambda g\)




















\(\ds \)

\(<\)







\(\ds \map \mu {K_1 \cup K_2} + \epsilon\)









Thus, by Lemma 1, $\mu$ is additive for disjoint compact sets.
Applying the Principle of Mathematical Induction yields countable additivity.


This article, or a section of it, needs explaining.In particular: How is induction applied? To the naive reader, we can only attain finite additivity. How do we transcend to countable?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





