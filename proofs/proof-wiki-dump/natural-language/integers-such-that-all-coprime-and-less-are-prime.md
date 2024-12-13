# 

Source: https://proofwiki.org/wiki/Integers_such_that_all_Coprime_and_Less_are_Prime

Theorem
The following positive integers have the property that all positive integers less than and coprime to it, excluding $1$, are prime:

$1, 2, 3, 4, 6, 8, 12, 18, 24, 30$
This sequence is A048597 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

There are no other positive integers with this property.


Proof
Let $S_n$ denote the set of all positive integers less than and coprime to $n$, excluding $1$.
Let $\map P n$ denote the propositional function:

All positive integers less than and coprime to $n$, excluding $1$, are prime.

We establish that $\map P n = \T$ for all the positive integers given:














\(\ds S_1\)

\(=\)







\(\ds \O\)





trivially














\(\ds S_2\)

\(=\)







\(\ds \O\)





trivially














\(\ds S_3\)

\(=\)







\(\ds \set 2\)





which is prime














\(\ds S_4\)

\(=\)







\(\ds \set 3\)





which is prime














\(\ds S_6\)

\(=\)







\(\ds \set 5\)





which is prime














\(\ds S_8\)

\(=\)







\(\ds \set {3, 5, 7}\)





all prime














\(\ds S_{12}\)

\(=\)







\(\ds \set {5, 7, 11}\)





all prime














\(\ds S_{18}\)

\(=\)







\(\ds \set {5, 7, 11, 13, 17}\)





all prime














\(\ds S_{24}\)

\(=\)







\(\ds \set {5, 7, 11, 13, 17, 19, 23}\)





all prime














\(\ds S_{30}\)

\(=\)







\(\ds \set {7, 11, 13, 17, 19, 23, 29}\)





all prime




From Schatunowsky's Theorem:

$30$ is the greatest positive integer $n$ such that $\map P n$ is true

We note that for all primes $p$ greater than $3$, $p - 1$ is composite, and so $\map P p = \F$.

The remaining composite numbers less than $30$ are investigated:














\(\ds S_9\)

\(=\)







\(\ds \set {2, 4, 5, 7, 8}\)





of which $2, 4, 8$ are composite














\(\ds S_{10}\)

\(=\)







\(\ds \set {3, 7, 9}\)





of which $9$ is composite,














\(\ds S_{14}\)

\(=\)







\(\ds \set {3, 5, 9, 11, 13}\)





of which $9$ is composite














\(\ds S_{15}\)

\(=\)







\(\ds \set {2, 4, 7, 8, 11, 13, 14}\)





of which $4, 8, 14$ are composite














\(\ds S_{16}\)

\(=\)







\(\ds \set {3, 5, 7, 9, 11, 13, 15}\)





of which $9, 15$ are composite














\(\ds S_{20}\)

\(=\)







\(\ds \set {3, 7, 9, 11, 13, 17, 19}\)





of which $9$ is composite














\(\ds S_{21}\)

\(=\)







\(\ds \set {2, 4, 5, 8, 10, 11, 13, 16, 17, 19, 20}\)





of which $4, 8, 10, 16, 20$ are composite














\(\ds S_{22}\)

\(=\)







\(\ds \set {3, 5, 7, 9, 13, 15, 17, 19, 21}\)





of which $9, 15, 21$ are composite














\(\ds S_{25}\)

\(=\)







\(\ds \set {2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24}\)





of which $4, 6, 8, 9, 12, 14, 16, 18, 21, 22, 24$ are composite














\(\ds S_{26}\)

\(=\)







\(\ds \set {3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25}\)





of which $9, 15, 21, 25$ are composite














\(\ds S_{27}\)

\(=\)







\(\ds \set {2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26}\)





of which $4, 8, 10, 14, 16, 20, 22, 25, 26$ are composite














\(\ds S_{28}\)

\(=\)







\(\ds \set {3, 5, 9, 11, 13, 15, 17, 19, 23, 25, 27}\)





of which $9, 15, 25, 27$ are composite



That exhausts the list.
Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Exercise $4$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $30$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $30$




