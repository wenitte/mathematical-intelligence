# 

Source: https://proofwiki.org/wiki/Intersection_of_Neighborhoods_in_Topological_Space_is_Neighborhood



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let $M, N$ be a neighborhoods of $x$ in $T$.

Then $M \cap N$ is a neighborhood of $x$ in $T$.

That is:

$\forall x \in S: \forall M, N \in \NN_x: M \cap N \in N_x$
where $\NN_x$ is the neighborhood filter of $x$.


Proof
By definition of neighborhood:

$\exists U_1 \in \tau: x \in U_1 \subseteq M$
where $U_1$ is an open set of $T$.

$\exists U_2 \in \tau: x \in U_2 \subseteq N$
where $U_2$ is an open set of $T$.
Thus by Set Intersection Preserves Subsets:

$U \subseteq M \cap N$
where $U = U_1 \cap U_2$
The result follows by definition of neighborhood of $a$.
$\blacksquare$


Also see
Intersection of Neighborhoods in Metric Space is Neighborhood


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces: Theorem $3.1: \ N 4$




