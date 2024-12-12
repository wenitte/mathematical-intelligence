# 

Source: https://proofwiki.org/wiki/Closable_Densely-Defined_Linear_Operator_has_Smallest_Closed_Extension

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a closable densely-defined linear operator.

Then there exists a closed densely-defined linear extension $\struct {\map D S, S}$ of $T$ such that:

the graph $\map \GG S$ is $\subseteq$-minimal among the graphs of closed densely-defined linear extensions of $T$.
Further:

$\map \GG S = \map \cl {\map \GG T}$


Proof
From Characterization of Closable Densely-Defined Linear Operators in terms of Closure of Graph:

whenever $\tuple { {\mathbf 0}_\HH, y} \in \map \cl {\map \GG T}$, we have $y = {\mathbf 0}_\HH$.
Define:

$\map D S = \set {x \in \HH : \tuple {x, y} \in \map \cl {\map \GG T} \text { for some } y \in \HH}$
From Linear Transformation defined from Graph, there exists a linear transformation $S : \map D S \to \HH$ such that $\map \GG S = \map \cl {\map \GG T}$.
Now let $S'$ be another closed densely-defined linear extensions of $T$.
We have $\map \GG T \subseteq \map \GG {S'}$.
Since $\map \GG {S'}$ is closed, we obtain:

$\map \GG S = \map \cl {\map \GG T} \subseteq \map \GG {S'}$
from Set Closure Preserves Set Inclusion.
$\blacksquare$


Sources
1981: Michael Reed and Barry Simon: Methods of Modern Mathematical Physics I: Functional Analysis (Revised ed.) ... (previous) ... (next): $\text {VIII}.1$: Domains, graphs, adjoints and spectrum




