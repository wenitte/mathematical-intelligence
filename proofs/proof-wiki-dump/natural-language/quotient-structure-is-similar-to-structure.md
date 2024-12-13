# 

Source: https://proofwiki.org/wiki/Quotient_Structure_is_Similar_to_Structure



Theorem
Let $\RR$ be a congruence relation on a algebraic structure $\struct {G, \circ}$.


This article needs to be linked to other articles.In particular: "similar" structure?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Then the quotient structure $\struct {G / \RR, \circ_\RR}$ is a similar structure to $\struct {G, \circ}$.


Proof
Quotient Structure of Semigroup is Semigroup
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


Quotient Structure of Monoid is Monoid
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


Quotient Structure of Group is Group
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


Quotient Structure of Abelian Group is Abelian Group
From Quotient Structure of Group is Group we have that $\struct {G / \RR, \circ_\RR}$ is a group.
Let $\eqclass x \RR, \eqclass y \RR \in S / \RR$.














\(\ds \eqclass x \RR \circ_{S / \RR} \eqclass y \RR\)

\(=\)







\(\ds \eqclass {x \circ y} \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$














\(\ds \)

\(=\)







\(\ds \eqclass {y \circ x} \RR\)





$\circ$ is Commutative














\(\ds \)

\(=\)







\(\ds \eqclass y \RR \circ_{S / \RR} \eqclass x \RR\)





Definition of Operation Induced on $S / \RR$ by $\circ$



Hence $\circ_{S / \RR}$ is commutative.

Hence $\struct {G / \RR, \circ_\RR}$ is an abelian group.
$\blacksquare$





