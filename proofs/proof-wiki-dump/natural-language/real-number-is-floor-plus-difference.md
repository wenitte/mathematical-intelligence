# 

Source: https://proofwiki.org/wiki/Real_Number_is_Floor_plus_Difference



Theorem
Let $x \in \R$ be a real number.
Let $\floor x$ be the floor of $x$.

Then:

There exists an integer $n \in \Z$ such that for some $t \in \hointr 0 1$:
$x = n + t$
if and only if:

$n = \floor x$

where:

$\hointr 0 1$ is the real interval half open on the right from $0$ to $1$
$\floor x$ is the floor of $x$


Proof
Sufficient Condition
Let there exist $n \in \Z$ such that $x = n + t$, where $t \in \hointr 0 1$.
We have that $1 - t > 0$.
Thus:

$0 \le x - n < 1$
Thus:

$n \le x < n + 1$
That is, $n$ is the floor of $x$.
$\Box$


Necessary Condition
Let $n = \floor x$.
Let $t = x - \floor x$.
Then $x = n + t$.
From Real Number minus Floor:

$t = x - \floor x \in \hointr 0 1$
and so:

$x = n + t: t \in \hointr 0 1$
$\blacksquare$


Also see
Real Number is Ceiling minus Difference
Definition:Fractional Part


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 10.4 \ \text{(iii)}$: The well-ordering principle




