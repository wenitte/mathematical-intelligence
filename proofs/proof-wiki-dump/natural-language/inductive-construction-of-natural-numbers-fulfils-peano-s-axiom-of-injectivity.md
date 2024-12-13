# 

Source: https://proofwiki.org/wiki/Inductive_Construction_of_Natural_Numbers_fulfils_Peano%27s_Axiom_of_Injectivity

Theorem
Let $P$ denote the set of natural numbers by definition as an inductive set.

Then $P$ fulfils:

Peano's Axiom $\text P 3$: $s$ is injective
where $s$ denotes the successor mapping.


Proof
Let $m$ and $n$ be natural numbers such that $n^+ = m^+$.
By construction:

$n \in n^+$
and:

$m \in m^+$
Thus as $n^+ = m^+$ we have:

$n \in m^+$
and:

$m \in n^+$
This gives us:

$n \in m \lor n = m$
and:

$m \in n \lor m = n$
Aiming for a contradiction, suppose that $n \ne m$.
Then from $n \in m \lor n = m$ we have:

$n \in m$
and from $m \in n \lor m = n$ we have:

$m \in n$
In summary, if $n \ne m$ we have 

$n \in m$ and $m \in n$
But from Natural Numbers cannot be Elements of Each Other, this is not possible.
Hence by Proof by Contradiction:

$n^+ = m^+ \implies n = m$
and the result follows by definition of injection.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 3$ Derivation of the Peano postulates and other results




