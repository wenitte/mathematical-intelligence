# 

Source: https://proofwiki.org/wiki/Knaster-Tarski_Lemma



Theorem
Let $\struct {L, \preceq}$ be a complete lattice.
Let $f: L \to L$ be an increasing mapping.

Then $f$ has a smallest fixed point and a greatest fixed point.


Power Set
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $f: \powerset S \to \powerset S$ be a $\subseteq$-increasing mapping.
That is, suppose that for all $T, U \in \powerset S$:

$T \subseteq U \implies \map f T \subseteq \map f U$

Then $f$ has a greatest fixed point and a least fixed point.


Corollary
Let $\struct {L, \preceq}$ be a complete lattice.
Let $f: L \to L$ be an increasing mapping.

Then $f$ has a fixed point


Proof
Let $P = \set {x \in L: x \preceq \map f x}$.
Let $p = \bigvee P$, the supremum of $P$.
Let $x \in P$.
Then by the definition of supremum:

$x \preceq p$
Since $f$ is increasing:

$\map f x \preceq \map f p$
By the definition of $P$:

$x \preceq \map f x$
Thus because $\preceq$ is an ordering, and therefore transitive:

$x \preceq \map f p$
As this holds for all $x \in P$, $\map f p$ is an upper bound of $P$.

By the definition of supremum:

$p \preceq \map f p$
As $f$ is increasing:

$\map f p \preceq \map f {\map f p}$
Thus by the definition of $P$:

$\map f p \in P$
Since $p$ is the supremum of $P$:

$\map f p \preceq p$
Since we already know that $p \preceq \map f p$:

$\map f p = p$
because $\preceq$ is an ordering and therefore antisymmetric.
Thus $p$ is a fixed p
oint of $f$.
We have that $\preceq$ is an ordering, and therefore reflexive.
Thus every fixed point of $f$ is in $P$.
So $p$ is the greatest fixed point of $f$.
Now note that $f$ is also increasing in the dual ordering.
Thus $f$ also has a greatest fixed point in the dual ordering.
That is, it has a least fixed point in the original ordering.
$\blacksquare$


Source of Name
This entry was named for Bronisław Knaster and Alfred Tarski.


Sources
1955: Alfred Tarski: A lattice-theoretical fixpoint theorem and its applications (Pacific J. Math. Vol. 5, no. 2: pp. 285 – 309)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.): Lemma $9.2.2$




