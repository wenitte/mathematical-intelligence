# 

Source: https://proofwiki.org/wiki/Center_of_Opposite_Group

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\struct {G, *}$ be the opposite group to $G$.

Let $\map Z {G, \circ}$ and $\map Z {G, *}$ be the centers of $\struct {G, \circ}$ and $\struct {G, *}$, respectively.
Then:

$\map Z {G, \circ} = \map Z {G, *}$


Proof
We have, for $g \in G$:














\(\ds g \in \map Z {G, \circ}\)

\(\leadstoandfrom\)







\(\ds \forall h \in G: g \circ h = h \circ g\)





Definition of Center of Group














\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall h \in G: h * g = g * h\)





Definition of Opposite Group














\(\ds \)

\(\leadstoandfrom\)







\(\ds g \in \map Z {G, *}\)





Definition of Center of Group




Hence the result, by definition of set equality.
$\blacksquare$





