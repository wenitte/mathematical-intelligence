# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point_in_Metric_Space/Definition_3_implies_Definition_1

Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $\tau$ be the topology induced by the metric $d$.
Let $A \subseteq S$ be a subset of $S$.
Let $\alpha \in S$. 

Let $\alpha$ be a limit point in the topological space $\struct{S, \tau}$.

Then:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$
Proof
From Open Ball is Open Set:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} \alpha$ is open set in $M$
By Definition of Topology Induced by Metric:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} \alpha$ is open set in $\struct{S,\tau}$
By Definition of Limit Point of Set:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$
$\blacksquare$





