# 

Source: https://proofwiki.org/wiki/Baire-Osgood_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ be a Baire space.
Let $Y$ be a metrizable topological space
Let $f: X \to Y$ be a mapping which is the pointwise limit of a sequence $\sequence {f_n}$ in $\map C {X, Y}$.


This article, or a section of it, needs explaining.In particular: $\map C {X, Y}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\map D f$ be the set of points where $f$ is discontinuous.

Then $\map D f$ is a meager subset of $X$.


Proof
Let $d$ be a metric on $Y$ generating its topology.
Let $\map {\omega_f} x$ denote the oscillation of $f$ at $x$.
We have:

$\ds \map D f = \bigcup_{n \mathop = 1}^\infty \set {x \in X: \map {\omega_f} x \ge \frac 1 n}$
which is a countable union of closed sets.
Since we have this expression for $\map D f$, the claim follows if we can prove that for all $\epsilon \in \R_{>0}$ the closed set:

$F_\epsilon = \set {x \in X: \map {\omega_f} x \ge 5 \epsilon}$
is nowhere dense.

Let $\epsilon \in \R_{>0}$ be given and consider the sets:

$\ds A_n = \bigcap_{i, j \mathop \ge n} \set {x \in X: \map d {\map {f_i} x, \map {f_j} x} \le \epsilon}$
which are closed because $d$ and the $f_i$ are continuous.
Because $\sequence {f_n}$ is pointwise convergent, it is pointwise Cauchy with respect to any metric generating the topology on $Y$, so $\ds \bigcup_{n \mathop = 1}^\infty A_n = X$.

Given a nonempty open $U \subseteq X$ we wish to show that $U \nsubseteq F_\epsilon$.
Consider the sequence $\sequence {A_n \cap U}$ of closed subsets of $U$.
The union of these is all of $U$.
As $U$ is an open subspace of a Baire space, it is a Baire space.
So one of the elements of $\sequence {A_n \cap U}$, say $A_k$, must have an interior point, so there is an open $V \subseteq A_k \cap U$.
Because $U$ is open in $X$, $V$ is open in $X$ as well.  

We will show that:

$V \subseteq F_\epsilon^c = \set {x \in X: \map {\omega_f} x < 5 \epsilon}$
This will show that:

$V \nsubseteq F_\epsilon$ and thus that $U \nsubseteq F_\epsilon$
Since $V \subseteq A_k$:

$\map d {\map {f_i} x, \map {f_j} x} \le \epsilon$
for all $x \in V$ and all $i, j \ge k$.
Pointwise convergence of $\sequence {f_n}$ gives that:

$\map d {\map f x, \map {f_k} x} \le \epsilon$
for all $x \in V$.

By continuity of $f_k$ we have for every $x_0 \in V$ an open $V_{x_0} \subseteq V$ such that:

$\map d {\map {f_k} x, \map {f_k} {x_0} } \le \epsilon$
for all $x \in V_{x_0}$.
By the triangle inequality:

$\map d {\map f x, \map {f_k} {x_0} } \le 2 \epsilon$
for all $x \in V_{x_0}$.
Applying the triangle inequality again:

$\map d {\map f x, \map f y} \le 4 \epsilon$
for all $x, y \in V_{x_0}$.
Thus we have the bound:

$\map {\omega_f} {x_0} \le \map {\omega_f} {V_{x_0} } \le  4 \epsilon$
showing that $x_0 \notin F_\epsilon$ as desired.
$\blacksquare$


Source of Name
This entry was named for René-Louis Baire and William Fogg Osgood.


Sources
2000: N.L. Carothers: Real Analysis




