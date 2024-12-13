# 

Source: https://proofwiki.org/wiki/Order_of_Sum_of_Von_Mangoldt_Function_of_n_over_n

Theorem
We have:

$\ds \sum_{n \le x} \frac {\map \Lambda n} n = \ln x + \map \OO 1$
where:

$\Lambda$ is the Von Mangoldt function
$\OO$ is big-$\OO$ notation.


Proof
Consider the sum: 

$\ds \sum_{t \le x} \sum_{m \divides t} \map \Lambda m$
We are summing over the pairs of natural numbers $\tuple {t, m}$ such that $t \le x$ and $m$ divides $t$. 
Since $m$ divides $t$ and $t \le x$, we must have $m \le x$. 
So we can equivalently sum over the pairs of natural numbers $\tuple {m, t}$ such that $m \le x$ and $m$ divides $t \le x$. 
Hence: 

$\ds \sum_{t \le x} \sum_{m \divides t} \map \Lambda m = \sum_{m \le x} \sum_{m \divides t, \, t \le x} \map \Lambda m$
We can then write: 

$\ds \sum_{m \le x} \sum_{m \divides t, \, t \le x} \map \Lambda m = \sum_{m \le x} \paren {\map \Lambda m \paren {\sum_{m \divides t, \, t \le x} 1} }$
From Quantity of Positive Integers Divisible by Particular Integer:

$\ds \sum_{m \divides t, \, t \le x} 1 = \floor {\frac x m}$
From Order of Floor Function, there exists a real function $R_1 : \hointr 1 \infty \to \R$ such that: 

$\ds \sum_{m \divides t, \, t \le x} 1 = \frac x m + \map {R_1} x$
with:

$\map {R_1} x = \map \OO 1$
So that: 

$\ds \sum_{m \le x} \sum_{m \divides t, \, t \le x} \map \Lambda m = \sum_{m \le x} \map \Lambda m \frac x m + \map {R_1} x \sum_{m \le x} \map \Lambda m$
Then, we have, dividing through $x$: 

$\ds \frac 1 x \sum_{m \le x} \sum_{m \divides t, \, t \le x} \map \Lambda m = \sum_{m \le x} \frac {\map \Lambda m} m + \frac {\map {R_1} x} x \map \psi x$
From Arithmetic Average of Second Chebyshev Function, we have: 

$\ds \frac 1 x \sum_{t \le x} \sum_{m \divides t} \map \Lambda m = \frac 1 x \paren {x \ln x - x + \map {R_2} x}$
for some real function $R_2 : \hointr 1 \infty \to \R$ with: 

$\map {R_2} x = \map \OO {\map \ln {x + 1} }$
So, we have: 

$\ds \sum_{m \le x} \frac {\map \Lambda m} m + \frac {\map {R_1} x} x \map \psi x = \ln x - 1 + \frac {\map {R_2} x} x$
We can therefore write: 

$\ds \sum_{m \le x} \frac {\map \Lambda m} m = \ln x + \paren {\frac {\map {R_2} x} x - 1 - \frac {\map {R_1} x} x \map \psi x}$

It now remains to show the bracketed term is $\map \OO 1$. 
From Product of Big-O Estimates, we have: 

$\ds \frac {\map {R_2} x} x = \map \OO {\frac {\map \ln {x + 1} } x}$
From Order of Natural Logarithm Function, we have: 

$\ln x \le x$
for $x \ge 1$. 
So: 

$\ds \frac {\map \ln {x + 1} } x \le \frac {x + 1} x$
Then we have: 

$\ds \frac {x + 1} x = 1 + \frac 1 x \le 2$
So, for $x \ge 1$ we have:

$\ds \frac {\map \ln {x + 1} } x \le 2$
so:

$\ds \frac {\map \ln {x + 1} } x = \map \OO 1$
So we have, from Transitivity of Big-O Estimates: 

$\ds \frac {\map {R_2} x} x = \map \OO 1$
From Second Chebyshev Function is $\map \Theta x$, we have: 

$\ds \map \psi x = \map \OO x$
Combining this with: 

$\map {R_1} x = \map \OO 1$
we have, from Product of Big-O Estimates: 

$\ds \frac {\map {R_1} x} x \map \psi x = \map \OO 1$
So, from Sum of Big-O Estimates, we have: 

$\ds \frac {\map {R_2} x} x - 1 - \frac {\map {R_1} x} x \map \psi x = \map \OO 1$
We therefore obtain: 

$\ds \sum_{m \le x} \frac {\map \Lambda m} m = \ln x + \map \OO 1$
$\blacksquare$





