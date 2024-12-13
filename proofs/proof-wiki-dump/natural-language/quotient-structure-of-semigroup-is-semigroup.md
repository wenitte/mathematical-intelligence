# 

Source: https://proofwiki.org/wiki/Quotient_Structure_of_Semigroup_is_Semigroup

Theorem
Let $\RR$ be a congruence relation on a semigroup $\struct {S, \circ}$.

Then the quotient structure $\struct {S / \RR, \circ_\RR}$ is a semigroup.


Proof
From Quotient Structure is Well-Defined we have that $\circ_\RR$ is closed on $S / \RR$.
Let $\eqclass x \RR, \eqclass y \RR, \eqclass z \RR \in S / \RR$.
We shall prove that $\circ_\RR$ is associative:














\(\ds \paren {\eqclass x \RR \circ_{S / \RR} \eqclass y \RR} \circ_{S / \RR} \eqclass z \RR\)

\(=\)







\(\ds \eqclass {x \circ y} \RR \circ_{S / \RR} \eqclass z \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass {\paren {x \circ y} \circ z} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass {x \circ \paren {y \circ z} } \RR\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \eqclass x \RR \circ_{S / \RR} \eqclass {y \circ z} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass x \RR \circ_{S / \RR} \paren {\eqclass y \RR \circ_{S / \RR} \eqclass z \RR}\)





Definition of Operation Induced on $S / \RR$ by $\circ$



Hence $\struct {S / \RR, \circ_\RR}$ is a semigroup.

$\blacksquare$





