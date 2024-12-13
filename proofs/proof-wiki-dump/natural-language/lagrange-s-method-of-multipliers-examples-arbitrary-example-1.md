# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Method_of_Multipliers/Examples/Arbitrary_Example_1



Examples of Use of Lagrange's Method of Multipliers
Find the maximum $M$ of the function $u: \R^2 \to \R$ defined as:

$\forall \tuple {x, y} \in \R^2: \map u {x, y} = x y$
subject to the constraint:

$\text C: \quad x + y = 1$


Solution
The maximum $M$ is

$M = \dfrac 1 4$
at $\tuple {x, y} = \tuple {\frac 1 2, \frac 1 2}$.


Proof
We write:

$L = x y + \lambda \paren {x + y - 1}$
Differentiation with respect to $x$, $y$ and $\lambda$ and equating to zero gives:




\(\text {(1)}: \quad\)









\(\ds y + \lambda\)

\(=\)







\(\ds 0\)










\(\text {(2)}: \quad\)









\(\ds x + \lambda\)

\(=\)







\(\ds 0\)










\(\text {(3)}: \quad\)









\(\ds x + y - 1\)

\(=\)







\(\ds 0\)









This leads to:














\(\ds x\)

\(=\)







\(\ds \dfrac 1 2\)





$(2) - (1) + 3$ gives $2 x - 1 = 0$














\(\ds y\)

\(=\)







\(\ds \dfrac 1 2\)





by symmetry and the above














\(\ds \lambda\)

\(=\)







\(\ds -\dfrac 1 2\)





substituting for $x$ or $y$ in $(1)$ or $(2)$



giving:

$u = \dfrac 1 4$
This is the only stationary point for $L$.
$\Box$

We need to confirm it is indeed a maximum for this constraint:

$\text C: \quad x + y = 1$
We check at $\tuple {1, 0}$ and $\tuple {0, 1}$, both of which obey $\text C$, and confirm that $u = 0$ at both points.
So it goes:

up from $0$ at $\tuple {1, 0}$ to $\dfrac 1 4$ at $\tuple {\frac 1 2, \frac 1 2}$
back down again from $\dfrac 1 4$ at $\tuple {\frac 1 2, \frac 1 2}$ to $0$ at $\tuple {0, 1}$.

There is only one stationary point for $L$.
Hence at $\dfrac 1 4$ it must be a maximum.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Lagrange multipliers
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lagrange multipliers




