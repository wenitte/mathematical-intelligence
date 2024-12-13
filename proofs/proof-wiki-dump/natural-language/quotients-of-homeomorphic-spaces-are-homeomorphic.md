# 

Source: https://proofwiki.org/wiki/Quotients_of_Homeomorphic_Spaces_are_Homeomorphic

Theorem
Let $X, Y$ be topological spaces.
Let $\phi : X \to Y$ be a homeomorphism from $X$ to $Y$.
Let:

$\RR_X \subseteq X \times X$
$\RR_Y \subseteq Y \times Y$
be equivalence relations on $X$ and $Y$, respectively.
Suppose that, for all $x, x' \in X$:

$\map {\RR_X} {x, x'} \iff \map {\RR_Y} {\map \phi x, \map \phi {x'}}$

Then:

$X / \RR_X \sim Y / \RR_Y$
where $\sim$ denotes homeomorphic spaces.


Proof
Let the mapping $\psi : X / \RR_X \to Y / \RR_Y$ be defined as:

$\map \psi {\eqclass x {\RR_X}} = \eqclass {\map \phi x} {\RR_Y}$
In order for $\psi$ to be well-defined, the image needs to be independent of the choice of representative $x$.
But, for $x, x' \in X$ such that $\map {\RR_X} {x, x'}$, we have:

$\map {\RR_Y} {\map \phi x, \map \phi {x'}}$
by hypothesis.
It follows that:

$\eqclass {\map \phi x} {\RR_Y} = \eqclass {\map \phi {x'}} {\RR_Y}$

The inverse mapping $\psi^{-1} : Y / \RR_Y \to X / \RR_X$ can be defined as:

$\map {\psi^{-1}} {\eqclass y {\RR_Y}} = \eqclass {\map {\phi^{-1}} y} {\RR_X}$
For the same reasons as before, $\psi^{-1}$ is well-defined.
Additionally, it is the inverse of $\psi$, since:














\(\ds \map {\psi^{-1} } {\map \psi {\eqclass x {\RR_X} } }\)

\(=\)







\(\ds \map {\psi^{-1} } {\eqclass {\map \psi x} {\RR_Y} }\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \eqclass {\map {\phi^{-1} } {\map \psi x} } {\RR_X}\)





Definition of $\psi^{-1}$














\(\ds \)

\(=\)







\(\ds \eqclass x {\RR_X}\)





Definition of Inverse Mapping














\(\ds \map \psi {\map {\psi^{-1} } {\eqclass y {\RR_Y} } }\)

\(=\)







\(\ds \eqclass y {\RR_Y}\)





Symmetrically




It remains to show that $\psi$ and $\psi^{-1}$ are continuous.
Consider an arbitrary open set $U \subseteq Y / \RR_Y$.
By definition of quotient topology, we have that:

$\map {q_{\RR_Y}^{-1}} U$
is open in $Y$, where $q_{\RR_Y}$ is the quotient mapping induced by $\RR_Y$.
Then, since $\phi$ is continuous:

$\map {\phi^{-1}} {\map {q_{\RR_Y}^{-1}} U}$
is open in $X$.
If we can show that:

$\map {\psi^{-1}} U = \map {\phi^{-1}} {\map {q_{\RR_Y}^{-1}} U}$
then, since $U$ was arbitrary, $\psi$ would be continuous.
We have:














\(\ds \eqclass x {\RR_X} \in \map {\psi^{-1} } U\)

\(\iff\)







\(\ds \exists \eqclass y {\RR_Y} \in U: \map {\psi^{-1} } {\eqclass y {\RR_Y} } = \eqclass x {\RR_X}\)





Definition of Image of Set under Mapping














\(\ds \)

\(\iff\)







\(\ds \exists \eqclass y {\RR_Y} \in U: \eqclass {\map {\phi^{-1} } y} {\RR_X} = \eqclass x {\RR_X}\)





Definition of $\psi^{-1}$














\(\ds \)

\(\iff\)







\(\ds \exists y \in Y: \map {q_{\RR_Y} } y \in U \land \eqclass {\map {\phi^{-1} } y} {\RR_X} = \eqclass x {\RR_X}\)





Definition of Quotient Mapping














\(\ds \)

\(\iff\)







\(\ds \exists y \in \map {q_{\RR_Y}^{-1} } U: \eqclass {\map {\phi^{-1} } y} {\RR_X} = \eqclass x {\RR_X}\)





Definition of Inverse Mapping














\(\ds \)

\(\iff\)







\(\ds \eqclass x {\RR_X} \in \map {\phi^{-1} } {\map {q_{\RR_Y}^{-1} } U}\)









Therefore, by the above remarks, $\psi$ is a continuous mapping.
By a precisely symmetric argument, it can be shown that $\psi^{-1}$ is likewise continuous.

Therefore, since $\psi$:

is a bijection
is continuous
has a continuous inverse
it is a homeomorphism by definition.
$\blacksquare$





