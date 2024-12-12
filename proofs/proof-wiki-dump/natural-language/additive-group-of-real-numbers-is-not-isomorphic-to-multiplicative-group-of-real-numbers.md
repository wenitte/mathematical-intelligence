# 

Source: https://proofwiki.org/wiki/Additive_Group_of_Real_Numbers_is_Not_Isomorphic_to_Multiplicative_Group_of_Real_Numbers



Theorem
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $\struct {\R_{\ne 0}, \times}$ denote the multiplicative group of real numbers.

Then $\struct {\R, +}$ is not isomorphic to $\struct {\R_{\ne 0}, \times}$.


Proof 1
Consider the element $-1 \in \struct {\R_{\ne 0}, \times}$.
We have that:

$-1 \times -1 = 1$
From Real Multiplication Identity is One it follows that $-1$ is of order $2$ in $\struct {\R_{\ne 0}, \times}$.

From Group Isomorphism Preserves Order of Group Element, it is sufficient to demonstrate that there exists no element of order $2$ in $\struct {\R, +}$.

From Real Addition Identity is Zero, that means finding $x$ such that $x + x = 0$.
But:

$x + x = 0 \implies x = 0$
and as $0$ is the identity of $\struct {\R, +}$, there is indeed no element of order $2$ in $\struct {\R, +}$.
The result follows from Group Isomorphism Preserves Order of Group Element.
$\blacksquare$


Proof 2
From Real Numbers form Field, $\struct {\R, +, \times}$ forms a field.
The result then follows as an example of Additive Group and Multiplicative Group of Field are not Isomorphic.
$\blacksquare$


Proof 3
There are two element of $\struct {\R_{\ne 0}, \times}$ which are self-inverse, that is, $-1$ and $1$.
However, there is only one element of $\struct {\R, +}$ which is self-inverse, that is, $0$.
Aiming for a contradiction, suppose there exists an isomorphism $f: \struct {\R_{\ne 0}, \times} \to \struct {\R, +}$.
Then:














\(\ds 0\)

\(=\)







\(\ds \map f 1\)




















\(\ds \)

\(=\)







\(\ds \map f {-1 \times -1}\)




















\(\ds \)

\(=\)







\(\ds \map f {-1} + \map f {-1}\)




















\(\ds \)

\(=\)







\(\ds 2 \map f {-1}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {-1}\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \map f 1\)









So we have demonstrated that $f$ is not an injection.
Hence $f$ is not a bijection and so not an isomorphism.

It follows from Proof by Contradiction that there can be no such isomorphism.
Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $7$: Homomorphisms: Exercise $5$




