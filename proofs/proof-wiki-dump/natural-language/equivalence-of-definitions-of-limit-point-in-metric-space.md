# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point_in_Metric_Space



Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $\tau$ be the topology induced by the metric $d$.
Let $A \subseteq S$ be a subset of $S$.
Let $\alpha \in S$. 

The following definitions of the concept of limit point in metric space are equivalent:

Definition 1
$\alpha$ is a limit point of $A$ if and only if every deleted $\epsilon$-neighborhood $\map {B_\epsilon} \alpha \setminus \set \alpha$ of $\alpha$ contains a point in $A$:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$
that is:

$\forall \epsilon \in \R_{>0}: \set {x \in A: 0 < \map d {x, \alpha} < \epsilon} \ne \O$
Note that $\alpha$ does not have to be an element of $A$ to be a limit point.


Definition 2
$\alpha$ is a limit point of $A$ if and only if there is a sequence $\sequence{\alpha_n}$ in $A \setminus \set \alpha$ such that $\sequence{\alpha_n}$ converges to $\alpha$, that is, $\alpha$ is a limit of the sequence $\sequence{\alpha_n}$ in $S$.


Definition 3
$\alpha$ is a limit point of $A$ if and only if $\alpha$ is a limit point in the topological space $\struct{S, \tau}$.


Proof
$(1) \implies (2)$
Let:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$

A sequence $\sequence {\alpha_n}$ is constructed using finite recursion.
Let $\alpha_0$ be some arbitrary point in $A \cap \paren{\map {B_1} \alpha \setminus \set \alpha}$.
$\alpha_{n + 1}$ is some arbitrary point in $A \cap \paren{\map {B_{\frac {\map d {\alpha, \alpha_n} } 2} } \alpha \setminus \set \alpha}$ where $\map {B_{\frac {\map d {\alpha, \alpha_n} } 2} } \alpha$ denotes the open $\dfrac {\map d {\alpha, \alpha_n} } 2$-ball of $\alpha$.
We can be assured that such a point exists by hypothesis.
Then:

$\map d {\alpha_n, \alpha} < 2^{-n} \map d {\alpha_0, \alpha}$
Since $\map d {\alpha_0, \alpha}$ is fixed:

$\map d {\alpha_n, \alpha} < 2^{-n} \map d {\alpha_0, \alpha} < r$
for some $n$ because the natural numbers are Archimedean.
Therefore $\alpha$ is the limit of the sequence $\sequence {\alpha_n}$ by definition.
$\Box$


$(2) \implies (3)$
Let there exist a sequence $\sequence{\alpha_n}$ in $A \setminus \set \alpha$ such that $\sequence{\alpha_n}$ converges to $\alpha$ in $S$.

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
$\Box$


$(3) \implies (1)$
Let $\alpha$ be a limit point in the topological space $\struct{S, \tau}$.

From Open Ball is Open Set:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} \alpha$ is open set in $M$
By Definition of Topology Induced by Metric:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} \alpha$ is open set in $\struct{S,\tau}$
By Definition of Limit Point of Set:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$
$\blacksquare$





