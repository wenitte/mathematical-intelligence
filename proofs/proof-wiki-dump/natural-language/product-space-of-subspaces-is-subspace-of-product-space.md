# 

Source: https://proofwiki.org/wiki/Product_Space_of_Subspaces_is_Subspace_of_Product_Space

Theorem
Let $\family {\struct {X_i, \tau_i} }_{i \mathop \in I}$ be a family of topological spaces where $I$ is an arbitrary index set.
Let $\ds T = \struct {X, \tau} = \prod_{i \mathop \in I} \struct {X_i, \tau_i}$ be the product space of $\family {\struct {X_i, \tau_i} }_{i \mathop \in I}$.

Let $\family {\struct {Y_i, \upsilon_i} }_{i \mathop \in I}$ be a family of topological spaces such that:

$\forall i \in I : \struct {Y_i, \upsilon_i}$ is a topological subspace of $\struct {X_i, \tau_i}$
Let $\ds S = \struct {Y, \upsilon} = \prod_{i \mathop \in I} \struct {Y_i, \upsilon_i}$ be the product space of $\family {\struct {Y_i, \upsilon_i} }_{i \mathop \in I}$.

Let $T_Y = \struct {Y, \tau_Y}$ be the topological subspace of $T$.

Then $S = T_Y$.


Proof
From Cartesian Product of Family of Subsets, $Y \subseteq X$.
Thus the topological subspace $T_Y$ is well-defined.

From Natural Basis of Product Topology, a (synthetic) basis for $T$ is:

$\ds \BB_T = \set {\prod_{i \mathop \in I} U_i : U_i \in \tau_i, U_i = X_i \text{ for all but finitely many } i \in I}$
From Basis for Topological Subspace a (synthetic) basis for $T_Y$ is:

$\BB_Y = \set {U \cap Y: U \in \BB_T}$
That is:














\(\ds \BB_Y\)

\(=\)







\(\ds \set {\paren{ \prod_{i \mathop \in I} U_i} \bigcap \paren{\prod_{i \mathop \in I} Y_i}: U_i \in \tau_i, U_i = X_i \text{ for all but finitely many } i \in I}\)




















\(\ds \)

\(=\)







\(\ds \set {\prod_{i \mathop \in I} \paren {U_i \cap Y_i} : U_i \in \tau_i, U_i = X_i \text{ for all but finitely many } i \in I}\)





General Case of Cartesian Product of Intersections




By definition of a subspace topology,

$\forall i \in I: \upsilon_i = \set{U \cap S_i : U \in \tau_i}$
From Natural Basis of Product Topology a (synthetic) basis for $S$ is:

$\ds \BB_S = \set {\prod_{i \mathop \in I} V_i : V_i \in \upsilon_i, V_i = Y_i \text{ for all but finitely many } i \in I}$
That is:














\(\ds \BB_S\)

\(=\)







\(\ds \set {\prod_{i \mathop \in I} \paren{U_i \cap Y_i} : U_i \in \tau_i, U_i \cap Y_i = Y_i \text{ for all but finitely many } i \in I}\)




















\(\ds \)

\(=\)







\(\ds \set {\prod_{i \mathop \in I} \paren{U_i \cap Y_i} : U_i \in \tau_i, U_i = X_i \text{ for all but finitely many } i \in I}\)





as $Y_i \subseteq X_i$ for all $i \in I$



Thus $\BB_S = \BB_Y$ and therefore $S = T_Y$.
$\blacksquare$





