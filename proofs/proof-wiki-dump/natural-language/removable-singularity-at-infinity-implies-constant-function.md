# 

Source: https://proofwiki.org/wiki/Removable_Singularity_at_Infinity_implies_Constant_Function

Theorem
Let $f : \C \to \C$ be an entire function.
Let $f$ have an removable singularity at $\infty$. 

Then $f$ is constant.


Proof
We are given that $f$ has a removable singularity at $\infty$.
By Riemann Removable Singularities Theorem, $f$ must be bounded in a neighborhood of $\infty$.
That is, there exists a real number $M > 0$ such that:

$\forall z \in \set {z : \cmod z > r}: \cmod {\map f z} \le M$
for some real $r \ge 0$.
However, by Continuous Function on Compact Space is Bounded, $f$ is also bounded on $\set {z: \cmod z \le r}$. 
As $\set {z: \cmod z > r} \cup \set {z: \cmod z \le r} = \C$, $f$ is therefore bounded on $\C$.
Therefore by Liouville's Theorem, $f$ is constant.
$\blacksquare$





