# 

Source: https://proofwiki.org/wiki/Maximal_Commutative_Subalgebra_of_Unital_Algebra_is_Unital

Theorem
Let $K$ be a field.
Let $A$ be a unital algebra over $K$.
Let $B$ be a commutative subalgebra of $A$ that is maximal with respect to set inclusion.

Then $B$ is unital.


Proof
We show that $B + K {\mathbf 1}_A$ is a subalgebra of $A$.
First we show that $B + K {\mathbf 1}_A$ is a vector subspace of $A$.
Let $x + t {\mathbf 1}_A, y + s {\mathbf 1}_A \in B + K {\mathbf 1}_A$ for $x, y \in B$ and $s, t \in K$.
Let $\lambda \in K$.
We have:

$\paren {x + t {\mathbf 1}_A} + \lambda \paren {y + s {\mathbf 1}_A} = {x + \lambda y} + \paren {t + \lambda s} {\mathbf 1}_A$
Since $B$ is a subalgebra of $A$, it is in particular a vector subspace of $A$.
Then $x + \lambda y \in B$. 
So we have that $\paren {x + t {\mathbf 1}_A} + \lambda \paren {y + s {\mathbf 1}_A} \in B + K {\mathbf 1}_A$.
Hence $B + K {\mathbf 1}_A$ is a vector subspace of $A$.

We now show that $B + K {\mathbf 1}_A$ is closed under multiplication.
Let $x + t {\mathbf 1}_A, y + s {\mathbf 1}_A \in B + K {\mathbf 1}_A$ for $x, y \in B$ and $s, t \in K$.
We have:

$\paren {x + t {\mathbf 1}_A} \paren {y + s {\mathbf 1}_A} = \paren {x y + s x + t y} + t s {\mathbf 1}_A$
Since $B$ is a subalgebra of $A$, we have $x y \in B$.
Since $B$ is a vector subspace of $A$, we have that $x y + s x + t y \in B$.
So, we have:

$\paren {x + t {\mathbf 1}_A} \paren {y + s {\mathbf 1}_A} \in B + K {\mathbf 1}_A$
We conclude that $B + K {\mathbf 1}_A$ is a subalgebra of $A$.

Now note that we have:

$B = B + 0_K {\mathbf 1}_A \subseteq B + K {\mathbf 1}_A$
Since $B$ is maximal with respect to set inclusion, we have:

$B = B + K {\mathbf 1}_A$
Since ${\mathbf 0}_A \in B$, we have that ${\mathbf 1}_A \in B$.
$\blacksquare$





