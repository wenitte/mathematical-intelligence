# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Quotient_Rule

Theorem
Let $D$ be an open subset of the set of complex numbers $\C$.
Let $f, g: D \to \C$ be complex-differentiable functions.

Let $\dfrac f g$ denote the pointwise quotient of the functions $f$ and $g$.

Then $\dfrac f g$ is complex-differentiable in $D \setminus \set {x \in D: \map g z = 0}$.
For all $z \in D$ with $\map g z \ne 0$:

$\map {\paren {\dfrac f g}'} z = \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2}$
where $\paren {\dfrac f g}'$ denotes the derivative of $\dfrac f g$.


Proof
Denote the open ball of $0$ with radius $r \in \R_{>0}$ as $\map {B_r} 0$.
Let $z \in D \setminus \set {x \in D: \map g z = 0}$.
By the Epsilon-Function Complex Differentiability Condition, it follows that there exists $r_0 \in \R_{>0}$ such that for all $h \in \map {B_{r_0} } 0 \setminus \set 0$:

$\map f {z + h} = \map f z + h \paren {\map {f'} z + \map {\epsilon_f} h}$
$\map g {z + h} = \map g z + h \paren {\map {g'} z + \map {\epsilon_g} h}$
where $\epsilon_f, \epsilon_g: \map {B_{r_0} } 0 \setminus \set 0 \to \C$ are complex functions that converge to $0$ as $h$ tends to $0$.
From Complex-Differentiable Function is Continuous, it follows that $g$ is continuous at $z$.
Then there exists $r_1 \in \R_{>0}$ such that for all $h \in \map {B_{r_1} } 0$, we have $\size {\map g {z + h} - \map g z} < \size {\map g z}$.
Then by Backwards Form of Triangle Inequality:

$\map g {z + h} \ne 0$ for all $h \in \map {B_{r_1} } 0$

Put $r = \min \set {r_0, r_1}$.
Then for all $h \in B_r \setminus \set 0$:














\(\ds \dfrac {\map f {z + h} } {\map g {z + h} }\)

\(=\)







\(\ds \dfrac {\map f z} {\map g z} + \dfrac {\map f {z + h} - \map f z} {\map g {z + h} } - \map f z \dfrac {\map g {z + h} - \map g z} {\map g z \map g {z + h} }\)





adding and subtracting the same quantity














\(\ds \)

\(=\)







\(\ds \dfrac {\map f z} {\map g z} + \dfrac {h \paren {\map {f'} z + \map {\epsilon_f} h} } {\map g z + h \paren {\map {g'} z + \map {\epsilon_g} h} } - \dfrac {\map f z h \paren {\map {g'} z \map {\epsilon_g} h} } {\map g z \paren {\map g z + h \paren {\map {g'} z + \map {\epsilon_g} h} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map f z} {\map g z} + h \dfrac {\map {f'} z \map g z + \map g z \map {\epsilon_f} h - \map f z \map {g'} z - \map f z \map {\epsilon_g} h} {\paren {\map g z}^2 + \map {\epsilon_0} h}\)





with $\map {\epsilon_0} h = h \map {g'} z \paren {\map {g'} z + \map {\epsilon_g} h}$














\(\ds \)

\(=\)







\(\ds \dfrac {\map f z} {\map g z} + h \paren {\dfrac {\map {f'} z \map g z - \map f z \map {g'} z} { {\paren {\map g z}^2 } } + \map \epsilon h}\)









where $\epsilon: \map {B_r} 0 \setminus \set 0 \to \C$ is defined by:

$\map \epsilon h = \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2 + \map {\epsilon_0} h} - \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2 } + \dfrac {\map g z \map {\epsilon_f} h - \map f z \map {\epsilon_g} h} {\paren {\map g z}^2 + \map {\epsilon_0} h}$

From Combination Theorem for Limits of Complex Functions, it follows that:














\(\ds \lim_{h \mathop \to 0} \map \epsilon h\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2 + \map {\epsilon_0} h} - \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2 } + \lim_{h \mathop \to 0} \dfrac {\map g z \map {\epsilon_f} h - \map f z \map {\epsilon_g} h} {\paren {\map g z}^2 + \map {\epsilon_0} h}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2} - \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2 } + \map g z \lim_{h \mathop \to 0} \dfrac {\map {\epsilon_f} h} {\paren {\map g z}^2 + \map {\epsilon_0} h} - \map f z \lim_{h \mathop \to 0} \dfrac {\map {\epsilon_g} h} {\paren {\map g z}^2 + \map {\epsilon_0} h}\)




















\(\ds \)

\(=\)







\(\ds 0\)










Then the Epsilon-Function Complex Differentiability Condition shows that:

$\map {\paren {\dfrac f g}'} z = \dfrac {\map {f'} z \map g z - \map f z \map {g'} z} {\paren {\map g z}^2}$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.1$




