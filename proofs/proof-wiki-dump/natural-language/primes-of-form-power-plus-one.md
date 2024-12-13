# 

Source: https://proofwiki.org/wiki/Primes_of_form_Power_plus_One



Theorem
Let $q, n \in \Z_{>0}$ such that $q > 1$.
Then $q^n + 1$ is prime only if:

$(1): \quad q$ is even
and

$(2): \quad n$ is of the form $2^m$ for some positive integer $m$.


Proof
Note that if $q = 1$ then $q^n + 1 = 2$ which is prime.
Hence the condition on $q$ in the statement of the theorem.

So by hypothesis $q > 1$.
Let $q$ be odd.
Then by Two divides Power Plus One iff Odd, $q^n + 1$ is not prime.

Let $q$ be even.
Let $n$ be expressed in the form $r 2^m$ where $r$ is odd.
Then $q^n + 1$ can be expressed in the form:

$q^{r 2^m} + 1 = \left({q^{2^m}}\right)^r + 1$
By Number Plus One divides Power Plus One iff Odd, $q^{2^m} + 1$ is a divisor of $\left({q^{2^m}}\right)^r + 1$.
So for all $r > 1$ it follows that $\left({q^{2^m}}\right)^r + 1$ is composite.
Hence the result.
$\blacksquare$


Examples
The sequence of primes of the form $q^2 + 1$ begins:














\(\ds 1^2 + 1\)

\(=\)







\(\ds 1 + 1 = 2\)





is prime














\(\ds 2^2 + 1\)

\(=\)







\(\ds 4 + 1 = 5\)





is prime














\(\ds 4^2 + 1\)

\(=\)







\(\ds 16 + 1 = 17\)





is prime














\(\ds 6^2 + 1\)

\(=\)







\(\ds 36 + 1 = 37\)





is prime














\(\ds 10^2 + 1\)

\(=\)







\(\ds 100 + 1 = 101\)





is prime



This sequence is A002496 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

The sequence of primes of the form $q^4 + 1$ begins:














\(\ds 1^4 + 1\)

\(=\)







\(\ds 1 + 1 = 2\)





is prime














\(\ds 2^4 + 1\)

\(=\)







\(\ds 16 + 1 = 17\)





is prime














\(\ds 4^4 + 1\)

\(=\)







\(\ds 256 + 1 = 257\)





is prime














\(\ds 6^4 + 1\)

\(=\)







\(\ds 1296 + 1 = 1297\)





is prime














\(\ds 16^4 + 1\)

\(=\)







\(\ds 65\,536 + 1 = 65\,537\)





is prime



This sequence is A037896 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Also see
Primes of form Power of Two plus One


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Further Exercises $8$




