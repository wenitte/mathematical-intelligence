# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Natural_Numbers_such_that_Quotient_is_Power_of_Two/One_of_Pair_of_Equivalent_Elements_is_Divisor_of_the_Other

Theorem
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$
We have that $\alpha$ is an equivalence relation.

Let $c, d \in \N$ such that $c \mathrel \alpha d$.
Then either:

$c \divides d$
or:

$d \divides c$
where $\divides$ denotes divisibility.


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Natural Numbers such that Quotient is Power of Two.

We are given that $c \mathrel \alpha d$.
Without loss of generality, suppose $c < d$.
If $d < c$ then the same argument holds, mutatis mutandis.

By definition of $\alpha$, we have that:

$c = 2^n d$
for some $n \in \Z$.
As $c < d$ it follows that $2^n > 1$.
That is, $n > 0$ and so $2^n \in \Z$.
So by definition $c$ is a divisor of $d$.
The result follows.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $8$




