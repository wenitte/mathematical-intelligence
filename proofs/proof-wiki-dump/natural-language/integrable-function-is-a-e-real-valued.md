# 

Source: https://proofwiki.org/wiki/Integrable_Function_is_A.E._Real-Valued

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a $\mu$-integrable function.

Then $\map f x \in \R$ for almost all $x \in X$.


Proof
From Set of Points for which Measurable Function is Real-Valued is Measurable: Corollary, we have that: 

$\set {x \in X : \size {\map f x} = +\infty}$ is $\Sigma$-measurable.
We now aim to show that this set is a null set. 
Now note that we have:

$\set {x \in X : \size {\map f x} = +\infty} \subseteq \set {x \in X : \size {\map f x} \ge n}$
From Measure is Monotone, we therefore have: 

$\ds \map \mu {\set {x \in X : \size {\map f x} = +\infty} } \le \map \mu {\set {x \in X : \size {\map f x} \ge n} }$
From Markov's Inequality, we have: 

$\ds \map \mu {\set {x \in X : \size {\map f x} \ge n} } \le \frac 1 n \int \size f \rd \mu$
So:

$\ds 0 \le \map \mu {\set {x \in X : \size {\map f x} = +\infty} } \le \frac 1 n \int \size f \rd \mu$
for each $n \in \N$.
From Lower and Upper Bounds for Sequences, taking $n \to \infty$, we obtain:

$\ds \map \mu {\set {x \in X : \size {\map f x} = +\infty} } = 0$
That is: 

$\ds \map \mu {X \setminus \set {x \in X : \map f x \in \R} } = 0$
So: 

$\map f x \in \R$ for almost all $x \in X$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.13$




