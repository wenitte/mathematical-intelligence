# 

Source: https://proofwiki.org/wiki/Quotient_Structure_of_Monoid_is_Monoid

Theorem
Let $\RR$ be a congruence relation on a monoid $\struct {S, \circ}$ with an identity $e$.

Then the quotient structure $\struct {S / \RR, \circ_\RR}$ is a monoid.


Proof
From Quotient Structure of Semigroup is Semigroup $\struct {S / \RR, \circ_\RR}$ is a semigroup.
Let $\eqclass x {\RR} \in S / \RR$.
Consider $\eqclass e \RR$:














\(\ds \eqclass x \RR \circ_{S / \RR} \eqclass e \RR\)

\(=\)







\(\ds \eqclass {x \circ e} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass x \RR\)





Definition of Identity Element



Furthermore:














\(\ds \eqclass e \RR \circ_{S / \RR} \eqclass x \RR\)

\(=\)







\(\ds \eqclass {e \circ x} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass x \RR\)





Definition of Identity Element



Hence $\eqclass e \RR$ is an identity.

Hence $\struct {S / \RR, \circ_\RR}$ is a monoid.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Theorem $1.5$




