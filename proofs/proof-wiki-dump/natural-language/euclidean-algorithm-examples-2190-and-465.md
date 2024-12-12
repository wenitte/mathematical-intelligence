# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/2190_and_465

Examples of Use of Euclidean Algorithm
The GCD of $2190$ and $465$ is found to be:

$\gcd \set {2190, 465} = 15$
Hence $15$ can be expressed as an integer combination of $2190$ and $465$:

$15 = 33 \times 465 - 7 \times 2190$


Proof



\(\text {(1)}: \quad\)









\(\ds 2190\)

\(=\)







\(\ds 4 \times 465 + 330\)










\(\text {(2)}: \quad\)









\(\ds 465\)

\(=\)







\(\ds 1 \times 330 + 135\)










\(\text {(3)}: \quad\)









\(\ds 330\)

\(=\)







\(\ds 2 \times 135 + 60\)










\(\text {(4)}: \quad\)









\(\ds 135\)

\(=\)







\(\ds 2 \times 60 + 15\)




















\(\ds 60\)

\(=\)







\(\ds 4 \times 15\)









Thus:

$\gcd \set {2190, 465} = 15$

Then we have:














\(\ds 15\)

\(=\)







\(\ds 135 - 2 \times 60\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 135 - 2 \times \paren {330 - 2 \times 135}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 5 \times 135 - 2 \times 330\)




















\(\ds \)

\(=\)







\(\ds 5 \times \paren {465 - 330} - 2 \times 330\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 5 \times 465 - 7 \times 330\)




















\(\ds \)

\(=\)







\(\ds 5 \times 465 - 7 \times \paren {2190 - 4 \times 465}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 33 \times 465 - 7 \times 2190\)









$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12$: Highest common factors and Euclid's algorithm




