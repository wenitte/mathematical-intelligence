# 

Source: https://proofwiki.org/wiki/Closure_of_Irrational_Interval_is_Closed_Real_Interval

Theorem
Let $\struct {\R, \tau_d}$ be the real numbers under the usual (Euclidean) topology.
Let $\struct{\R \setminus \Q, \tau_d}$ be the irrational number space under the same topology.
Let $a, b \in \R$ such that $a < b$.
Let $\Bbb I \subseteq \R$ be an interval of $\R$

Then the closure of the set:

$\Bbb I \cap \paren {\R \setminus \Q}$
is the closed real interval $\closedint a b$.


Proof
Let $\Bbb I$ be an open real interval.
From Closure of Real Interval is Closed Real Interval:

$\Bbb I^- = \closedint a b$
From Closure of Irrational Numbers is Real Numbers:

$\paren {\R \setminus \Q}^- = \R$
From Closure of Intersection is Subset of Intersection of Closures:

$\paren{\Bbb I \cap \paren{\R \setminus \Q}}^- \subseteq \Bbb I^- \cap \paren {\R \setminus \Q}^-$
From Intersection with Subset is Subset:

$\Bbb I^- \cap \paren {\R \setminus \Q}^- = \closedint a b$
and so:

$\paren {\Bbb I \cap \paren {\R \setminus \Q} }^- \subseteq \closedint a b$

From Irrationals are Everywhere Dense in Topological Space of Reals:

$\closedint a b \subseteq \paren {\Bbb I \cap \paren {\R \setminus \Q} }^-$
and the result follows.
$\blacksquare$





