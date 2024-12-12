# 

Source: https://proofwiki.org/wiki/Basis_for_Either-Or_Topology

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Let $\BB$ be the set:

$\BB := \set {\set x: x \in S, x \ne 0} \cup \set {\openint {-1} 1}$
that is, the set of all singleton subsets of $S$ less $\set 0$ and including the open real interval $\openint {-1} 1$.

Then $\BB$ is a basis for $T$.


Proof
Let $U \in \tau$ such that $0 \notin U$.
Then:

$\ds U = \bigcup_{x \mathop \in U} \set x$
where $x \ne 0$.
Hence for all $x \in U$, we have $\set x \in \BB$.
Thus $U$ is the union of elements of $\BB$.

Now suppose $U \in \tau$ such that $0 \in U$.
Then $\openint {-1} 1 \subseteq U$ by definition.
So one of four cases holds:

$U = \openint {-1} 1$
$U = \hointr {-1} 1 = \openint {-1} 1 \cup \set {-1}$
$U = \hointl {-1} 1 = \openint {-1} 1 \cup \set 1$
$U = \closedint {-1} 1 = \openint {-1} 1 \cup \set {-1} \cup \set 1$
All of these sets are in $\BB$, so that $U$ is the union of elements of $\BB$.

Hence, by definition, $\BB$ is a basis for $T$.
$\blacksquare$





