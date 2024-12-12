# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Natural_Numbers_such_that_Quotient_is_Power_of_Two/Equivalence_Class_of_Prime

Theorem
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$
We have that $\alpha$ is an equivalence relation.

Let $\eqclass p \alpha$ be the $\alpha$-equivalence class of a prime number $p$.
Then $\eqclass p \alpha$ contains no other prime number other than $p$.


Proof
That $\alpha$ is an equivalence relation is proved in Equivalence Relation on Natural Numbers such that Quotient is Power of Two.

Let $p$ be a prime number whose $\alpha$-equivalence class is $\eqclass p \alpha$.
Aiming for a contradiction, suppose $\eqclass p \alpha$ contains a prime number $q$ such that $q \ne p$.
Then:

$p = 2^n q$
for some $n \in \Z$
If $n = 0$ then $p = q$ which contradicts $q \ne p$.
Thus $n \ne 0$.
Let $n > 0$.
Then:

$p = r q$
for $r \in \Z$ such that $r = 2^n$.
Thus $p$ is a composite number with divisors $q$ and $r$ (and possibly more).
This contradicts the supposition that $p$ is prime.

Let $n < 0$.
Then:

$p = \dfrac q {2^m}$
where $m = -n$ and so $m > 0$.
Thus:

$q = r p$
for $r \in \Z$ such that $r = 2^m$.
Thus $q$ is a composite number with divisors $p$ and $r$ (and possibly more).
This contradicts the supposition that $q$ is prime.

Thus all cases of $n$ lead to a contradiction.
It follows that no $\alpha$-equivalence class can contain more than one prime number.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $5$




