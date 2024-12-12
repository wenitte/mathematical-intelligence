# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point_in_Metric_Space/Definition_2_implies_Definition_3

Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $\tau$ be the topology induced by the metric $d$.
Let $A \subseteq S$ be a subset of $S$.
Let $\alpha \in S$. 

Let there exist a sequence $\sequence{\alpha_n}$ in $A \setminus \set \alpha$ such that $\sequence{\alpha_n}$ converges to $\alpha$ in $S$.

Then:

$\alpha$ is a limit point in the topological space $\struct{S, \tau}$.
Proof
Let $U \in \tau$ be an arbitrary open set:

$\alpha \in U$
By Definition of Topology Induced by Metric:

$\exists \epsilon \in \R_{>0} : \map {B_\epsilon} \alpha \subseteq U$
By Definition of Convergent Sequence (Metric Space):

$\exists N \in \N : \forall n \ge N : d(\alpha, \alpha_n) < \epsilon$
By Definition of Open Ball:

$\alpha_N \in \map {B_\epsilon} \alpha$
By hypothesis:

$\alpha_N \in A \setminus \set \alpha$

We have:














\(\ds \alpha_N \in \paren{A \setminus \set \alpha} \cap \map {B_\epsilon} \alpha\)

\(=\)







\(\ds \paren{A \cap \map {B_\epsilon} \alpha} \setminus \set \alpha\)





Intersection with Set Difference is Set Difference with Intersection














\(\ds \)

\(\subseteq\)







\(\ds \paren{A \cap U} \setminus \set \alpha\)





Set Intersection Preserves Subsets and Set Difference over Subset














\(\ds \)

\(=\)







\(\ds A \cap \paren{U \setminus \set \alpha}\)





Intersection with Set Difference is Set Difference with Intersection



Hence:

$A \cap \paren{U \setminus \set \alpha} \ne \O$

Since $U$ was arbitrary, it follows that $\alpha$ is a limit point in the topological space $\struct{S, \tau}$ by definition.
$\blacksquare$





