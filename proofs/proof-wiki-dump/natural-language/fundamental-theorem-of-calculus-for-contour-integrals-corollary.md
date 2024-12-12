# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus_for_Contour_Integrals/Corollary

Theorem
Let $D \subseteq \C$ be an open set.
Let $f: D \to \C$ be a continuous function.
Suppose that $F: D \to \C$ is an antiderivative of $f$.
Let $\gamma: \closedint a b \to D$ be a contour that consists of one directed smooth curve.

Then the contour integral:

$\ds \int_\gamma \map f z \rd z =  \map F {\map \gamma b} - \map F {\map \gamma a}$


Proof
By the chain rule:

$\dfrac \d {\d t} \map F {\map \gamma t} = \map {F'} {\map \gamma t} \map {\gamma'} t = \map f {\map \gamma t} \map {\gamma'} t$
Thus:














\(\ds \int_\gamma \map f z \rd z\)

\(=\)







\(\ds \int_a^b \map f {\map \gamma t} \map {\gamma'} t \rd t\)





Definition of Antiderivative














\(\ds \)

\(=\)







\(\ds \int_a^b \frac \d {\d t} \map F {\map \gamma t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \map F {\map \gamma b} - \map F {\map \gamma a}\)





Fundamental Theorem of Calculus



$\blacksquare$





