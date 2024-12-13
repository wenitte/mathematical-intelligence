# 

Source: https://proofwiki.org/wiki/Intersection_of_Set_whose_Every_Element_is_Closed_under_Chain_Unions_is_also_Closed_under_Chain_Unions



Theorem
Let $S$ be a set of sets.
Let $S$ be such that:

$\forall x \in S: x$ is closed under chain unions.

Then the intersection $\ds \bigcap S$ of $S$ is also closed under chain unions.


Proof
First we note that by definition of intersection of $S$:

$\ds \bigcap S := \set {y: \forall x \in S: y \in x}$

Recall the definition of closed under chain unions:
$S$ is closed under chain unions if and only if:

for every chain $C$ of elements of $S$, $\ds \bigcup C$ is also in $S$.

Let $C_\cap$ be a chain in $\ds \bigcap S$.
Then by Definition of Intersection of Set of Sets:

$\forall x \in S: C_\cap$ is a chain in $x$.
Hence as $x$ is closed under chain unions for all $x \in S$:

$\forall x \in S: \ds \bigcup C_\cap$ is in $x$
Hence by Definition of Intersection of Set of Sets:

$\ds \bigcup C_\cap$ is in $S$
Hence the result by definition of closed under chain unions.
$\blacksquare$


Also see
Intersection of Set whose Every Element is Closed under Mapping is also Closed under Mapping


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 2$ Superinduction and double superinduction: Lemma $2.7$




