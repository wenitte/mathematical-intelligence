# 

Source: https://proofwiki.org/wiki/Initial_Value_Theorem_of_Laplace_Transform



Theorem
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of the real function $f$.
Then:

$\ds \lim_{t \mathop \to 0} \map f t = \lim_{s \mathop \to \infty} s \, \map F s$
if those limits exist.


General Result
Let $\ds \lim_{t \mathop \to 0} \dfrac {\map f t} {\map g t} = 1$.

Then:

$\ds \lim_{s \mathop \to \infty} \dfrac {\map F s} {\map G s} = 1$
if those limits exist.


Proof
We have that $\map {f'} t$ is piecewise continuous with one-sided limits and of exponential order.

Hence:

$\ds \lim_{s \mathop \to \infty} \int_0^\infty e^{-s t} \map {f'} t \rd t = 0$

Suppose that $f$ is continuous at $t = 0$.
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \map F s - \map f 0$

Taking the limit as $s \to \infty$ in $(1)$, where it is assumed that $\map f t$ is continuous at $t = 0$:

$0 = \ds \lim_{s \mathop \to \infty} s \map F s - \map f 0$
or:

$\ds \lim_{s \mathop \to \infty} s \map F s = \map f 0 = \lim_{t \mathop \to 0} \map f t$
$\Box$

Suppose that $f$ is not continuous at $t = 0$.
From Laplace Transform of Derivative with Discontinuity at Zero:

$\laptrans {\map {f'} t} = s \map F s - \map f {0^+}$
which means:

$(2): \quad \laptrans {\map {f'} t} = s \map F s - \ds \lim_{u \mathop \to 0} \map f u$

Similarly taking the limit as $s \to \infty$ in $(2)$, where it is assumed that $\map f t$ is continuous at $t = 0$:

$0 = \ds \lim_{s \mathop \to \infty} s \map F s - \lim_{u \mathop \to 0} \map f u$
and so:

$\ds \lim_{s \mathop \to \infty} s \map F s = \lim_{u \mathop \to 0} \map f u = \lim_{t \mathop \to 0} \map f t$
$\blacksquare$


Examples
Example 1
Consider the real function $f: \R \to \R$ defined as:

$\map f t = 3 e^{-2 t}$
From Laplace Transform of Exponential:

$\laptrans {\map f t} = \dfrac 3 {s + 2}$

Then by the Initial Value Theorem of Laplace Transform:














\(\ds \lim_{t \mathop \to 0} 3 e^{-2 t}\)

\(=\)







\(\ds \lim_{s \mathop \to \infty} \dfrac 3 {s + 2}\)














\(\ds \leadsto \ \ \)





\(\ds 3\)

\(=\)







\(\ds 3\)











Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $11$. Initial-value theorem: Theorem $1 \text{-} 16$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Initial and Final Value Theorems: $25$




