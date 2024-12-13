# 

Source: https://proofwiki.org/wiki/Homomorphism_of_External_Direct_Products/General_Result



Theorem
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
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\Phi_n: \struct {\SS_n, \circledcirc_n} \to \struct {\TT_n, \circledast_n}$ is a homomorphism.


Basis for the Induction
$\map P 1$ is true, as this just says:

$\Phi_1 = \phi_1: \struct {S_1, \circ_1} \to \struct {T_1, \ast_1}$ is a homomorphism
which holds by hypothesis.

$\map P 2$ is the case:

$\Phi_2 = \phi_1 \times \phi_2: \struct {S_1 \times S_2, \circledcirc_2} \to \struct {T_1 \times T_2, \circledast_2}$ is a homomorphism
which has been proved in Homomorphism of External Direct Products.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P m$ is true, where $m \ge 2$, then it logically follows that $\map P {m + 1}$ is true.

So this is our induction hypothesis:

$\Phi_m: \struct {\SS_m, \circledcirc_m} \to \struct {\TT_m, \circledast_m}$ is a homomorphism.

Then we need to show:

$\Phi_{m + 1}: \struct {\SS_{m + 1}, \circledcirc_{m + 1} } \to \struct {\TT_{m + 1}, \circledast_{m + 1} }$ is a homomorphism.


Induction Step
This is our induction step:
Let $\tuple {s_1, \ldots, s_{m + 1} }$ and $\tuple {t_1, \ldots, t_{m + 1} }$ be arbitrary elements of $\SS_{m + 1}$.















\(\ds \)

\(\)







\(\ds \map {\Phi_{m + 1} } {\tuple {s_1, \ldots, s_{m + 1} } \circledcirc_{m + 1} \tuple {t_1, \ldots, t_{m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map {\Phi_{m + 1} } {\tuple {\tuple {s_1, \ldots, s_m}, s_{m + 1} } \circledcirc_{m + 1} \tuple {\tuple {t_1, \ldots, t_m}, t_{m + 1} } }\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds \tuple {\map {\Phi_m} {\tuple {s_1, \ldots, s_m} \circledcirc_m \tuple {t_1, \ldots, t_m} }, s_{m + 1} \circ_{m + 1} t_{m + 1} }\)





Definition of External Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {\map {\Phi_m} {\tuple {s_1, \ldots, s_m} \circledcirc_m \tuple {t_1, \ldots, t_m} }, \map {\phi_{m + 1} } {s_{m + 1} } \ast_{m + 1} \map {\phi_{m + 1} } {t_{m + 1} } }\)





$\phi_{m + 1}$ is a Homomorphism














\(\ds \)

\(=\)







\(\ds \tuple {\map {\Phi_m} {s_1, \ldots, s_m} \circledast_m \map {\Phi_m} {t_1, \ldots, t_m}, \map {\phi_{m + 1} } {s_{m + 1} } \ast_{m + 1} \map {\phi_{m + 1} } {t_{m + 1} } }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map {\Phi_{m + 1} } {s_1, \ldots, s_m, s_{m + 1} } \circledast_{m + 1} \map {\Phi_{m + 1} } {t_1, \ldots, t_m, t_{m + 1} }\)





Definition of External Direct Product



So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: \Phi_n: \struct {\SS_n, \circledcirc_n} \to \struct {\TT_n, \circledast_n}$ is a homomorphism.
$\blacksquare$





