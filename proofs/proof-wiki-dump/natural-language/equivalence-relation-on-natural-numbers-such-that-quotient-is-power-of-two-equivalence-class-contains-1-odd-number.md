# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Natural_Numbers_such_that_Quotient_is_Power_of_Two/Equivalence_Class_Contains_1_Odd_Number

Theorem
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$
We have that $\alpha$ is an equivalence relation.

Let $\eqclass n \alpha$ be the $\alpha$-equivalence class of a natural number $n$.
Then $\eqclass n \alpha$ contains exactly $1$ odd number.


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Natural Numbers such that Quotient is Power of Two.

Let $x$ be a natural number whose $\alpha$-equivalence class is $\eqclass x \alpha$.
If $x$ is odd, then $\eqclass x \alpha$ contains that odd number $x$
We have that $x$ is of the form $x = 2^r y$ for some $r \in \Z$ where $y$ is an odd number.
Thus by definition $y \in \eqclass x \alpha$ is an odd number which is contained in $\eqclass x \alpha$.
Thus it has been shown that an arbitrary $\eqclass x \alpha$ contains at least one odd number.

It remains to be demonstrated that $\eqclass x \alpha$ contains no more than $1$ odd number.

Aiming for a contradiction, suppose $\eqclass n \alpha$ contains the odd numbers $p$ and $q$ such that $p \ne q$.
Then:

$p = 2^n q$
for some $n \in \Z$
If $n = 0$ then $p = q$ which contradicts $q \ne p$.
Thus $n \ne 0$.
Let $n > 0$.
Then:

$p = r q$
for $r \in \Z$ such that $r = 2^n$.
Thus $p$ is has $2$ as a divisor.
This contradicts the supposition that $p$ is odd.

Let $n < 0$.
Then:

$p = \dfrac q {2^m}$
where $m = -n$ and so $m > 0$.
Thus:

$q = r p$
for $r \in \Z$ such that $r = 2^m$.
Thus $q$ has $2$ as a divisor.
This contradicts the supposition that $q$ is odd.

Thus all cases of $n$ lead to a contradiction.
It follows that no $\alpha$-equivalence class can contain more than one odd number.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $8$




