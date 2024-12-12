# 

Source: https://proofwiki.org/wiki/Closed_Set_of_Countable_Fort_Space_is_G-Delta

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on a countably infinite set $S$.
Let $H \subseteq S$ be closed in $T$.

Then $H$ is a $G_\delta$ set.


Proof
By definition of Fort space, $H$ is finite or contains $p$.
Consider the set of sets defined by:

$\DD = \set {S \setminus \set z: z \notin H}$
Because $H$ is finite, $S \setminus H$ is countably infinite.
From its method of construction, $\DD$ has the same cardinality as $S \setminus H$ and so is countably infinite.
We have that the elements of $\DD$ are all open sets.
Thus, by definition, any set of the form $\ds H \subseteq \bigcap_{V \mathop \in \DD} V$ is a $G_\delta$ set.

Let $r \in H$.
Then:

$\forall z \in S: z \notin H: r \in S \setminus \set z$
Thus by definition of $\DD$:

$\ds H \subseteq \bigcap_{V \mathop \in \DD} V$

Let $r \notin H$.
Then:

$\exists z \in S: r \notin S \setminus \set z \in \DD$
So:

$\ds \relcomp S H \subseteq \relcomp S {\bigcap_{V \mathop \in \DD} V}$
and so:

$\ds H = \bigcap_{V \mathop \in \DD} V$
Hence the result.
$\blacksquare$





