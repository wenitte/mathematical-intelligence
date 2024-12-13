# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Lemma/Proof_2



Lemma
Let $G$ be an infinite graph which is connected and is locally finite.

Then every vertex lies on a path of infinite length.


Proof
Let $G$ be an infinite graph which is both connected and locally finite.
From Vertices in Locally Finite Graph, $G$ has an infinite number of vertices each of finite degree.
Let $v$ be a vertex of $G$.
Let $T$ be the set of all finite open paths that start at $v$.


There is believed to be a mistake here, possibly a typo.In particular: This defines an ordering, but we don't want an ordering—we want an edge set. This is easily fixed by limiting the relation to pairs of paths that differ only by one arc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Define the ordering $\preccurlyeq$ on $T$ as follows:
Let $\tuple {v_0, e_0, v_1, e_1, \ldots, v_m} \preccurlyeq \tuple {v'_0, e'_0, v'_1, e'_1, \ldots, v'_n}$ if and only if:

$m \le n$
and:

$\forall i < m: \tuple {v'_i, e'_i, v'_{i + 1} } = \tuple {v_i, e_i, v_{i + 1} }$

Observe that $T$ is a tree.


This article, or a section of it, needs explaining.In particular: Why is $T$ a tree? // $T$ will be a tree because there is only one way to build any given path up from the $0$-length path.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
For each vertex $x$, let $\map E x$ be the set of all edges incident on $x$.
$\map E x$ is finite because $G$ is locally finite by definition.
For every $\tuple {v_0, e_0, v_1, e_1, \ldots, v_{n + 1} } \in T$ we have that $e_n \in \map E {v_n}$.
It follows that $T$ is finitely branching. 
By definition of connectedness, to every vertex $x$ there is a walk $w$ from $v$.


This page has been identified as a candidate for refactoring of basic complexity.In particular: A walk between any two vertices can be trimmed down to form a path.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Suppose $w = \tuple {v_0, e_0, v_1, e_1, \ldots, v_n}$ contains a cycle $\tuple {v_i, e_i, v_{i + 1}, \ldots, v_j}$ where $v_i = v_j$.
Then we can delete $\tuple {e_i, v_{i + 1}, \ldots, v_j}$ from $w$ to get a shorter walk from $v$ to $x$.
Repeatedly deleting cycles until none remain, we obtain an open path from $v$ to $x$.


This article, or a section of it, needs explaining.In particular: What if there were an infinite number of cycles? Can we be justified in performing the above step an infinite number of times? Even worse, what if this number were uncountable?? // A walk from one vertex to another must be finite, so it can have only finitely many cycles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

There exist an infinite number of points in $G$, as, by definition of locally finite, $G$ is itself infinite.
We have just demonstrated that for each $x \in G$ there exists an open path from $v$ to $x$.
Hence $T$, the set of finite paths that start at $v$, is infinite.
By Kőnig's tree lemma, $T$ has an infinite branch $B$.
The union $\bigcup B$ is then an infinite path in $G$ that contains $v$.


This article, or a section of it, needs explaining.In particular: That last statement: what does the "union of a branch" mean? // Each vertex of $B$ is an open path in $G$. Each vertex of $B$ extends the path of the previous vertex, so you can take a sort of union along it. Yes, that will certainly have to be described in detail.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Source of Name
This entry was named for Dénes Kőnig.





