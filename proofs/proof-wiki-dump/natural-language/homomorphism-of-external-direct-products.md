# 

Source: https://proofwiki.org/wiki/Homomorphism_of_External_Direct_Products

Theorem
Let:

$\struct {S_1 \times S_2, \circ}$ be the external direct product of two algebraic structures $\struct {S_1, \circ_1}$ and $\struct {S_2, \circ_2}$
$\struct {T_1 \times T_2, *}$ be the external direct product of two algebraic structures $\struct {T_1, *_1}$ and $\struct {T_2, *_2}$
$\phi_1$ be a homomorphism from $\struct {S_1, \circ_1}$ onto $\struct {T_1, *_1}$
$\phi_2$ be a homomorphism from $\struct {S_2, \circ_2}$ onto $\struct {T_2, *_2}$.

Then the mapping $\phi_1 \times \phi_2: \struct {S_1 \times S_2, \circ} \to \struct {T_1 \times T_2, *}$ defined as:

$\map {\paren {\phi_1 \times \phi_2} } {x, y} = \tuple {\map {\phi_1} x, \map {\phi_2} y}$
is a homomorphism from $\struct {S_1 \times S_2, \circ}$ to $\struct {T_1 \times T_2, *}$.


General Result
Let $n \in \N_{>0}$.
Let:














\(\ds \struct {\SS_n, \circledcirc_n}\)

\(:=\)

\(\, \ds \prod_{k \mathop = 1}^n S_k \, \)

\(\, \ds = \, \)



\(\ds \struct {S_1, \circ_1} \times \struct {S_2, \circ_2} \times \cdots \times \struct {S_n, \circ_n}\)




















\(\ds \struct {\TT_n, \circledast_n}\)

\(:=\)

\(\, \ds \prod_{k \mathop = 1}^n T_k \, \)

\(\, \ds = \, \)



\(\ds \struct {T_1, \ast_1} \times \struct {T_2, \ast_2} \times \cdots \times \struct {T_n, \ast_n}\)









be external direct products of algebraic structures.

Let $\Phi_n: \struct {\SS_n, \circledcirc_n} \to \struct {\TT_n, \circledast_n}$ be the mapping defined as:

$\Phi_n: \tuple {s_1, \ldots, s_n} := \begin{cases}
\map {\phi_1} {s_1} & : n = 1 \\
\tuple {\map {\phi_1} {s_1}, \map {\phi_2} {s_2} } & : n = 2 \\
\tuple {\map {\Phi_n} {s_1, \ldots, s_{n - 1} }, \map {\phi_n} {s_n} } & : n > 2 \\
\end{cases}$
That is:

$\Phi_n: \tuple {s_1, \ldots, s_n} := \tuple {\map {\phi_1} {s_1}, \map {\phi_2} {s_2}, \ldots, \map {\phi_n} {s_n} }$

Let $\phi_k: \struct {S_k, \circ_k} \to \struct {T_k, \ast_k}$ be a homomorphism for each $k \in \set {1, 2, \ldots, n}$.
Then $\Phi_n$ is a homomorphism from $\struct {\SS_n, \circledcirc_n}$ to $\struct {\TT_n, \circledast_n}$.


Proof
Let $\tuple {x_1, x_2}, \tuple {y_1, y_2} \in S_1 \circ S_2$.
Then:














\(\ds \map {\paren {\phi_1 \times \phi_2} } {\tuple {x_1, x_2} \circ \tuple {y_1, y_2} }\)

\(=\)







\(\ds \map {\paren {\phi_1 \times \phi_2} } {x_1 \circ_1 y_1, x_2 \circ_2 y_2}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map {\phi_1} {x_1 \circ_1 y_1}, \map {\phi_2} {x_2 \circ_2 y_2} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map {\phi_1} {x_1} \ast_1 \map {\phi_1} {y_1}, \map {\phi_2} {x_2} \ast_2 \map {\phi_2} {y_2} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map {\phi_1} {x_1}, \map {\phi_2} {x_2} } \ast \tuple {\map {\phi_1} {y_1}, \map {\phi_2} {y_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\phi_1 \times \phi_2} } {x_1, x_2} \ast \map {\paren {\phi_1 \times \phi_2} } {y_1, y_2}\)









thus demonstrating the morphism property.
$\blacksquare$





