# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Algorithm/Proof_1

Theorem
The Continued Fraction Algorithm is a method for finding the continued fraction expansion for any irrational number to as many partial denominators as desired.

Let $x_0$ be the irrational number in question.
The steps are:




\(\text {(1)}: \quad\)









\(\ds k\)

\(=\)







\(\ds 0\)





initialise




\(\text {(2)}: \quad\)









\(\ds a_k\)

\(=\)







\(\ds \floor {x_k}\)





the $k$th partial denominator (that is, $a_k$) is the integer part of $x_k$




\(\text {(3)}: \quad\)









\(\ds x_{k + 1}\)

\(=\)







\(\ds \frac 1 {x_k - a_k}\)





the subsequent term is the reciprocal of the fractional part of $x_k$




\(\text {(4)}: \quad\)









\(\ds k\)

\(=\)







\(\ds k + 1\)





increase $k$ by $1$ then go to step $(2)$




Then $x_0 = \sqbrk {a_0, a_1, a_2, \ldots}$ is the required continued fraction expansion.


Proof
Let $x_0$ be an irrational number.
We seek $a_0, a_1, \ldots \in \Z$ such that $x_0 = \sqbrk {a_0, a_1, \ldots}$.
From Bound for Difference of Limit of Simple Infinite Continued Fraction with Convergent:

$x_0$ lies strictly between any successive pair of its convergents.
So, for a start, it has to lie between $C_0 = a_0$ and $C_1 = a_0 + \dfrac 1 {a_1}$.
In particular, as $a_1 \ge 1$, we know that $a_0 < x_0 < a_0 + 1$.
So:

$a_0 = \floor {x_0}$
where $\floor {x_0}$ is the floor function of $x_0$.
We now write:

$x_0 = \floor {x_0} + \fractpart {x_0}$
where $\fractpart {x_0}$ is the fractional part of $x_0$.
Then:

$x_0 = a_0 + \cfrac 1 {a_1 + \cfrac 1 {a_2 + \cfrac 1 \ddots} } = \floor {x_0} + \cfrac 1 {a_1 + \cfrac 1 {a_2 + \cfrac 1 \ddots} } = \floor {x_0} + \dfrac 1 {\sqbrk {a_1, a_2, a_3, \ldots} }$

From Real Number minus Floor:

$0 \le \fractpart {x_0} < 1$
But because $x_0$ is irrational:

$\fractpart {x_0} \ne 0$
So:

$0 < \fractpart {x_0} < 1$

So:

$\sqbrk {a_1, a_2, a_3, \ldots} = \dfrac 1 {x_0 - \floor {x_0} } = \dfrac 1 {\fractpart {x_0} }$

Now we write:

$x_1 = \dfrac 1 {\fractpart {x_0} }$
Then:

$x_1 = \sqbrk {a_1, a_2, a_3, \ldots}$
As $\fractpart {x_0} < 1$ we have that:

$x_1 = \dfrac 1 {\fractpart {x_0} } > 1$
So $x_1$ is an irrational number greater than $a_1$ which is positive.
Repeating the argument leads to $a_1 = \floor {x_1}$ and so $a_1$ is determined uniquely from $x_1$ and hence from $x_0$.
We continue on in the same manner, ad infinitum:

$x_{k + 1} = \dfrac 1 {\fractpart {x_k} }$ and so $x_{k + 1} = \sqbrk {a_{k + 1}, a_{k + 2}, a_{k + 3}, \ldots}$
Hence the result.
$\blacksquare$




