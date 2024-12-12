# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/299_and_481

Examples of Use of Euclidean Algorithm
The GCD of $299$ and $481$ is found to be:

$\gcd \set {299, 481} = 13$
Hence $13$ can be expressed as an integer combination of $299$ and $481$:

$13 = 5 \times 481 - 8 \times 299$


Proof



\(\text {(1)}: \quad\)









\(\ds 481\)

\(=\)







\(\ds 1 \times 299 + 182\)










\(\text {(2)}: \quad\)









\(\ds 299\)

\(=\)







\(\ds 1 \times 182 + 117\)










\(\text {(3)}: \quad\)









\(\ds 182\)

\(=\)







\(\ds 1 \times 117 + 65\)










\(\text {(4)}: \quad\)









\(\ds 117\)

\(=\)







\(\ds 1 \times 65 + 52\)










\(\text {(5)}: \quad\)









\(\ds 65\)

\(=\)







\(\ds 1 \times 52 + 13\)




















\(\ds 52\)

\(=\)







\(\ds 4 \times 13\)









Thus:

$\gcd \set {299, 481} = 13$

Then we have:














\(\ds 13\)

\(=\)







\(\ds 65 - 1 \times 52\)





from $(5)$














\(\ds \)

\(=\)







\(\ds 65 - 1 \times \paren {117 - 1 \times 65}\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 2 \times 65 - 1 \times 117\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {182 - 1 \times 117} - 1 \times 117\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 2 \times 182 - 3 \times 117\)




















\(\ds \)

\(=\)







\(\ds 2 \times 182 - 3 \times \paren {299 - 1 \times 182}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 5 \times 182 - 3 \times 299\)




















\(\ds \)

\(=\)







\(\ds 5 \times \paren {481 - 1 \times 299} - 3 \times 299\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 5 \times 481 - 8 \times 299\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Exercise $2$




