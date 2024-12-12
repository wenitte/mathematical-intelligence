# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Continuous_Mapping_between_Topological_Spaces/Point



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: S_1 \to S_2$ be a mapping from $S_1$ to $S_2$.
Let $x \in S_1$.
The following definitions of the concept of continuity at a point of a topological space are equivalent:

Definition using Open Sets
The mapping $f$ is continuous at (the point) $x$ (with respect to the topologies $\tau_1$ and $\tau_2$) if and only if:

For every open set $U_2$ of $T_2$ such that $\map f x \in U_2$, there exists an open set $U_1$ of $T_1$ such that $x \in U_1$ and $f \sqbrk {U_1} \subseteq U_2$.
Definition using Neighborhoods
The mapping $f$ is continuous at (the point) $x$ (with respect to the topologies $\tau_1$ and $\tau_2$) if and only if:

For every neighborhood $N$ of $\map f x$ in $T_2$, there exists a neighborhood $M$ of $x$ in $T_1$ such that $f \sqbrk M \subseteq N$.
Definition using Neighborhood Inverse
The mapping $f$ is continuous at (the point) $x$ (with respect to the topologies $\tau_1$ and $\tau_2$) if and only if:

For every neighborhood $N$ of $\map f x$ in $T_2$, $f^{-1} \sqbrk N$ is a neighborhood of $x$.
Definition using Filters
The mapping $f$ is continuous at (the point) $x$ if and only if:

for any filter $\FF$ on $T_1$ that converges to $x$, the corresponding image filter $f \sqbrk \FF$ converges to $\map f x$.


Proof
Definition using Open Sets implies Definition using Neighborhoods
Let $f$ be a continuous mapping defined using Open Sets.
Then by definition:

For every open set $U_2$ of $T_2$ such that $\map f x \in U_2$, there exists an open set $U_1$ of $T_1$ such that $x \in U_1$ and $f \sqbrk {U_1} \subseteq U_2$.
Let $N$ be a neighborhood of $\map f x$ in $T_2$.
Then by definition of neighborhood, there exists an open set $U_2$ of $T_2$ such that $\map f x \in U_2$ and $U_2 \subseteq N$.
As $U_2$ is an open set $U_2$ of $T_2$, $f^{-1} \sqbrk {U_2}$ is an open set of $T_1$.
As $\map f x \in U_2$, it follows by definition of preimage of $U_2$ that $x \in f^{-1} \sqbrk {U_2}$.
Thus $f^{-1} \sqbrk {U_2}$ is a neighborhood of $x$ in $T_1$, which we relabel $M$.
From Image of Preimage under Mapping:

$f \sqbrk M \subseteq U_2$
But we have that $U_2 \subseteq N$.
Thus we have demonstrated the existence of a neighborhood $M$ of $x$ such that $f \sqbrk M \subseteq N$
That is, $f$ is a continuous mapping defined using Neighborhoods.
$\Box$


Definition using Neighborhoods implies Definition using Open Sets
Let $f$ be a continuous mapping defined using Neighborhoods.
Then by definition:

For every neighborhood $N$ of $\map f x$ in $T_2$, there exists a neighborhood $M$ of $x$ in $T_1$ such that $f \sqbrk M \subseteq N$.

Let $U_2$ be an open set of $T_2$ such that $\map f x \in U_2$.
By definition, $U_2$ is a neighborhood of $\map f x$.
Hence there exists a neighborhood $M$ of $x$ in $T_1$ such that $f \sqbrk M \subseteq U_2$.
By definition, there exists an open set $U_1 \subseteq M$ such that $x \in U_1$.
That is, there exists an open set $U_1$ of $T_1$ such that $x \in U_1$ and $U_1 \subseteq M$.
By Image of Subset is Subset of Image:

$f \sqbrk {U_1} \subseteq f \sqbrk M$
and so:

$f \sqbrk {U_1} \subseteq U_2$
That is, $f$ is a continuous mapping defined using Open Sets.
$\Box$


Definition using Neighborhoods implies Definition using Neighborhood Inverse
Let $f$ be a continuous mapping defined using Neighborhoods.
Then by definition:

For every neighborhood $N$ of $\map f x$ in $T_2$, there exists a neighborhood $M$ of $x$ in $T_1$ such that $f \sqbrk M \subseteq N$.

Let $N$ be a neighborhood of $x$.
By assumption there exists a neighborhood $M$ of $x$ in $T_1$:

$f \sqbrk M \subseteq N$
From Corollary to Subset of Preimage under Relation is Preimage of Subset:

$M \subseteq f^{-1} \sqbrk N$
From Superset of Neighborhood in Topological Space is Neighborhood:

$f^{-1} \sqbrk N$ is a neighborhood of $x$.

Therefore $f$ is a continuous mapping defined using Neighborhood Inverse.
$\Box$


Definition using Neighborhood Inverse implies Definition using Neighborhoods
Let $f$ be a continuous mapping defined using Neighborhood Inverse.
Then by definition:

For every neighborhood $N$ of $\map f x$ in $T_2$, $f^{-1} \sqbrk N$ is a neighborhood of $x$.

Let $N$ be a neighborhood of $x$.
By assumption $f^{-1} \sqbrk N$ is a neighborhood of $x$.
Let $M = f^{-1} \sqbrk N$
We have:














\(\ds f \sqbrk M\)

\(=\)







\(\ds f \sqbrk {f^{-1} \sqbrk N}\)





Subset Maps to Subset














\(\ds \)

\(\subseteq\)







\(\ds N\)





Image of Preimage under Mapping




Therefore $f$ is a continuous mapping defined using Neighborhoods.
$\Box$


Definition using Neighborhoods implies Definition using Filters
Let $f$ be a continuous mapping defined using Neighborhoods.
Then by definition:

For every neighborhood $N$ of $\map f x$ in $T_2$, there exists a neighborhood $M$ of $x$ in $T_1$ such that $f \sqbrk M \subseteq N$.

Let $\FF$ be a filter on $T_1$ that converges to $x$.
Let $N \subseteq S_2$ be a neighborhood of $\map f x$ in $T_2$.
Then $f^{-1} \sqbrk N$ is a neighborhood of $x$ in $T_1$.
Because $\FF$ converges to $x$, this implies that $f^{-1} \sqbrk N \in \FF$.
By the definition of $f \sqbrk \FF$ it follows that $N \in f \sqbrk \FF$.
Thus $f \sqbrk \FF$ converges to $\map f x$.
That is, $f$ is a continuous mapping defined using Filters.
$\Box$


Definition using Filters implies Definition using Neighborhoods
Let $f$ be a continuous mapping defined using Filters.
That is:

for any filter $\FF$ on $T_1$ that converges to $x$, the corresponding image filter $f \sqbrk \FF$ converges to $\map f x$.

Let $\NN_x$ be the neighborhood filter of $x$:

$\NN_x := \leftset {M \subseteq S_1: M}$ is a neighborhood of $\rightset x$
From Neighborhood Filter of Point is Filter, we have that $\NN_x$ is a filter on $S_1$.

Let $\FF := \NN_x$.
By the definition of convergent filter, $\FF$ converges to $x$.
By assumption this implies that $f \sqbrk \FF$ converges to $\map f x$.
Now let $N \subseteq S_2$ be a neighborhood of $\map f x$.
Then:

$N \in f \sqbrk \FF$
By definition of image of subset under mapping:

$f^{-1} \sqbrk N \in \FF = \NN_x$
Thus $f^{-1} \sqbrk N$ is a neighborhood of $x$.
Therefore $f$ is a continuous mapping defined using Neighborhoods.
$\blacksquare$





