# 

Source: https://proofwiki.org/wiki/First_Element_of_Geometric_Sequence_not_dividing_Second/Proof_2

Theorem
Let $P = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers of length $n$.
Let $a_0$ not be a divisor of $a_1$.

Then:

$\forall j, k \in \set {0, 1, \ldots, n}, j \ne k: a_j \nmid a_k$

That is, if the initial term of $P$ does not divide the second, no term of $P$ divides any other term of $P$.

In the words of Euclid:

If there be as many numbers as we please in continued proportion, and the first do not measure the second, neither will any other measure any other.
(The Elements: Book $\text{VIII}$: Proposition $6$)


Proof
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


Historical Note
This proof is Proposition $6$ of Book $\text{VIII}$ of Euclid's The Elements. It is the converse of Proposition $7$: First Element of Geometric Sequence that divides Last also divides Second. 





