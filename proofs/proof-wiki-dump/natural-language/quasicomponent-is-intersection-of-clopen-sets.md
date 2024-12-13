# 

Source: https://proofwiki.org/wiki/Quasicomponent_is_Intersection_of_Clopen_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $p \in S$.

Then the quasicomponent containing $p$ equals the intersection of all sets which are both open and closed which contain $p$.


Proof
Let $C$ be the quasicomponent of $p$.
Let $Q$ be the set of clopen sets containing $p$ that are not equal to $S$.

First let $x \in C$.
Let $U \in Q$.
By definition of $Q$:

$p \in U$
Let $V = \relcomp S U$ be the complement of $U$ relative to $S$.
By Complement of Clopen Set is Clopen $V$ is also a clopen set of $T$.
By Clopen Set and Complement form Separation $U$ and $V$ separate $S$.

By the definition of quasicomponent, $U \mid V$ is a separation of $S$ which contains a single open set $U$ containing both $x$ and $p$.
Thus:

$x \in U$
As this holds for all such $U$:

$x \in \ds \bigcap Q$
As this holds for all such $x$:

$C \subseteq Q$
$\Box$

Let $x \in \ds \bigcap Q$.
Let $U \mid V$ be a separation of $S$.
Let $p \in U$.
Then $U \in Q$.
Thus $x \in U$.
Thus $x$ lies on the same side as $p$ of any separation of $X$.
So $x \in C$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




