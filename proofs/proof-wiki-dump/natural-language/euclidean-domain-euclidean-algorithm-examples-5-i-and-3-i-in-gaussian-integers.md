# 

Source: https://proofwiki.org/wiki/Euclidean_Domain/Euclidean_Algorithm/Examples/5_i_and_3_%2B_i_in_Gaussian_Integers

Examples of Use of Euclidean Algorithm in Euclidean Domain
The GCD of $5 i$ and $3 + 1$ in the ring of Gaussian integers is found to be:

$\gcd \set {5 i, 3 + 1} = 1 + 2 i$
and its associates $-1 - 2 i$, $-2 + i$ and $2 - i$.


Proof
Let $x = 5 i$ and $y = 3 + i$.
We need to find $q$ and $r$ such that:

$x = y q + r$
with:

$\map \nu r < \map \nu y$
where $\map \nu x := \cmod x^2$

Thus we calculate:














\(\ds \frac x y\)

\(=\)







\(\ds \frac {5 i} {3 + i}\)




















\(\ds \)

\(=\)







\(\ds \frac {5 i \paren {3 - i} } {10}\)





Definition of Complex Division














\(\ds \)

\(=\)







\(\ds \frac {1 + 3 i} 2\)





simplifying



$q$ is to be set to one of the Gaussian integers nearest to it.
Thus let $q = i$.
Hence:














\(\ds r\)

\(=\)







\(\ds x - q y\)




















\(\ds \)

\(=\)







\(\ds 1 + 2 i\)










Then:














\(\ds \frac {3 + i} {1 + 2 i}\)

\(=\)







\(\ds \frac {\paren {3 + i} \paren {1 - 2 i} } 5\)





Definition of Complex Division














\(\ds \)

\(=\)







\(\ds \frac {5 - 5 i} 5\)





simplifying














\(\ds \)

\(=\)







\(\ds 1 - i\)





which is a Gaussian integer



Thus a GCD of $5 i$ and $3 + i$ is $1 + 2 i$.
From Euclidean Domain is GCD Domain, its associates are also GCDs of $5 i$ and $3 + i$.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 28$. Highest Common Factor: Example $56$




