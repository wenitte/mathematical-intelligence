# 

Source: https://proofwiki.org/wiki/Quotient_Structure_of_Group_is_Group

Theorem
Let $\RR$ be a congruence relation on a group $\struct {G, \circ}$.

Then the quotient structure $\struct {G / \RR, \circ_\RR}$ is a group.


Proof
From Quotient Structure of Monoid is Monoid $\struct {G / \RR, \circ_\RR}$ is a monoid with $\eqclass e \RR$ as its identity.
Let $\eqclass x \RR \in S / \RR$.

Consider $\eqclass {-x} \RR$ where $-x$ denotes the inverse of $x$ under $\circ$.















\(\ds \eqclass x \RR \circ_{S / \RR} \eqclass {-x} \RR\)

\(=\)







\(\ds \eqclass {x \circ -x} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass e \RR\)





Definition of Inverse Element



Furthermore:














\(\ds \eqclass {-x} \RR \circ_{S / \RR} \eqclass x \RR\)

\(=\)







\(\ds \eqclass {-x \circ x} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass e \RR\)





Definition of Inverse Element



Hence $\eqclass {-x} \RR$ is the inverse of $\eqclass x \RR$.

Hence $\struct {G / \RR, \circ_\RR}$ is a group.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Theorem $1.5$




