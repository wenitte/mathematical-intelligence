# 

Source: https://proofwiki.org/wiki/Algebra_from_Cayley-Dickson_Construction_is_not_Real_Star-Algebra

Theorem
Let $A$ be a $*$-algebra.
Let $A'$ be constructed from $A$ using the Cayley-Dickson construction.

Then $A'$ is not a real $*$-algebra.


Proof
Let the conjugation operator on $A$ be $*$.
Aiming for a contradiction, suppose $A'$ is a real $*$-algebra whose conjugation operator is $*'$.
Then by definition:

$\forall a \in A': {a^*}' = a$

Let $a = \tuple {x, y} \in A'$.
Then by definition of the Cayley-Dickson construction:

$x, y \in A$
By definition of the conjugation operator:

${\tuple {x, y}^*}' = \tuple {x^*, -y}$
So for ${a^*}' = a$ it must be that $x = x^*$ and $y = -y$ from definition of Equality of Ordered Pairs.
That is, $y = 0$.

But $A'$ is a $*$-algebra, which is by definition a unitary division algebra.
So $\exists y \in A: y = 1 \ne 0$.
From that contradiction, it follows that $A'$ can not be a real $*$-algebra.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 2.2 The Cayley-Dickson Construction: Proposition $1$




