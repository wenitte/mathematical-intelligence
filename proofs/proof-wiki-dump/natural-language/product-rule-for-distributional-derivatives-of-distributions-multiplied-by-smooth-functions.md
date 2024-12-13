# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Distributional_Derivatives_of_Distributions_multiplied_by_Smooth_Functions

Theorem
Let $\alpha \in \map {C^\infty} \R$ be a smooth real function.
Let $T \in \map {\DD'} \R$ be a distribution.

Then in the distributional sense it holds that:

$\paren {\alpha T}' = \alpha' T + \alpha T'$


Proof
Let $\phi \in \map \DD \R$ be a test function.
By the Product Rule for Derivatives:

$\paren {\alpha \phi}' = \alpha' \phi + \alpha \phi'$
Hence:














\(\ds \map {\paren {\alpha T}'} \phi\)

\(=\)







\(\ds -\map {\paren {\alpha T} } {\phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds -\map T {\alpha \phi'}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds -\map T {\paren {\alpha \phi}' - \alpha' \phi}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\map T {\paren {\alpha \phi}'} + \map T {\alpha' \phi}\)





Definition of Distribution: Linearity














\(\ds \)

\(=\)







\(\ds \map {T'} {\alpha \phi} + \map T {\alpha' \phi}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds \alpha \map {T'} \phi + \alpha' \map T \phi\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map {\paren {\alpha T' + \alpha' T} } \phi\)





Addition of Distributions



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




