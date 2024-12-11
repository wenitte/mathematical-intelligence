# 

Source: https://proofwiki.org/wiki/1%2B1_%3D_2/Proof_2

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
Defining $1$ as $\map s 0$ and $2$ as $\map s {\map s 0}$, the statement to be proven becomes:

$\map s 0 + \map s 0 = \map s {\map s 0}$

By the definition of addition:

$\forall m \in P: \forall n \in P: m + \map s n = \map s {m + n}$
Letting $m = \map s 0$ and $n = 0$:




\(\text {(1)}: \quad\)









\(\ds \map s 0 + \map s 0\)

\(=\)







\(\ds \map s {\map s 0 + 0}\)










By the definition of addition:

$\forall m: m + 0 = m$
Letting $m = \map s 0$:

$\map s 0 + 0 = \map s 0$
Taking the successor of both sides: 




\(\text {(2)}: \quad\)









\(\ds \map s {\map s 0 + 0}\)

\(=\)







\(\ds \map s {\map s 0}\)










Applying Equality is Transitive to $(1)$ and $(2)$ we have:

$\map s 0 + \map s 0 = \map s {\map s 0}$
Hence the result.
$\blacksquare$





