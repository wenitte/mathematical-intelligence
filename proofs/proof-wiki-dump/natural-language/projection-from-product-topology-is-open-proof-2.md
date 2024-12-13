# 

Source: https://proofwiki.org/wiki/Projection_from_Product_Topology_is_Open/Proof_2

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $T = \struct {T_1 \times T_2, \tau}$ be the product space of $T_1$ and $T_2$, where $\tau$ is the product topology on $S$.
Let $\pr_1: T \to T_1$ and $\pr_2: T \to T_2$ be the first and second projections from $T$ onto its factors.

Then both $\pr_1$ and $\pr_2$ are open.


Proof
We show that $\pi_1$ is open, the proof for $\pi_2$ is identical.
Let $V$ be open in $T$.
We show that $\pi_1 \sqbrk V$ is open in $T_1$.
From Set is Open iff Neighborhood of all its Points, it is enough to show that for each $x \in \pi_1 \sqbrk V$, there exists an open neighborhood $U_1$ of $x$ such that $U_1 \subseteq \pi_1 \sqbrk V$.
Let $x \in \pi_1 \sqbrk V$.
Then there exists $y \in S_2$ such that $\tuple {x, y} \in V$. 
From Natural Basis of Product Topology, there exists an open neighborhood $U_1 \subseteq X$ of $x$ and an open neighborhood $U_2 \subseteq Y$ of $y$ such that $U_1 \times U_2 \subseteq V$. 
Then we have $U_1 \subseteq \pi_1 \sqbrk V$.
Since $x$ was arbitrary, from Set is Open iff Neighborhood of all its Points it follows that $\pi_1 \sqbrk V$ is open.
$\blacksquare$





