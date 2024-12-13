# 

Source: https://proofwiki.org/wiki/Quaternions_form_Vector_Space_over_Reals



Theorem
Let $\R$ be the set of real numbers.
Let $\H$ be the set of quaternions.

Then the $\R$-module $\H$ is a vector space.


Proof
Recall that Real Numbers form Field.
Thus $\R$ is a division ring a fortiori.
Thus we only need to show that $\R$-module $\H$ is a unitary module, by demonstrating the unitary (left) module axioms:




\((\text {UM} 1)\)  

$:$  





  \(\ds x, y \in \H: \forall \lambda \in \R:\)



   \(\ds \lambda \paren {x + y} \)

  \(\ds = \)  

\(\ds  \paren {\lambda x} + \paren {\lambda y} \)   

  


\((\text {UM} 2)\)  

$:$  





  \(\ds x \in \H: \forall \lambda, \mu \in \R:\)



   \(\ds \paren {\lambda + \mu} x \)

  \(\ds = \)  

\(\ds  \paren {\lambda x} + \paren {\mu x} \)   

  


\((\text {UM} 3)\)  

$:$  





  \(\ds x \in \H: \forall \lambda, \mu \in \R:\)



   \(\ds \paren {\lambda \mu} x \)

  \(\ds = \)  

\(\ds  \lambda \paren {\mu x} \)   

  


\((\text {UM} 4)\)  

$:$  





  \(\ds \forall x \in \H:\)



   \(\ds 1 x \)

  \(\ds = \)  

\(\ds  x \)   

  


As $\lambda, \mu \in \R$ it follows that $\lambda, \mu \in \H$.
Thus from Quaternion Multiplication Distributes over Addition, $(1)$ and $(2)$ immediately follow.

$(3)$ follows from Quaternion Multiplication is Associative.

$(4)$ follows from Multiplicative Identity for Quaternions, as $\mathbf 1 + 0 \mathbf i + 0 \mathbf j + 0 \mathbf k$ is the unity of $\H$.
$\blacksquare$


Also see
Properties of Quaternions


Sources
1974: Robert Gilmore: Lie Groups, Lie Algebras and Some of their Applications ... (previous) ... (next): Chapter $1$: Introductory Concepts: $1$. Basic Building Blocks: $4$. LINEAR VECTOR SPACE: Example $2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quaternion
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quaternion




