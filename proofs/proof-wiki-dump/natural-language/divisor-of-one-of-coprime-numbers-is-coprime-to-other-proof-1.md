# 

Source: https://proofwiki.org/wiki/Divisor_of_One_of_Coprime_Numbers_is_Coprime_to_Other/Proof_1

Theorem
Let $a, b \in \N$ be numbers such that $a$ and $b$ are coprime:

$a \perp b$
Let $c > 1$ be a divisor of $a$:

$c \divides a$
Then $c$ and $b$ are coprime:

$c \perp b$

In the words of Euclid:

If two numbers be prime to one another, the number which measures the one of them will be prime to the remaining number.
(The Elements: Book $\text{VII}$: Proposition $23$)


Proof
Let $a \perp b$ and $c > 1: c \divides a$.
Aiming for a contradiction, suppose $c \not \perp b$.
So by definition of not coprime:

$\exists d > 1: d \divides c, d \divides b$
But from Divisor Relation is Transitive:

$d \divides c, c \divides a \implies d \divides a$
So $d$ is a common divisor of both $a$ and $b$.
So, by definition, $a$ and $b$ are not coprime.
The result follows by Proof by Contradiction.
$\blacksquare$





