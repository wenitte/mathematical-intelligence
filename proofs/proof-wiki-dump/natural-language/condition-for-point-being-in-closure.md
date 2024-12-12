# 

Source: https://proofwiki.org/wiki/Condition_for_Point_being_in_Closure



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
Let $H^-$ denote the closure of $H$ in $T$.

Let $x \in S$.
Then $x \in H^-$ if and only if every open neighborhood of $x$ contains a point in $H$.


Metric Space
Let $M = \struct {S, d}$ be a metric space.
Let $H \subseteq S$.
Let $\map \cl H$ denote the closure of $H$ in $M$.

Let $x \in S$.
Then $x \in \map \cl H$ if and only if:

$\forall \epsilon \in \R_{>0}: \map {B_\epsilon} x \cap H \ne \O$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball of $x$.


Topological Vector Space
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $A \subseteq X$. 
Let $A^-$ denote the closure of $A$ in $X$.
Let $x \in X$. 

Then $x \in A^-$ if and only if:

for each open neighborhood $V$ of ${\mathbf 0}_X$ we have $\paren {x + V} \cap A \ne \O$.


Proof 1
From the definition of closure, we have that $H^-$ is the union of $H$ and all the limit points of $H$ in $T$.
By definition, an open neighborhood of $x$ in $T$ is an open set of $T$ which contains $x$.


Necessary Condition
Let $x \in H^-$.
Then either:

$(1): \quad x \in H$, in which case every open neighborhood of $x$ in $T$ trivially contains a point in $H$ (that is, $x$ itself);
$(2): \quad x$ is a limit point of $H$ in $T$.

Suppose $(2)$ holds.
Then it follows directly from the definition of limit point that every open neighborhood of $x$ in $T$ contains a point in $H$ other than $x$.


Sufficient Condition
Suppose that every open neighborhood of $x$ in $T$ contains a point in $H$.

If $x \in H$, then $x$ is in the union of $H$ and all the limit points of $H$ in $T$.
Hence by definition of closure:

$x \in H^-$

If $x \notin H$ then $x$ must be a limit point of $H$ by definition.
So again, $x$ is in the union of $H$ and all the limit points of $H$ in $T$.
Hence by definition of closure:

$x \in H^-$
$\blacksquare$


Proof 2
The condition to be proved is equivalent to showing that $x \in H^-$ if and only if, for every open neighborhood $U$ of $x$, the intersection $H \cap U$ is non-empty.

For $U \in \tau$, let $U^{\complement}$ denote the relative complement of $U$ in $S$.
By definition, $U^{\complement}$ is closed in $T$

We have that:














\(\ds H \cap U\)

\(=\)







\(\ds \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds H\)

\(\subseteq\)







\(\ds U^{\complement}\)





Empty Intersection iff Subset of Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds H^-\)

\(\subseteq\)







\(\ds U^{\complement}\)





Set Closure is Smallest Closed Set in Topological Space








\(\ds \leadstoandfrom \ \ \)





\(\ds U\)

\(\subseteq\)







\(\ds \paren {H^-}^{\complement}\)





Relative Complement inverts Subsets and Relative Complement of Relative Complement








\(\ds \leadstoandfrom \ \ \)





\(\ds H^- \cap U\)

\(=\)







\(\ds \O\)









Thus:

$x \in U \iff x \notin H^-$
The result follows from the Rule of Transposition.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.12$




