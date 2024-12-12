# 

Source: https://proofwiki.org/wiki/Epsilon-Function_Differentiability_Condition/Complex_Case



Theorem
Let $f: D \to \C$ be a continuous function, where $D \subseteq \C$ is an open set.
Let $z \in \C$.

Then $f$ is differentiable at $z$ if and only if there exist $\alpha \in \C$ and $r \in \R_{>0}$ such that for all $h \in \map {B_r} 0 \setminus \set 0$:

$\map f {z + h} = \map f z + h \paren {\alpha + \map \epsilon h}$
where:

$\map {B_r} 0$ denotes an open ball of $0$
$\epsilon: \map {B_r} 0 \setminus \set 0 \to \C$ is a complex function with $\ds \lim_{h \mathop \to 0} \map \epsilon h = 0$.

If the conditions are true, then $\alpha = \map {f'} z$.


Proof
Necessary Condition
Assume that $f$ is differentiable in $z$.
By definition of open set, there exists $r \in \R_{>0}$ such that the open ball $\map {B_r} z \subseteq D$.
Define $\epsilon: \map {B_r} 0 \setminus \set 0 \to \C$ by:

$\map \epsilon h = \dfrac {\map f {z + h} - \map f z} h - \map {f'} z$
Let $h \in \map {B_r} 0 \setminus \set 0$.
Then:

$z + h \in \map {B_r} z \setminus \set z \subseteq D$
so $\epsilon$ is well-defined.
As $f$ is differentiable in $z$, it follows that:

$\ds \lim_{h \mathop \to 0} \map \epsilon h = \lim_{h \mathop \to 0} \dfrac {\map f {z + h} - \map f z} h - \map {f'} z = \map {f'} z - \map {f'} z = 0$
Let us put $\alpha = \map {f'} z$.
It follows that for all $h \in \map {B_r} 0 \setminus \set 0$:

$\map f {z + h} = \map f z + h \paren {\alpha + \map \epsilon h}$
$\Box$


Sufficient condition
Let us rewrite the equation of the assumption as:

$\dfrac {\map f {z + h} - \map f z} h = \alpha + \map \epsilon h$
From Sum Rule for Limits of Complex Functions:

$\ds \lim_{h \mathop \to 0} \dfrac {\map f {z + h} - \map f z} h = \lim_{h \mathop \to 0} \paren { \alpha + \map \epsilon h} = \alpha$
By definition of differentiability, $f$ is differentiable at $z$ with $\map {f'} z = \alpha$.
$\blacksquare$


Also see
Characterization of Differentiability


Sources
2000: Ebbe Thue Poulsen and Klaus Thomsen: Indledning til Matematisk Analyse 1a: $\S 7.1$




