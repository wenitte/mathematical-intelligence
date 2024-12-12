# 

Source: https://proofwiki.org/wiki/Deleted_Integer_Topology_is_Weakly_Countably_Compact

Theorem
Let $S = \R_{\ge 0} \setminus \Z$.
Let $\tau$ be the deleted integer topology on $S$.

Then the topological space $T = \struct {S, \tau}$ is weakly countably compact.


Proof
Let $A \subseteq S$ such that $A$ is infinite.
Let $x \in A$.
Let $n \in \Z$ such that $n < x < n + 1$.
By the definition of the deleted integer topology, $\openint n {n + 1}$ is open in $T$.

We have that $\openint n {n + 1}$ is infinite.
Take some $y \in \openint n {n + 1}$ such that $x \ne y$.
Now we claim that $y$ is a limit point of $A$.

Let $N_y$ be an open neighbourhood of $y$.
To be open in $T$, $N_y$ needs to be the union of open intervals of the form $\openint k {k + 1}$ for some $k \in \Z_{\ge 0}$.
Therefore to contain $y$ and be open at the same time, $\openint n {n + 1} \subseteq N_y$.
Thus $x \in N_y$ and $y \ne x \in A \cap N_y \ne \O$.
This is the definition of a limit point.
So, by definition, $T$ is weakly countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $7$. Deleted Integer Topology: $5$




