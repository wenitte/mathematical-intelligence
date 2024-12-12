# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Harmonic_Numbers

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \N_{> 0}: a_n = H_n$
where $H_n$ denotes the $n$th harmonic number.
That is:

$\sequence {a_n} = 1, 1 + \dfrac 1 2, 1 + \dfrac 1 2 + \dfrac 1 3, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - z} \map \ln {\dfrac 1 {1 - z} }$


Proof
Take the sequence:

$S_n = 1, \dfrac 1 2, \dfrac 1 3, \dfrac 1 4, \ldots$
From Generating Function for Sequence of Reciprocals of Natural Numbers, this has the generating function:

$\map H z = \map \ln {\dfrac 1 {1 - z} }$
By definition, $\sequence {a_n}$ is the sequence of partial sums of $\sequence {a_n}$.
The result follows from Generating Function for Sequence of Partial Sums of Series.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(18)$




