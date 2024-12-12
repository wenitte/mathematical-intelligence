# 

Source: https://proofwiki.org/wiki/Composite_of_Strictly_Increasing_Mappings_is_Strictly_Increasing

Theorem
Let $\struct {S_1, \preceq_1}$, $\struct {S_2, \preceq_2}$ and $\struct {S_3, \preceq_3}$ be ordered sets.
Let:

$\phi: \struct {S_1, \preceq_1} \to \struct {S_2, \preceq_2}$
and:

$\psi: \struct {S_2, \preceq_2} \to \struct {S_3, \preceq_3}$
be strictly increasing mappings.

Then $\psi \circ \phi: \struct {S_1, \preceq_1} \to \struct {S_3, \preceq_3}$ is also a strictly increasing mapping.


Proof
By definition of composition of mappings:

$\map {\paren {\psi \circ \phi} } x = \map \psi {\map \phi x}$

As $\phi$ is a strictly increasing mapping, we have:

$\forall x_1, y_1 \in S_1: x_1 \prec_1 y_1 \implies \map \phi {x_1} \prec_2 \map \phi {y_1}$
where $a \prec_1 b$ denotes that $a \preceq_1 b$ and $a \ne b$.

As $\psi$ is a strictly increasing mapping, we have:

$\forall x_2, y_2 \in S_2: x_2 \prec_2 y_2 \implies \map \psi {x_2} \prec_3 \map \psi {y_2}$
where $a \prec_2 b$ denotes that $a \preceq_2 b$ and $a \ne b$.

By setting $x_2 = \map \phi {x_1}, y_2 = \map \phi {y_1}$, it follows that:

$\forall x_1, y_1 \in S_1: x_1 \prec_1 y_1 \implies \map \psi {\map \phi {x_1} } \prec_3 \map \psi {\map \phi {y_1} }$
That is:

$\forall x_1, y_1 \in S_1: x_1 \prec_1 y_1 \implies \map {\paren {\psi \circ \phi} } {x_1} \prec_3 \map {\paren {\psi \circ \phi} } {y_1}$
Hence the result.
$\blacksquare$





