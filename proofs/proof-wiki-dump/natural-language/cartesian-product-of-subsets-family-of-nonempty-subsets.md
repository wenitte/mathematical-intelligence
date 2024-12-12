# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Subsets/Family_of_Nonempty_Subsets

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.

Let $\family {T_i}_{i \mathop \in I}$ be another family of sets.
Let $T = \ds \prod_{i \mathop \in I} T_i$ be the Cartesian product of $\family {T_i}_{i \mathop \in I}$.

Let $T_i \ne \O$ for all $i \in I$.

Then:

$T \subseteq S \iff \forall i \in I: T_i \subseteq S_i$.


Proof
From Cartesian Product of Family of Subsets:

$\paren {\forall i \in I: T_i \subseteq S_i} \implies T \subseteq S$
So it remains to show that:

$T \subseteq S \implies \forall i \in I : T_i \subseteq S_i$.

Let $T \subseteq S$.
Let $x_j \in T_j$ for some $j \in I$.
Let $\map x j = x_j$
Suppose $k \in I: k \ne j$.
As $T_k \ne \O$ it is possible to use the axiom of choice to choose $\map x k \in T_k$.
Then:

$x \in T \subseteq S$
By definition of the Cartesian product $S$:

$\forall i \in I: \map x i \in S_i$
In particular:

$\map x j = x_j \in S_j$
As $x_j$ is an arbitrary element of $T_j$:

$T_j \subseteq S_j$
As $j$ is an arbitrary element of $I$:

$\forall i \in I: T_i \subseteq S_i$
The result follows. 
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





