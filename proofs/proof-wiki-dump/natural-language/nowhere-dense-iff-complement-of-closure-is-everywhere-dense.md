# 

Source: https://proofwiki.org/wiki/Nowhere_Dense_iff_Complement_of_Closure_is_Everywhere_Dense



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.

Then $H$ is nowhere dense in $T$ if and only if $S \setminus H^-$ is everywhere dense in $T$, where $H^-$ denotes the closure of $H$.


Corollary
Let $H$ be a closed set of $T$.

Then $H$ is nowhere dense in $T$ if and only if $S \setminus H$ is everywhere dense in $T$.


Proof
Let:

$H^\circ$ denote the interior of any $H \subseteq S$
$H^-$ denote the closure of any $H \subseteq S$.

From the definition, $H$ is nowhere dense in $T$ if and only if $\paren {H^-}^\circ = \O$.
From the definition of interior, it follows that $\paren {H^-}^\circ = \O$ if and only if every open set of $T$ contains a point of $S \setminus \paren {H^-}$.
Thus $S \setminus \paren {H^-}$ is everywhere dense by definition.
$\blacksquare$


Warning
Note that in the result:

$H$ is nowhere dense in $T$ if and only if the relative complement of its closure is everywhere dense in $T$
must be applied to the closure of $H$.

Otherwise, consider the real numbers $\R$ and the rational numbers $\Q$.
We have that:

$\R \setminus \Q$ is the set of irrational numbers.
We have that Irrationals are Everywhere Dense in Reals.
But we also have from Rationals are Everywhere Dense in Reals:

$\map \cl \Q = \R$
and so:

$\paren {\map \cl \Q}^\circ = \R$
So it is not the case that $\R \setminus \Q$ is nowhere dense in $\R$.
However:

$\R \setminus \map \cl \Q = \O$
which is indeed nowhere dense in $\R$.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.28$




