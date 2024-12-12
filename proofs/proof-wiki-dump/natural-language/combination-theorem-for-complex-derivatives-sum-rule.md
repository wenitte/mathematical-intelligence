# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Sum_Rule



Theorem
Let $D$ be an open subset of the set of complex numbers $\C$.
Let $f, g: D \to \C$ be complex-differentiable functions on $D$

Then $f + g$ is complex-differentiable in $D$, and its derivative $\paren {f + g}'$ is defined by:

$\map {\paren {f + g}'} z = \map {f'} z + \map {g'} z$
for all $z \in D$.


Proof 1
Let $z_0 \in D$ be a point in $D$.
Define $k : D \to \Z$ by $\map k {z_0} = \map f {z_0} + \map g {z_0}$.
Then:














\(\ds \map { k' } {z_0}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map k {z_0 + h} - \map k {z_0} } h\)





Definition of Derivative of Complex Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\map f {z_0 + h} + \map g {z_0 + h} } - \paren {\map f {z_0} +\map g {z_0} } } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} + \map g {z_0 + h} - \map f {z_0} - \map g {z_0} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\map f {z_0 + h} - \map f {z_0} } + \paren {\map g {z_0 + h} - \map g {z_0} } } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\map f {z_0 + h} - \map f {z_0} } h + \frac {\map g {z_0 + h} - \map g {z_0} } h}\)





Complex Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} - \map f {z_0} } h + \lim_{h \mathop \to 0} \frac {\map g {z_0 + h} - \map g {z_0} } h\)





Sum Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map {f'} {z_0} + \map {g'} {z_0}\)





Definition of Derivative of Complex Function








\(\ds \leadsto \ \ \)

\(\ds \forall z \in D: \, \)



\(\ds \map { \paren{f+g}' } z\)

\(=\)







\(\ds \map {f'} z + \map {g'} z\)





Definition of Derivative of Complex Function



$\blacksquare$


Proof 2
Denote the open ball of $0$ with radius $r \in \R_{>0}$ as $\map {B_r} 0$.
Let $z \in D$.
By the Epsilon-Function Complex Differentiability Condition, it follows that there exists $r \in \R_{>0}$ such that for all $h \in \map {B_r} 0 \setminus \set 0$:

$\map f {z + h} = \map f z + h \paren {\map {f'} z + \map {\epsilon_f} h}$
$\map g {z + h} = \map g z + h \paren {\map {g'} z + \map {\epsilon_g} h}$
where $\epsilon_f, \epsilon_g: \map {B_r} 0 \setminus \set 0 \to \C$ are complex functions that converge to $0$ as $h$ tends to $0$.
Then:














\(\ds \map {\paren {f + g} } {z + h}\)

\(=\)







\(\ds \map f z + h \paren {\map {f'} z + \map {\epsilon_f} h} + \map g z + h \paren {\map {g'} z + \map {\epsilon_g} h}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f + g} } z + h \paren {\map {f'} z + \map {g'} z + \map {\paren {\epsilon_f + \epsilon_g} } h}\)










From Sum Rule for Limits of Complex Functions, it follows that $\ds \lim_{h \mathop \to 0} \map {\paren {\epsilon_f + \epsilon_g} } h = 0$.
By the Epsilon-Function Complex Differentiability Condition, it follows that:

$\map {\paren {f + g}'} z = \map {f'} z + \map {g'} z$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.1$




