# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Complex_Derivatives/Multiple_Rule

Theorem
Let $D$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a complex-differentiable function on $D$.
Let $w \in \C$.

Then $w f$ is complex-differentiable in $D$, and its derivative $\paren {w f}'$ is defined by:

$\map {\paren {w f}'} z = w \map {f'} z$
for all $z \in D$.


Proof
Denote the open ball of $0$ with radius $r \in \R_{>0}$ as $\map {B_r} 0$.
Let $z \in D$.
By the Epsilon-Function Complex Differentiability Condition, it follows that there exists $r \in \R_{>0}$ such that for all $h \in \map {B_r} 0 \setminus \set 0$:

$\map f {z + h} = \map f z + h \paren {\map {f'} z + \map \epsilon h}$
where $\epsilon: \map {B_r} 0 \setminus \set 0 \to \C$ is a complex function such that $\ds \lim_{h \mathop \to 0} \map \epsilon h = 0$.
Then:

$w \map f {z + h} = w \map f z + h \paren {w \map {f'} z + w \map \epsilon h}$
From Multiple Rule for Limits of Complex Functions, it follows that:

$\ds \lim_{h \mathop \to 0} w \map \epsilon h = \paren {\lim_{h \mathop \to 0} w} \paren {\lim_{h \mathop \to 0} \map \epsilon h} = 0$
Then the Epsilon-Function Complex Differentiability Condition shows that:

$\map {\paren {w f}'} z = w \map {f'} z$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 1.1$




