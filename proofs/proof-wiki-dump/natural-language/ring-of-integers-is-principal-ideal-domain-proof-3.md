# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_is_Principal_Ideal_Domain/Proof_3

Theorem
The integers $\Z$ form a principal ideal domain.


Proof
Let $U$ be an arbitrary ideal of $\Z$.
Let $c$ be a non-zero element of $U$.
Then both $c$ and $-c$ belong to $\ideal a$ and one of them is positive.
Thus $U$ contains strictly positive elements.
Let $b$ be the smallest strictly positive element of $U$.
By the Set of Integers Bounded Below by Integer has Smallest Element, $b$ is guaranteed to exist.
If $\ideal b$ denotes the ideal generated by $b$, then $\ideal b \subseteq U$ because $b\in U$ and $U$ is an ideal.
Let $a \in U$.
By the Division Theorem:

$\exists q, r \in \Z, 0 \le r < b: a = b q + r$
As $a, b \in U$ it follows that so does $r = a - b q$.
By definition of $b$ it follows that $r = 0$.
Thus:

$a = b q \in \ideal b$
and so:

$U \subseteq \ideal b$

From the above:

$U = \ideal b$
It follows by definition that $U$ is a principal ideal of $\Z$.
Recall that $U$ was an arbitrary ideal of $\Z$.
Hence by definition $\Z$ is a principal ideal domain.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.3$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 21$. Ideals: Theorem $38$



