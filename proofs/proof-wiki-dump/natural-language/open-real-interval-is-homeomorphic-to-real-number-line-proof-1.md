# 

Source: https://proofwiki.org/wiki/Open_Real_Interval_is_Homeomorphic_to_Real_Number_Line/Proof_1

Theorem
Let $\R$ be the real number line with the Euclidean topology.
Let $I := \openint a b$ be a non-empty open real interval.

Then $I$ and $\R$ are homeomorphic.


Proof
By definition of open real interval, for $I$ to be non-empty it must be the case that $a < b$.
In particular it is noted that $a \ne b$.
Thus $a - b \ne 0$.
Let $I' := \openint {-1} 1$ denote the open real interval from $-1$ to $1$.
From Open Real Intervals are Homeomorphic, $I$ and $I'$ are homeomorphic.
Consider the real function $f: I' \to \R$ defined as:

$\forall x \in I': \map f x = \dfrac x {1 - \size x}$
Then after some algebra:

$\forall x \in \R: \map {f^{-1} } x = \dfrac x {1 + \size x}$
Both of these are defined, as $\size x < 1$.
By the Combination Theorem for Continuous Real Functions, both $f$ and $f^{-1}$ are continuous on the open real intervals on which they are defined.
Thus by definition $I'$ and $\R$ are homeomorphic.
From Homeomorphism Relation is Equivalence it follows that $I$ and $\R$ are homeomorphic.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms: Examples $3.6.2 \ \text{(b)}$




