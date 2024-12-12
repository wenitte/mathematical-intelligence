# 

Source: https://proofwiki.org/wiki/User:Caliburn/s/1

Theorem
Let $\struct {X, d}$ and $\struct {Y, d'}$ be metric spaces. 
Let $\map \CC {X, Y}$ be the set of continuous functions $X \to Y$.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a uniformly convergent sequence in $\map \CC {X, Y}$.
Let $\FF = \set {f_i : i \in \N}$.

Then $\FF$ is pointwise equicontinuous.

Proof
Let $\epsilon>0$ and $x_0$ be given. Uniform convergence implies that the sequence is uniformly Cauchy. Choose $n_0$ such that $|f_n(x)-f_{n_0}(x)|<\epsilon$ for all $x$ and all $n\ge n_0$.
Sinc $f_k$ is continuous, choose $\delta_k \ (k\in \{1,\ldots,n_0\})$ such that $|x-x_0|<\delta_k$ implies $|f_k(x)-f_k(x_0)|<\epsilon$. Put $\delta=\min_k{\delta_k}$.
Now, if $n\ge n_0$ and $|x-x_0|<\delta$, triangle inequality yields
$|f_n(x)-f_n(x_0)|\le |f_n(x)-f_{n_0}(x)|+|f_{n_0}(x)-f_{n_0}(x_0)|+|f_{n_0}(x_0)-f_n(x_0)|<3\epsilon$.
If $k\le n_0$, then $|x-x_0|<\delta\le\delta_k$ implies $|f_k(x)-f_k(x_0)|<\epsilon$ by choice of $\delta_k$ above.
$\blacksquare$





