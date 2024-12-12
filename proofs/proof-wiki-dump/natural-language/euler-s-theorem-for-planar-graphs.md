# 

Source: https://proofwiki.org/wiki/Euler%27s_Theorem_for_Planar_Graphs

This proof is about Euler's Theorem in the context of Graph Theory. For other uses, see Euler's Theorem.



Theorem
Let $G = \struct {V, E}$ be a connected planar graph with $V$ vertices and $E$ edges.
Let $F$ be the number of faces of $G$.

Then:

$V - E + F = 2$


Proof
The proof proceeds by complete induction.
Let $G$ be a planar graph with $V$ vertices and $E$ edges.

For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

For all planar graphs $G = \struct {V, E}$ such that $V + E = n$, the equation $V - E + F = 2$ holds.


Basis for the Induction
Let $V + E = 1$.
This is the case of the edgeless graph of order $1$ which consists of a single vertex.
It has exactly one face, which is the entire plane.















\(\ds V\)

\(=\)







\(\ds 1\)




















\(\ds E\)

\(=\)







\(\ds 0\)




















\(\ds F\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds V - E + F\)

\(=\)







\(\ds 2\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P j$ is true, for all $j$ such that $1 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

For all planar graphs $G = \struct {V, E}$ such that $V + E = k$, the equation $V - E + F = 2$ holds.

from which it is to be shown that:

For all planar graphs $G = \struct {V, E}$ such that $V + E = {k + 1}$, the equation $V - E + F = 2$ holds.


Induction Step
This is the induction step:
Let $G$ be a planar graph with $V$ vertices and $E$ edges such that $V + E = k + 1$.
Let $V - E + F = n$

There are a number of cases to consider:


$(1)$ -- Existence of vertex $v$ of degree $1$
Suppose $G$ has a vertex $v$ of degree $1$.
Then we can remove $v$ and its incident edge.
Let $G' = \struct {V', E'}$ be the (necessarily planar) graph which results from doing this, where $V'$ and $E'$ are the vertices and edges of $G'$.
The number of faces of $G'$ is the same as the number of faces of $G$, as the removed edges does not separate the two faces, but instead juts out into the one face.

So:

$V' = V - 1$ (as we have removed $1$ vertex)
$E' = E - 1$ (as we have removed $1$ edges).

Thus we have:














\(\ds V - E + F\)

\(=\)







\(\ds \paren {V' + 1} - \paren {E' + 1} + F\)




















\(\ds \)

\(=\)







\(\ds V' + 1 - E' - 1 + F\)




















\(\ds \)

\(=\)







\(\ds V' - E' + F\)









But:

$V' + E' = V + E - 2 = k - 1$
and so by the induction hypothesis:

$V' - E' + F = 2$
It follows that:

$V - E + F = 2$
$\Box$


$(2)$ -- Existence of a loop
Suppose $G$ has a loop $e$.
Then we can remove $e$.
Let $G' = \struct {V', E'}$ be the (necessarily planar) graph which results from doing this, where $V'$ and $E'$ are the vertices and edges of $G'$.
Let $F'$ be the number of faces of $G'$.
Then $F'$ one less than the number of faces of $G$, as the removal of $e$ has caused the face enclosed by $e$ to be merged with the face on the other side of $e$.

So:

$V' = V$ (as we have not changed any vertices)
$E' = E - 1$ (as we have removed $1$ edge).
$F' = F - 1$ (as we have merged $2$ faces into $1$).

Thus we have:














\(\ds V - E + F\)

\(=\)







\(\ds V' - \paren {E' + 1} + \paren {F' + 1}\)




















\(\ds \)

\(=\)







\(\ds V' - E' - 1 + F + 1\)




















\(\ds \)

\(=\)







\(\ds V' - E' + F'\)









But:

$V' + E' = V + E - 1 = k$
and so by the induction hypothesis:

$V' - E' + F' = 2$
It follows that:

$V - E + F = 2$
$\Box$


$(3)$ -- Existence of vertex $v$ of degree $2$
Suppose $G$ has:

neither a vertex of degree $1$
or a loop
but does have a vertex $v$ of degree $2$ such that $v$ is not either end of a loop.
Then we can remove $v$ and replace its two incident edges with a single edge.
Let $G' = \struct {V', E'}$ be the (necessarily planar) graph which results from doing this, where $V'$ and $E'$ are the vertices and edges of $G'$.
The number of faces of $G'$ is the same as the number of faces of $G$ as the two edges that were replaced with a single edge separate the same two faces.

So:

$V' = V - 1$ (as we have removed $1$ vertex)
$E' = E - 1$ (as we have replaced $2$ edges with $1$ edge).

Thus we have:














\(\ds V - E + F\)

\(=\)







\(\ds \paren {V' + 1} - \paren {E' + 1} + F\)




















\(\ds \)

\(=\)







\(\ds V' + 1 - E' - 1 + F\)




















\(\ds \)

\(=\)







\(\ds V' - E' + F\)









But:

$V' + E' = V + E - 2 = k - 1$
and so by the induction hypothesis:

$V' - E' + F = 2$
It follows that:

$V - E + F = 2$
$\Box$


$(3)$ -- Existence of vertex $v$ of degree $m$ where $m > 2$
Suppose $G$ has:

no vertex of degree $1$
no loop
no vertex of degree $2$
Then all vertices of $G$ will be of degree $m$ where $m > 2$.
Let $u$ and $v$ be two adjacent vertices of $G$ which is not a bridge.
Let $e$ be the edge which is incident to both $u$ and $v$.
Let $G' = \struct {V', E'}$ be the (necessarily planar) graph which results from removing $e$, where $V'$ and $E'$ are the vertices and edges of $G'$.
Let $F'$ be the number of faces of $G'$.
Then $F'$ one less than the number of faces of $G$, as the removal of $e$ has caused the faces separated by $e$ to be merged with the face on the other side of $e$.
By construction, $E' = E - 1$.
Removing $e$ will not affect the number of vertices of $G$, so $V' = V$.
So:

$V' = V$ (as we have removed $1$ vertex)
$E' = E - 1$ (as we have removed $1$ edges).
$F' = F - 1$ (as we have merged $2$ faces into $1$).

Thus we have:














\(\ds V - E + F\)

\(=\)







\(\ds V' - \paren {E' + 1} + \paren {F' + 1}\)




















\(\ds \)

\(=\)







\(\ds V' - E' - 1 + F + 1\)




















\(\ds \)

\(=\)







\(\ds V' - E' + F'\)









But:

$V' + E' = V + E - 1 = k$
and so by the induction hypothesis:

$V' - E' + F' = 2$
It follows that:

$V - E + F = 2$
$\Box$

All cases have been covered.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: clumsy and handwaveyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euler characteristic
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euler's Theorem




