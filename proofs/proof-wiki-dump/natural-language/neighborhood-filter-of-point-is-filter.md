# 

Source: https://proofwiki.org/wiki/Neighborhood_Filter_of_Point_is_Filter



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$ be a point of $T$.
Let $\NN_x$ denote the neighborhood filter of $x$ in $T$.

Then $\NN_x$ is a filter on $S$.


Proof
By definition, $\NN_x$ is the set of all neighborhoods of $x$ in $T$.

It is to be demonstrated that all the conditions are satisfied for $\NN_x$ to be a filter.


Proof of $(\text F 1)$
From Space is Neighborhood of all its Points, $S$ is a neighborhood of $x$.
Hence:

$S \in \NN_x$
Hence $(\text F 1)$ is fulfilled by $\NN_x$.
$\Box$


Proof of $(\text F 2)$
Let $N$ be an element of $\NN_x$
By definition, $x \in N$.
That is:

$N \ne \O$
and it follows that:

$\O \notin \NN_x$
Hence $(\text F 2)$ is fulfilled by $\NN_x$.
$\Box$


Proof of $(\text F 3)$
Let $N_1, N_2 \in \NN_x$.
From Intersection of Neighborhoods in Topological Space is Neighborhood:

$N_1 \cap N_2 \in \NN_x$

Hence $(\text F 3)$ is fulfilled by $\NN_x$.
$\Box$


Proof of $(\text F 4)$
Let $N \in \NN_x$.
Let $M \subseteq S$ such that $N \subseteq M$.
From Superset of Neighborhood in Topological Space is Neighborhood:

$M \in \NN_x$
Hence $(\text F 4)$ is fulfilled by $\NN_x$.
$\Box$

All criteria are fulfilled, and the result follows.
$\blacksquare$





