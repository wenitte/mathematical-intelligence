# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_less_Particular_Point_is_Discrete

Theorem
Let $T = \left({S, \tau_p}\right)$ be a particular point space, whose particular point is $p$.
Let $H = S \setminus \left\{ {p}\right\}$ where $\setminus$ denotes set difference.

Then the topological subspace $T_H = \left({H, \tau_H}\right)$ induced on $H$ by $\tau_p$ is a discrete space.


Proof
Let $H = S \setminus \left\{{p}\right\}$.
Let $V \subseteq H$ be any subset of $H$.
As $p \notin V$, $V$ is a closed set of $T$.
Thus, by definition of closed set $S \setminus V$ is open in $T$.

By definition of subspace topology, $\left({S \setminus V}\right) \cap H$ is open in $T_H$.
From Intersection with Set Difference is Set Difference with Intersection:

$\left({S \setminus V}\right) \cap H = \left({S \cap H}\right) \setminus V$
and so from Intersection with Subset is Subset:

$\left({S \setminus V}\right) \cap H = H \setminus V$
Thus $H \setminus V$ is open in $H$.

But $H \setminus V$ is itself a subset of $H$, and so a closed set of $T$.
Thus, by the same argument, $V$ is open in $H$.
As $V$ is arbitrary, it follows that all subsets of $H$ are open in $H$.
The result follows by definition of discrete space.
$\blacksquare$





