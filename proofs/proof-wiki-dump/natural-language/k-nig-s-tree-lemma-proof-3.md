# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Tree_Lemma/Proof_3


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma
Let $T$ be a rooted tree with an infinite number of nodes, each with a finite number of children.
Then $T$ has a branch of infinite length.


Proof
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


Source of Name
This entry was named for Dénes Kőnig.





