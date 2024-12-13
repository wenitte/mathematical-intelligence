# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_First_Order_System_to_be_Field_for_Functional


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbf y$ be an N-dimensional vector.
Let $J$ be a (real) functional such that:

$\ds J \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$

Let the corresponding momenta and Hamiltonian be:














\(\ds \map {\mathbf p} {x, \mathbf y, \mathbf y'}\)

\(=\)







\(\ds \dfrac {\partial \map F {x, \mathbf y, \mathbf y'} } {\partial \mathbf y'}\)




















\(\ds \map H {x, \mathbf y, \mathbf y'}\)

\(=\)







\(\ds -\map F {x, \mathbf y, \mathbf y'} + \mathbf p \mathbf y'\)










Let the following be a family of boundary conditions:

$(1): \quad \map {\mathbf y'} x = \map \bspsi {x, \mathbf y}$

Then a family of boundary conditions is a field for the functional $J$ if and only if $\forall x \in \closedint a b$ the following self-adjointness and consistency relations hold:














\(\ds \dfrac {\partial \map {p_i} {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial y_k}\)

\(=\)







\(\ds \dfrac {\partial \map {p_k} {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial y_i}\)




















\(\ds \dfrac {\partial \map {\mathbf p} {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial x}\)

\(=\)







\(\ds -\dfrac {\partial \map H {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial \mathbf y}\)










This article, or a section of it, needs explaining.In particular: Why "consistency"?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Necessary Condition
Set $\mathbf y = \map \bspsi {x, \mathbf y}$ in the definition of momenta and Hamiltonian.
Substitute corresponding definitions into the consistency relation.
On the left hand side we have:

$\dfrac {\partial \map {p_i} {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial x} = \dfrac {\partial^2 \map F {x, \mathbf y, \map \bspsi {x,\mathbf y} } } {\partial x \partial y_i'}$
On the right hand side we have:














\(\ds -\dfrac {\partial \map H {x, \mathbf y, \map \bspsi {x, \mathbf y} } } {\partial y_i}\)

\(=\)







\(\ds -\dfrac {\partial \paren {-\map F {x, \mathbf y, \map \bspsi {x, \mathbf y} } + \map {\mathbf p} {x, \mathbf y, \map \bspsi {x, \mathbf y} } \map {\mathbf y'} x} } {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - \frac {\partial^2 F} {\partial y_i \partial \mathbf y'} \bspsi - \frac {\partial F} {\partial \mathbf y'} \frac {\partial \bspsi} {\partial y_i}\)










Together they imply:

$\dfrac {\partial^2 F} {\partial x \partial y_i'} = \dfrac {\partial F} {\partial y_i} - \dfrac {\partial^2 F} {\partial y_i \partial \mathbf y'} \bspsi - \dfrac {\partial F} {\partial \mathbf y'} \dfrac {\partial \bspsi} {\partial y_i}$
By Necessary and Sufficient Condition for Boundary Conditions to be Self-adjoint:

$\dfrac {\partial^2 F} {\partial y_i \partial y_k'} = \dfrac {\partial^2 F} {\partial y_k \partial y_i'}$
Then:

$\dfrac {\partial^2 F} {\partial x \partial y_i'} = \dfrac {\partial F} {\partial y_i} - \dfrac {\partial^2 F} {\partial \mathbf y \partial y_i'} \bspsi - \dfrac {\partial F} {\partial \mathbf y'} \dfrac {\partial \bspsi} {\partial y_i}$
$F$ depends on $\mathbf y'$ only through its third vector variable, thus $\dfrac {\partial F} {\partial y_k'} = F_{y_k'}$:

$(2): \quad \dfrac {\partial F_{y_i'} } {\partial x} = \dfrac {\partial F} {\partial y_i} - \dfrac {\partial F_{y_i'} } {\partial \mathbf y} \bspsi - F_{\mathbf y'} \dfrac {\partial \bspsi} {\partial y_i}$
$F$ depends on $x$ directly through its first variable and indirectly through its third vector variable together with boundary conditions $(1)$:

$\dfrac {\partial F_{y_i'} } {\partial x} = F_{y_i' x} + F_{y_i' \mathbf y'} \bspsi_x$
$F$ depends on $\mathbf y$ directly through its second vector variable and indirectly through its third vector variable together with boundary conditions $(1)$:

$\dfrac {\partial F} {\partial y_i} = F_{y_i} + F_{\mathbf y'} \bspsi_{y_i}$
$\ds \dfrac {\partial F_{y_i'} } {\partial \mathbf y} = F_{y_i' \mathbf y} + \sum_{k \mathop = 1}^N F_{y_i'y_k'} \dfrac {\partial \psi_k} {\partial \mathbf y}$
Substitution of the last three equations into $\paren 2$ leads to:

$\ds F_{y_i' x} + F_{y_i' \mathbf y'} \bspsi_x = F_{y_i} + F_{\mathbf y'} \bspsi_{y_i} - \paren {F_{y_i' \mathbf y} + \sum_{k \mathop = 1}^N F_{y_i'y_k'} \dfrac {\partial \psi_k} {\partial \mathbf y} } \bspsi - F_{\mathbf y'} \dfrac {\partial \bspsi} {\partial y_i}$
which can be simplified to:

$F_{y_i} - F_{y_i' x} - F_{y_i' \mathbf y} \bspsi - F_{y_i' y_j'} \paren {\dfrac {\partial \psi_j} {\partial x} + \dfrac {\partial \psi_j} {\partial y_j} \psi_j} = 0$
By assumption:

$\dfrac {\d y_k} {\d x} = \psi_k$
the second total derivative with respect to $x$ of which yields:














\(\ds \frac {\d^2 y_k} {\d x^2}\)

\(=\)







\(\ds \frac {\d y_k'} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d \psi_k} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \psi_k} {\partial x} + \frac {\partial \psi_k} {\partial \mathbf y} \frac {\d \mathbf y} {\d x}\)





Total Derivative of $\psi_k$ with respect to $x$














\(\ds \)

\(=\)







\(\ds \frac {\partial \psi_k} {\partial x} + \frac {\partial \psi_k} {\partial \mathbf y} \bspsi\)









Hence:

$F_{y_i} - \paren {F_{y_i' x} + F_{y_i' \mathbf y} \dfrac {\d \mathbf y} {\d x} + F_{y_i' \mathbf y'} \dfrac {\d \mathbf y'} {\d x} } = 0$
The second term is just a total derivative with respect to $x$, thus:

$(3): \quad F_{y_i} - \dfrac {\d F_{y_i'} } {\d x} = 0$
Boundary conditions $(1)$ are mutually consistent with respect to equation $(3)$ because they hold $\forall x \in \closedint a b$.
By definition, they are consistent with respect to the functional $J$.
Since the boundary conditions are consistent with respect to $J$ and self-adjoint, by definition they constitute a field of $J$.
$\Box$


Sufficient Condition
By assumption, $(1)$ is a field of $J$.
Hence, $(1)$ is self-adjoint and mutually consistent with respect to $J$.
Thus, by definition, they are consistent with respect to:

$F_{y_i} - \dfrac {\d F_{y_i'} } {\d x} = 0$
The left hand side can be rewritten as follows:














\(\ds F_{y_i} - \frac {\d F_{y_i'} } {\d x}\)

\(=\)







\(\ds F_{y_i} - \paren {F_{y_i' x} + F_{y_i' \mathbf y} \frac {\d \mathbf y} {\d x} + F_{y_i' \mathbf y'} \frac {\d \mathbf y'} {\d x} }\)




















\(\ds \)

\(=\)







\(\ds F_{y_i} - \paren {F_{y_i' x} + F_{y_i' \mathbf y} \bspsi + F_{y_i' \mathbf y'} \paren {\frac {\partial \bspsi} {\partial x} + \sum_{k \mathop = 1}^N \frac {\partial \bspsi} {\partial y_k} \psi_k} }\)





as $\ds \frac {\d \mathbf y'} {\d x} = \frac {\partial \bspsi} {\partial x} + \sum_{k \mathop = 1}^N \frac {\partial \bspsi} {\partial y_k} \psi_k$














\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - F_{\mathbf y'} \bspsi_{y_i} - \paren {\frac {\partial F_{y_i'} } {\partial x} + F_{y_i' \mathbf y} \bspsi + F_{y_i' \mathbf y'} \sum_{k \mathop = 1}^N \frac {\partial \bspsi} {\partial y_k} \psi_k}\)





as $\dfrac {\partial F} {\partial y_i} = F_{y_i} + F_{\mathbf y'} \bspsi_{y_i}$














\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - F_{\mathbf y'} \bspsi_{y_i} - \paren {\frac {\partial F_{y_i'} } {\partial x} + \paren { {\frac {\partial F_{y_i'} } {\partial \mathbf y} - \sum_{k \mathop = 1}^N F_{y_i' y_k'} \frac {\partial \psi_k} {\partial \mathbf y} } } \bspsi + F_{y_i' \mathbf y'} \sum_{k \mathop = 1}^N \frac {\partial \bspsi} {\partial y_k} \psi_k}\)





as $\dfrac {\partial F_{y_i'} } {\partial \mathbf y} = F_{y_i' \mathbf y} + \sum_{k \mathop = 1}^N F_{y_i' y_k'} \frac {\partial \psi_k} {\partial \mathbf y}$














\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - F_{\mathbf y'} \bspsi_{y_i} - \frac {\partial F_{y_i'} } {\partial x} - \frac {\partial F_{y_i'} } {\partial \mathbf y} \bspsi\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - \frac {\partial F} {\partial \mathbf y'} \frac {\partial \bspsi} {\partial y_i} - \frac {\partial^2 F} {\partial x \partial y_i'} - \frac {\partial^2 F} {\partial \mathbf y \partial y_i'} \bspsi\)





as $F$ depends on $\mathbf y'$ only through its third vector variable














\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - \frac {\partial F} {\partial \mathbf y'} \frac {\partial \bspsi} {\partial y_i} - \frac {\partial^2 F} {\partial x \partial y_i'} - \frac {\partial^2 F} {\partial y_i \partial \mathbf y'} \bspsi\)





Necessary and Sufficient Condition for Boundary Conditions to be Self-adjoint














\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - \mathbf p \frac {\partial \mathbf y'} {\partial y_i} - \frac {\partial p_i} {\partial x} - \frac {\partial \mathbf p} {\partial y_i} \mathbf y'\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial F} {\partial y_i} - \frac {\partial p_i} {\partial x} - \frac {\partial \paren {\mathbf p \mathbf y'} } {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds -\frac {\partial p_i} {\partial x} - \frac {\partial \paren {-F + \mathbf p \mathbf y'} } {\partial y_i}\)




















\(\ds \)

\(=\)







\(\ds -\frac {\partial p_i} {\partial x} - \frac {\partial H} {\partial y_i}\)









The right hand side vanishes.

Therefore:

$\dfrac {\partial \mathbf p} {\partial x} = -\dfrac {\partial H} {\partial \mathbf y}$
By Necessary and Sufficient Condition for Boundary Conditions to be Self-adjoint:

$\dfrac {\partial^2 F} {\partial y_i \partial y_k'} = \dfrac {\partial^2 F} {\partial y_k \partial y_i'}$
By definition of canonical variable:

$\mathbf p = \dfrac {\partial F} {\partial \mathbf y'}$
Hence:

$\dfrac {\partial p_k} {\partial y_i} = \dfrac {\partial p_i} {\partial y_k}$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 6.32$: The field of a Functional




