# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/31x_%3D_1_mod_56

Example of Use of Euclidean Algorithm
Let $x \in \Z$ be an integer such that:

$31 x \equiv 1 \pmod {56}$
Then by using the Euclidean Algorithm:

$x = -9$
is one such $x$.


Proof



\(\text {(1)}: \quad\)









\(\ds 56\)

\(=\)







\(\ds 31 + 25\)










\(\text {(2)}: \quad\)









\(\ds 31\)

\(=\)







\(\ds 25 + 6\)










\(\text {(3)}: \quad\)









\(\ds 25\)

\(=\)







\(\ds 4 \times 6 + 1\)










Then:














\(\ds 1\)

\(=\)







\(\ds 25 - 4 \times 6\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 25 - 4 \paren {31 - 25}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 5 \times 25 - 4 \times 31\)




















\(\ds \)

\(=\)







\(\ds 5 \paren {56 - 31} - 4 \times 31\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 5 \times 56 - 9 \times 31\)










So:

$-9 \times 31 + 5 \times 56 = 1$
and so:

$-9 \times 31 \equiv 1 \pmod {56}$
as required.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.11$




