# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_F-Sigma_Set_in_Real_Line

Theorem
Let $\struct {\R, \tau}$ be the real number line considered asa  topological space with the usual (Euclidean) topology.
Then:

$\Q$ is an $F_\sigma$ set in $\struct {\R, \tau}$.


Proof
Define the set of subsets of $\R$ as:

$\FF := \set {\set x: x \in \Q}$
By Closed Real Interval is Closed Set:

$\forall x \in \Q: \closedint x x = \set x$ is closed (in topological sense)
Then:

$\forall A \in \FF: A$ is closed
By Cardinality of Set of Singletons:

$\card \FF = \card \Q$
where $\card \FF$ denotes the cardinality of $\FF$.
By Rational Numbers are Countably Infinite:

$\Q$ is countable.
Therefore by Set is Countable if Cardinality equals Cardinality of Countable Set:

$\FF$ is countable.
By Union of Set of Singletons:

$\bigcup \FF = \Q$
Thus, by definition, $\Q$ is an $F_\sigma$ set.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_4:45




