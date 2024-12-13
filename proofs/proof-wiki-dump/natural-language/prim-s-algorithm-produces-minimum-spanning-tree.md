# 

Source: https://proofwiki.org/wiki/Prim%27s_Algorithm_produces_Minimum_Spanning_Tree

Theorem
Prim's Algorithm always produces a minimum spanning tree.


Proof
Suppose that Prim's Algorithm produces a tree $T$.
Let there exist another spanning tree $S$ with a smaller total weight.
Let $e$ be an edge of smallest weight which lies in $T$ but not $S$.
If we add $e$ to $S$, we obtain a cycle, from Equivalent Definitions for Finite Tree.
This cycle contains an edge $e'$ which is in $S$ but not $T$, otherwise $T$ would not be a tree.
So, we replace $e'$ in $S$ with $e$ from $T$, and obtain a new spanning tree $S'$.


This article contains statements that are justified by handwavery.In particular: This is just hiding the core of the argument in a sneaky sentence. E.g. in Prim's Algo, it may be that neither of the endpoints of $e'$ are in $T$ yet, so that it may not be added yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From the method of construction of $T$, it follows that the weight of $e$ can not exceed that of $e'$.
So the total weight of $S'$ does not exceed the total weight of $T$.
Also, $S'$ has one more edge in common with $T$ than $S$ has.

We repeat the above procedure, and repeatedly change edges of $S$ for edges of $T$, and each time the weight of the intermediate graph does not exceed that of $T$.
Thus the weight of $T$ does not exceed that of $S$, contradicting the definition of $S$.
Hence $T$ must be a minimum spanning tree.
$\blacksquare$





