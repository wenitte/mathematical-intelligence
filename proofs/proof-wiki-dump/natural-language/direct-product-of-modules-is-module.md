# 

Source: https://proofwiki.org/wiki/Direct_Product_of_Modules_is_Module



Theorem
Let $R$ be a ring.
Let $\family {\struct {M_i, +_i, \circ_i} }_{i \mathop \in I}$ be a family of $R$-modules.
Let $\struct {M, +, \circ}$ be their direct product.

Then $\struct {M, +, \circ}$ is a module.


Proof
From External Direct Product of Abelian Groups is Abelian Group it follows that $(M,+)$ is an abelian group.
We need to show that:
$\forall x, y, \in M, \forall \lambda, \mu \in R$:

$(1): \quad \lambda \circ \paren {x + y} = \paren {\lambda \circ x} + \paren {\lambda \circ y}$
$(2): \quad \paren {\lambda +_R \mu} \circ x = \paren {\lambda \circ x} + \paren {\mu \circ x}$
$(3): \quad \paren {\lambda \times_R \mu} \circ x = \lambda \circ \paren {\mu \circ x}$

Checking the criteria in order:


Criterion 1
$(1): \quad \lambda \circ \paren {x + y} = \paren {\lambda \circ x} + \paren {\lambda \circ y}$
Let $x = \family {x_i}_{i \mathop \in I}, y = \family {y_i}_{i \mathop \in I} \in M$.














\(\ds \lambda \circ \paren {x + y}\)

\(=\)







\(\ds \lambda \circ \paren {\family {x_i}_{i \mathop \in I} + \family {y_i}_{i \mathop \in I} }\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \lambda \circ \family {x_i +_i y_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \family {\paren {\lambda \circ_i \paren { x_i +_i y_i} } } _{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \family {\paren {\lambda \circ_i x_i} +_i \paren {\lambda \circ_i y_i} }_{i \mathop \in I}\)





Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition














\(\ds \)

\(=\)







\(\ds \family {\lambda \circ_i x_i}_{i \mathop \in I} + \family {\lambda \circ_i y_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \family {x_i}_{i \mathop \in I} } + \paren {\lambda \circ \family {y_i}_{i \mathop \in I} }\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ x} + \paren {\lambda \circ y}\)





by hypothesis



So $(1)$ holds.
$\Box$


Criterion 2
$(2): \quad \paren {\lambda +_R \mu} \circ x = \paren {\lambda \circ x} + \paren {\mu \circ x}$
Let $x = \family {x_i}_{i \mathop \in I} \in M$.














\(\ds \paren {\lambda +_R \mu} \circ x\)

\(=\)







\(\ds \paren {\lambda +_R \mu} \circ \family {x_i}_{i \mathop \in I}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \family {\paren {\lambda +_R \mu} \circ_i x_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \family {\paren {\lambda \circ_i x_i} +_i \paren {\mu \circ_i x_i} }_{i \mathop \in I}\)





Left Module Axiom $\text M 2$: (Right) Distributivity over Scalar Addition














\(\ds \)

\(=\)







\(\ds \family {\lambda \circ_i x_i}_{i \mathop \in I} + \family {\mu \circ_i x_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \family {x_i}_{i \mathop \in I} } + \paren {\mu \circ \family {x_i}_{i \mathop \in I} }\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ x} + \paren {\mu \circ x}\)





by hypothesis



So $(2)$ holds.
$\Box$


Criterion 3
$(3): \quad \paren {\lambda \times_R \mu} \circ x = \lambda \circ \paren {\mu \circ x}$
Let $x = \family {x_i}_{i \mathop \in I} \in M$.














\(\ds \paren {\lambda \times_R \mu} \circ x\)

\(=\)







\(\ds \paren {\lambda \times_R \mu} \circ \family {x_i}_{i \mathop \in I}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \family {\paren {\lambda \times_R \mu} \circ_i x_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \family {\lambda \circ_i \paren {\mu \circ_i x_i} }_{i \mathop \in I}\)





Left Module Axiom $\text M 3$: Associativity














\(\ds \)

\(=\)







\(\ds \lambda \circ \family {\mu \circ_i x_i}_{i \mathop \in I}\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ \family {x_i}_{i \mathop \in I} }\)





Definition of Module Direct Product/General Case














\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ x}\)





by hypothesis



So $(3)$ holds.
$\Box$

Thus all criteria are seen to hold.
The result follows.
$\blacksquare$


Also see
Direct Product of Unitary Modules is Unitary Module




