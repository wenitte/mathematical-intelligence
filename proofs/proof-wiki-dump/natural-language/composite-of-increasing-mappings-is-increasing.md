# 

Source: https://proofwiki.org/wiki/Composite_of_Increasing_Mappings_is_Increasing

Theorem
Let $\struct {S_1, \preceq_1}$, $\struct {S_2, \preceq_2}$ and $\struct {S_3, \preceq_3}$ be ordered sets.
Let:

$\phi: \struct {S_1, \preceq_1} \to \struct {S_2, \preceq_2}$
and:

$\psi: \struct {S_2, \preceq_2} \to \struct {S_3, \preceq_3}$
be increasing mappings.

Then $\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is also an increasing mapping.


Proof
By definition of composition of mappings:

$\map {\paren {\psi \circ \phi} } x = \map \psi {\map \phi x}$

As $\phi$ is an increasing mapping, we have:

$\forall x_1, y_1 \in S_1: x_1 \preceq_1 y_1 \implies \map \phi {x_1} \preceq_2 \map \phi {y_1}$

As $\psi$ is an increasing mapping, we have:

$\forall x_2, y_2 \in S_2: x_2 \preceq_2 y_2 \implies \map \psi {x_2} \preceq_3 \map \psi {y_2}$

By setting $x_2 = \map \phi {x_1}, y_2 = \map \phi {y_1}$, it follows that:

$\forall x_1, y_1 \in S_1: x_1 \preceq_1 y_1 \implies \map \psi {\map \phi {x_1} } \preceq_3 \map \psi {\map \phi {y_1} }$
That is:

$\forall x_1, y_1 \in S_1: x_1 \preceq_1 y_1 \implies \map {\paren {\psi \circ \phi} } {x_1} \preceq_3 \map {\paren {\psi \circ \phi} } {y_1}$
Hence the result.
$\blacksquare$





