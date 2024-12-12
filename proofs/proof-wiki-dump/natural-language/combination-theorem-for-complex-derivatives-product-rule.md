# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Product_Rule



Theorem
Let $D$ be an open subset of the set of complex numbers.
Let $f, g: D \to \C$ be complex-differentiable functions on $D$

Let $f g$ denote the pointwise product of the functions $f$ and $g$.

Then $f g$ is complex-differentiable in $D$, and its derivative $\paren {f g}'$ is defined by:

$\map {\paren {f g}'} z = \map {f'} z \map g z + \map f z \map {g'} z$
for all $z \in D$.


Proof 1
Define $k: D \to \C$ as the pointwise product of $f$ and $g$, so $k = fg$.
Let $z_0 \in D$ be a point in $D$.














\(\ds \map {k'} {z_0}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map k {z_0 + h} - \map k {z_0} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} \, \map g {z_0 + h} - \map f {z_0} \, \map g {z_0} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} \, \map g {z_0 + h} - \map f {z_0 + h} \, \map g {z_0} + \map f {z_0 + h} \, \map g {z_0} - \map f {z_0} \, \map g {z_0} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\map f {z_0 + h} \frac {\map g {z_0 + h} - \map g {z_0} } h + \frac {\map f {z_0 + h} - \map f {z_0} } h \, \map g {z_0} }\)




















\(\ds \)

\(=\)







\(\ds \map f {z_0} \, \map {g'} {z_0} + \map {f'} {z_0} \, \map g {z_0}\)














\(\ds \leadsto \ \ \)

\(\ds \forall z \in D: \, \)



\(\ds \map {k'} z\)

\(=\)







\(\ds \map f z \, \map {g'} z + \map {f'} z \, \map g z\)





Definition of Derivative of Complex Function



$\blacksquare$


Proof 2
Denote the open ball of $0$ by radius $r \in \R_{>0}$ as $\map {B_r} 0$.
Let $z \in D$.
By the Epsilon-Function Complex Differentiability Condition, it follows that there exists $r \in \R_{>0}$ such that for all $h \in \map {B_r} 0 \setminus \set 0$:

$\map f {z + h} = \map f z + \map h {\map {f'} z + \map {\epsilon_f} h}$
$\map g {z + h} = \map g z + \map h {\map {g'} z + \map {\epsilon_g} h}$
where $\epsilon_f, \epsilon_g: \map {B_r} 0 \setminus \set 0 \to \C$ are complex functions that converge to $0$ as $h$ tends to $0$.
Then:














\(\ds \map {\paren {f g} } {z + h}\)

\(=\)







\(\ds \map f z \map g z + \map h {\map f z \map {g'} z + \map f z \map {\epsilon_g} h} + h \paren {\map g z \map {f'} z + \map g z \map {\epsilon_f} h} + {h^2} \paren {\map {f'} z + \map {\epsilon_f} h} \paren {\map {g'} z + \map {\epsilon_g} h}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f g} } z + h \paren {\map {f'} z \map g z + \map f z \map {g'} z + h \paren {\map {f'} z + \map {\epsilon_f} h} \paren {\map {g'} z + \map {\epsilon_g} h} }\)









Define $\epsilon: \map {B_r} 0 \setminus \set 0 \to \C$ by:

$\map \epsilon h = h \paren {\map {f'} z + \map {\epsilon_f} h} \paren {\map {g'} z + \map {\epsilon_g} h}$
From Product Rule for Limits of Complex Functions and Combined Sum Rule for Limits of Complex Functions:

$\ds \lim_{h \mathop \to 0} \map \epsilon h = \paren {\lim_{h \mathop \to 0} h} \paren {\lim_{h \mathop \to 0} \paren {\map {f'} z + \map {\epsilon_f} h} } \paren {\lim_{h \mathop \to 0} \paren {\map {g'} z + \map {\epsilon_g} h} } = 0$
Then the Epsilon-Function Complex Differentiability Condition shows that:

$\map {\paren {f g}'} z = \map {f'} z \map g z + \map f z \map {g'} z$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.1$




