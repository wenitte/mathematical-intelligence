# 

Source: https://proofwiki.org/wiki/Ideal_Quotient_is_Ideal



Theorem
Let $R$ be a commutative ring with unity.
Let $\mathfrak a, \mathfrak b$ be ideals of $R$.

Then the ideal quotient $\ideal {\mathfrak a : \mathfrak b}$ is indeed an ideal.


Proof
We shall check $(1)$-$(3)$ of Test for Ideal.

(1)
We have:

$0 \mathfrak b = \set 0 \subseteq \mathfrak a$
That is:

$0 \in \ideal {\mathfrak a : \mathfrak b}$
$\Box$

(2)
Let $x,y \in \ideal {\mathfrak a : \mathfrak b}$.
Then:

$x \mathfrak b \subseteq a$
and:

$\paren {-y} \mathfrak b \subseteq a$
Therefore:

$\paren {x - y} \mathfrak b \subseteq x \mathfrak b + \paren {-y} \mathfrak b \subseteq a$
That is:

$x - y \in \ideal {\mathfrak a : \mathfrak b}$
$\Box$

(3)
Let $x \in \ideal {\mathfrak a : \mathfrak b}$.
Let $ r \in R$.
Then:

$\paren{r x} \mathfrak b \subseteq r \paren {x \mathfrak b} \subseteq r \mathfrak a \subseteq \mathfrak a$
That is:

$r x \in \ideal {\mathfrak a : \mathfrak b}$
$\blacksquare$





