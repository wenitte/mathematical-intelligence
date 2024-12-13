# 

Source: https://proofwiki.org/wiki/Set_Closure_as_Intersection_of_Closed_Sets

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Let the closure of $H$ (in $T$) be defined as:

$H^- := H \cup H'$
where $H'$ is the derived set of $H$.

Let $\mathbb K$ be defined as:

$\mathbb K := \leftset {K \supseteq H: K}$ is closed in $\rightset T$
That is, let $\mathbb K$ be the set of all closed sets of $T$ which contain $H$.

Then the closure of $H$ (in $T$) can be defined as:

$\ds H^- := \bigcap \mathbb K$
that is, as the intersection of all the closed sets of $T$ which contain $H$.


Proof
What needs to be proved here is:

$\ds H^- = \bigcap \mathbb K$
where:

$H^- = H \cup H'$
$H'$ denotes the set of all limit points of $H$
$\ds \bigcap \mathbb K$ is the intersection of all closed sets of $T$ which contain $H$.

Let $K \in \mathbb K$.
From Topological Closure of Subset is Subset of Topological Closure, we have:

$H^- \subseteq K^-$
Thus from Closed Set Equals its Closure, we have:

$K^- = K$
Thus:

$\ds \forall K \in \bigcap \mathbb K: H^- \subseteq K$
since the choice of $K$ is arbitrary. 
So from Intersection is Largest Subset:

$\ds H^- \subseteq \bigcap \mathbb K$
$\Box$

Conversely, from Topological Closure is Closed, $H^-$ is closed.
From Set is Subset of its Topological Closure, $H \subseteq H^-$.
So $H^-$ is, by definition, a closed set of $T$ which contains $H$.
But we have by its definition that $\ds \bigcap \mathbb K$ is the intersection of all closed sets in $T$ that contain $H$.
So from Intersection is Subset it follows that:

$\ds \bigcap \mathbb K \subseteq H^-$
$\Box$

Finally, we have that:

$\ds H^- \subseteq \bigcap \mathbb K$
$\ds \bigcap \mathbb K \subseteq H^-$
So by definition of set equality:

$\ds H^- = \bigcap \mathbb K$
which is what we needed to prove.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.16$




