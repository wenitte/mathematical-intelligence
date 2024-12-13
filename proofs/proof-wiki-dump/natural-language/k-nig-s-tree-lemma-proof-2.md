# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Tree_Lemma/Proof_2

Theorem
Let $T$ be a rooted tree with an infinite number of nodes, each with a finite number of children.
Then $T$ has a branch of infinite length.


Proof
We will show that we can choose an infinite sequence of nodes $t_0, t_1, t_2, \ldots$ of $T$ such that:

$t_0$ is the root node
$t_{n + 1}$ is a child of $t_n$
Then the sequence $t_0, t_1, t_2, \ldots$ is such a branch of infinite length.

Let $I$ be the set of all nodes in $T$ that have infinitely many descendants.
Define a relation $\RR$ on $I$ by letting $x \mathrel \RR y$ if and only if $y$ is a child of $x$.
Since $T$ has infinitely many nodes, its root node is in $I$.
Let $t \in I$.
By the premise, $t$ has a finite number of children.
Aiming for a contradiction, suppose that all of these children had a finite number of descendants.
Then by Finite Union of Finite Sets is Finite, that would mean that $t$ had a finite number of descendants, contradicting the fact that $t$ is in $I$.
So $t$ has at least one child with infinitely many descendants.
That is, $\map \RR t$ is non-empty for each $t \in I$.
That is, $\RR$ is a left-total relation.
Thus by Dependent Choice for Finite Sets, there is an infinite sequence $\sequence {t_n}$ such that:

$t_0$ is the root of $T$
$\forall n \in \N: t_n \mathrel \RR t_{n + 1}$ (that is, $t_{n + 1}$ is a child of $t_n$).
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets, by way of Dependent Choice for Finite Sets.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





