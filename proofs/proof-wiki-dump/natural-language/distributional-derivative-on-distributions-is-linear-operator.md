# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_on_Distributions_is_Linear_Operator

Theorem
The Distributional derivative on distributions is a linear operator.

Proof
Let $\phi, \psi \in \map \DD \R$ be test functions.
Let $\alpha \in \C$ be a complex number.
Let $T \in \map {\DD'} \R$ be a distribution.
Then:














\(\ds \map {T'} {\phi + \psi}\)

\(=\)







\(\ds - \map T {\paren {\phi + \psi}'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds - \map T {\phi' + \psi'}\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds - \paren {\map T {\phi'} + \map T {\psi'} }\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds - \map T {\phi'} - \map T {\psi'}\)




















\(\ds \)

\(=\)







\(\ds \map {T'} \phi + \map {T'} \psi\)





Definition of Distributional Derivative


















\(\ds \map {T'} {\alpha \phi}\)

\(=\)







\(\ds - \map T {\paren {\alpha \phi}'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds - \map T {\alpha \phi'}\)




















\(\ds \)

\(=\)







\(\ds - \alpha \map T {\phi'}\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \alpha \map {T'} \phi\)





Definition of Distributional Derivative



Thus the distributional derivative is a linear operator.

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




