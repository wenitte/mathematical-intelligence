# 

Source: https://proofwiki.org/wiki/Principal_Ideals_of_Integers

Theorem
Let $J$ be a non-zero ideal of $\Z$.
Then $J = \ideal b$ where $b$ is the smallest strictly positive integer belonging to $J$.


Proof
It follows from Ring of Integers is Principal Ideal Domain that $J$ is a principal ideal.

Let $c \in J, c \ne 0$.
Then $-c \in J$ and by Natural Numbers are Non-Negative Integers, exactly one of them is strictly positive.
Thus $J$ does actually contain strictly positive elements, so that's a start.

Let $b$ be the smallest strictly positive element of $J$.
This exists because Natural Numbers are Non-Negative Integers and the Well-Ordering Principle.
By definition of a principal ideal, we have $\ideal b \subseteq J$ as $b \in J$.
We need to show that $J \subseteq \ideal b$.
So, let $a \in J$.
By the Division Theorem, $\exists q, r: a = b q + r, 0 \le r < b$.
As $a, b \in J$, then so does $r = a - b q$.
So, by the definition of $b$, it follows that $r = 0$.
Thus $a = b q \in \ideal b$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.3$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 59.2$ Principal ideals in a commutative ring with a one




