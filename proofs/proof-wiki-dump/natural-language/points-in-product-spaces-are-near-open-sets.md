# 

Source: https://proofwiki.org/wiki/Points_in_Product_Spaces_are_Near_Open_Sets

Theorem
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of topological spaces, where $I$ is an arbitrary index set.
Let $X = \ds \prod_{i \mathop \in I} X_i$ be the product space of $\family {X_i}_{i \mathop \in I}$.
Let $U$ be nonempty open subset of $X$.
Let $x$ be a point in $X$.
For each point $y$ in $X$, let $\map K y = \set {i \in I : y_i \ne x_i}$.

Then there exists a point $u$ in $U$ such that $\map K u$ is finite.


Proof
Let $q$ be any point in $U$.
The topology on the product space $X$ is the product topology which has the natural basis as a (synthetic) basis.
Then:

$\exists Q \in \BB : q \in Q \subseteq U$
where $\BB$ is the natural basis for product topology on $X$.
From Natural Basis of Product Topology:

$\ds Q = \prod_{i \mathop \in I} Q_i$ where:
for all $i \in I : Q_i$ is open in $X_i$
$J = \set {i \in I : Q_i \ne X_i}$ is finite

Let $u$ be the point defined by:

$u_i = \begin {cases} q_i & i \in J \\ x_i & i \notin J \end {cases}$
By definition of $u$:

$\forall i \in I : u_i \in Q_i$
By definition of the Cartesian product:

$u \in Q \subseteq U$
By definition of $u$:

$\forall i \in I: i \notin J \implies u_i = x_i$
So by Rule of Transposition:

$\forall i \in I: u_i \ne x_i \implies i \in J$
Thus:

$\map K u \subseteq J$
From Subset of Finite Set is Finite, and because $J$ is finite, $\map K u$ is also finite.
$\blacksquare$





