# 

Source: https://proofwiki.org/wiki/Non-Trivial_Connected_Set_in_T1_Space_is_Dense-in-itself

Theorem
Let $T = \struct {S, \tau}$ be a $T_1$ (Fréchet) topological space.
Let $H \subseteq S$ be connected in $T$.

If $H$ has more than one element, then $H$ is dense-in-itself.


Proof
Aiming for a contradiction, suppose $H$ is not dense-in-itself.
Then $\exists x \in H$ such that $x$ is isolated in $H$.
That is, $\exists U \in \tau: U \cap H = \set x$.

Since $H$ has more than one element, we can find $y \in H$ with $y \ne x$.
Since $T$ is $T_1$:

$\forall y \in H: y \ne x \implies \paren {\exists V_y \in \tau: y \in V_y, x \notin V_y}$
Define $V = \ds \bigcup_{y \mathop \in H \\ y \mathop \ne x} V_y$.

Then $\forall z \in H$:

$z = x \implies z \in U$
$z \ne x \implies z \in V_z \subseteq V$
Showing that $H \subseteq U \cup V$.
This also shows that both $U \cap H$ and $V \cap H$ are non-empty.

Since $x \notin V_y$ for any $y \in H$, 
we have $x \notin V$. 
This implies $\set x \cap V = \O$
So $H \cap U \cap V = \O$.

Thus we have:

$H \subseteq U \cup V$
$H \cap U \cap V = \O$
$U \cap H \ne \O$
$V \cap H \ne \O$
showing that $H$ is disconnected.
This is a contradiction.

Hence by Proof by Contradiction it must be the case that $H$ is dense-in-itself. 
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness




