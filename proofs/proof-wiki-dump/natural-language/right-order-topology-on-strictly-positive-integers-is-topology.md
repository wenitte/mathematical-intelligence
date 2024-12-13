# 

Source: https://proofwiki.org/wiki/Right_Order_Topology_on_Strictly_Positive_Integers_is_Topology



Theorem
Let $\Z_{>0}$ be the set of strictly positive integers.
Let $\tau$ be the right order topology on $\Z_{>0}$.

Then $\tau$ forms a topology on $\Z_{>0}$.
That is:

$T = \struct {\Z_{>0}, \tau}$ is a topological space.


Proof
Let $S := \Z_{>0}$ to ease notational clutter.
First we note that:

$m \le n \implies O_n \subseteq O_m$
where $O_n := \set {x \in \Z_{>0}: x \ge n}$.
By definition we have that:

$\O \in \tau$

Then each of the open set axioms is examined in turn:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {O_j}_{j \mathop \in S}$ be an indexed family of open sets of $T$.
Let $\ds V = \bigcup_{j \mathop \in S} O_j$ be the union of $\family {O_j}_{j \mathop \in S}$.
Let $m \in S$ be defined as:

$\ds m = \inf \set {n \in S: O_n \in \bigcup_{j \mathop \in S} O_j}$
Then $O_m = \bigcup_{j \mathop \in S} O_j$
Hence $V = O_m$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $O_m$ and $O_n$ be open sets of $T$.
Without loss of generality let $m < n$.
Then $O_n \subseteq O_m$.
Hence by Intersection with Subset is Subset

$O_n \cap O_m = O_n$
Hence $O_n \cap O_m$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
Then we note that:

$O_1 = S$
Hence $S \in \tau$ as required.
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Example $7$




