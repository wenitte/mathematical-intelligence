# 

Source: https://proofwiki.org/wiki/Composition_of_Galois_Connections_is_Galois_Connection

Theorem
Let $L_1 = \struct {S_1, \preceq_1}$, $L_2 = \struct {S_2, \preceq_2}$ and $L_3 = \struct {S_3, \preceq_3}$ be ordered sets.
Let:

$g_1: S_1 \to S_2, g_2: S_2 \to S_3, d_1: S_2 \to S_1, d_2: S_3 \to S_2$
be mappings such that:

$\tuple {g_1, d_1}$ and $\tuple {g_2, d_2}$
are Galois connections.

Then $\tuple {g_2 \circ g_1, d_1 \circ d_2}$ is also a Galois connection.


Proof
By definition of Galois connection:

$g_1$, $g_2$, $d_2$, and $d_1$ are increasing mappings.
Thus by Composite of Increasing Mappings is Increasing:

$g_2 \circ g_1$ and $d_1 \circ d_2$ are increasing mappings.
Let $s \in S_3, t \in S_1$.
We will prove that

$s \preceq_3 \map {\paren {g_2 \circ g_1} } t \implies \map {\paren {d_1 \circ d_2} } s \preceq_1 t$
Assume that

$s \preceq_3 \map {\paren {g_2 \circ g_1} } t$
By definition of composition of mappings:

$s \preceq_3 \map {g_2} {\map {g_1} t}$
By definition of Galois connection:

$\map {d_2} s \preceq_2 \map {g_1} t$
By definition of increasing mapping:

$\map {d_1} {\map {d_2} s} \preceq_1 \map {d_1} {\map {g_1} t}$
By Galois Connection Implies Order on Mappings

$d_1 \circ g_1 \preceq_1 I_{S_1}$
By definitions of ordering on mappings and composition of mappings:

$\map {g_1} {\map {d_1} t} \preceq_1 \map {I_{S_1} } t$
By definition of identity mapping:

$\map {g_1} {\map {d_1} t} \preceq_1 t$
Because an ordering is a transitive relation:

$\map {d_1} {\map {d_2} s} \preceq_1 t$
Thus by definition of composition of mappings:

$\map {\paren {d_1 \circ d_2} } s \preceq_1 t$
$\Box$

Assume that

$\map {\paren {d_1 \circ d_2} } s \preceq_1 t$
By definition of composition of mappings:

$\map {d_1} {\map {d_2} s} \preceq_1 t$
By definition of Galois connection:

$\map {d_2} s \preceq_2 \map {g_1} t$
By definition of increasing mapping:

$\map {g_2} {\map {d_2} s} \preceq_1 \map {g_2} {\map {g_1} t}$
By Galois Connection Implies Order on Mappings

$I_{S_3} \preceq_3 g_2 \circ d_2$
By definitions of ordering on mappings and composition of mappings:

$\map {I_{S_3} } s \preceq_3 \map {g_2} {\map {d_2} s}$
By definition of identity mapping:

$s \preceq_3 \map {g_2} {\map {d_2} s}$
Because an ordering is a transitive relation:

$s \preceq_3 \map {g_2} {\map {g_1} t}$
Thus by definition of composition of mappings:

$s \preceq_3 \map {\paren {g_2 \circ g_1} } t$
$\blacksquare$


Sources
Mizar article WAYBEL15:5




