# 

Source: https://proofwiki.org/wiki/LCM_iff_Divides_All_Common_Multiples



Theorem
Let $a, b \in \Z$ such that $a b \ne 0$.
Let $m \in \Z: d > 0$.

Then $m = \lcm \set {a, b}$ if and only if:

$(1): \quad a \divides m \land b \divides m$
$(2): \quad a \divides n \land b \divides n \implies m \divides n$

That is, in the set of positive integers, $m$ is the LCM of $a$ and $b$ if and only if $m$ is a common multiple of $a$ and $b$, and $m$ also divides any other common multiple of $a$ and $b$.


Proof
Necessary Condition
Suppose $m = \lcm \set {a, b}$.
Then from LCM Divides Common Multiple:

$a \divides n \land b \divides n \implies m \divides n$
$\Box$


Sufficient Condition
Now suppose $a \divides m \land b \divides m$, and $m$ also divides any $n$ that $a$ and $b$ also divide.
From $a \divides m \land b \divides m$, we see that $m$ is a common multiple of $a$ and $b$.
From $a \divides n \land b \divides n$, we see that $n$ is also a common multiple of $a$ and $b$.
Also, we have that $m \divides n$.
From Absolute Value of Integer is not less than Divisors, we see that (in the domain of $\Z_{>0}$) $m \divides n \implies m \le n$.
Thus, whatever $m$ may be, it is no larger than $n$.
Therefore, $m$ must be the least of all the common multiples of $a$ and $b$.
$\blacksquare$





