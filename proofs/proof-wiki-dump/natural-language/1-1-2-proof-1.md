# 

Source: https://proofwiki.org/wiki/1%2B1_%3D_2/Proof_1

Theorem
Define $0$ as the unique element in the set $P \setminus \map s P$, where:

$P$ is the Peano Structure
$\map s P$ is the image of the mapping $s$ defined in Peano structure
$\setminus$ denotes the set difference.
Then:

$1 + 1 = 2$
where:

$1 := \map s 0$
$2 := \map s 1 = \map s {\map s 0}$
$+$ denotes addition
$=$ denotes equality
$\map s n$ denotes the successor mapping.


Proof
$1$ is defined by hypothesis as $\map s 0$ and $2$ as $\map s {\map s 0}$.
Hence the statement to be proven becomes:

$\map s 0 + \map s 0 = \map s {\map s 0}$
Thus:










\(\ds \forall m, n \in P: \, \)



\(\ds m + \map s n\)

\(=\)







\(\ds \map s {m + n}\)





Definition of Addition in Peano Structure








\(\ds \leadsto \ \ \)

\(\ds \forall m \in P: \, \)



\(\ds m + \map s 0\)

\(=\)







\(\ds \map s {m + 0}\)





as $0 \in P$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map s 0 + \map s 0\)

\(=\)







\(\ds \map s {\map s 0 + 0}\)





as $\map s 0 \in P$




Then:








\(\ds \forall m \in P: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)





Definition of Addition in Peano Structure








\(\ds \leadsto \ \ \)





\(\ds \map s 0 + 0\)

\(=\)







\(\ds \map s 0\)





as $\map s 0 \in P$














\(\ds \map s {\map s 0 + 0}\)

\(=\)







\(\ds \map s {\map s 0}\)





taking the successor on both sides of $(2)$








\(\ds \leadsto \ \ \)





\(\ds \map s 0 + \map s 0\)

\(=\)







\(\ds \map s {\map s 0}\)





substituting for $\map s {\map s 0 + 0}$ from $(1)$



$\blacksquare$





