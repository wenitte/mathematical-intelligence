# 

Source: https://proofwiki.org/wiki/Projection_is_Injection_iff_Factor_is_Singleton



Theorem
Let $S_1, S_2, \ldots, S_n$ be non-empty sets.
Let $\ds S = \prod_{i \mathop = 1}^n S_i$ be the cartesian product of $S_1, S_2, \ldots, S_n$.
Let $\pr_j: S \to S_j$ be the $j$th projection on $S$.

Then $\pr_j$ is an injection if and only if $S_k$ is a singleton for all $k \in \set {1, 2, \dotsc, n}$ where $k \ne j$.


Family of Sets
Let $\family {S_i}_{i \mathop \in I}$ be a non-empty family of non-empty sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Let $\pr_j: S \to S_j$ be the $j$th projection on $S$.

Then $\pr_j$ is an injection if and only if $S_i$ is a singleton for all $i \in I \setminus \set j$.


Proof
Sufficient Condition
Suppose $S_k = \set {s_k}$ for all $k \in \set {1, 2, \dotsc, n}$ where $k \ne j$.
Let $\map {\pr_j} x = \map {\pr_j} y = z$ for $x, y \in S$.
Then by definition of $j$th projection, $x, y \in S$ are given by:

$x = \tuple {s_1, s_2, \dotsc, s_{j - 1}, z, s_{j + 1}, \dotsc, s_n}$
$y = \tuple {s_1, s_2, \dotsc, s_{j - 1}, z, s_{j + 1}, \dotsc, s_n}$
and so $x = y$.
Thus $\pr_j$ is an injection by definition.
$\Box$


Necessary Condition
Let $\pr_j$ be an injection.
Thus:

$\forall x, y \in S: \map {\pr_j} x = \map {\pr_j} y \implies x = y$
Let $x, y \in S$ be such that:

$x = \tuple {x_1, x_2, \dotsc, x_{j - 1}, z, x_{j + 1}, \dotsc, x_n}$
$y = \tuple {y_1, y_2, \dotsc, y_{j - 1}, z, y_{j + 1}, \dotsc, y_n}$
Then:

$\map {\pr_j} x = \map {\pr_j} y = z$
For $x = y$ it is necessary that:

$x_1 = y_1, x_2 = y_2, \dotsc, x_{j - 1} = y_{j - 1}, x_{j + 1} = y_{j + 1}, \dotsc, x_n = y_n$
That is:

$\forall k \in \set {1, 2, \dotsc, n}, k \ne j: x_k = y_k$
That is, that $S_k$ is a singleton for all $k \in \set {1, 2, \dotsc, n}$ where $k \ne j$.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 8$: Functions
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions: Exercise $5$




