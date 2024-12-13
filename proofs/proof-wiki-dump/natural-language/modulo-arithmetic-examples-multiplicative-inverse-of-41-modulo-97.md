# 

Source: https://proofwiki.org/wiki/Modulo_Arithmetic/Examples/Multiplicative_Inverse_of_41_Modulo_97



Example of Modulo Arithmetic
The inverse of $41$ under multiplication modulo $97$ is given by:

${\eqclass {41} {97} }^{-1} = 71$


Solution to $41 x \equiv 2 \pmod {97}$
The solution of the integer congruence:

$41 x \equiv 2 \pmod {97}$
is:

$x = 45$


Proof
From Ring of Integers Modulo Prime is Field, multiplication modulo $97$ has an inverse for all $x \in \Z_{97}$ where $x \ne 0$.

Using Euclid's Algorithm:




\(\text {(1)}: \quad\)









\(\ds 97\)

\(=\)







\(\ds 2 \times 41 + 15\)










\(\text {(2)}: \quad\)









\(\ds 41\)

\(=\)







\(\ds 2 \times 15 + 11\)










\(\text {(3)}: \quad\)









\(\ds 15\)

\(=\)







\(\ds 11 + 4\)










\(\text {(4)}: \quad\)









\(\ds 11\)

\(=\)







\(\ds 2 \times 4 + 3\)










\(\text {(5)}: \quad\)









\(\ds 4\)

\(=\)







\(\ds 3 + 1\)










Then:














\(\ds 1\)

\(=\)







\(\ds 4 - 3\)





from $(5)$














\(\ds \)

\(=\)







\(\ds 4 - \paren {11 - 2 \times 4}\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 3 \times 4 - 11\)




















\(\ds \)

\(=\)







\(\ds 3 \times \paren {15 - 11} - 11\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 3 \times 15 - 4 \times 11\)




















\(\ds \)

\(=\)







\(\ds 3 \times 15 - 4 \times \paren {41 - 2 \times 15}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 11 \times 15 - 4 \times 41\)




















\(\ds \)

\(=\)







\(\ds 11 \times \paren {97 - 2 \times 14} - 4 \times 41\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 11 \times 97 - 26 \times 41\)










So:

$\paren {-26} \times 41 \equiv 1 \pmod {97}$













\(\ds \paren {-26} \times 41\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {97}\)


















\(\ds 71 \times 41\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {97}\)



as $-26 \equiv 71 \pmod {97}$ because $26 + 71 = 97$








\(\ds \leadsto \ \ \)





\(\ds {\eqclass {41} {97} }^{-1}\)

\(=\)







\(\ds \eqclass {71} {97}\)










Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $8$




