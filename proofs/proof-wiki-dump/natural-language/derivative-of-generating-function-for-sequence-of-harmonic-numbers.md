# 

Source: https://proofwiki.org/wiki/Derivative_of_Generating_Function_for_Sequence_of_Harmonic_Numbers

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = H_n$
where $H_n$ denotes the $n$th harmonic number.
Let $\map G z$ be the generating function for $\sequence {a_n}$:

$\map G z = \dfrac 1 {1 - z} \map \ln {\dfrac 1 {1 - z} }$
from Generating Function for Sequence of Harmonic Numbers.
Then the derivative of $\map G z$ with respect to $z$ is given by:

$\map {G'} z = \dfrac 1 {\paren {1 - z}^2} \map \ln {\dfrac 1 {1 - z} } + \dfrac 1 {\paren {1 - z}^2}$


Proof













\(\ds \map {G'} z\)

\(=\)







\(\ds \map {\dfrac \d {\d z} } {\dfrac 1 {1 - z} \map \ln {\dfrac 1 {1 - z} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - z} \map {\dfrac \d {\d z} } {\map \ln {\dfrac 1 {1 - z} } } + \map \ln {\dfrac 1 {1 - z} } \map {\dfrac \d {\d z} } {\dfrac 1 {1 - z} }\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - z} \paren {\paren {-1} \dfrac {-1} {\paren {1 - z}^2} \paren {\dfrac 1 {1 - z} }^{-1} } + \map \ln {\dfrac 1 {1 - z} } \paren {-1} \paren {\dfrac {-1} {\paren {1 - z}^2} }\)





Derivative of Logarithm Function, Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {1 - z}^2} \map \ln {\dfrac 1 {1 - z} } + \dfrac 1 {\paren {1 - z}^2}\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $3$




