# 

Source: https://proofwiki.org/wiki/Banach-Steinhaus_Theorem/Normed_Vector_Space/Proof_3

Theorem
Let $\struct {X, \norm {\,\cdot\,}_X}$ be a Banach space.
Let $\struct {Y, \norm {\,\cdot\,}_Y}$ be a normed vector space.
Let $\family {T_\alpha: X \to Y}_{\alpha \mathop \in A}$ be an $A$-indexed family of bounded linear transformations from $X$ to $Y$.
Suppose that:

$\ds \forall x \in X: \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite.

Then:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha}$ is finite
where $\norm {T_\alpha}$ denotes the norm of the linear transformation $T_\alpha$.


Proof
It suffices to show that there exist an $x_0 \in X$ and an $r \in \R_{>0}$ such that:

$\ds K : = \sup_{x \mathop \in \map {B_r} {x_0} } \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y$ is finite
where $\map {B_r} {x_0}$ is the open $r$-ball of $x_0$.
Indeed, then we have for all $x \in X \setminus \set 0$:














\(\ds \frac{r}{2} \frac {\norm {T_\alpha x}_Y}{\norm x_X}\)

\(=\)







\(\ds \norm {\map {T_\alpha} {x_0 + \frac{r}{2 \norm x_X} x } - T_\alpha x_0 }_Y\)




















\(\ds \)

\(\le\)







\(\ds \norm {\map {T_\alpha} {\underbrace {x_0 + \frac{r}{2 \norm x_X} x}_{\in \map {B_r} {x_0} } } }_Y + \norm {\T_\alpha \underbrace {x_0}_{\in \map {B_r} {x_0} } }_Y\)




















\(\ds \)

\(\le\)







\(\ds 2 K\)









That is:

$\ds \norm {T_\alpha} = \sup_{x \mathop \in X \setminus \set 0} \frac {\norm {T_\alpha x}_Y}{\norm x_X} \le \frac {4 K} r$
$\Box$

Aiming for a contradiction, suppose that for all $x_0 \in X$ and $r \in \R_{>0}$:

$\ds \sup_{x \mathop \in \map {B_r} {x_0} } \sup_{\alpha \mathop \in A} \norm {T_\alpha x}_Y = + \infty$
Then we can choose:

$\map {B_{r_1} } {x_1} \supseteq \map {B_{r_2} } {x_2} \supseteq \cdots$
and:

$\alpha_1, \alpha_2, \ldots \in A$
such that:

$\ds \inf _{x \mathop \in \map {B_{r_k} } {x_k} } \norm {T_{\alpha_k} x}_Y \ge k$
and:

$0 < r_k < \frac 1 k$
Indeed, let $r_0 \in \R_{>0}$ and $x_0 \in X$ be fixed.
Then, for $k = 1, 2, \ldots$, we have:

$\exists x_k \in \map {B_{r_{k-1} } } {x_{k-1} } \exists \alpha_k \in A : \norm {T_{\alpha_k} {x_k} }_Y > k$
Furthermore, as $T_{\alpha_k}$ is continuous, $\exists r_k \in \openint 0 {\frac 1 k}$ such that:

$\map {B_{r_{k-1} } } {x_{k-1} } \supseteq \map {B_{r_k} } {x_k}$
and:

$\ds \inf _{x \mathop \in \map {B_{r_k} } {x_k} } \norm {T_{\alpha_k} x}_Y \ge k$
$\Box$

Then $\sequence {x_k}$ is a Cauchy sequence in $X$, since for each $N \in \N_{>0}$:

$k, l \ge N \implies \norm {x_k - x_l}_X \le \norm {\underbrace {x_k - x_N}_{\in \map {B_{r_N} } {x_N} } }_X + \norm {\underbrace {x_l - x_N}_{\in \map {B_{r_N} } {x_N} } }_X\le 2 \, r_N \le \frac 2 N$
As $X$ is a Banach space, there exists:

$\ds z := \lim_{k \mathop \to +\infty} x_k$
Observe that:

$\ds z \in \bigcap_{k \in \N_{>0} } \map {\overline {B_{r_k} } } {x_k}$
where $\map {\overline  {B_{r_k} } } {x_k}$ is the $r_k$-closed ball of $x_k$.
In particular:

$\forall k \in \N_{>0} : \norm {T_{\alpha_k} z}_Y \ge k$
Thus:

$\ds \sup_{\alpha \mathop \in A} \norm {T_\alpha z}_Y = + \infty$
This is a contradiction.
$\blacksquare$





