# 

Source: https://proofwiki.org/wiki/Point_in_Finite_Hausdorff_Space_is_Isolated

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $X \subseteq S$ such that $X$ is finite.
Let $x \in X$.

Then $x$ is isolated in $X$.


Proof 1
As $X$ is finite, its elements can be placed in one-to-one correspondence with the elements of $\set {1, 2, \ldots, n}$ for some $n \in \N$.
So let $X = \set {x_1, x_2, \ldots, x_n}$.
From the definition of Hausdorff space:

$\forall x_i, x_j \in X: x_i \ne x_j: \exists U, V \in \tau: x_i \in U, x_j \in V: U \cap V = \O$

Let $x_k \in X$.
Then by definition:

$\forall x_i \in X, x_i \ne x_k: \exists U_i, V \in \tau: x_k \in U_i, x_i \in V: U_i \cap V = \O$
Note that $U_i$ may be different for each $X_i$.

That is:

$\forall x_i \in X: \exists U_i \in \tau: x_k \in U_i, x_i \notin U_i$

Now consider:

$\ds U = \bigcap_{i \mathop \ne k} U_i$
We have by definition of a topology that $U \in \tau$, as the intersection $U$ is of a finite number of sets $U_i$.

We have that:

$\forall i: x_k \in U_i$
$\forall i: x_i \notin U_i$
So:

$U \cap X = \set {x_k}$
and so $U$ is an open set of $T$ which contains no points of $X$ other than $x_k$.
So by definition, $x_k$ is an isolated point of $X$.

Hence the result.
$\blacksquare$


Proof 2
Let $T = \struct {S, \tau}$ be a $T_2$ (Hausdorff) space.
Let $X \subseteq T$ be finite.
From Separation Properties Preserved in Subspace, it follows that $\struct {X, \tau_X}$ is also a $T_2$ (Hausdorff) space.
From $T_2$ Space is $T_1$ Space it follows that $\struct {X, \tau_X}$ is a $T_1$ (Fréchet) space.
From Finite $T_1$ Space is Discrete, it follows that $\struct {X, \tau_X}$ is a discrete space.
The result follows from Topological Space is Discrete iff All Points are Isolated.
$\blacksquare$





