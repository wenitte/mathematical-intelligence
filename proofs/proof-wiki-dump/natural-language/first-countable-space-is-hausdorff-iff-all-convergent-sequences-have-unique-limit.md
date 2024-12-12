# 

Source: https://proofwiki.org/wiki/First-Countable_Space_is_Hausdorff_iff_All_Convergent_Sequences_have_Unique_Limit



Theorem
Let $T = \struct {S, \tau}$ be a first-countable topological space.
Then $T$ is Hausdorff if and only if all convergent sequences on $T$ have a unique limit.


Proof
Sufficient Condition
This is shown in Convergent Sequence in Hausdorff Space has Unique Limit.
Note that it does not require first-countability.
$\Box$


Necessary Condition
We prove the contrapositive.
Suppose $T$ is not Hausdorff.
Then by definition:

$\exists x, y \in S, x \ne y: \forall U, V \in \tau: x \in U, y \in V: U \cap V \ne \O$

By first-countability, $x$ and $y$ has countable local basis.
Let $\set {X_n: n \in \N}$ and $\set {Y_n: n \in \N}$ be countable local bases for $x$ and $y$ respectively.
Let $U_n = \ds \bigcap_{k \mathop = 1}^n X_k$ and $V_n = \ds \bigcap_{k \mathop = 1}^n Y_k$.
We have for all $n \in \N$:

$x \in U_n, y \in V_n$
$U_m \subseteq U_n, V_m \subseteq V_n$ for all $m \ge n$

We have that:

$\forall n \in \N: U_n \cap V_n \ne \O$
hence we can pick any $z_n \in U_n \cap V_n$.
We show that $\sequence {z_n}$ converges to both $x$ and $y$.

Let $A$ be an open set such that $x \in A$.
By definition of a local basis:

$\exists N \in \N: X_N \subseteq A$
We also have:

$\forall n \ge N: U_n \subseteq U_N \subseteq X_N \subseteq A$
Therefore for any $n \ge N$:

$z_n \in U_n \cap V_n \subseteq U_n \subseteq A$
By definition of convergence, $\sequence {z_n}$ converges to $x$.

Similarly $\sequence {z_n}$ converges to $y$.
Hence $\sequence {z_n}$ does not have unique limit.
$\blacksquare$





