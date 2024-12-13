# 

Source: https://proofwiki.org/wiki/Right-Limits_of_Filtration_of_Sigma-Algebra_form_Filtration

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\sequence {\FF_t}_{t \ge 0}$ be a continuous-time filtration of $\Sigma$. 
For each $t \in \hointr 0 \infty$, let $\FF_{t^+}$ be the right-limit of $\sequence {\FF_t}_{t \ge 0}$ at $t$. 

Then $\sequence {\FF_{t^+} }_{t \ge 0}$ is a filtration of $\Sigma$. 


Proof
We need to show that $\FF_{t^+}$ is a sub-$\sigma$-algebra of $\Sigma$ for each $t \in \hointr 0 \infty$, and:

$\FF_{t^+} \subseteq \FF_{q^+}$
for $t, q \in \hointr 0 \infty$ with $t \le q$.
From the definition of the right-limit, we have: 

$\ds \FF_{t^+} = \bigcap_{s > t} \FF_s$
for each $t \in \hointr 0 \infty$.
From Intersection of Sigma-Algebras, we have that $\FF_{t^+}$ is a sub-$\sigma$-algebra of $\Sigma$ for each $t \in \hointr 0 \infty$.
Let $t, q \in \hointr 0 \infty$ with $t \le q$. 
Then, we have: 

$\set {s \in \R : s > q} \subseteq \set {s \in \R : s > t}$
and so: 

$\ds \bigcap_{s > t} \FF_s \subseteq \bigcap_{s > q} \FF_s$

A specific link is needed here.In particular: something for intersection being decreasing, can't think what it'd be called rnYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.
so that:

$\FF_{t^+} \subseteq \FF_{q^+}$
$\blacksquare$





