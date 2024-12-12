# 

Source: https://proofwiki.org/wiki/Denseness_Preserved_in_Coarser_Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T' = \struct {S, \tau'}$ be another topological space on $S$ such that $\tau'$ is coarser than $\tau$.

Let $H \subseteq S$ be everywhere dense in $T$.
Then $H$ is also everywhere dense in $T'$.


Proof
Let $H \subseteq S$ be everywhere dense in $T$. 
As $\tau'$ is coarser than $\tau$, by definition $\tau' \subseteq \tau$.
Let $x \in S$.
As $H \subseteq S$ is everywhere dense in $T$, either $x \in H$ or $x$ is a limit point of $H$ in $T$.

Suppose $x \notin H$.
Then $x$ is a limit point of $H$ in $T$.
Then by definition of limit point of $H$:

$\forall U \in \tau, x \in U: \exists y \in H: y \in U, y \ne x$
As $\tau' \subseteq \tau$ we have that $U \in \tau' \implies U \in \tau$.
So:

$\forall U \in \tau', x \in U: \exists y \in H: y \in U, y \ne x$
That is, $x$ is a limit point of $H$ in $T\ '$.
As $x$ is arbitrary, this follows for all $x \in S, x \notin H$.

So, for all $x \in S$, either $x \in H$ or $x$ is a limit point of $H$ in $T'$.
Thus, by definition, $H \subseteq S$ is everywhere dense in $T'$.
$\blacksquare$





