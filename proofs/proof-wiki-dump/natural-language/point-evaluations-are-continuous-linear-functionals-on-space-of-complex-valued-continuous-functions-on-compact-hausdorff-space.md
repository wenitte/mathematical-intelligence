# 

Source: https://proofwiki.org/wiki/Point_Evaluations_are_Continuous_Linear_Functionals_on_Space_of_Complex-Valued_Continuous_Functions_on_Compact_Hausdorff_Space

Theorem
Let $K$ be a compact Hausdorff space. 
Let $\map \CC K$ be the space of complex-valued continuous functions of compact Hausdorff space.
For $k \in K$, define $\delta_k : \map \CC K \to \C$ by: 

$\map {\delta_k} f = \map f k$
for each $f \in \map \CC K$.

Then $\delta_k$ is a continuous linear functional on $\map \CC K$ and further: 

$\norm {\delta_k}_{\map \CC {K}^\ast} = 1$


Proof
Let $k \in K$. 
$\delta_k$ is clearly linear, so we need to show that it is continuous.
From Continuity of Linear Functionals, it is enough to show that $\delta_k$ is bounded.
For each $f \in \map \CC K$ we have: 

$\ds \cmod {\map f k} \le \sup_{x \in K} \cmod {\map f x}$
That is: 

$\cmod {\map {\delta_k} f} \le \norm f_\infty$
If $K$ is a singleton, then we have $\cmod {\map {\delta_k} f} = \norm f_\infty$ for each $f \in \map \CC K$ and hence $\norm {\delta_k}_{\map \CC {K}^\ast} = 1$. 
If $K$ is not a singleton, pick distinct points $k, \ell \in K$.
From Urysohn's Lemma, there exists a continuous function $f : K \to \closedint 0 1 \subseteq \C$ with $\map f \ell = 0$ and $\map f k = 1$.
For this $f \in \map \CC K$, we have: 

$\cmod {\map {\delta_k} f} = \cmod {\map f k} = 1 = \sup_{x \in K} \cmod {\map f x} = \norm f_\infty$
Hence $\norm {\delta_k}_{\map \CC K^\ast} = 1$ in this case as well.
$\blacksquare$





