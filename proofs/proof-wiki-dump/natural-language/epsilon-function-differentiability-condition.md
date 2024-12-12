# 

Source: https://proofwiki.org/wiki/Epsilon-Function_Differentiability_Condition



Theorem
Let $f: D \to \R$ be a continuous function, where $D \subseteq \R$ is an open set.
Let $x \in \R$.

Then $f$ is differentiable at $x$ if and only if there exist $\alpha \in \R$ and $r \in \R_{>0}$ such that for all $h \in \openint {-r} r \setminus \set 0$:

$\map f {x + h} = \map f x + h \paren {\alpha + \map \epsilon h}$
where:

$\openint {-r} r$ denotes an open interval of $0$
$\epsilon: \openint {-r} r \setminus \set 0 \to \R$ is a real function with $\ds \lim_{h \mathop \to 0} \map \epsilon h = 0$.

If the conditions are true, then $\alpha = \map {f'} x$.
If $f$ is continuously differentiable at $x$, then $\epsilon$ is a continous function.


Complex Case
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
Assume that $f$ is differentiable in $x$.
By definition of open set, there exists $r \in \R_{>0}$ such that $\openint {x - r} {x + r} \subseteq D$.
Define $\epsilon: \openint {-r} r \setminus \set 0 \to \R$ by:

$\map \epsilon h = \dfrac {\map f {x + h} - \map f x} h - \map {f'} x$
If $h \in \openint {-r} r \setminus \set 0$, then $x + h \in \openint {x - r} {x + r} \setminus \set x \subseteq D$, so $\epsilon$ is well-defined.
As $f$ is differentiable at $x$, it follows that:

$\ds \lim_{h \mathop \to 0} \map \epsilon h = \lim_{h \mathop \to 0} \dfrac {\map f {x + h} - \map f x} h - \map {f'} x = \map {f'} x - \map {f'} x = 0$
If we put $\alpha = \map {f'} x$, it follows that for all $h \in \openint {-r} r \setminus \set 0$:

$\map f {x + h} = \map f x + h \paren {\alpha + \map \epsilon h}$
$\Box$

If $f$ is continuously differentiable, we can choose $r \in \R_{>0}$ such that $f'$ is continuous in $\openint {-r} r$.
From Continuity of Composite Mapping: Corollary, it follows that $\epsilon$ will be continuous in $\openint {-r} r \setminus \set 0$.
$\Box$


Sufficient condition
Rewrite the equation of the assumption to get:

$\dfrac {\map f {x + h} - \map f x} h = \alpha + \map \epsilon h$
From Sum Rule for Limits of Real Functions, it follows that:

$\ds \lim_{h \mathop \to 0} \dfrac {\map f {x + h} - \map f x} h = \lim_{h \mathop \to 0} \paren {\alpha + \map \epsilon h} = \alpha$
By definition of differentiability, $f$ is differentiable at $x$ with $\map {f'} x = \alpha$.
$\blacksquare$


Also see
Characterization of Differentiability


Sources
2000: Ebbe Thue Poulsen and Klaus Thomsen: Indledning til Matematisk Analyse 1a: $\S 7.1$




