# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Uniformly_Continuous/Metric_Space

Theorem
Let $M_1 = \left({A_1, d_1}\right)$ and $M_2 = \left({A_2, d_2}\right)$ be metric spaces.

Let $f_c: A_1 \to A_2$ be the constant mapping from $A_1$ to $A_2$:

$\exists c \in A_2: \forall a \in A_1: f_c \left({a}\right) = c$
That is, every point in $A_1$ maps to the same point $c$ in $A_2$.

Then $f_c$ is uniformly continuous throughout $A_1$ with respect to $d_1$ and $d_2$.


Proof
Let $f_c: A_1 \to A_2$ be the constant mapping between two metric spaces $M_1 = \left({A_1, d_1}\right)$ and $M_2 = \left({A_2, d_2}\right)$.
Let $\epsilon \in \R: \epsilon > 0$.
Pick any $\delta \in \R$ such that $\delta > 0$.
Let $x, y \in A_1$ such that $d_1 \left({x, y}\right) < \delta$.
Now we have:

$f_c \left({x}\right) = c = f_c \left({y}\right)$
Hence:

$d_2 \left({f_c \left({x}\right), f_c \left({y}\right)}\right) = d_2 \left({c, c}\right)$
By definition of a metric:

$d_2 \left({c, c}\right) = 0 < \epsilon$.
Thus we have that:

$\forall \epsilon > 0: \exists \delta \in \R: d_1 \left({x, y}\right) < \delta \implies d_2 \left({f_c \left({x}\right), f_c \left({y}\right)}\right) < \epsilon$

Hence by definition of uniform continuity on a metric space, $f_c$ is uniformly continuous throughout $A_1$ with respect to $d_1$ and $d_2$.
$\blacksquare$





