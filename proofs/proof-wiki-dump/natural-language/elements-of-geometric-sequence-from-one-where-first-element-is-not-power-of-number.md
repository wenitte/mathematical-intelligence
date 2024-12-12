# 

Source: https://proofwiki.org/wiki/Elements_of_Geometric_Sequence_from_One_where_First_Element_is_not_Power_of_Number



Theorem
Let $G_n = \sequence {a_n}_{0 \mathop \le i \mathop \le n}$ be a geometric sequence of integers.
Let $a_0 = 1$.
Let $k \in \Z_{> 1}$.
Let $a_1$ not be a power of $k$.

Then $a_m$ is not a power of $k$ except for:

$\forall m, k \in \set {1, 2, \ldots, n}: k \divides m$
where $\divides$ denotes divisibility.

In the words of Euclid:

If as many numbers as we please beginning from an unit be in continued proportion, and the number after the unit be not square, neither will any other be square except the third from the unit and all those that leave out one. And, if the the number after the unit be not cube, neither will any other be cube except the fourth from the unit and all those that leave out two.
(The Elements: Book $\text{IX}$: Proposition $10$)


Proof
By Form of Geometric Sequence of Integers from One, the general term of $G_n$ can be expressed as:

$a_j = q^j$
for some $q \in \Z$.

Let $k \nmid m$.
Then by the Division Theorem there exists a unique $q \in \Z$ such that:

$m = k q + b$
for some $b$ such that $0 < b < k$.
Thus:

$a_m = a^{k q} a^b$
which is not a power of $k$.
$\blacksquare$


Historical Note
This proof is Proposition $10$ of Book $\text{IX}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions




