# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Tree_Lemma

  This article was Featured Proof between 2nd May 2011 and 5th May 2012.




Theorem
Let $T$ be a rooted tree with an infinite number of nodes, each with a finite number of children.
Then $T$ has a branch of infinite length.


Proof 1
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


Proof 2
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


Proof 3
Suppose $T$ is a labeled tree with root $r$.
Let $L_0 = \set r, L_1, L_2, \ldots$ be the levels of $T$.
We construct our path by starting with $r$.
Next we partition all vertices in levels higher then $L_0$ (that is, all vertices in levels $L_i$ where $i > 0$) into as many finite parts as is the cardinality of $L_1$.
In other words if $L_1 = \set {v_1, \ldots, v_n}$ then we partition the vertices (there are infinitely many of them) in $n$ parts:

$P_1, P_2, \ldots, P_n$
This partitioning is done as follows:
Any vertex $w$ will be connected to $r$ via some $v_i$ owing to connectedness.
We put $w$ in $P_i$. 
Now since we have partitioned infinitely many vertices in finitely many parts, one of the parts will contain infinitely many vertices.
(This is also called the Infinite Pigeonhole Principle).
Let that part be $P_j$.
Choose $w_1 = v_j$ as the next vertex in our under-construction path.
Next we delete the vertex $r$ and consider the component containing $w_1$.
It is also an infinite tree with each level finite and having $w_1$ as its root.
By a similar piece of reasoning, we get a vertex $w_2$ which is adjacent to $w_1$ and has infinitely many vertices corresponding to it.
We continue building our path by choosing $w_2$ as a part of it.
By induction we can continue and get an infinite path $r w_1 w_2 \cdots$.
This proves the theorem.
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this note into a page in its own right.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
This result may not hold if there exists at least one node which has an infinite number of children.
For example, let $T$ be the rooted tree defined as follows:

$t_0$ is the root node.
For all $n \in \N: n > 0$: $t_n$ is a leaf node which is a child of $t_0$.
Then there is an infinite number of nodes of $T$.
However, each branch of $T$ is of length equal to $1$.


Also known as
This theorem is also referred to as König Tree Lemma, König's Tree Theorem and König Tree Theorem.


Also see
This is a special case of the trickier to prove König's Lemma, which is a result that applies to all connected infinite graphs whose vertices are all finite in degree.


Source of Name
This entry was named for Dénes Kőnig.


Linguistic Note
Note that the diacritics on the ö in the König of König's Tree Lemma and on the ő of Dénes Kőnig do not match.
Unfortunately, this is how it is.





