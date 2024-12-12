# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Expectation



Theorem
The following definitions of the concept of Expectation are equivalent:

Definition $1$
The expectation of a random variable is the arithmetic mean of its values.

Definition $2$
The expectation of a random variable $X$ is the first moment about the origin of $X$.


Proof
Recall the definition of moment:
Let $X$ be a random variable on some probability space. 
Let $a$ be a real number.
Then the $n$th moment of $X$ about $a$, usually denoted $\map {\mu_n} a$, is defined as: 

$\map {\mu_n} a = \expect {\paren {X - a}^n}$
where $\expect X$ denotes the expectation of $X$.

Hence the first moment about the origin:

$\map \mu 0 = \expect X$
which is precisely the arithmetic mean.
$\blacksquare$





