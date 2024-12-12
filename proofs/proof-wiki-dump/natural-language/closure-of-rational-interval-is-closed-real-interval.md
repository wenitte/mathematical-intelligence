# 

Source: https://proofwiki.org/wiki/Closure_of_Rational_Interval_is_Closed_Real_Interval

Theorem
Let $\struct {\R, \tau_d}$ be the real numbers under the usual (Euclidean) topology.
Let $\struct {\Q, \tau_d}$ be the rational number space under the same topology.
Let $a, b \in \R$ such that $a < b$.
Let $\Bbb I \subseteq \R$ be an interval of $\R$

Then the closure of the set :

$\Bbb I \cap \Q$
is the closed real interval $\closedint a b$.


Proof
Let $\Bbb I$ be an open real interval.
From Closure of Real Interval is Closed Real Interval:

$\Bbb I^- = \closedint a b$
From Closure of Rational Numbers is Real Numbers:

$\Q^- = \R$
From Closure of Intersection is Subset of Intersection of Closures:

$\paren{\Bbb I \cap \Q}^- \subseteq \Bbb I^- \cap \Q^-$
From Intersection with Subset is Subset:

$\Bbb I^- \cap \Q^- = \closedint a b$
and so:

$\paren {\Bbb I \cap \Q}^- \subseteq \closedint a b$

From Rationals are Everywhere Dense in Topological Space of Reals:

$\closedint a b \subseteq \paren {\Bbb I \cap \Q}^-$
and the result follows.
$\blacksquare$





