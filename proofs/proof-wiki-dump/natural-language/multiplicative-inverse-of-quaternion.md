# 

Source: https://proofwiki.org/wiki/Multiplicative_Inverse_of_Quaternion

Theorem
Let $\mathbf x = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$ be a quaternion such that $\mathbf x \ne \mathbf 0$.

Then $\mathbf x$ has an inverse $\mathbf x^{-1}$ under the operation of quaternion multiplication:

$\mathbf x^{-1} = \lambda \overline {\mathbf x}$
where:

$\lambda = \dfrac 1 {a^2 + b^2 + c^2 + d^2} \mathbf 1$


Proof
From Multiplicative Identity for Quaternions‎, we need to show that $\lambda \overline{\mathbf x} \mathbf x = \mathbf 1 = \mathbf x \lambda \overline{\mathbf x}$.

From Product of Quaternion with Conjugate we have that:

$\overline{\mathbf x} \mathbf x = \paren {a^2 + b^2 + c^2 + d^2} \mathbf 1$

Using the definition of $\lambda$ from above:














\(\ds \lambda \overline{\mathbf x} \mathbf x\)

\(=\)







\(\ds \paren {\frac 1 {a^2 + b^2 + c^2 + d^2} } \mathbf 1 \paren {a^2 + b^2 + c^2 + d^2} \mathbf 1\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {a^2 + b^2 + c^2 + d^2} {a^2 + b^2 + c^2 + d^2} } \mathbf 1\)





Definition of Quaternion Multiplication














\(\ds \)

\(=\)







\(\ds \mathbf 1\)










Unless all of $a, b, c, d = 0$ we have that $a^2 + b^2 + c^2 + d^2 \ne 0$.
Therefore $\lambda$ is defined for all quaternions not equal to $\mathbf 0$.

It follows from Left Inverse for All is Right Inverse that $\mathbf x \lambda \overline{\mathbf x} = \mathbf 1$.

Hence the result.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $9$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




