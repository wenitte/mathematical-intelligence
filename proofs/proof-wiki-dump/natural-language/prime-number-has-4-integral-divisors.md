# 

Source: https://proofwiki.org/wiki/Prime_Number_has_4_Integral_Divisors



Theorem
Let $p$ be an integer.

Then $p$ is a prime number if and only if $p$ has exactly four integral divisors: $1, -1, p, -p$.


Proof
Necessary Condition
Let $p$ be a prime number from the definition that $p$ has exactly $2$ divisors which are positive integers.
From One Divides all Integers and Integer Divides Itself those positive integers are $1$ and $p$.
Also, we have $-1 \divides p$ and $-p \divides p$ from One Divides all Integers and Integer Divides its Negative.

Aiming for a contradiction, suppose:

$\exists x < 0: x \divides p$
where $x \ne -1$ and $x \ne -p$.
Then:

$\size x \divides x \divides p$
and so $\size x$ is therefore a positive integer other than $1$ and $p$ that divides $p$.
This is a contradiction of the condition for $p$ to be prime.
So $-1$ and $-p$ are the only negative integers that divide $p$.
It follows that $p$ has exactly those four divisors.
$\Box$


Sufficient Condition
Suppose $p$ has the divisors $1, -1, p, -p$.
It follows that $1$ and $p$ are the only positive integers that divide $p$.
Thus $p$ has exactly two divisors which are positive integers.
$\blacksquare$


Also see
Definition:Negative Prime




