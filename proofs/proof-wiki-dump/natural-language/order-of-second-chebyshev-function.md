# 

Source: https://proofwiki.org/wiki/Order_of_Second_Chebyshev_Function

Theorem
Let $x \ge 2$ be a real number.
Then:

$\ds \map \psi x = \sum_{p \mathop \le x} \ln p + \map \OO {\sqrt x \paren {\ln x}^2}$
where:

$\OO$ is big-O notation
$\psi$ is the Second Chebyshev Function
the sum runs over the primes less than or equal to $x$.


Proof
From the definition of the Second Chebyshev Function, we have: 

$\ds \map \psi x = \sum_{k \mathop = 1}^\infty \paren {\sum_{p^k \mathop \le x} \ln p}$
where the inner sum runs over the primes $p$ with $p^k \le x$.
That is, the primes $p$ with $p \le x^{1/k}$, so we can write: 

$\ds \sum_{p^k \mathop \le x} \ln p = \sum_{p \mathop \le x^{1/k} } \ln p$
Note that there are no primes with $p < 2$, so if: 

$x^{1/k} < 2$
we have: 

$\ds \sum_{p^k \mathop \le x} \ln p = 0$
That is, if: 

$\ds k > \frac {\ln x} {\ln 2}$
So, we have: 














\(\ds \map \psi x\)

\(=\)







\(\ds \sum_{1 \mathop \le k \mathop \le \frac {\ln x} {\ln 2} } \paren {\sum_{p \mathop \le x^{1/k} } \ln p}\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \le x} \ln p + \sum_{2 \mathop \le k \mathop \le \frac {\ln x} {\ln 2} } \paren {\sum_{p \mathop \le x^{1/k} } \ln p}\)









From Logarithm is Strictly Increasing, for $2 \le p \le x^{1/k}$ we have: 

$\ds 0 < \ln p \le \map \ln {x^{1/k} }$
So:














\(\ds \sum_{p \mathop \le x^{1/k} } \ln p\)

\(\le\)







\(\ds \sum_{p \mathop \le x^{1/k} } \map \ln {x^{1/k} }\)




















\(\ds \)

\(\le\)







\(\ds x^{1/k} \map \ln {x^{1/k} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 k x^{1/k} \ln x\)





Logarithm of Power



Then, for $k \ge 2$, we have: 

$\ds \frac 1 k x^{1/k} \ln x \le \frac 1 2 \sqrt x \ln x$
so:














\(\ds \sum_{2 \mathop \le k \mathop \le \frac {\ln x} {\ln 2} } \paren {\sum_{p \mathop \le x^{1/k} } \ln p}\)

\(\le\)







\(\ds \sum_{2 \mathop \le k \mathop \le \frac {\ln x} {\ln 2} } \paren {\frac 1 2 \sqrt x \ln x}\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {2 \ln 2} \sqrt x \paren {\ln x}^2\)









From the definition of big-O notation, we have: 

$\ds \sum_{2 \mathop \le k \mathop \le \frac {\ln x} {\ln 2} } \paren {\sum_{p \mathop \le x^{1/k} } \ln p} = \map \OO {\sqrt x \paren {\ln x}^2}$
so:

$\ds \map \psi x = \sum_{p \mathop \le x} \ln p + \map \OO {\sqrt x \paren {\ln x}^2}$
$\blacksquare$





