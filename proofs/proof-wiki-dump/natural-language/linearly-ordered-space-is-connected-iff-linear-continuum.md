# 

Source: https://proofwiki.org/wiki/Linearly_Ordered_Space_is_Connected_iff_Linear_Continuum


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.

Then $S$ is a connected space if and only if it is a linear continuum.


Proof

This article, or a section of it, needs explaining.In particular: It is not clear how the premises of the subproofs (e.g. "$T$ is disconnected and densely ordered" directly relate to the premises of the main theorem, e.g.: "$S$ is a connected space..."You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Necessary Condition
Suppose that $T$ is disconnected and a linear continuum.
Then there are non-empty open sets $U, V$ that separate $T$.
Let $a \in U$ and $b \in V$.
Without loss of generality, suppose that $a \prec b$.
Let $B = \set {p \in S: \closedint a p \subseteq U}$
$B$ contains $a$, so it is non-empty, and it is bounded above by $b$.
In fact, if $y$ is any point not in $U$, it must be an upper bound for $B$:
Because, if it were not bounded above by $y$, there would be some $p \in B$, such that $y < p$. 
But $p \in B$ means by definition that $\closedint a p \subseteq U$. 
Now, $a < y < p$, so $y \in \closedint a p$ and so $y \in U$, which was not the case by assumption.
So any $y \notin U$ is an upper bound for $B$, and so in particular $b$ is.
So $B$ has a supremum $m$, as a bounded above, non-empty set has a supremum.
This is part of the definition of linear continuum, namely being Dedekind complete.

First suppose that $m \in B$.
Then $m \in U$.
Since $U$ is open, there exists a $p \in S$ such that $\hointr m p \subseteq U$.
Since $S$ is densely ordered, it has an element $q$ strictly between $m$ and $p$.
Then $m \in B$ implies that:

$\closedint a m \subseteq U$
We also have that:

$\closedint m q \subseteq \hointr m p \subseteq U$
so:

$\closedint a q \subseteq U$
Then $q \in B$, contradicting the fact that $m$ is an upper bound for $B$.
Thus $m \notin B$.

So $\closedint a m \nsubseteq U$ (or else $m \in B$ by definition).
So there is some element $w \in S$ that is in $\closedint a m$ and that is not in $U$.
Thus $w$ lies in $V$, as these two sets cover $S$. 
As already proved above, $w \notin U$ implies it is an upper bound for $B$.
But then $m$ is the minimal one upper bound by the definition of supremum, so $w < m$ is impossible.
We can only have $w = m$.
So $m \notin U$, so by necessity, $m \in V$.
Then as $V$ is open, we have some $w' < m$ such that $\hointl {w'} m \subseteq V$.
Again, by $S$ being densely ordered, we have some $w$ with $w' < w < m$. 
This $w$ is in $V$, so not in $U$
So $w$ is an upper bound for $B$ again, and strictly smaller than $m$.
This is a contradiction.
This shows that the separation cannot exist.
$\Box$


Sufficient Condition
Suppose that $T$ is not a linear continuum.
Then either $T$ is not densely ordered or $T$ is not Dedekind complete.
Suppose first that $T$ is not densely ordered.
Then there are points $a, b \in S$ such that $a \prec b$ and no point lies strictly between $a$ and $b$.
Thus:

$X = a^\preceq \cup b^\succeq$
and the components of this union are disjoint.

By Lower Closure is Strict Lower Closure of Immediate Successor:

$a^\preceq = b^\prec$
where:

$a^\preceq$ denotes the lower closure of $a$
$b^\prec$ denotes the strict lower closure of $b$
By Upper Closure is Strict Upper Closure of Immediate Predecessor:

$b^\succeq = a^\succ$
where:

$b^\succeq$ denotes the upper closure of $b$
$a^\succ$ denotes the strict upper closure of $a$.

Thus these two sets are open sets that separate $T$.
Therefore $T$ is disconnected.
Suppose next that $T$ is not Dedekind complete.
Then there is a non-empty set $B \subset S$ which is bounded above in $S$ but has no supremum in $S$.
Let $U$ be the set of upper bounds of $B$ (non-empty by assumption).


This article, or a section of it, needs explaining.In particular: Minor detailsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $B$ has no supremum, $U$ is open.
Let $A = S \setminus U$ be the set of points that are not upper bounds for $B$.
Let $p \in S \setminus U$.
Then there is an element of $s \in B$ such that $p \prec s$.
Then:

$p \in s^\prec \subset S \setminus U$
Thus $S \setminus U$ is also open.
It is non-empty because it contains all elements of $B$.
So $U$ and $S \setminus U$ are open sets separating $S$.
So $T$ is disconnected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $8$




