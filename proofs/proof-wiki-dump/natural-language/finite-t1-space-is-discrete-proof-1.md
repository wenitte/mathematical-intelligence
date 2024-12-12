# 

Source: https://proofwiki.org/wiki/Finite_T1_Space_is_Discrete/Proof_1

Theorem
Let $S$ be a finite set.
Let $T = \left({S, \tau}\right)$ be a $T_1$ (Fréchet) space.

Then $\tau$ is the discrete topology on $S$.


Proof
Let $T = \struct {S, \tau}$ be a $T_1$ space on a finite set $S$.

Let $U \subseteq S$ be any subset of $S$. 
Let $H = \relcomp S U$ be the complement of $U$ relative to $S$.
Then by Relative Complement of Relative Complement we have that $U = \relcomp S H$.

We can write $H$ as:

$\ds H = \bigcup_{x \mathop \in H} \set x$

From Equivalence of Definitions of $T_1$ Space, $\forall x \in H: \set x$ is closed in $T$.
As $S$ is a finite set, it follows that $H$ is a finite union of closed sets of $T$.
By Topology Defined by Closed Sets, $H$ is therefore closed in $T$.

By definition of closed set, $U = \relcomp S H$ is open in $T$.
As $U$ is arbitrary, it follows that:

$\forall U \subseteq S: S \in \tau$
by definition of a topology.

Hence the result, by definition of the discrete topology.
$\blacksquare$





