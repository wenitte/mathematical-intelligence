# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Sum_Rule/Proof_2

Theorem
$\map {\paren {f + g}'} z = \map {f'} z + \map {g'} z$


Proof
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




