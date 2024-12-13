# 

Source: https://proofwiki.org/wiki/Module_of_All_Mappings_is_Module



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ}_R$ be an $R$-module.
Let $S$ be a set.
Let $\struct {G^S, +_G', \circ}_R$ be the module of all mappings from $S$ to $G$.

Then $\struct {G^S, +_G', \circ}_R$ is an $R$-module.


Proof
To show that $\struct {G^S, +_G', \circ}_R$ is an $R$-module, we verify the following:
$\forall f, g, \in G^S, \forall \lambda, \mu \in R$:

$(1): \quad \lambda \circ \paren {f +_G' g} = \paren {\lambda \circ f} +_G' \paren {\lambda \circ g}$
$(2): \quad \paren {\lambda +_R \mu} \circ f = \paren {\lambda \circ f} +_G \paren {\mu \circ f}$
$(3): \quad \paren {\lambda \times_R \mu} \circ f = \lambda \circ \paren {\mu \circ f}$


Criterion 1
$(1): \quad \lambda \circ \paren {f +_G' g} = \paren {\lambda \circ f} +_G' \paren {\lambda \circ g}$

Let $x \in S$.
Then:














\(\ds \lambda \circ \paren {\map {\paren {f +_G' g} } x}\)

\(=\)







\(\ds \lambda \circ \paren {\map f x +_G \map g x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \map f x} +_G \paren {\lambda \circ \map g x}\)





Definition of Module














\(\ds \)

\(=\)







\(\ds \paren {\map {\paren {\lambda \circ f} } x} +_G \paren {\map {\paren {\lambda \circ g} } x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {\lambda \circ f} +_G' \paren {\lambda \circ g} } } x\)









Thus $(1)$ holds.
$\Box$


Criterion 2
$(2): \quad \paren {\lambda +_R \mu} \circ f = \paren {\lambda \circ f} +_G \paren {\mu \circ f}$

Let $x \in S$.














\(\ds \map {\paren {\paren {\lambda +_R \mu} \circ f} } x\)

\(=\)







\(\ds \paren {\lambda +_R \mu} \circ \paren {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \circ \map f x} +_G \paren {\mu \circ \map f x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \circ f} } x +_G \map {\paren {\mu \circ f} } x\)









Thus $(2)$ holds.
$\Box$


Criterion 3
$(3): \quad \paren {\lambda \times_R \mu} \circ f = \lambda \circ \paren {\mu \circ f}$















\(\ds \map {\paren {\paren {\lambda \times_R \mu} \circ f} } x\)

\(=\)







\(\ds \paren {\lambda \times_R \mu} \circ \paren {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\mu \circ \map f x}\)




















\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\map {\paren {\mu \circ f} } x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda \circ \paren {\mu \circ f} } } x\)









Thus $(3)$ holds.
$\Box$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Example $26.4$




