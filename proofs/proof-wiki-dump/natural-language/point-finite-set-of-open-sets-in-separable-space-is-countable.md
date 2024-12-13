# 

Source: https://proofwiki.org/wiki/Point_Finite_Set_of_Open_Sets_in_Separable_Space_is_Countable

Theorem
Let $\struct {X, \tau}$ be a separable space.
Let $\FF$ be a point finite set of open sets of $X$.

Then $\FF$ is countable.


Proof
Since $\struct {X, \tau}$ is separable, $X$ has a countable everywhere dense subset $S$.
Without loss of generality, assume that $\O \notin \FF$.
By the definition of point finite, $\set {V \in \FF: x \in V}$ is finite for each $x \in S$.
From Open Set Characterization of Denseness, each element of $\FF$ contains an element of $S$.
From Union of Set of Sets when a Set Intersects All:

$\FF = \ds \bigcup_{x \mathop \in S} \set {V \in \FF: x \in V}$
Thus by Countable Union of Finite Sets is Countable, $\FF$ is countable.
$\blacksquare$





