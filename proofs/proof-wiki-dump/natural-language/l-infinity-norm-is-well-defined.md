# 

Source: https://proofwiki.org/wiki/L-Infinity_Norm_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\map {\LL^\infty} {X, \Sigma, \mu}$ be the Lebesgue $\infty$-space for $\struct {X, \Sigma, \mu}$.
Let $\sim$ be the $\mu$-almost-everywhere equality relation on $\map {\LL^\infty} {X, \Sigma, \mu}$.
Let $\map {L^\infty} {X, \Sigma, \mu}$ be the $L^\infty$ space on $\struct {X, \Sigma, \mu}$.
Let $\eqclass f \sim \in \map {L^\infty} {X, \Sigma, \mu}$. 

Then the $L^\infty$ norm: 

$\ds \norm {\eqclass f \sim}_\infty = \norm f_\infty$
is well-defined.


Proof
We show that for $E \in \map {L^\infty} {X, \Sigma, \mu}$, $\norm E_\infty$ is independent of the representative chosen for $E$.
Let:

$E = \eqclass f \sim = \eqclass g \sim$
for $\eqclass f \sim, \eqclass g \sim \in \map {L^\infty} {X, \Sigma, \mu}$.
We show that: 

$\norm f_\infty = \norm g_\infty$
From Equivalence Class Equivalent Statements, we have: 

$f \sim g$
So, from the definition of the almost-everywhere equality relation, we have: 

$\map f x = \map g x$ for $\mu$-almost all $x \in X$.
That is, there exists a $\mu$-null set $N$ such that: 

if $\map f x \ne \map g x$ then $x \in N$.
We show that: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } = \map \mu {\set {x \in X : \size {\map g x} \ge c} }$
From this it will follow that: 

$\inf \set {c > 0 : \map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0} = \inf \set {c > 0 : \map \mu {\set {x \in X : \size {\map g x} \ge c} } = 0}$
That is: 

$\norm f_\infty = \norm g_\infty$
Clearly: 

$\set {x \in N : \size {\map f x} \ge c} \subseteq N$
So, from Null Sets Closed under Subset:

$\map \mu {\set {x \in N : \size {\map f x} \ge c} } = 0$
Swapping $f$ for $g$, we also obtain: 

$\map \mu {\set {x \in N : \size {\map g x} \ge c} } = 0$
Since: 

$\set {x \in N : \size {\map f x} \ge c} \subseteq N$
and:

$\set {x \in X \setminus N : \size {\map f x} \ge c} \subseteq X \setminus N$
we have that: 

$\set {x \in N : \size {\map f x} \ge c}$ and $\set {x \in X \setminus N : \size {\map f x} \ge c}$ are disjoint for all real numbers $c > 0$.
Then:














\(\ds \map \mu {\set {x \in X : \size {\map f x} \ge c} }\)

\(=\)







\(\ds \map \mu {\set {x \in N : \size {\map f x} \ge c} \cup \set {x \in X \setminus N : \size {\map f x} \ge c} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in N : \size {\map f x} \ge c} } + \map \mu {\set {x \in X \setminus N : \size {\map f x} \ge c} }\)





from the countable additivity of $\mu$














\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in X \setminus N : \size {\map f x} \ge c} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in X \setminus N : \size {\map g x} \ge c} }\)





since $\map f x = \map g x$ for all $x \in X \setminus N$














\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in N : \size {\map g x} \ge c} } + \map \mu {\set {x \in X \setminus N : \size {\map g x} \ge c} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in N : \size {\map g x} \ge c} \cup \set {x \in X \setminus N : \size {\map g x} \ge c} }\)





using the countable additivity of $\mu$














\(\ds \)

\(=\)







\(\ds \map \mu {\set {x \in X : \size {\map g x} \ge c} }\)









as required.
$\blacksquare$





