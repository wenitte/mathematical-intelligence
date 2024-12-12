# 

Source: https://proofwiki.org/wiki/Bound_on_Survival_Function_of_Pointwise_Product

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g : X \to \overline \R$ be $\Sigma$-measurable functions.
Let $F_{f g}$ be the survival function of the pointwise product $f g$.
Let $F_f$ and $F_g$ be the survival functions of $f$ and $g$ respectively. 

Then: 

$\ds \map {F_{f g} } {\alpha \beta} \le \map {F_f} \alpha + \map {F_g} \beta$ for all $\alpha, \beta \in \hointr 0 \infty$.


Proof
Let $\alpha, \beta \in \hointr 0 \infty$.
We show that: 

$\set {x \in X : \size {\map f x \map g x} \ge \alpha \beta} \subseteq \set {x \in X : \size {\map f x} \ge \alpha} \cup \set {x \in X : \size {\map g x} \ge \beta}$
Let $x \in X$ be such that $\size {\map f x \map g x} \ge \alpha \beta$.
If $\size {\map f x \map g x} = \infty$, we have $\size {\map f x} = \infty$ or $\size {\map g x}$. 
Then we either have $\size {\map f x} \ge \alpha$ or $\size {\map g x} \ge \beta$, so that: 

$x \in \set {x \in X : \size {\map f x} \ge \alpha} \cup \set {x \in X : \size {\map g x} \ge \beta}$.
Now suppose that $\size {\map f x \map g x} < \infty$. 
Suppose that $\size {\map f x} < \alpha$ and $\size {\map g x} < \beta$, then $\size {\map f x \map g x} = \size {\map f x} \size {\map g x} < \alpha \beta$
contradicting that: 

$\size {\map f x \map g x} \ge \alpha \beta$
So we must have $\size {\map f x} \ge \alpha$ or $\size {\map g x} \ge \beta$. 
So we have:

$x \in \set {x \in X : \size {\map f x} \ge \alpha} \cup \set {x \in X : \size {\map g x} \ge \beta}$.
again in this case.
So:

$\set {x \in X : \size {\map f x \map g x} \ge \alpha \beta} \subseteq \set {x \in X : \size {\map f x} \ge \alpha} \cup \set {x \in X : \size {\map g x} \ge \beta}$
by the definition of set inclusion. 
Then we have: 














\(\ds \map {F_{f g} } {\alpha \beta}\)

\(=\)







\(\ds \map \mu {\set {x \in X : \size {\map f x \map g x} \ge \alpha \beta} }\)





Definition of Survival Function














\(\ds \)

\(\le\)







\(\ds \map \mu {\set {x \in X : \size {\map f x} \ge \alpha} \cup \set {x \in X : \size {\map g x} \ge \beta} }\)





Measure is Monotone














\(\ds \)

\(\le\)







\(\ds \map \mu {\set {x \in X : \size {\map f x} \ge \alpha} } + \map \mu {\set {x \in X : \size {\map g x} \ge \beta} }\)





Measure is Subadditive














\(\ds \)

\(=\)







\(\ds \map {F_f} \alpha + \map {F_g} \beta\)





Definition of Survival Function



$\blacksquare$


Sources
2014: Loukas Grafakos: Classical Fourier Analysis (3rd ed.) ... (previous) ... (next): $1.1.1$: The Distribution Function




