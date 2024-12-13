# 

Source: https://proofwiki.org/wiki/Second_Chebyshev_Function_is_Theta_of_x

Theorem
We have: 

$\map \psi x = \map \Theta x$
where:

$\Theta$ is $\Theta$ notation
$\psi$ is the second Chebyshev function.


Proof
We show that: 

$\map \psi x = \map \OO x$
and:

$x = \map \OO {\map \psi x}$
where $\OO$ denotes big-$\OO$ notation.

Note that: 














\(\ds \sum_{n \mathop \le x} \map \psi {\frac x n} - 2 \sum_{n \mathop \le x/2} \map \psi {\frac {\frac x 2} n}\)

\(=\)







\(\ds x \ln x - x - 2 \paren {\frac x 2 \ln \frac x 2 - \frac x 2} + \map \OO {\map \ln {x + 1} }\)





Order of Second Chebyshev Function, Sum of Big-O Estimates














\(\ds \)

\(=\)







\(\ds x \ln x - x \map \ln {\frac x 2} + \map \OO {\map \ln {x + 1} }\)




















\(\ds \)

\(=\)







\(\ds x \ln 2 + \map \OO {\map \ln {x + 1} }\)





Difference of Logarithms



Note that: 














\(\ds \sum_{n \mathop \le x/2} \map \psi {\frac {\frac x 2} n}\)

\(=\)







\(\ds \sum_{n \mathop \le x/2} \map \psi {\frac x {2 n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop \le x, \, \text {$m$ even} } \map \psi {\frac x m}\)









Clearly we have: 

$\ds \sum_{n \mathop \le x} \map \psi {\frac x n} = \sum_{m \mathop \le x, \, \text {$m$ odd} } \map \psi {\frac x m} + \sum_{m \mathop \le x, \, \text {$m$ even} } \map \psi {\frac x m}$
So:














\(\ds \sum_{n \mathop \le x} \map \psi {\frac x n} - 2 \sum_{n \mathop \le x/2} \map \psi {\frac {\frac x 2} n}\)

\(=\)







\(\ds \paren {\sum_{n \mathop \le x} \map \psi {\frac x n} - \sum_{n \mathop \le x/2} \map \psi {\frac {\frac x 2} n} } - \sum_{n \mathop \le x/2} \map \psi {\frac {\frac x 2} n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m}\)









From Second Chebyshev Function is Increasing: 

$\map \psi {\dfrac x n} - \map \psi {\dfrac x m} \ge 0$
when $n < m$. 
Suppose that $\floor x$ is an odd integer.
Then we have: 














\(\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m}\)

\(=\)







\(\ds \paren {\map \psi x + \map \psi {x/3} + \cdots + \map \psi {\frac x {\floor x} } } - \paren {\map \psi {x/2} + \map \psi {x/4} + \cdots + \map \psi {\frac x {\floor x - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \psi x - \map \psi {x/2} } + \paren {\map \psi {x/3} - \map \psi {x/4} } + \cdots + \paren {\map \psi {\frac x {\floor x - 2} } - \map \psi {\frac x {\floor x - 1} } } + \map \psi {\frac x {\floor x} }\)




















\(\ds \)

\(\ge\)







\(\ds \map \psi x - \map \psi {x/2} + \map \psi {\frac x {\floor x} }\)





Second Chebyshev Function is Increasing














\(\ds \)

\(\ge\)







\(\ds \map \psi x - \map \psi {x/2}\)









Similarly, if $\floor x$ is a even integer, we have: 














\(\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m}\)

\(=\)







\(\ds \paren {\map \psi x - \map \psi {x/2} } + \paren {\map \psi {x/3} - \map \psi {x/4} } + \cdots + \paren {\map \psi {\frac x {\floor x - 1} } - \map \psi {\frac x {\floor x} } }\)




















\(\ds \)

\(\ge\)







\(\ds \map \psi x - \map \psi {x/2}\)





Second Chebyshev Function is Increasing



We now show that: 

$\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m} = \map \OO x$
From the definition of big-$\OO$ notation, there exists some $x_1 \in \R$ and positive real number $C$ such that: 

$\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m} \le x \ln 2 + C \map \ln {x + 1}$
for $x \ge x_1$.
Then we have: 














\(\ds x \ln 2 + C \map \ln {x + 1}\)

\(\le\)







\(\ds x \ln 2 + C \map \ln {2 x}\)




















\(\ds \)

\(=\)







\(\ds x \ln 2 + C \ln 2 + C \ln x\)





Logarithm is Strictly Increasing



As shown in Order of Natural Logarithm Function, for $x \ge 1$ we have: 

$C \ln x \le C x$
Let:

$x_0 = \max \set {x_1, 1}$
So for $x \ge x_0$, we have:














\(\ds x \ln 2 + C \ln 2 + C \ln x\)

\(=\)







\(\ds x \paren {C + \ln 2} + C \ln 2\)




















\(\ds \)

\(\le\)







\(\ds x \paren {C + \paren {C + 1} \ln 2}\)





since $x \ge 1$



Let:

$A = C + \paren {C + 1} \ln 2$
So, for $x \ge x_0$ we have: 

$0 \le \map \psi x - \map \psi {x/2} \le A x$
So, for $x \ge 2^{k - 1} x_0$, we have: 

$0 \le \map \psi {\dfrac x {2^{k - 1} } } - \map \psi {\dfrac x {2^k} } \le \dfrac {A x} {2^{k - 1} }$
Note that for $x < 2$, we have: 

$\map \psi x = 0$
so for:

$k \ge \dfrac {\ln x} {\ln 2}$
we have: 

$\map \psi {\dfrac x {2^{k - 1} } } - \map \psi {\dfrac x {2^k} } = 0$
Set:

$N = \floor {\dfrac {\ln x} {\ln 2} } + 1$
So we have, for $x \ge 2^{N - 1} x_0$:














\(\ds \map \psi x\)

\(=\)







\(\ds \sum_{k \mathop = 1}^N \paren {\map \psi {\frac x {2^{k - 1} } } - \map \psi {\frac x {2^k} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^N \frac {A x} {2^{k - 1} }\)




















\(\ds \)

\(\le\)







\(\ds A x \sum_{k \mathop = 0}^\infty \frac 1 {2^k}\)




















\(\ds \)

\(=\)







\(\ds 2 A x\)





Sum of Infinite Geometric Progression



So by the definition of big-O notation, we have: 

$\map \psi x = \map \OO x$
Suppose that $\floor x$ is an odd integer.
Then:














\(\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m}\)

\(=\)







\(\ds \paren {\map \psi x + \map \psi {x/3} + \cdots + \map \psi {\frac x {\floor x} } } - \paren {\map \psi {x/2} + \map \psi {x/4} + \cdots + \map \psi {\frac x {\floor x - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map \psi x + \paren {-\map \psi {x/2} + \map \psi {x/3} } + \paren {-\map \psi {x/4} + \map \psi {x/5} } + \cdots + \paren {-\map \psi {\frac x {\floor x - 1} } + \map \psi {\frac x {\floor x} } }\)




















\(\ds \)

\(\le\)







\(\ds \map \psi x\)





Second Chebyshev Function is Increasing



Similarly if $\floor x$ is an even integer, we have: 














\(\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m}\)

\(=\)







\(\ds \paren {\map \psi x - \map \psi {x/2} } + \paren {\map \psi {x/3} - \map \psi {x/4} } + \cdots + \paren {\map \psi {\frac x {\floor x - 1} } - \map \psi {\frac x {\floor x} } }\)




















\(\ds \)

\(=\)







\(\ds \map \psi x + \paren {-\map \psi {x/2} + \map \psi {x/3} } + \cdots + \paren {-\map \psi {\frac x {\floor x - 2} } + \map \psi {\frac x {\floor x - 1} } } - \map \psi {\frac x {\floor x} }\)




















\(\ds \)

\(\le\)







\(\ds \map \psi x - \map \psi {\frac x {\floor x} }\)




















\(\ds \)

\(\le\)







\(\ds \map \psi x\)





Second Chebyshev Function is Increasing



Since: 

$\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m} = x \ln 2 + \map \OO {\map \ln {x + 1} }$
From the definition of big-$\OO$ notation, there exists a positive real number $C$ and $x_2 \in \R$ such that: 

$\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m} \ge x \ln 2 - C \map \ln {x + 1}$
for $x \ge x_2$.
Without loss of generality assume that $C > 1$. 
We then have for $x \ge \max \set {x_2, 1}$: 














\(\ds x \ln 2 - C \map \ln {x + 1}\)

\(\ge\)







\(\ds x \ln 2 - C \map \ln {2 x}\)




















\(\ds \)

\(=\)







\(\ds x \ln 2 - C \map \ln 2 - C \map \ln x\)





Sum of Logarithms














\(\ds \)

\(\ge\)







\(\ds x \ln 2 - C \map \ln 2 - x^{1/C}\)





Order of Natural  Logarithm Function



We show that for sufficiently large $x$ we have: 

$x \ln 2 - x^{1/C} \ge \dfrac {\ln 2} 2 x$
This inequality holds if and only if: 

$\dfrac {\ln 2} 2 \ge x^{\dfrac 1 C - 1}$
That is: 

$x^{1 - \dfrac 1 C} \ge \dfrac 2 {\ln 2}$
Since $C > 1$, we have:

$1 - \dfrac 1 C > 0$
and so: 

$\paren {1 - \dfrac 1 C} \ln x \ge \map \ln {\dfrac 2 {\ln 2} }$
That is: 

$x \ge \map \exp {\dfrac {\map \ln {\frac 2 {\ln 2} } } {1 - \frac 1 C} } = x_3$
Then for $x \ge \max \set {x_3, x_2, 1}$, we have: 

$x \ln 2 - C \ln 2 - x^{1/C} \ge x \dfrac {\ln 2} 2 - C \ln 2$
If also $x \ge 4 C$, we have: 

$x \dfrac {\ln 2} 2 - C \ln 2 \ge x \dfrac {\ln 2} 4$
Let:

$x_4 = \max \set {x_3, x_2, 4 C}$
Then for $x \ge x_4$, we have: 

$\ds \sum_{m \mathop \le x, \, m \text { odd} } \map \psi {\frac x m} - \sum_{m \mathop \le x, \, m \text { even} } \map \psi {\frac x m} \ge x \frac {\ln 2} 4$
So:

$\map \psi x \ge x \dfrac {\ln 2} 4$
for $x \ge x_4$.
That is: 

$\dfrac 4 {\ln 2} \map \psi x \ge x$
From the definition of big-$\OO$ notation, we have: 

$x = \map \OO {\map \psi x}$
Since also: 

$\map \psi x = \map \OO x$
we have: 

$\map \psi x = \map \Theta x$
$\blacksquare$





