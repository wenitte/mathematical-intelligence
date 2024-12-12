# 

Source: https://proofwiki.org/wiki/Closed_Ideal_of_C*-Algebra_is_Self-Adjoint

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $I$ be a closed ideal of $A$.

Then for each $x \in I$, we have $x^\ast \in I$. 
That is, $I$ is self-adjoint.


Proof 1
From Intersection of Ideal of *-Algebra with its Star is Self-Adjoint Ideal, $I \cap I^\ast$ is a self-adjoint ideal of $A$, hence $\ast$-subalgebra of $A$.
From Star of Closed Subset of Banach *-Algebra is Closed, $I^\ast$ is closed. 
Hence as the intersection of closed sets, $I \cap I^\ast$ is closed.
From Closed *-Subalgebra of C*-Algebra is C*-Algebra, $I \cap I^\ast$ is a $\text C^\ast$-algebra.
From Existence of Approximate Identity of C*-Algebra arising from Dense Ideal, there exists an approximate identity for $I \cap I^\ast$.
That is, there exists a directed set $\struct {\Lambda, \preceq}$ and net $\family {e_\lambda}_{\lambda \mathop \in \Lambda}$ in $I \cap I^\ast$ such that:

$\family {x e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x$
for all $x \in I \cap I^\ast$.
Now take $x \in I$.
We have, for each $\lambda \in \Lambda$:














\(\ds \norm {x^\ast - x^\ast e_\lambda}^2\)

\(=\)







\(\ds \norm {\paren {x - e_\lambda x} \paren {x^\ast - x^\ast e_\lambda} }\)





Definition of C*-Algebra, Definition of Involution on Algebra














\(\ds \)

\(=\)







\(\ds \norm {x x^\ast - e_\lambda x x^\ast - x x^\ast e_\lambda - e_\lambda x x^\ast e_\lambda}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x x^\ast - e_\lambda x x^\ast} + \norm {\paren {x x^\ast - e_\lambda x x^\ast} e_\lambda}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x x^\ast - e_\lambda x x^\ast} + \norm {x x^\ast - e_\lambda x x^\ast}\)





from Norm of Element of Approximate Identity of C*-Algebra is Less Than or equal to One, we have $\norm {e_\lambda} \le 1$ for each $\lambda \in \Lambda$














\(\ds \)

\(=\)







\(\ds 2 \norm {x x^\ast - x x^\ast e_\lambda}\)





Definition of Banach *-Algebra, $(\text C^\ast 3)$ in Definition of Involution on Algebra, Product of Element in *-Star Algebra with its Star is Hermitian



Since $I$ is an ideal, we have $x x^\ast \in I$.
Further since $x x^\ast$ is Product of Element in *-Star Algebra with its Star is Hermitian, we have $x x^\ast \in I^\ast$. 
So $x x^\ast \in I \cap I^\ast$.
Let $\epsilon > 0$. 
Since $\family {e_\lambda}_{\lambda \mathop \in I}$ is an approximate identity for $I \cap I^\ast$, there exists $b \in \Lambda$ such that $\lambda \succeq b$ implies that:

$\norm {x x^\ast - x x^\ast e_\lambda} < \dfrac {\epsilon^2} 2$
hence:

$\norm {x^\ast - x^\ast e_\lambda} < \epsilon$
Since $\epsilon > 0$ was arbitrary, the net $\family {x^\ast e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $x^\ast$. 
Further, since $e_\lambda \in I$ for each $\lambda \in \Lambda$, we have $x^\ast e_\lambda \in I$ for each $\lambda \in \Lambda$. 
Since $I$ is closed, we have $x^\ast \in I$ from Characterization of Closedness in terms of Nets.
Hence for $x \in I$ we have $x^\ast \in I$, and $I$ is therefore self-adjoint.
$\blacksquare$


Proof 2
Let $x \in I$.
Since $I$ is an ideal, we have $x^\ast x \in I$. 
From Generalized Polar Decomposition in C*-Algebra, there exists $u \in A$ such that $x = u \paren {\paren {x^\ast x}^{1/2} }^{1/2}$.
From Power of Power of Positive Element of Unital C*-Algebra, we have $x = u \paren {x^\ast x}^{1/4}$. 
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, $\paren {x^\ast x}^{1/4}$ is positive.
Hence we have by $(\text C^\ast 3)$ in the definition of a $\text C^\ast$-algebra:

$x^\ast = \paren {x^\ast x}^{1/4} u^\ast$
From Real-Valued Continuous Function Vanishing at Zero applied to Hermitian Element of Closed Ideal of Unital C*-Algebra is contained in Ideal, we have $\paren {x^\ast x}^{1/4} \in I$.
Hence since $I$ is an ideal, we have $x^\ast = \paren {x^\ast x}^{1/4} u^\ast \in I$.
Hence if $x \in I$ then $x^\ast \in I$.
So $I$ is self-adjoint.
$\blacksquare$





