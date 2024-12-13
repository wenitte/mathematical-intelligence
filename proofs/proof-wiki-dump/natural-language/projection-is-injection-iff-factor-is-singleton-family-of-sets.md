# 

Source: https://proofwiki.org/wiki/Projection_is_Injection_iff_Factor_is_Singleton/Family_of_Sets



Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a non-empty family of non-empty sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Let $\pr_j: S \to S_j$ be the $j$th projection on $S$.

Then $\pr_j$ is an injection if and only if $S_i$ is a singleton for all $i \in I \setminus \set j$.


Proof
Sufficient Condition
Let $S_i = \set {s_i}$ for all $i \in I \setminus \set {j}$.
Let $\map {\pr_j} x = \map {\pr_j} y = s_j$ for $x, y \in S$.

By definition of $j$th projection:

$\map x j = \map {\pr_j} x = s_j$
$\map y j = \map {\pr_j} y = s_j$
and so $\map x j = \map y j$.

By the definition of Cartesian product, for all $i \in I \setminus \set j$:

$\map x i, \map y i \in S_i = \set {s_i}$
and so $\map x i = \map y i$ for all $i \in I \setminus \set j$.

Thus $x = y$.
Thus $\pr_j$ is an injection by definition.
$\Box$


Necessary Condition
Let $\family {S_i}_{i \mathop \in I}$ be a non-empty family of non-empty sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Let $\pr_j: S \to S_j$ be the $j$th projection on $S$.
Let $\pr_j$ be an injection.

Then $S_i$ is a singleton for all $i \in I \setminus \set j$.
Let $\pr_j$ be an injection.
Then:

$\forall x, y \in S: \map {\pr_j} x = \map {\pr_j} y \implies x = y$

We have that $\family {S_i}_{i \mathop \in I}$ is a non-empty family of non-empty sets
Hence, by the axiom of choice (formulation $2$), $S$ is non-empty.
Let $z \in S$.
By the definition of Cartesian product $S$:

$\forall i \in I: \map z i \in S_i$.

Let $x_k \in S_k$ for some $k \in I \setminus \set j$.
Let $z' \in S$ be defined by:

$\map {z'} i = \begin{cases}
\map z i & : i \in I \setminus \set k \\
x_k & : i = k 
\end{cases}$
Then:














\(\ds \map {\pr_j} {z'}\)

\(=\)







\(\ds \map {z'} j\)





Definition of Projection














\(\ds \)

\(=\)







\(\ds \map z j\)





as $j \ne k$














\(\ds \)

\(=\)







\(\ds \map {\pr_j} z\)





Definition of Projection



Thus:

$z' = z$
In particular:

$x_k = \map {z'} k = \map z k = z_k$
It follows that:

$S_k = \set {z_k}$
Since $k$ was arbitrary:

$\forall k \in I \setminus \set j: S_k = \set {z_k}$
The result follows.
$\blacksquare$





