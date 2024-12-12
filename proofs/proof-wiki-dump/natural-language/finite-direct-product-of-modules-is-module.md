# 

Source: https://proofwiki.org/wiki/Finite_Direct_Product_of_Modules_is_Module



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G_1, +_1, \circ_1}_R, \struct {G_2, +_2, \circ_2}_R, \ldots, \struct {G_n, +_n, \circ_n}_R$ be $R$-modules.
Let:

$\ds G = \prod_{k \mathop = 1}^n G_k$
be their direct product.
Then $G$ is a module.


Proof 1
This is a special case of Direct Product of Modules is Module.


Proof 2
Module Axiom $\text M 1$: Distributivity over Module Addition
Let $x = \tuple {x_1, x_2, \ldots, x_n}, y = \tuple {y_1, y_2, \ldots, y_n} \in G$.














\(\ds \lambda \circ \paren {x + y}\)

\(=\)







\(\ds \lambda \circ \paren {\tuple {x_1, x_2, \ldots, x_n} + \tuple {y_1, y_2, \ldots, y_n} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \tuple {x_1 +_1 y_1, x_2 +_2 y_2, \ldots, x_n +_n y_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\lambda \circ_1 \paren {x_1 + y_1}, \lambda \circ_2 \paren {x_2 + y_2}, \ldots, \lambda \circ_n \paren {x_n + y_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\lambda \circ_1 x_1, \lambda \circ_2 x_2, \ldots, \lambda \circ_n x_n} + \tuple {\lambda \circ_1 y_1, \lambda \circ_2 y_2, \ldots, \lambda \circ_n y_n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \tuple {x_1, x_2, \ldots, x_n} } + \paren {\lambda \circ \tuple {y_1, y_2, \ldots, y_n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ x} + \paren {\lambda \circ y}\)









So $(1)$ holds.
$\Box$


Module Axiom $\text M 2$: Distributivity over Scalar Addition
Let $x = \tuple {x_1, x_2, \ldots, x_n} \in G$.














\(\ds \paren {\lambda +_R \mu} \circ x\)

\(=\)







\(\ds \paren {\lambda +_R \mu} \circ \tuple {x_1, x_2, \ldots, x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda +_R \mu} \circ_1 x_1, \paren {\lambda +_R \mu} \circ_2 x_2, \ldots, \paren {\lambda +_R \mu} \circ_n x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \circ_1 x_1} +_1 \paren {\mu \circ_1 x_1}, \paren {\lambda \circ_2 x_2} +_2 \paren {\mu \circ_2 x_2}, \ldots, \paren {\lambda \circ_n x_n} +_n \paren {\mu \circ_n x_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\lambda \circ_1 x_1, \lambda \circ_2 x_2, \lambda \circ_n x_n} + \tuple {\mu \circ_1 x_1, \mu \circ_2 x_2, \ldots, \mu \circ_n x_n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ_1 \tuple {x_1, x_2, \ldots, x_n} } + \paren {\mu \circ_1 \tuple {x_1, x_2, \ldots, x_n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ x} + \paren {\mu \circ x}\)









So $(2)$ holds.
$\Box$


Module Axiom $\text M 3$: Associativity
Let $x = \tuple {x_1, x_2, \ldots, x_n} \in G$.














\(\ds \paren {\lambda \times_R \mu} \circ x\)

\(=\)







\(\ds \paren {\lambda \times_R \mu} \circ \tuple {x_1, x_2, \ldots, x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {\lambda \times_R \mu} \circ_1 x_1, \paren {\lambda \times_R \mu} \circ_2 x_2, \ldots, \paren {\lambda \times_R \mu} \circ_n x_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\lambda \circ_1 \paren {\mu \circ_1 x_1}, \lambda \circ_2 \paren {\mu \circ_2 x_2}, \ldots, \lambda \circ_n \paren {\mu \circ_n x_n} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \tuple {\mu \circ_1 x_1, \mu \circ_2 x_2, \ldots, \mu \circ_n x_n}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ \tuple {x_1, x_2, \ldots, x_n} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ x}\)









So $(3)$ holds.
$\Box$

Hence the result.
$\blacksquare$


Also see
Finite Direct Product of Unitary Modules is Unitary Module


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Example $26.5$




