# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_of_Heaviside_Step_Function

Theorem
Let $H : \R \to \closedint 0 1$ be the Heaviside step function.
Let $T \in \map {\DD'} \R$ be a distribution corresponding to $H$.
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.

Then the distributional derivative of $T$ is $\delta$.


Proof
Let $\phi \in \map \DD \R$ be a test function.
Then:














\(\ds \map {T'} \phi\)

\(=\)







\(\ds -\map T {\phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map H x \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_0^\infty \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \phi 0 - \map \phi \infty\)




















\(\ds \)

\(=\)







\(\ds \map \phi 0\)





Definition of Test Function, Value of Compactly Supported Function outside its Support, $\infty$ is not in a bounded subset of real numbers














\(\ds \)

\(=\)







\(\ds \map \delta \phi\)





Definition of Dirac Delta Distribution



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




