# 

Source: https://proofwiki.org/wiki/Sequence_on_Product_Space_Converges_to_Point_iff_Projections_Converge_to_Projections_of_Point



Theorem
Let $I$ be an arbitrary index set.
For all $i \in I$, let $T_i = \struct {X_i, \tau_i}$ be topological spaces.
Let $\ds X = \prod_{i \mathop \in I} X_i$ be the cartesian product of $\family {X_i}_{i \mathop \in I}$.
Let $\tau$ be the product topology on $X$.
Denote by $\pr_i : X \to X_i$ the projection from $X$ onto $X_i$.
Let $\sequence {x_n}$ be a sequence on $X$ and let $x \in X$.

Then $\sequence {x_n}$ converges to $x$ if and only if:

for all $i \in I$ the sequence $\sequence {\map {\pr_i} {x_n} }$ converges to $\map {\pr_i} x$.


Proof
Necessary Condition
Let $x_n \to x$.
Let $i \in I$.
From Projection from Product Topology is Continuous it follows that $\pr_i$ is continuous.
By Continuous Mapping is Sequentially Continuous, $\pr_i$ is also sequentially continuous.
Hence $\map {\pr_i} {x_n} \to \map {\pr_i} x$.
$\Box$


Sufficient Condition
Let $\map {\pr_i} {x_n} \to \map {\pr_i} x$ for all $i \in I$.
Let $U \in \tau$ be an open neighborhood of $x$.
Let $\BB$ be the collection of sets of the form $\ds \prod_{i \mathop \in I} U_i$, where:

for all $i \in I : U_i \in \tau_i$
for all but finitely many indices $i : U_i = X_i$
By Natural Basis of Product Topology and Synthetic Basis and Analytic Basis are Compatible it follows that $\BB$ is an analytic basis for $\tau$.
As $x \in U$ it follows that there exists $\ds \prod_{i \mathop \in I} U_i \in \BB$ such that:

$\ds x \in \prod_{i \mathop \in I} U_i \subseteq U$
Let $F := \set {i \in I : U_i \neq X_i}$.
By definition of $\BB$, $F$ is finite.
By our hypothesis $\map {\pr_i} {x_n} \to \map {\pr_i} x$ it follows that:

$\forall i \in F: \exists M_i \in \N : \forall n \ge M_i: \map {\pr_i} {x_n} \in U_{i}$
Furthermore, for $i \in I \setminus F$ we have $\map {\pr_i} {x_n} \in X_{i} = U_{i}$.
Thus for all $n \ge M := \max \set {M_i : i \in F}$ it holds that:

$ x_n = \tuple {\map {\pr_i} {x_n} }_{i \mathop \in I} \in \prod_{i \mathop \in I} U_i \subseteq U$
Hence the result.
$\blacksquare$


Also see
Filter on Product Space Converges to Point iff Projections Converge to Projections of Point
Source
2000: James R. Munkres: Topology (2nd ed.): $7$ Complete Metric Spaces and Function Spaces: $\S 43$ Complete Metric Spaces: Lemma $43.3$




