# 

Source: https://proofwiki.org/wiki/Double_Pointed_Discrete_Real_Number_Space_is_Weakly_Countably_Compact

Theorem
Let $T_\R = \struct {\R, \tau_\R}$ be the (uncountable) discrete space on the set of real numbers.
Let $T_D = \struct {D, \tau_D}$ be the indiscrete topology on the doubleton $D = \set {a, b}$.
Let $T = T_\R \times T_D$ be the double pointed (uncountable) discrete space which is the product space of $T_\R$ and $T_D$.

Then $T$ is weakly countably compact. 


Proof
We have that $T$ is a partition topology, whose basis $\PP$ is defined as:

$\PP = \set {\set {\tuple {s, a}, \tuple {s, b} }: s \in \R}$
Let $A \subseteq \R \times D$ such that $A$ is infinite.
Let $x \in A$.
Let $U$ be the union of sets of the form $\set {\tuple {s, a}, \tuple {s, b} }$, and hence open in $T$.
Now if $x \in U$, it will be an element in some $\set {\tuple {s, a}, \tuple {s, b} }$.
So there will exist $y \in U$ which will also be an element in that $\set {\tuple {s, a}, \tuple {s, b} }$.
So, by definition, $x$ is a limit point of $A$.
So, by definition, $T$ is weakly countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $7$




