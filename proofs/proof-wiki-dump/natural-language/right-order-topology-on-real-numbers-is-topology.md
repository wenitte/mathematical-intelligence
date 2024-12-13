# 

Source: https://proofwiki.org/wiki/Right_Order_Topology_on_Real_Numbers_is_Topology



Theorem
Let $\tau$ be the right order topology on $\R$.

Then $\tau$ forms a topology on $\R$.
That is:

$T = \struct {\R, \tau}$ is a topological space.


Proof
Write $\O = \openint \infty \infty$ and $\R = \openint {-\infty} \infty$.
Then $\tau$ can be written as $\set {\openint j \infty: j \in \overline \R}$.
First we note that:

$m \le n \implies \openint n \infty \subseteq \openint m \infty$
By definition we have that:

$\O \in \tau$

Then each of the open set axioms is examined in turn:


Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets
Let $\family {\openint j \infty}_{j \mathop \in S}$ be an indexed family of open sets of $T$, where $S \subseteq \overline \R$.
Let $\ds V = \bigcup_{j \mathop \in S} \openint j \infty$ be the union of $\family {\openint j \infty}_{j \mathop \in S}$.
Let $m := \inf S \in \overline \R$.
We claim that:

$\ds \openint m \infty = \bigcup_{j \mathop \in S} \openint j \infty$

Indeed, for each $x \in \openint m \infty$ we have $x > m$.
By Characterizing Property of Infimum of Subset of Real Numbers:

$\exists y \in S: y < x$
and thus $\ds x \in \openint y \infty \subseteq \bigcup_{j \mathop \in S} \openint j \infty$.
This shows that $\ds \openint m \infty \subseteq \bigcup_{j \mathop \in S} \openint j \infty$.
For the other direction, note that $j \ge m$ for each $j \in S$.
Therefore $\openint j \infty \subseteq \openint m \infty$ for each $j \in S$.
By Union of Subsets is Subset, $\ds \bigcup_{j \mathop \in S} \openint j \infty \subseteq \openint m \infty$.
Thus our claim is true by definition of set equality.

Hence $V = \openint m \infty$ is open by definition.
$\Box$


Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets
Let $A = \openint m \infty$ and $B = \openint n \infty$, where $m, n \in \overline \R$.
Without loss of generality let $m < n$.
Then $\openint n \infty \subseteq \openint m \infty$.
Hence by Intersection with Subset is Subset:

$\openint n \infty \cap \openint m \infty = \openint n \infty \in \tau$
Hence $\openint n \infty \cap \openint m \infty$ is open by definition.
Therefore the intersection of any two elements of $\tau$ is an element of $\tau$.
$\Box$


Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology
$\R \in \tau$ follows directly from definition.
$\Box$

All the open set axioms are fulfilled, and the result follows.
$\blacksquare$





