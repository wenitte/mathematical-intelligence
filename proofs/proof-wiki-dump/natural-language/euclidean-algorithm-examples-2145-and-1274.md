# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/2145_and_1274

Examples of Use of Euclidean Algorithm
The GCD of $2145$ and $1274$ is:

$\gcd \set {2145, 1274} = 13$
Hence $13$ can be expressed as an integer combination of $2190$ and $465$:

$13 = 32 \times 1274 - 19 \times 2145$


Proof



\(\text {(1)}: \quad\)









\(\ds 2145\)

\(=\)







\(\ds 1 \times 1274 + 871\)










\(\text {(2)}: \quad\)









\(\ds 1274\)

\(=\)







\(\ds 1 \times 871 + 403\)










\(\text {(3)}: \quad\)









\(\ds 871\)

\(=\)







\(\ds 2 \times 403 + 65\)










\(\text {(4)}: \quad\)









\(\ds 403\)

\(=\)







\(\ds 6 \times 65 + 13\)










\(\text {(5)}: \quad\)









\(\ds 65\)

\(=\)







\(\ds 5 \times 13\)









Thus:

$\gcd \set {2145, 1274} = 13$













\(\ds 13\)

\(=\)







\(\ds \gcd \set {2145, 1274}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {1274, 871}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {871, 403}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {403, 65}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {65, 13}\)










Then we have:














\(\ds 13\)

\(=\)







\(\ds 403 - 6 \times 65\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 403 - 6 \times \paren {871 - 2 \times 403}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 13 \times 403 - 6 \times 871\)




















\(\ds \)

\(=\)







\(\ds 13 \times \paren {1274 - 871} - 6 \times 871\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 13 \times 1274 - 19 \times 871\)




















\(\ds \)

\(=\)







\(\ds 13 \times 1274 - 19 \times \paren {2145 - 1 \times 1274}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 32 \times 1274 - 19 \times 2145\)









$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 11$. Highest Common Factor




