# 

Source: https://proofwiki.org/wiki/Family_of_Lipschitz_Continuous_Functions_with_same_Lipschitz_Constant_is_Uniformly_Equicontinuous

Theorem
Let $\struct {X, d}$ and $\struct {Y, d'}$ be metric spaces. 
Let $\map \CC {X, Y}$ be the set of continuous functions $X \to Y$.
Let $\FF \subset \map \CC {X, Y}$ be a set of Lipschitz continuous functions all with Lipschitz constant $M \ge 0$.

Then $\FF$ is uniformly equicontinuous.


Proof
Note that for each $f \in \FF$, we have: 

$\map {d'} {\map f x, \map f y} \le M \map d {x, y}$
for each $x, y \in X$.

Note that if $M = 0$, we have: 

$\map {d'} {\map f x, \map f y} = 0$
for each $f \in \FF$ and $x, y \in X$. 
That is: 

$\map {d'} {\map f x, \map f y} < \epsilon$
for each $\epsilon > 0$, $f \in \FF$ and $x, y \in X$. 
So $\FF$ is uniformly equicontinuous in this case.

Suppose now that $M > 0$. 
Note that whenever: 

$\ds \map d {x, y} < \frac \epsilon M$
we have: 














\(\ds \map {d'} {\map f x, \map f y}\)

\(\le\)







\(\ds M \map d {x, y}\)




















\(\ds \)

\(<\)







\(\ds M \times \frac \epsilon M\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









for each $f \in \FF$.
So $\FF$ is uniformly equicontinuous.
$\blacksquare$





