# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Tree_Lemma/Proof_1

  This article was Featured Proof between 2nd May 2011 and 5th May 2012.




Theorem
Let $T$ be a rooted tree with an infinite number of nodes, each with a finite number of children.
Then $T$ has a branch of infinite length.


Proof
We will show that we can choose an infinite sequence of nodes $t_0, t_1, t_2, \ldots$ of $T$ such that:

$t_0$ is the root node;
$t_{n + 1}$ is a child of $t_n$;
Each $t_n$ has infinitely many descendants.
Then the sequence $t_0, t_1, t_2, \ldots$ is such a branch of infinite length.

Take the root node $t_0$.
By definition, it has a finite number of children.
Suppose that all of these childen had a finite number of descendants.
Then that would mean that $t_0$ had a finite number of descendants, and that would mean $T$ was finite.
So $t_0$ has at least one child with infinitely many descendants.
Thus, we may pick $t_1$ as any one of those children.

Now, suppose node $t_k$ has infinitely many descendants. 
As $t_k$ has a finite number of children, by the same argument as above, $t_k$ has at least one child with infinitely many descendants.
Thus we may pick $t_{k+1}$ which has infinitely many descendants.

The assertion follows by the Axiom of Dependent Choice.
$\blacksquare$


Axiom of Dependent Choice
This proof depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness: Theorem $1.11.3$




