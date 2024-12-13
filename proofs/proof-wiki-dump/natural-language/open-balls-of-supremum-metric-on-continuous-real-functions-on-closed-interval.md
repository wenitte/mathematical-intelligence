# 

Source: https://proofwiki.org/wiki/Open_Balls_of_Supremum_Metric_on_Continuous_Real_Functions_on_Closed_Interval



Theorem
Let $\mathscr C \closedint a b$ be the set of all continuous functions $f: \closedint a b \to \R$.
Let $d: \mathscr C^2 \to \R$ be the supremum metric on $\mathscr C \closedint a b$ defined as:

$\ds \forall f, g \in \mathscr C \closedint a b: \map d {f, g} := \sup_{x \mathop \in \closedint a b} \size {\map f x - \map g x}$
where $\sup$ denotes the supremum.

Let $f, g \in \mathscr C \closedint a b$ be such that:

$\forall x \in \closedint a b: \map f x < \map g x$

Consider the set $S$, defined as:

$S = \set {h \in \mathscr C \closedint a b: \forall x \in \closedint a b: \map f x < \map h x < \map g x}$

Then:

$S$ is an open ball of $\struct {\mathscr C \closedint a b, d}$
if and only if:

$\exists c \in \R_{>0}: \map g x := \map f x + c$
That is, if and only if $f$ and $g$ differ by a constant.


Proof
Recall the definition of open ball:
The open $\epsilon$-ball of $a$ in $M = \struct {A, d}$ is defined as:

$\map {B_\epsilon} a := \set {x \in A: \map d {x, a} < \epsilon}$

In this context, the open $\epsilon$-ball of $\phi$ in $\mathscr C \closedint a b$ is defined as:

$\ds \map {B_\epsilon} \phi := \set {\rho \in \mathscr C \closedint a b: \sup_{x \mathop \in \closedint a b} \size {\map \rho x - \map \phi x} < \epsilon}$


Necessary Condition
Suppose $g \in \mathscr C \closedint a b$ is defined as:

$\forall x \in \closedint a b: \map g x := \map f x + c$
Let $\epsilon = \dfrac c 2$.
Let $\phi \in \mathscr C \closedint a b$ be defined as:

$\forall x \in \closedint a b: \map \phi x = \map f x + \epsilon$
Then we have that:










\(\ds \forall h \in S: \forall x \in \closedint a b: \, \)



\(\ds \epsilon\)

\(>\)







\(\ds \size {\map h x - \map \phi x}\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon\)

\(>\)







\(\ds \sup_{x \mathop \in \closedint a b} {\size {\map h x - \map \phi x} }\)




















\(\ds \)

\(=\)







\(\ds \map d {h, \phi}\)










and it is seen by definition of open $\epsilon$-ball of $\phi$:

$S = \map {B_\epsilon} \phi$
$\Box$


Sufficient Condition
Let $S$, defined as:

$S = \set {h \in \mathscr C \closedint a b: \forall x \in \closedint a b: \map f x < \map h x < \map g x}$
be an open ball in $\mathscr C \closedint a b$.
Thus there exists $\epsilon \in \R_{>0}$ and $\phi \in \mathscr C \closedint a b$ such that:

$S = \map {B_\epsilon} \phi$
That is:

$\ds \exists \epsilon \in \R_{>0}: \forall \rho \in S: \sup_{x \mathop \in \closedint a b} \size {\map \rho x - \map \phi x} < \epsilon$

Aiming for a contradiction, suppose it is not the case $f$ and $g$ are such that:

$\forall x \in \closedint a b: \map g x - \map f x = c$
for some constant $c \in \R$.
Take $h \in S$ and $r \in \R_{>0}$ such that $\map {B_r} h \subseteq S$.
It is to be shown that $\map {B_r} h \subsetneq S$.
Take $N \in \N$ such that $\dfrac 1 N < r$.
For each $n \ge N$, let $g_n = h + r - \dfrac 1 n $.
Then:

$g_n \in \map {B_r} h$
and therefore:

$g_n \in S$
which implies that:

$\forall x \in \closedint a b: \map {g_n} x < \map g x$
But then:

$\ds \forall x \in \closedint a b: \map h x + r = \lim_{n \mathop \to \infty} \map h x + r - \dfrac 1 n = \lim_{n \mathop \to \infty} \map {g_n} x \le \map g x$
By a similar argument:

$\forall x \in \closedint a b: \map h x - r \ge \map f x$
and therefore:

$\forall x \in \closedint a b: \map g x - \map f x \ge 2 r$
But $g - f$ cannot be the constant function $2 r$.
Hence there is some $x_0 \in \closedint a b$ such that $\map g {x_0} - \map f {x_0} > 2 r$.
So it must be the case that:

$\map g {x_0} > \map h {x_0} + r$
or:

$\map f {x_0} < \map h {x_0} - r$
or both.
If:

$(1): \quad \map g {x_0} > \map h {x_0} + r$
then:

$g - h$ is continuous
$g - h$ is always greater than or equal to $r$
and $(1)$ holds.
Take $k < \map g {x_0} - \map h {x_0} - r$
and such that $g - k >f$.
Then $g - k \in S$.
But $g - k \notin \map {B_r} h$, because $\map g {x_0} - k - \map h {x_0} > r$.
It follows that $S$ cannot be an open $\epsilon$-ball of $\phi$ in $\mathscr C \closedint a b$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 25$
José Carlos Santos (https://math.stackexchange.com/users/446262/jos%c3%a9-carlos-santos), Open Ball in Supremum Space of Continuous Functions on Interval, URL (version: 2021-01-09)): https://math.stackexchange.com/q/3978867




