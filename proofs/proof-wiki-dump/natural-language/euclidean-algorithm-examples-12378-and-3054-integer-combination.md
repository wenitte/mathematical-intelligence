# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/12378_and_3054/Integer_Combination

Examples of Use of Euclidean Algorithm
$6$ can be expressed as an integer combination of $12378$ and $3054$:

$6 = 132 \times 12378 - 535 \times 3054$

Note also that:

$6 = 3186 \times 12378 - 12913 \times 3054$
by adding $3054 \times 12378$ to both sides.


Proof
From Euclidean Algorithm: $12378$ and $3054$ we have:

$\gcd \set {12378, 3054} = 6$

Then we have:














\(\ds 6\)

\(=\)







\(\ds 24 - 1 \times 18\)





from $(5)$














\(\ds \)

\(=\)







\(\ds 24 - 1 \times \paren {138 - 5 \times 24}\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 6 \times 24 - 1 \times 138\)




















\(\ds \)

\(=\)







\(\ds 6 \times \paren {162 - 1 \times 138} - 1 \times 138\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 6 \times 162 - 7 \times 138\)




















\(\ds \)

\(=\)







\(\ds 6 \times 162 - 7 \times \paren {3054 - 18 \times 162}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 132 \times 162 - 7 \times 3054\)




















\(\ds \)

\(=\)







\(\ds 132 \times \paren {12378 - 4 \times 3054} - 7 \times 3054\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 132 \times 12378 - 535 \times 3054\)









$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm




