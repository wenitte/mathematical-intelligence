# 

Source: https://proofwiki.org/wiki/Convergence_in_Mean_implies_Convergence_in_Measure

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \R$ be a $\Sigma$-measurable function.
For each $n \mathop \in \N$, let $f_n : X \to \R$ be a $\Sigma$-measurable function.

Then:

if $\sequence {f_n}_{n \mathop \in \N}$ converges in mean to $f$, it converges in measure to $f$.


Proof
From Pointwise Difference of Measurable Functions is Measurable:

$f_n - f$ is $\Sigma$-measurable for each $n \in \N$.
Let $\epsilon > 0$ be a real number.
From Markov's Inequality, we then have: 

$\ds \map \mu {\set {x \in X : \size {\map {f_n} x - \map f x} > \epsilon} } \le \frac 1 \epsilon \int \size {f_n - f} \rd \mu$
Since $\sequence {f_n}_{n \mathop \in \N}$ converges in mean to $f$, we have: 

$\ds \lim_{n \mathop \to \infty} \frac 1 \epsilon \int \size {f_n - f} \rd \mu = 0$
So, from the Squeeze Theorem, we have: 

$\ds \lim_{n \mathop \to \infty} \map \mu {\set {x \in X : \size {\map {f_n} x - \map f x} > \epsilon} } = 0$
for each $\epsilon > 0$.
So:

$\sequence {f_n}_{n \mathop \in \N}$ converges in measure to $f$.
$\blacksquare$





