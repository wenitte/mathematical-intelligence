# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Powers_of_Constant/Examples/2%5En_%2B_3%5En

Example of Generating Function for Sequence of Powers of Constant
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = 2^n + 3^n$
That is:

$\sequence {a_n} = 2, 5, 13, 35, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - 2 z} + \dfrac 1 {1 - 3 z}$


Proof
Let $\map {G_2} z$ be the generating function for $\sequence {2^n}$.
Let $\map {G_3} z$ be the generating function for $\sequence {3^n}$.
From Generating Function for Sequence of Powers of Constant:

$\map {G_2} z = \dfrac 1 {1 - 2 z}$
$\map {G_3} z = \dfrac 1 {1 - 3 z}$
From Linear Combination of Generating Functions:

$\map G z = \map {G_2} z + \map {G_3} z$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $1$




