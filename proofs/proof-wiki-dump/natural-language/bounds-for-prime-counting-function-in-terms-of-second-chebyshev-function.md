# 

Source: https://proofwiki.org/wiki/Bounds_for_Prime-Counting_Function_in_terms_of_Second_Chebyshev_Function

Theorem
There exists a real function $R : \hointr 2 \infty \to \R$ such that:

$\ds \frac {\map \psi x} {\ln x} + \map R x \le \map \pi x \le \frac {2 \map \psi x} {\ln x} + \sqrt x$
for all real numbers $x \ge 2$, where:

$\pi$ is the prime counting function
$\psi$ is the second Chebyshev function
$R = \map \OO {\sqrt x \ln x}$ where $\OO$ is big-$\OO$ notation.


Proof
We have, from the definition of the prime counting function: 

$\ds \map \pi x = \sum_{p \le x} 1$
We can write: 

$\ds \sum_{p \le x} 1 = \sum_{p \le \sqrt x} 1 + \sum_{\sqrt x < p \le x} 1$
We have that: 














\(\ds \sum_{p \le \sqrt x} 1\)

\(\le\)







\(\ds \sum_{n \le \sqrt x} 1\)




















\(\ds \)

\(=\)







\(\ds \floor {\sqrt x}\)




















\(\ds \)

\(\le\)







\(\ds \sqrt x\)





Definition of Floor Function



For $1 < \sqrt x < p$, we have from Logarithm is Strictly Increasing:

$0 < \map \ln {\sqrt x} < \ln p$
So:

$\ds \frac {\ln p} {\map \ln {\sqrt x} } > 1$
Then:














\(\ds \sum_{\sqrt x < p \le x} 1\)

\(<\)







\(\ds \sum_{\sqrt x < p \le x} \frac {\ln p} {\map \ln {\sqrt x} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\ln x} \sum_{\sqrt x < p \le x} \ln p\)





Logarithm of Power














\(\ds \)

\(\le\)







\(\ds \frac 2 {\ln x} \sum_{p \le x} \ln p\)




















\(\ds \)

\(\le\)







\(\ds \frac 2 {\ln x} \sum_{k \mathop = 1}^\infty \paren {\sum_{p^k \le x} \ln p}\)





since $\ln p \ge \ln 2 > 0$ from Logarithm is Strictly Increasing














\(\ds \)

\(=\)







\(\ds \frac 2 {\ln x} \map \psi x\)





Definition of Second Chebyshev Function



So:

$\ds \map \psi x \le \sqrt x + \frac 2 {\ln x} \map \psi x$
Now, from Order of Second Chebyshev Function, there exists a real function $r : \hointr 2 \infty \to \R$ such that: 

$\ds \map \psi x = \sum_{p \le x} \ln p + \map r x$
where:

$r = \map \OO {\sqrt x \paren {\ln x}^2}$
For $p \le x$, we have from Logarithm is Strictly Increasing:

$0 < \ln p \le \ln x$
so:

$\ds \frac {\ln p} {\ln x} < 1$
Then:














\(\ds \sum_{p \le x} 1\)

\(>\)







\(\ds \sum_{p \le x} \frac {\ln p} {\ln x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\ln x} \sum_{p \le x} \ln p\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \psi x} {\ln x} + \frac {\map r x} {\ln x}\)









From Product of Big-O Estimates, we have: 

$\dfrac {\map r x} {\ln x} = \map \OO {\sqrt x \ln x}$
So if we take:

$\map R x = \dfrac {\map r x} {\ln x}$
for each $x \ge 2$, we have: 

$\ds \map \pi x = \sum_{p \le x} 1 \ge \frac {\map \psi x} {\ln x} + \map R x$
with $R = \map \OO {\sqrt x \ln x}$. 

So we obtain: 

$\ds \frac {\map \psi x} {\ln x} + \map R x \le \map \pi x \le \frac {2 \map \psi x} {\ln x} + \sqrt x$
with $R = \map \OO {\sqrt x \ln x}$ as required.
$\blacksquare$





