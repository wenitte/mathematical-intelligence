# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Natural_Numbers_such_that_Quotient_is_Power_of_Two/Smallest_Equivalence_Class_with_no_Prime

Theorem
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$
We have that $\alpha$ is an equivalence relation.

Let $\eqclass x \alpha$ denote the $\alpha$-equivalence class of a natural number $x$.
Let $r$ be the smallest natural number such that $\eqclass r \alpha$ contains no prime number.

Then $r = 9$.


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Natural Numbers such that Quotient is Power of Two.

Aiming for a contradiction, suppose $r$ is even.
Then $r = 2 s$ for some $s \in \N$.
Thus $s \in \eqclass r \alpha$ such that $s < r$.
This contradicts the supposition that $r$ is the smallest such natural number.

Thus $r$ has to be the smallest odd composite number, and so:

$r = 3^2 = 9$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $5$




