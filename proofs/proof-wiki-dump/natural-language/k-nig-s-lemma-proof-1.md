# 

Source: https://proofwiki.org/wiki/K%C3%B6nig%27s_Lemma/Proof_1



Lemma
Let $G$ be an infinite graph which is connected and is locally finite.

Then every vertex lies on a path of infinite length.


Proof
Let $G$ be an infinite graph which is connected and is locally finite.
From Vertices in Locally Finite Graph, $G$ has an infinite number of vertices $v_1, v_2, \ldots, v_k, \ldots$, each of finite degree.

Let $\VV_k$ be the set of all vertices adjacent to $v_k$.

As $G$ is a connected graph, between $v_k$ and every other vertex of $G$ there exists at least one open path from $v_k$ to every other vertex of $G$.

Take any vertex of $G$ and call it $v_1$.
Let $\PP_1$ be the set of all paths from $v_1$.
Each element of $\PP_1$ must start with an edge joining $v_1$ to some element of $\VV_1$.


There is believed to be a mistake here, possibly a typo.In particular: This entire paragraph is bogus. If this argument worked, then the theorem would be all but proven by the end of it. My view is that this proof probably cannot be salvaged, and it should be deleted. Proof 2 can probably be fixed up (not sure), and I'm working on a Proof 3.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
There must be some $v_r \in \VV_1$ such that there is an infinite path from $v_r$ in $G$ which does not pass through $v_1$. Otherwise, every path from $v_1$ would be finite, and since there is a path from $v_1$ to each other vertex of the graph, all vertices are contained within one of these finite paths. There are a finite number of paths from $v_1$, so all vertices of $G$ are contained within a finite set of finite sets, contradicting the assumption that $G$ is infinite.


Dkm suggests: The validity of the material on this page is questionable.In particular: The statement: "There are a finite number of paths from $v_1$" has been described as "not generally true in its context"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the axiom of dependent choice, we may pick one of the vertices of $V_1$ such that there exists an infinite path through it that does not include $v_1$, and call this $v_2$.
Each such infinite path must start with one of the elements of $\VV_2$.
Repeating the above argument shows that there is some $v_s \in \VV_2$ such that there is an infinite path from $v_s$ in $G$ which does not pass through $v_2$.

Thus we can construct by induction an infinite path.
The induction hypothesis states that there are infinitely many vertices which can be reached by a path from a particular vertex $v_i$ that does not go through one of a finite set of vertices.
The induction argument is that one of the vertices adjacent to $v_i$ satisfies the induction hypothesis, even when $v_i$ is added to the finite set.
The result of this induction argument is that for all $n$ we can choose a vertex $v_n$ as per the construction.

The set of vertices chosen in the construction is then a path, because each one was chosen to be adjacent to the previous one, and the construction guarantees that the same vertex is never chosen twice.
$\blacksquare$


Axiom:Axiom of Countable Choice for Finite Sets
This theorem depends on Axiom:Axiom of Countable Choice for Finite Sets.
Although not as strong as the Axiom of Choice, Axiom:Axiom of Countable Choice for Finite Sets is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Source of Name
This entry was named for Dénes Kőnig.





