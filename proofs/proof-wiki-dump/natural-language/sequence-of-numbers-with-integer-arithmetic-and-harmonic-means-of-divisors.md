# 

Source: https://proofwiki.org/wiki/Sequence_of_Numbers_with_Integer_Arithmetic_and_Harmonic_Means_of_Divisors

Theorem
The following sequence of integers have the property that both the harmonic mean and arithmetic mean of their divisors are integers:

$1, 6, 140, 270, 672, \ldots$
This sequence is A007340 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Note the integers whose harmonic mean of their divisors are integers are the Ore numbers:

$1, 6, 28, 140, 270, 496, 672, \ldots$
This sequence is A001599 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

It remains to calculate the arithmetic mean of their divisors.
Let $\map A n$ denote the arithmetic mean of the divisors of $n$.
Then we have:

$\map A n = \dfrac {\map {\sigma_1} n} {\map {\sigma_0} n}$
where:

$\map {\sigma_0} n$ denotes the divisor count function: the number of divisors of $n$
$\map {\sigma_1} n$ denotes the divisor sum function: the sum of the divisors of $n$.















\(\ds \map {\sigma_1} 6\)

\(=\)







\(\ds 12\)





$\sigma_1$ of $6$














\(\ds \map {\sigma_0} 6\)

\(=\)







\(\ds 4\)





$\sigma_0$ of $6$








\(\ds \leadsto \ \ \)





\(\ds \map A 6\)

\(=\)







\(\ds \dfrac {12} 4 = 3\)





and so the arithmetic mean is an integer


















\(\ds \map {\sigma_1} {28}\)

\(=\)







\(\ds 56\)





$\sigma_1$ of $28$














\(\ds \map {\sigma_0} {28}\)

\(=\)







\(\ds 4\)





$\sigma_0$ of $28$








\(\ds \leadsto \ \ \)





\(\ds \map A {28}\)

\(=\)







\(\ds \dfrac {56} 6 = 9 \cdotp \dot 3\)





and so the arithmetic mean is not an integer


















\(\ds \map {\sigma_1} {140}\)

\(=\)







\(\ds 336\)





$\sigma_1$ of $140$














\(\ds \map {\sigma_0} {140}\)

\(=\)







\(\ds 12\)





$\sigma_0$ of $140$








\(\ds \leadsto \ \ \)





\(\ds \map A {140}\)

\(=\)







\(\ds \dfrac {336} {12} = 28\)





and so the arithmetic mean is an integer


















\(\ds \map {\sigma_1} {270}\)

\(=\)







\(\ds 720\)





$\sigma_1$ of $270$














\(\ds \map {\sigma_0} {270}\)

\(=\)







\(\ds 16\)





$\sigma_0$ of $270$








\(\ds \leadsto \ \ \)





\(\ds \map A {270}\)

\(=\)







\(\ds \dfrac {720} {16} = 45\)





and so the arithmetic mean is an integer


















\(\ds \map {\sigma_1} {496}\)

\(=\)







\(\ds 992\)





$\sigma_1$ of $496$














\(\ds \map {\sigma_0} {496}\)

\(=\)







\(\ds 10\)





$\sigma_0$ of $496$








\(\ds \leadsto \ \ \)





\(\ds \map A {496}\)

\(=\)







\(\ds \dfrac {992} {10} = 9 \cdotp 92\)





and so the arithmetic mean is not an integer


















\(\ds \map {\sigma_1} {672}\)

\(=\)







\(\ds 2016\)





$\sigma_1$ of $672$














\(\ds \map {\sigma_0} {672}\)

\(=\)







\(\ds 24\)





$\sigma_0$ of $672$








\(\ds \leadsto \ \ \)





\(\ds \map A {672}\)

\(=\)







\(\ds \dfrac {2016} {24} = 84\)





and so the arithmetic mean is an integer


















\(\ds \map {\sigma_1} {1638}\)

\(=\)







\(\ds 4368\)





$\sigma_1$ of $1638$














\(\ds \map {\sigma_0} {1638}\)

\(=\)







\(\ds 24\)





$\sigma_0$ of $1638$








\(\ds \leadsto \ \ \)





\(\ds \map A {1638}\)

\(=\)







\(\ds \dfrac {4368} {24} = 182\)





and so the arithmetic mean is an integer



$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $140$




