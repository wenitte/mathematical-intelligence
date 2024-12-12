# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Weight_of_Topological_Space



Theorem
Let $T$ be a topological space.
Let $\mathbb B$ be the set of all bases of $T$.

The following definitions of the weight of $T$ are equivalent:

Definition 1
The weight of $T$ is defined as:

$\ds \map w T := \bigcap_{\BB \mathop \in \mathbb B} \card \BB$
where $\card \BB$ denotes the cardinality of $\BB$.

Definition 2
The weight of $T$ is the smallest cardinality of the elements of $\mathbb B$:

$\map w T := \min \set {\card \BB: \BB \in \mathbb B}$


Proof
By Class of All Cardinals is Subclass of Class of All Ordinals, the set:

$M = \set {\card \BB: \BB \in \mathbb B}$
is a subclass of the class of all ordinals.
By Class of All Ordinals is Well-Ordered by Subset Relation:

$M$ is well ordered by the $\subseteq$ relation.

By Class of All Ordinals is Well-Ordered by Subset Relation there exists a smallest element $m_0 \in M$:

$\forall m \in M: m_0 \subseteq m$
Hence by Smallest Element is Minimal there exists a basis $\BB_0$ of $T$ which has minimal cardinality:

$m_0 = \map {w_2} T$.
Let:

$\ds \map {w_1} T = \bigcap_{\BB \mathop \in \mathbb B} \card \BB$
By Intersection is Subset:

$\ds \map {w_1} T = \bigcap M \subseteq m_0$
But by Intersection is Largest Subset:

$\ds \mathfrak m_0 \subseteq \bigcap M$
By definition of set equality:

$\map {w_1} T = \map {w_2} T$
and hence the result.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)




