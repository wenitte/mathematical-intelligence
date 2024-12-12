# 

Source: https://proofwiki.org/wiki/Commutator_of_x_and_Distributional_Derivative_acting_on_Distribution

Theorem
Let $T \in \map {\DD'} \R$ be a distribution.
Let:

$\sqbrk {x, \dfrac \d {\d x} } T := x \dfrac {\d T}{\d x} - \dfrac {\d \paren {x T}}{\d x}$
where derivatives are to be understood in the distributional sense.

Then:

$\sqbrk {x, \dfrac \d {\d x} } T = - T$


Proof
Let $\phi \in \map \DD \R$ be a test function.














\(\ds \map {\paren{x \dfrac {\d T}{\d x} - \dfrac {\d \paren {x T} }{\d x} } } \phi\)

\(=\)







\(\ds \map {\paren {x \dfrac {\d T}{\d x} } } \phi - \map {\paren {\dfrac {\d \paren {x T} }{\d x} } } \phi\)





Linearity of distribution














\(\ds \)

\(=\)







\(\ds \map {\paren {\dfrac {\d T}{\d x} } } {x \phi} - \map {\paren {\dfrac {\d \paren {x T} }{\d x} } } \phi\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds - \map T {\paren {x \phi}'} + \map {\paren {x T} } {\phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds - \map T {\paren {x \phi}'} + \map T {x \phi'}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map T {-\phi - x \phi' + x \phi'}\)





Linearity of distribution














\(\ds \)

\(=\)







\(\ds \map T {-\phi}\)




















\(\ds \)

\(=\)







\(\ds -\map T \phi\)





Linearity of distribution



$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




