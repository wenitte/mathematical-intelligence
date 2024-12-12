# 

Source: https://proofwiki.org/wiki/Elements_of_Geometric_Sequence_from_One_where_First_Element_is_Power_of_Number



Theorem
Let $G_n = \sequence {a_n}_{0 \mathop \le i \mathop \le n}$ be a geometric sequence of integers.
Let $a_0 = 1$.
Let $m \in \Z_{> 0}$.
Let $a_1$ be the $m$th power of an integer.

Then all the terms of $G_n$ are $m$th powers of  integers.

In the words of Euclid:

If as many numbers as we please beginning from an unit be in continued proportion, and the number after the unit be square, all the rest will also be square. And if the the number after the unit be cube, all the rest will also be cube.
(The Elements: Book $\text{IX}$: Proposition $9$)


Proof
By Form of Geometric Sequence of Integers from One, the general term of $G_n$ can be expressed as:

$a_j = q^j$
for some $q \in \Z$.

Let $a_2 = k^m$.
By definition of geometric sequence:

$\forall j \in \set {1, 2, \ldots, n}: a_j = r a_{j - 1}$
where $r$ is the common ratio.
This holds specifically for $j = 1$:

$k^m = r \cdot 1$
Thus:














\(\ds a_j\)

\(=\)







\(\ds \paren {k^m}^j\)




















\(\ds \)

\(=\)







\(\ds k^{m j}\)




















\(\ds \)

\(=\)







\(\ds \paren {k^j}^m\)









Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $9$ of Book $\text{IX}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions




