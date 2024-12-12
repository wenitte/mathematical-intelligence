# 

Source: https://proofwiki.org/wiki/Elements_of_Geometric_Sequence_from_One_which_are_Powers_of_Number



Theorem
Let $G_n = \sequence {a_n}_{0 \mathop \le i \mathop \le n}$ be a geometric sequence of integers.
Let $a_0 = 1$.
Then:

$\forall m, k \in \set {1, \ldots, n}: k \divides m \implies a_m$ is a power of $k$
where $\divides$ denotes divisibility.

In the words of Euclid:

If as many numbers as we please beginning from an unit be in continued proportion, the third from the unit will be square, as will those which successively leave out one; the fourth will be cube, as will also all those which leave out two; and the seventh will be at once cube and square, as will also those which leave out five.
(The Elements: Book $\text{IX}$: Proposition $8$)


Proof
By Form of Geometric Sequence of Integers from One, the general term of $G_n$ can be expressed as:

$a_j = q^j$
for some $q \in \Z$.

Let $k, m \in \set {1, 2, \ldots, n}$ such that $k \divides m$.
By definition of divisibility:

$\exists r \in \Z: m = r k$
Then:














\(\ds a_m\)

\(=\)







\(\ds q^m\)




















\(\ds \)

\(=\)







\(\ds q^{r k}\)




















\(\ds \)

\(=\)







\(\ds \paren {q^r}^k\)









That is, $a_m$ is a power of $k$.
$\blacksquare$


Historical Note
This proof is Proposition $8$ of Book $\text{IX}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions




