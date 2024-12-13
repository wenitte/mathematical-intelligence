# 

Source: https://proofwiki.org/wiki/Refinement_of_Open_Cover_has_Greater_Entropy

Theorem
Let $X$ be a compact topological space.
Let $\alpha, \beta$ be open covers of $X$.
Let $\map H \alpha$ and $\map H \beta$ be their entropies.
Suppose that $\beta$ is a refinement of $\alpha$.

Then:

$\map H \alpha \le \map H \beta$


Proof
By definition of entropy of open cover, there is a finite subcover $\beta' \subseteq \beta$ such that:

$\map H \beta = \map \ln k$
with $k = \size {\beta '}$.
We write:

$\beta' = \set {B_1, \ldots, B_k}$
Recall the definition of Refinement of Cover:

$\forall i \in \set {1, \ldots ,k} \; \exists A_i \in \alpha : B_i \subseteq A_i$
Then:

$\alpha' = \set {A_1, \ldots, A_k}$
is a subcover of $\alpha$.
Thus, by definition of entropy of open cover:

$\map H \alpha \le \map \ln k = \map H \beta$
$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory Chapter $7$: Topological Entropy




