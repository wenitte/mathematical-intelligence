# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Sets_is_Closed/Closure_Operator

Theorem
Let $S$ be a set.
Let $f: \powerset S \to \powerset S$ be a closure operator on $S$.
Let $\CC$ be the set of all subsets of $S$ that are closed with respect to $f$.
Let $\AA \subseteq \CC$.

Then $\bigcap \AA \in \CC$.


Proof
Let $Q = \bigcap \AA$.
By the definition of closure operator, $f$ is inflationary, order-preserving, and idempotent.
Let $A \in \AA$.
By Intersection is Largest Subset, $Q \subseteq A$.
Since $f$ is order-preserving, $\map f Q \subseteq \map f A$.
By the definition of closed set, $\map f A = A$
Thus $\map f Q \subseteq A$.
This holds for all $A \in \AA$.
Thus by Intersection is Largest Subset:

$\map f Q \subseteq \bigcap \AA$
Since $\bigcap \AA = Q$:

$\map f Q \subseteq Q$
Since $f$ is inflationary:

$Q \subseteq \map f Q$
Thus by definition of set equality:

$Q = \map f Q$
Therefore $Q$ is closed with respect to $f$.
$\blacksquare$





