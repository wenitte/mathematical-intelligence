# 

Source: https://proofwiki.org/wiki/Group_Isomorphism/Examples/Order_2_Matrices_with_1_Real_Variable



Example of Group Isomorphism
Let $S$ be the set defined as:

$S := \set {\begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}: t \in \R}$
Consider the algebraic structure $\struct {S, \times}$, where $\times$ is used to denote (conventional) matrix multiplication.

Then $\struct {S, \times}$ is isomorphic to the additive group of real numbers $\struct {\R, +}$.


Proof
Group Axiom $\text G 0$: Closure
Let $t_1, t_2 \in \R$.
We have that:














\(\ds \begin{bmatrix} 1 & t_1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & t_2 \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 \times 1 + t_1 \times 0 & 1 \times t_2 + t_1 \times 1 \\ 0 \times 1 + 1 \times 0 & 0 \times t_2 + 1 \times 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & t_1 + t_2 \\ 0 & 1 \end{bmatrix}\)









As $t_1 + t_2 \in \R$, it follows that $\struct {S, \times}$ is closed.


Group Axiom $\text G 1$: Associativity
By Matrix Multiplication is Associative it follows that $\struct {S, \times}$ is a semigroup.


Group Axiom $\text G 2$: Existence of Identity Element
Then from the above:














\(\ds \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}\)




















\(\ds \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}\)









demonstrating that $\struct {S, \times}$ has an identity $\begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}$.


Group Axiom $\text G 3$: Existence of Inverse Element
Then, also from above:














\(\ds \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & -t \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 & t - t \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)




















\(\ds \begin{bmatrix} 1 & -t \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 & t - t \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)









demonstrating that $\begin{bmatrix} 1 & t \\ 0 & 1 \end{bmatrix}$ has an inverse $\begin{bmatrix} 1 & -t \\ 0 & 1 \end{bmatrix}$.

So all the group axioms are fulfilled, and $\struct {S, \times}$ is seen to be a group.
$\Box$


Isomorphism
Let $\phi: \struct {\R, +} \to \struct {S, \times}$ be the mapping defined as:

$\forall x \in \R: \map \phi x = \begin{bmatrix} 1 & r \\ 0 & 1 \end{bmatrix}$

We have that:














\(\ds \map \phi x \map \phi y\)

\(=\)







\(\ds \begin{bmatrix} 1 & x \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & y \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & x + y \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x + y}\)









demonstrating that $\phi$ is a group homomorphism.

Then:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \begin{bmatrix} 1 & x \\ 0 & 1 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} 1 & y \\ 0 & 1 \end{bmatrix}\)




















\(\ds x\)

\(=\)







\(\ds y\)









demonstrating that $\phi$ is an injection.

Finally:














\(\ds \mathbf x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \R: \, \)



\(\ds \mathbf x\)

\(=\)







\(\ds \begin{bmatrix} 1 & x \\ 0 & 1 \end{bmatrix}\)









demonstrating that $\phi$ is a surjection.

Thus $\phi$ is a group homomorphism which is both injective and surjective.
That is, $\phi$ is by definition a group isomorphism.
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $2$




