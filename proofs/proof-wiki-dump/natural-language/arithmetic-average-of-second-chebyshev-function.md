# 

Source: https://proofwiki.org/wiki/Arithmetic_Average_of_Second_Chebyshev_Function



Theorem
Let $x \ge 1$ be a real number.
Then:

$\ds \sum_{n \mathop \le x} \map \psi {x/n} = x \ln x - x + \map \OO {\map \ln {x + 1} }$
where:

the summation extends over all strictly positive integers $n$ such that $n \le x$
$\OO$ is big-O notation
$\psi$ is the second Chebyshev function.


Proof
We have, by the definition of the second Chebyshev function:

$\ds \sum_{n \mathop \le x} \map \psi {x/n} = \sum_{n \mathop \le x} \sum_{m \mathop \le x/n} \map \Lambda m$
where $\Lambda$ is the Von Mangoldt function. 
Consider the sum: 

$\ds \sum_{n \mathop \le x} \sum_{m \mathop \le x/n} \map \Lambda m$
The sum runs over the pairs of natural numbers $\tuple {n, m}$ such that $n m \le x$.
This is equivalent to running over the divisors of each natural number $t$ such that $t \le x$. 
That is: 

$\ds \sum_{n \mathop \le x} \sum_{m \mathop \le x/n} \map \Lambda m = \sum_{t \mathop \le x} \sum_{m \mathop \divides t} \map \Lambda m$
Then, from Sum Over Divisors of von Mangoldt is Logarithm, we have: 

$\ds \sum_{t \mathop \le x} \sum_{m \mathop \divides t} \map \Lambda m = \sum_{t \mathop \le x} \ln t$
With a view to bound this sum, note that: 

$\ds \sum_{t \mathop \le x} \ln t = \ln 1 + \sum_{2 \mathop \le t \mathop \le x} \ln t = \sum_{2 \mathop \le t \mathop \le x} \ln t$
We have, from Sum of Integrals on Adjacent Intervals for Integrable Functions: 

$\ds \sum_{2 \mathop \le t \mathop \le x} \ln t = \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \ln t \rd u}$
From Logarithm is Strictly Increasing, we have: 

$\ln u \le \ln t \le \map \ln {u + 1}$
for $t - 1 \le u \le t$.
So, from Relative Sizes of Definite Integrals:

$\ds \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \ln u \rd u} \le \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \ln t \rd u} \le \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \map \ln {u + 1} \rd u}$
Now, from Sum of Integrals on Adjacent Intervals for Integrable Functions, we have: 

$\ds \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \map \ln {u + 1} \rd u} = \int_1^{\floor x} \map \ln {u + 1} \rd u$
and:

$\ds \sum_{2 \mathop \le t \mathop \le x} \paren {\int_{t - 1}^t \ln u \rd u} = \int_1^{\floor x} \ln u \rd u$
We can compute: 














\(\ds \int_1^{\floor x} \map \ln {u + 1} \rd u\)

\(=\)







\(\ds \int_2^{\floor x + 1} \map \ln t \rd t\)





substituting $t \mapsto u + 1$














\(\ds \)

\(=\)







\(\ds \intlimits {t \ln t - t} 2 {\floor x + 1}\)





Primitive of $\ln x$, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \paren {\floor x + 1} \map \ln {\floor x + 1} - \paren {\floor x + 1} - 2 \ln 2 + 2\)




















\(\ds \)

\(=\)







\(\ds \paren {\floor x + 1} \map \ln {\floor x + 1} - \floor x - 2 \ln 2 + 1\)









and:

$\ds \int_1^{\floor x} \ln u \rd u = \floor x \ln \floor x - \floor x$
Since $x - 1 < \floor x \le x$, and $1 - 2 \ln 2 < 0$, we have: 

$\paren {\floor x + 1} \map \ln {\floor x + 1} - \floor x - 2 \ln 2 + 1 \le \paren {x + 1} \map \ln {x + 1} - x$
and:

$\paren {x - 1} \map \ln {x - 1} - \paren {x - 1} \le \floor x \ln \floor x - \floor x$
from Logarithm is Strictly Increasing.

We have therefore obtained that: 

$\ds \paren {x - 1} \map \ln {x - 1} - \paren {x - 1} \le \sum_{n \mathop \le x} \map \psi {x/n} \le \paren {x + 1} \map \ln {x + 1} - x$
We will use this inequality to show that: 

$\ds \sum_{n \mathop \le x} \map \psi {x/n} - \paren {x \ln x - x} = \map \OO {\map \ln {x + 1} }$
We have: 

$\ds \paren {x - 1} \map \ln {x - 1} - x \ln x \le \sum_{n \mathop \le x} \map \psi {x/n} - \paren {x \ln x - x} \le \paren {x + 1} \map \ln {x + 1} - x \ln x$
We will show that for sufficiently large $x$ we have: 

$\paren {x + 1} \map \ln {x + 1} - x \ln x \le 2 \map \ln {x + 1}$
and:

$-2 \map \ln {x + 1} \le \paren {x - 1} \map \ln {x - 1} - x \ln x$
at which point we have the claim.


Lemma 1
Let $x \ge 1$ be a real number.
Then: 

$\paren {x + 1} \map \ln {x + 1} - x \ln x \le 2 \map \ln {x + 1}$
$\Box$


Lemma 2
Let $x \ge 3$ be a real number.
Then: 

$-2 \map \ln {x + 1} \le \paren {x - 1} \map \ln {x - 1} - x \ln x$
$\Box$

Putting these two inequalities together, for $x \ge 3$ we have: 

$\ds -2 \map \ln {x + 1} \le \sum_{n \mathop \le x} \map \psi {x/n} - \paren {x \ln x - x} \le 2 \map \ln {x + 1}$
so, by the definition of big-O notation:

$\ds \sum_{n \mathop \le x} \map \psi {x/n} - \paren {x \ln x - x} = \map \OO {\map \ln {x + 1} }$
so:

$\ds \sum_{n \mathop \le x} \map \psi {x/n} = x \ln x - x + \map \OO {\map \ln {x + 1} }$
$\blacksquare$





