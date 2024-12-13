# 

Source: https://proofwiki.org/wiki/Odd_Vertices_Determines_Edge-Disjoint_Trails



Theorem
Let $G$ be a loop-multigraph with $2 n$ odd vertices, $n > 0$.

Then $G$ has $n$ edge-disjoint trails such that every edge of $G$ is contained in one of these trails.
Each of these trails starts and ends on an odd vertex.


Proof
We prove this result by induction:
For all $n \in \N_{>0}$, let $\map P N$ be the proposition:

if $G$ has $2 n$ odd vertices, it consists entirely of $n$ edge-disjoint trails, each starting and ending on an odd vertex.

First note that from the corollary to the Handshake Lemma, no graph can have an odd number of odd vertices.


Basis for the Induction
$\map P 1$ is true, as this is the Characteristics of Traversable Graph.
This is our basis for the induction.

Note that, from the same result, the trail starts and ends on an odd vertex.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

If $G$ has $2 k$ odd vertices, it consists entirely of $k$ edge-disjoint trails, each starting and ending on an odd vertex.

Then we need to show:

If $G$ has $2 \paren {k + 1}$ odd vertices, it consists entirely of $k + 1$ edge-disjoint trails, each starting and ending on an odd vertex.


Induction Step
This is our induction step:
Let $G_{k + 1}$ be a graph with $2 \paren {k + 1}$ odd vertices.
Let $u, v$ be any pair of odd vertices in $G_{k + 1}$.
We construct the graph $G'_{k + 1}$ which consists of $G_{k + 1}$ with the edge $u v$ added.
It can be seen that as $u, v$ are now even vertices, $G'_{k + 1}$ has $2 k$ odd vertices.
By our induction hypothesis, we know that $G'_{k + 1}$ consists entirely of $k$ edge-disjoint trails.
So, let us construct these trails: let them be $T_1, T_2, \ldots, T_k$.
The edge $u v$ must be somewhere in one of the above trails.
As the $k$ trails are all edge-disjoint, it will be in exactly one.
Suppose it is in $T_j$.
As $T_j$ must start and end on an odd vertex, $u v$ must be neither at the start nor the end of such a trail.
Suppose $T_j = \tuple {t_1, t_2, \ldots, u, v, \ldots, t_r}$.
Then it follows that $t_1$ and $t_r$ are odd vertices.
Now we remove $u v$ from $G'_{k + 1}$ so as to return to $G_{k + 1}$.
We see that $G_{k + 1}$ consists entirely of the edge-disjoint trails:

$T_1, T_2, \ldots, T_{j - 1}$
$T_{j + 1}, T_{j + 2}, \ldots, T_k$
The two trails: $\tuple {t_1, t_2, \ldots, u}$ and $\tuple {v, \ldots, t_r}$.
That makes $k + 1$ edge-disjoint trails.
Also note that as $u$ and $v$ are odd vertices, both of $\tuple {t_1, t_2, \ldots, u}$ and $\tuple {v, \ldots, t_r}$ start and end on odd vertices.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Historical Note
The result Odd Vertices Determines Edge-Disjoint Trails was observed in $1847$ by Johann Benedict Listing in his Vorstudien zur Topologie.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $3$: Transportation Problems: $\S 3.1$: The Königsberg Bridge Problem: An Introduction to Eulerian Graphs: Problem $5$




