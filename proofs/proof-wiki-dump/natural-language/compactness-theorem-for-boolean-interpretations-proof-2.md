# 

Source: https://proofwiki.org/wiki/Compactness_Theorem_for_Boolean_Interpretations/Proof_2

Theorem
Let $\mathbf H$ be a countable set of WFFs of propositional logic.
Suppose $\mathbf H$ is finitely satisfiable for boolean interpretations.
That is, suppose that every finite subset $\mathbf H' \subseteq \mathbf H$ is satisfiable for boolean interpretations.

Then $\mathbf H$ has a model.


Proof
If $\mathbf H$ is finite, the result is trivial.
So let $\mathbf H = \set {\mathbf A_n: n \in \N}$ be an enumeration of $\mathbf H$.

Define $\mathbf H_m = \set {\mathbf A_n: n \le m}$.
Let $T_1$ be the propositional tableau consisting of only a root node with hypothesis set $\mathbf H_1$.
For each $m \in \N$, construct $T_{m + 1}$ from $T_m$ by applying the Tableau Extension Lemma to $\mathbf H_{m + 1}$.
This provides us with a sequence $\sequence {T_m}_{m \mathop \in \N}$ of finished propositional tableaus.
The $T_m$ form an exhausting sequence of sets for the infinite propositional tableau $\ds T = \bigcup_{m \mathop = 1}^\infty T_m$.

If $T$ has a finished branch $\Gamma$, then by Finished Branch Lemma: Corollary:

$\Phi \sqbrk \Gamma$ is satisfiable
and hence $\mathbf H$ is satisfiable (since $\mathbf H \subseteq \Phi \sqbrk \Gamma$).

Suppose $T$ has no finite finished branches.

Let $T'$ be the subtree of $T$ given by:

$t \in T'$ if and only if $t$ is on a finished branch $\Gamma_m$ of every $T_m$ such that $t \in T_m$

Suppose the root node $r_T$ of $T$ were not in $T'$.
Then for some $T_m$, $r_T$ would not be on a finished branch of $T_m$.
But since $T_m$ is finished, every branch of $T_m$ is finished or contradictory.
Hence every branch of $T_m$ is contradictory.
But then $T_m$ is a tableau confutation of $\mathbf H_m$.
By Tableau Confutation implies Unsatisfiable, this contradicts the assumption that $\mathbf H_m$ is satisfiable.
Therefore, $r_T$ is in $T'$.

Suppose $T'$ were finite.
Let $t$ be a leaf of $T'$, which exists by Finite Tree has Leaf Nodes.
Suppose $t$ were a leaf of $T$.
Then $\Gamma_t$, the branch of $T$ identified by Leaf of Rooted Tree is on One Branch, is finished.
For, as any $T_m$ is a subtree of $T$, $\Gamma_t$ is the only branch of $T_m$ such that $t \in \Gamma_t$.
The conclusion follows from the definition of $T'$.
But then $\Gamma_t$ would be a finite finished branch of $T$, a contradiction.
Therefore, $T'$ cannot be finite.

Hence, $T'$ is a finitely branching tree.
By König's Tree Lemma, $T'$ has an infinite branch $\Gamma$.
By definition of $T'$, the branch $\Gamma_m := \Gamma \cap T_m$ of $T_m$ is finished for each $m \in \N$.
If $\Gamma$ were contradictory, then $\mathbf A \in \Gamma$ and $\neg\mathbf A \in \Gamma$ for some WFF $\mathbf A$.
But then $\mathbf A, \neg \mathbf A \in \Gamma_m$ for some $m \in \N$, contradicting that $\Gamma_m$ is finished.
Also, if $\mathbf A$ occurs on $\Gamma$, then it occurs on some $\Gamma_m$.
Since $\Gamma_m$ is finished, it follows that $\mathbf A$ is used on $\Gamma_m$, and hence on $\Gamma$.
In conclusion, $\Gamma$ is finished.

As established above, it follows that $\mathbf H$ is satisfiable for boolean interpretations.
$\blacksquare$





