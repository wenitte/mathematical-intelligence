# 

Source: https://proofwiki.org/wiki/Product_of_Quaternion_with_Conjugate



Theorem
Let $\mathbf x = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$ be a quaternion.
Let $\overline {\mathbf x}$ be the conjugate of $\mathbf x$.

Then their product is given by:

$\mathbf x \overline {\mathbf x} = \paren {a^2 + b^2 + c^2 + d^2} \mathbf 1 = \overline {\mathbf x} \mathbf x$


Proof
From the definition of quaternion multiplication:














\(\ds \mathbf x \overline {\mathbf x}\)

\(=\)







\(\ds \paren {a^2 - b \paren {-b} - c \paren {-c} - d \paren {-d} } \mathbf 1\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a \paren {-b} + b a + c \paren {-d} - d \paren {-c} } \mathbf i\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a \paren {-c} - b \paren {-d} + c a + d \paren {-b} } \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a \paren {-d} + b \paren {-c} - c \paren {-b} + d a} \mathbf k\)




















\(\ds \)

\(=\)







\(\ds \paren {a^2 + b^2 + c^2 + d^2} \mathbf 1\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-a b + b a - c d + d c} \mathbf i\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-a c + b d + c a - d b} \mathbf j\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-a d - b c + c b + d a} \mathbf k\)










We have that $a, b, c, d \in \R$.
So from Real Multiplication is Commutative, their products commute.
So the terms in $\mathbf i, \mathbf j, \mathbf k$ vanish.

The proof that $\overline {\mathbf x} \mathbf x = \paren {a^2 + b^2 + c^2 + d^2} \mathbf 1$ is similar.

Hence the result.
$\blacksquare$


Also see
Definition:Field Norm of Quaternion


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $9$
1974: Robert Gilmore: Lie Groups, Lie Algebras and Some of their Applications ... (previous) ... (next): Chapter $1$: Introductory Concepts: $1$. Basic Building Blocks: $3$. FIELD
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




