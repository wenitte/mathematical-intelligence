# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Natural_Numbers_such_that_Quotient_is_Power_of_Two



Theorem
Let $\alpha$ denote the relation defined on the natural numbers $\N$ by:

$\forall x, y \in \N: x \mathrel \alpha y \iff \exists n \in \Z: x = 2^n y$

Then $\alpha$ is an equivalence relation.


Equivalence Class Contains 1 Odd Number
Let $\eqclass n \alpha$ be the $\alpha$-equivalence class of a natural number $n$.
Then $\eqclass n \alpha$ contains exactly $1$ odd number.


Equivalence Class of Prime
Let $\eqclass p \alpha$ be the $\alpha$-equivalence class of a prime number $p$.
Then $\eqclass p \alpha$ contains no other prime number other than $p$.


Smallest Equivalence Class with no Prime
Let $\eqclass x \alpha$ denote the $\alpha$-equivalence class of a natural number $x$.
Let $r$ be the smallest natural number such that $\eqclass r \alpha$ contains no prime number.

Then $r = 9$.


One of Pair of Equivalent Elements is Divisor of the Other
Let $c, d \in \N$ such that $c \mathrel \alpha d$.
Then either:

$c \divides d$
or:

$d \divides c$
where $\divides$ denotes divisibility.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
We have that for all $x \in \N$:

$x = 2^0 x$
and as $0 \in \Z$ it follows that:

$x \mathrel \alpha x$
Thus $\alpha$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds x\)

\(\alpha\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 2^n y\)





for some $n \in \Z$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 2^{-n} x\)





dividing both sides by $2^{-n}$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\alpha\)







\(\ds x\)





as $-n \in \Z$



Thus $\alpha$ is seen to be symmetric.
$\Box$


Transitivity
Let $x \mathrel \alpha y$ and $y \mathrel \alpha z$.
Then by definition:














\(\ds y\)

\(=\)







\(\ds 2^m z\)





for some $m \in \Z$














\(\ds x\)

\(=\)







\(\ds 2^n y\)





for some $n \in \Z$














\(\ds \)

\(=\)







\(\ds 2^n \paren {2^m z}\)




















\(\ds \)

\(=\)







\(\ds 2^{n + m} z\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\alpha\)







\(\ds z\)





as $n + m \in \Z$



Thus $\alpha$ is seen to be transitive.
$\Box$

$\alpha$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $8$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $5$




