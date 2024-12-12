# 

Source: https://proofwiki.org/wiki/Element_of_Unital_Commutative_Algebra_Invertible_iff_not_Contained_in_Maximal_Ideal



Theorem
Let $R$ be a ring.
Let $A$ be an unital commutative $R$-algebra.
Let $a \in A$.

Then $a$ is invertible if and only if there does not exist a maximal ideal $M$ with $a \in M$. 


Proof
Necessary Condition
We prove the contrapositive.
Then, by Proof by Contraposition we will done. 
We will prove that if $a$ is in a maximal ideal then $a$ is not invertible.
Let $M$ be a maximal ideal with $a \in M$. 
Aiming for a contradiction, suppose there exists $b \in A$ with $a b = {\mathbf 1}_A$.
Since $M$ is an ideal, we have $a b \in M$, hence ${\mathbf 1}_A \in M$.
This contradicts that $M$ is proper.
$\Box$

Sufficient Condition
We will prove that if $a$ is not invertible then there exists a maximal ideal $M$ with $a \in M$.
Let:

$I = \set {a m : m \in A}$
We show that $I$ is a proper ideal containing $a$.
That $a \in I$ is immediate since $a {\mathbf 1}_A \in A$.
Let $a x, a y \in I$ and $\lambda, \mu \in R$.
Then we have:

$\mu a x + \lambda a y = a \paren {\mu x + \lambda y} \in I$
So $I$ is a submodule of $A$. 
Further, if $a x \in I$ and $b \in A$, we have:

$\paren {a x} b = a \paren {x b} \in I$
So $I$ is a right ideal.
Since $A$ is commutative, $I$ is an ideal.
From Ideal of Unital Algebra is Modular, $I$ is modular. 
Further, since $a$ is invertible there exists no $m \in A$ such that $a m = {\mathbf 1}_A$.
Hence ${\mathbf 1}_A \not \in \set {a m : m \in A}$.
From Proper Modular Ideal of Algebra is Contained in Maximal Ideal, there then exists a maximal ideal $M$ with $I \subseteq M$. 
Then $a \in M$.
$\blacksquare$





