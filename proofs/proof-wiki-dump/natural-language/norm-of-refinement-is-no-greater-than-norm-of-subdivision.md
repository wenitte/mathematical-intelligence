# 

Source: https://proofwiki.org/wiki/Norm_of_Refinement_is_no_Greater_than_Norm_of_Subdivision

Theorem
Let $P$ be a finite subdivision of $\closedint a b$.
Let $P'$ be a refinement of $P$.
Then:

$\norm {P'} \le \norm P$
where $\norm P$ denotes the norm of $P$.


Proof
Let $P = \set {x_0, x_1, \dotsc, x_{n - 1}, x_n}$.
Let $P' = \set {y_0, y_1, \dotsc, y_{m - 1}, y_m}$.
By definition of refinement:

$P \subseteq P'$
Therefore, every $x_i \in P'$.
Thus, every $i \in \set {0, 1, \dotsc, n - 1, n}$, define $k_i \in \set {0, 1, \dotsc, m - 1, m}$ such that:

$y_{k_i} = x_i$

Now, for each $j \in \set {1, 2, \dotsc, m - 1, m}$, let $i_j$ be the smallest $i$ such that $k_i \ge j$.
Since $k_{i_j} \ge j$, it follows that $y_j \le y_{k_{i_j}}$.
Therefore, by definition of $k_i$:

$y_j \le x_{i_j}$

Aiming for a contradiction, suppose $k_{i_j - 1} > j - 1$.
Then, $k_{i_j - 1} \ge j$, contradicting the fact that $i_j$ is the smallest $i$ satisfying the property.
Therefore, by Proof by Contradiction, $k_{i_j - 1} \le j - 1$.
Hence, $x_{i_j - 1} = y_{k_{i_j - 1}} \le y_{j - 1}$.

Let $Z = \norm {P'}$ be the norm of $P'$.
By definition, there is some $j \in \set {1, 2, \dotsc, m - 1, m}$ such that:

$y_j - y_{j - 1} = Z$
But from:

$x_{i_j - 1} \le y_{j - 1} \le y_j \le x_{i_j}$
it follows that:

$x_{i_j} - x_{i_j - 1} \ge y_j - y_{j - 1} = Z$
Therefore, by definition of the norm of $P$:

$\norm P \ge Z = \norm {P'}$
$\blacksquare$





