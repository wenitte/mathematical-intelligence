# 

Source: https://proofwiki.org/wiki/First_Element_of_Geometric_Sequence_not_dividing_Second

Theorem
Let $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers of length $n$.
Let $a_0$ not be a divisor of $a_1$.

Then:

$\forall j, k \in \set {0, 1, \ldots, n}, j \ne k: a_j \nmid a_k$

That is, if the initial term of $P$ does not divide the second, no term of $P$ divides any other term of $P$.

In the words of Euclid:

If there be as many numbers as we please in continued proportion, and the first do not measure the second, neither will any other measure any other.
(The Elements: Book $\text{VIII}$: Proposition $6$)


Proof 1
Let $P_a = \tuple {a_0, a_1, \ldots, a_n}$ be a geometric sequence of natural numbers such that $a_0 \nmid a_1$.
Aiming for a contradiction, suppose $a_0 \divides a_k$ for some $k: 2 \le k \le n$.
Let $b_0, b_1, \ldots, b_k$ be the least natural numbers which have the same common ratio as $a_0, a_1, \ldots, a_k$.
These can be found by means of Proposition $33$ of Book $\text{VII} $: Least Ratio of Numbers.
From Proposition $14$ of Book $\text{VII} $: Proportion of Numbers is Transitive

$a_0 : a_k = b_0 : b_k$
Also:

$a_0 : a_1 = b_0 : b_1$
and so as $a_0 \nmid a_1$ it follows by Book $\text{VII}$ Definition $20$: Proportional:

$b_0 \nmid b_1$
From One Divides all Integers it follows that:

$b_0 \ne 1$
From Proposition $3$ of Book $\text{VIII} $: Construction of Sequence of Numbers with Given Ratios:

$b_0 \perp b_k$
But as:

$a_0 : a_k = b_0 : b_k$
it follows that:

$a_0 \nmid a_k$

Now suppose $a_j \divides a_k$ such that $0 < j < k$.
Let $b_j, \ldots, b_k$ be the least natural numbers which have the same common ratio as $a_j, \ldots, a_k$.
These can be found by means of Proposition $33$ of Book $\text{VII} $: Least Ratio of Numbers.
From Proposition $14$ of Book $\text{VII} $: Proportion of Numbers is Transitive:

$a_j : a_k = b_j : b_k$

The other cases follow similarly.
$\blacksquare$


Proof 2
From Form of Geometric Sequence of Integers, the terms of $P$ are in the form:

$\paren 1: \quad: a_j = k q^j p^{n - j}$
where $p \perp q$.
Let $a_0 \nmid a_1$.
That is:














\(\ds a_0\)

\(\nmid\)







\(\ds a_1\)














\(\ds \leadsto \ \ \)





\(\ds k q^n\)

\(\nmid\)







\(\ds k p q^{n - 1}\)





from $\paren 1$








\(\ds \leadsto \ \ \)





\(\ds \paren {k q^{n - 1} } q\)

\(\nmid\)







\(\ds \paren {k q^{n - 1} } p\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds q\)

\(\nmid\)







\(\ds p\)





Contrapositive of Multiple of Divisor Divides Multiple




Aiming for a contradiction, suppose

$\exists i, j \in \set {0, 1, \ldots, n}, i \ne j: a_i \divides a_j$
Without loss of generality let $i < j$.














\(\ds a_i\)

\(\divides\)







\(\ds a_j\)














\(\ds \leadsto \ \ \)





\(\ds k q^i p^{n - i}\)

\(\divides\)







\(\ds k q^j p^{n - j}\)





from $\paren 1$








\(\ds \leadsto \ \ \)





\(\ds m \paren {k q^j p^{n - i} } q^{j - i}\)

\(=\)







\(\ds \paren {k q^j p^{n - i} } p^{j - i}\)





for some $m \in \Z$








\(\ds \leadsto \ \ \)





\(\ds m q^{j - i}\)

\(=\)







\(\ds p^{j - i}\)





Contrapositive of Multiple of Divisor Divides Multiple








\(\ds \leadsto \ \ \)





\(\ds q^{j - i}\)

\(\divides\)







\(\ds p^{j - i}\)









But we have that $p \perp q$.
From Powers of Coprime Numbers are Coprime:

$q^{j - i} \perp p^{j - i}$
This can happen only when $q = 1$.
This is incompatible with $q \nmid p$.
From this contradiction, the result follows.
$\blacksquare$





