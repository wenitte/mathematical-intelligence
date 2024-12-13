# 

Source: https://proofwiki.org/wiki/Pointwise_Convergence_Implies_Convergence_in_Measure_on_Finite_Measure_Space



Theorem
Let $\struct {X, \Sigma, \mu}$ be a finite measure space.
Let $\sequence {f_n}_{n \mathop \in \N}, f_n : X \to \R$ be a sequence of measurable functions.
Also, let $f: X \to \R$ be a measurable function.
Suppose that $f$ is the pointwise limit of the $f_n$ $\mu$-almost everywhere.

Then $f_n$ converges in measure to $f$ (in $\mu$).
That is:

$\ds \lim_{n \mathop \to \infty} \map {f_n} x \stackrel {a.e.} {=} \map f x \implies \operatorname {\mu-\!\lim\,} \limits_{n \mathop \to \infty} f_n = f$


Proof
Since $\sequence {f_n}_{n \mathop \in \N}$ converges almost everywhere, we have: 

$\set {x \in X : \sequence {\map {f_n} x}_{n \mathop \in \N} \text { does not converge to } \map f x}$ is a $\mu$-null set.
We aim to deduce that: 

$\ds \lim_{n \mathop \to \infty} \map \mu {\set {x \in X : \size {\map {f_n} x - \map f x} > \epsilon} } = 0$
for each $\epsilon > 0$. 
Let $\epsilon > 0$.
For each $n \in \N$, define: 

$A_n = \set {x \in X : \size {\map {f_n} x - \map f x} > \epsilon}$
Also define: 

$\ds B_n = \bigcup_{k \mathop = n}^\infty A_n$
for each $n \in \N$. 
Then $\sequence {B_n}_{n \mathop \in \N}$ is a decreasing sequence. 
Since $\mu$ is finite, $\map \mu {B_1} < \infty$.
So, from Measure of Limit of Decreasing Sequence of Measurable Sets, we have: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty B_n} = \lim_{n \mathop \to \infty} \map \mu {B_n}$
Note that if:

$\ds x \in \bigcap_{n \mathop = 1}^\infty B_n$
We have: 

$\size {\map {f_n} x - \map f x} > \epsilon$ for each $n \in \N$.
So:

$\sequence {\map {f_n} x}_{n \mathop \in \N}$ does not converge to $\map f x$.
So:

$\ds \bigcap_{n \mathop = 1}^\infty B_n \subseteq \set {x \in X : \sequence {\map {f_n} x}_{n \mathop \in \N} \text { does not converge to } \map f x}$
So, from Null Sets Closed under Subset, we have: 

$\ds \map \mu {\bigcap_{n \mathop = 1}^\infty B_n} = 0$
and so:

$\ds \lim_{n \mathop \to \infty} \map \mu {B_n} = 0$
That is:

$\ds \lim_{n \mathop \to \infty} \map \mu {\bigcup_{k \mathop = n}^\infty A_k} = 0$
From Set is Subset of Union, we have: 

$\ds A_n \subseteq \bigcup_{k \mathop = n}^\infty A_k$
So from Measure is Monotone, we have: 

$\ds 0 \le \map \mu {A_n} \le \map \mu {B_n}$ for each $n \in \N$.
Then, from the Squeeze Theorem for Real Sequences, we have: 

$\ds \lim_{n \mathop \to \infty} \map \mu {A_n} = 0$
That is: 

$\ds \lim_{n \mathop \to \infty} \map \mu {\set {x \in X : \size {\map {f_n} x - \map f x} > \epsilon} } = 0$
Since $\epsilon > 0$ was arbitrary, we have:

$f_n \stackrel \mu \longrightarrow f$
$\blacksquare$


Also see
Pointwise Convergence may not imply Convergence in Measure shows that if $\mu$ is not a finite measure, the implication may not hold


Sources

Work In ProgressIn particular: Schilling does not make clear that $\mu$ should be finite, make mistakes page?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $16.4 \ \text{(ii)}$




