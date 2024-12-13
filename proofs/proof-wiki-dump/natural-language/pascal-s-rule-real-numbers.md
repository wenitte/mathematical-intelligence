# 

Source: https://proofwiki.org/wiki/Pascal%27s_Rule/Real_Numbers



Theorem
For positive integers $n, k$ with $1 \le k \le n$:

$\dbinom n {k - 1} + \dbinom n k = \dbinom {n + 1} k$
This is also valid for the real number definition:

$\forall r \in \R, k \in \Z: \dbinom r {k - 1} + \dbinom r k = \dbinom {r + 1} k$


Proof













\(\ds \left({r + 1}\right) \binom r {k - 1} + \left({r + 1}\right) \binom r k\)

\(=\)







\(\ds \left({r + 1}\right) \binom r {k - 1} + \left({r + 1}\right) \binom r {r - k}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds k \binom {r + 1} k + \left({r - k + 1}\right) \binom {r + 1} {r - k + 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds k \binom {r + 1} k + \left({r - k + 1}\right) \binom {r + 1} k\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \left({r + 1}\right) \binom {r + 1} k\)









Dividing by $\left({r + 1}\right)$ yields the result.
$\blacksquare$


Source of Name
This entry was named for Blaise Pascal.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{D} \ (9)$




