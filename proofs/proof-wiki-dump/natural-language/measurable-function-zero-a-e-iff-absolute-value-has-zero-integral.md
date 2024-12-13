# 

Source: https://proofwiki.org/wiki/Measurable_Function_Zero_A.E._iff_Absolute_Value_has_Zero_Integral



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a $\Sigma$-measurable function.

Then the following are equivalent:

$(1) \quad$ $f = 0$ almost everywhere
$(2) \quad$ $\ds \int \size f \rd \mu = 0$


Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a non-negative integrable function.
Let $A, B \in \Sigma$ have $A \subseteq B$. 

Then: 

$\ds \int_A f \rd \mu = \int_B f \rd \mu$
if and only if: 

$f \times \chi_{B \setminus A} = 0$ $\mu$-almost everywhere.


Proof
Let $\EE^+$ be the space of positive simple functions.


$(1)$ implies $(2)$
Suppose that: 

$f = 0$ almost everywhere.
Note that if $\map f x = 0$ for some $x \in X$, then: 

$\size {\map f x} = 0$ for some $x \in X$.
So:

$\size f = 0$ almost everywhere.
That is: 

there exists a null set $N \subseteq X$ such that if $\size {\map f x} \ne 0$, then $x \in N$.
From Absolute Value of Measurable Function is Measurable:

$\size f$ is $\Sigma$-measurable.
So, its $\mu$-integral is well-defined.

Let $g \in \EE^+$ have $g \le \size f$. 
Then, if $\map g x \ne 0$ for $x \in X$ we must have $\size {\map f x} \ne 0$.
So, if $x \in X$ has $\map g x \ne 0$, then $x \in N$. 
From Simple Function has Standard Representation: 

there exists disjoint $\Sigma$-measurable sets $E_1, E_2, \ldots, E_n$ and non-negative real numbers $a_1, a_2, \ldots, a_n$ such that:
$\ds \map f x = \sum_{i \mathop = 1}^n a_i \map {\chi_{E_i} } x$
for each $x \in X$.
If $a_i \ne 0$, then: 

$\map f x \ne 0$ for $x \in E_i$.
That is: 

$x \in N$ for all $x \in E_i$.
So, we obtain: 

$E_i \subseteq N$
for each $i$. 
Then, from Measure is Monotone, we have: 

$\map \mu {E_i} \le \map \mu N = 0$
So:

$\map \mu {E_i} = 0$
for each $i$ such that $a_i \ne 0$. 
So: 

$a_i \map \mu {E_i} = 0$
for each $i$. 
Then:

$\ds \map {I_\mu} g = 0$
for all $g \in \EE^+$ with $g \le \size f$, where: 

$\map {I_\mu} g$ denotes the $\mu$-integral of the positive simple function $g$.
So, from the definition of the $\mu$-integral:

$\ds 0 = \sup \set {\map {I_\mu} g: g \le f, g \in \EE^+} = \int \size f \rd \mu$
$\Box$


$(2)$ implies $(1)$
Suppose that: 

$\ds \int \size f \rd \mu = 0$
From Markov's Inequality, we have, for each $n \in \N$: 














\(\ds \map \mu {\set {x \in X : \size {\map f x} \ge \frac 1 n} }\)

\(\le\)







\(\ds n \int \size f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds 0\)









So:

$\ds \map \mu {\set {x \in X : \size {\map f x} \ge \frac 1 n} } = 0$
for each $n \in \N$. 
Note that: 














\(\ds \set {x \in X : \map f x \ne 0}\)

\(=\)







\(\ds \set {x \in X : \size {\map f x} > 0}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty \set {x \in X : \size {\map f x} \ge \frac 1 n}\)









From Measure is Countably Subadditive, we have: 














\(\ds \map \mu {\set {x \in X : \map f x \ne 0} }\)

\(=\)







\(\ds \mu \paren {\bigcup_{n \mathop = 1}^\infty \set {x \in X : \size {\map f x} \ge \frac 1 n} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {\set {x \in X : \size {\map f x} \ge \frac 1 n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









So:

$\map \mu {\set {x \in X : \map f x \ne 0} } = 0$
That is: 

$f = 0$ almost everywhere.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.9 \ \text{(i)}$




