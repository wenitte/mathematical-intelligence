# 

Source: https://proofwiki.org/wiki/Divisor_of_One_of_Coprime_Numbers_is_Coprime_to_Other



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


Proof 1
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


Proof 2
Let $A, B$ be two numbers which are prime to one another.
Let $C$ be any number greater than $1$ which measures $A$.


Suppose $C$ and $B$ are not prime to one another.
Then some number $D$ will measure them both.
We have that $D$ measures $C$ and $C$ measures $A$.
So $D$ measures $A$.
But $D$ also measures $B$.
So $D$ measures $A$ and $B$ which are prime to one another.
By Book $\text{VII}$ Definition $12$: Relatively Prime, this is a contradiction.
Therefore there can be no such $D$ that measures both $B$ and $C$.
That is, $B$ and $C$ are prime to one another.
$\blacksquare$


Historical Note
This proof is Proposition $23$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $16 \ \text {(b)}$




