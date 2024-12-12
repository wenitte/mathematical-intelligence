# 

Source: https://proofwiki.org/wiki/Finite_Product_of_Weakly_Locally_Compact_Spaces_is_Weakly_Locally_Compact



Theorem
Let $n \in \Z_{\ge 0}$ be a (strictly) positive integer.
Let $\set {\struct {S_i, \tau_i}: 1 \le i \le n}$ be a finite set of topological spaces.
Let $\ds \struct {S, \tau} = \prod_{i \mathop = 1}^n \struct {S_i, \tau_i}$ be the product space of $\set {\struct {S_i, \tau_i}: 1 \le i \le n}$.

Let each of $\struct {S_i, \tau_i}$ be weakly locally compact.

Then $\struct {S, \tau}$ is also weakly locally compact.


Proof
Pick any $\tuple {x_1, \dots, x_n} \in S$.
Since each of $\struct {S_i, \tau_i}$ is weakly locally compact, $x_i$ has a compact neighborhood.
That is, there is a compact set $N_i$ such that:

$\exists U_i \in \tau_i: x_i \in U_i \subseteq N_i$
From Cartesian Product of Family of Subsets:

$\ds \tuple {x_1, \dots, x_n} \in \prod_{i \mathop = 1}^n U_i \subseteq \prod_{i \mathop = 1}^n N_i$
By definition of product space:

$\ds \prod_{i \mathop = 1}^n U_i \in \tau$
From Finite Topological Product of Compact Spaces:

$\ds \prod_{i \mathop = 1}^n N_i$ is compact
Hence:

$\ds \prod_{i \mathop = 1}^n N_i$ is a compact neighborhood of $\tuple {x_1, \dots, x_n}$.

As $\tuple {x_1, \dots, x_n}$ is arbitrary, $\struct {S, \tau}$ is weakly locally compact.
$\blacksquare$


Also see
Compactness Properties Preserved under Projection Mapping


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




