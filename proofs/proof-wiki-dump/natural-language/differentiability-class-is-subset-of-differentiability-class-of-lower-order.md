# 

Source: https://proofwiki.org/wiki/Differentiability_Class_is_Subset_of_Differentiability_Class_of_Lower_Order



Theorem
Let $f$ be a real function. 
Let $f$ be an element of differentiability class $C^n$.
Then:

$\forall k \in \set {0, 1, \ldots, n - 1}: f \in C^k$
That is, $f$ is in all differentiability classes of order less than $n$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$f \in C^n \implies \forall k \in \set {0, 1, \ldots, n - 1}: f \in C^k$


Basis for the Induction
$\map P 1$ is the case:

$f \in C^1 \implies f \in C^0$
By definition of differentiability class $C^0$:

$C^0$ is the class of continuous real functions $C$.
Hence $\map P 1$ is seen to hold from Function in Differentiability Class 1 is also in Continuity Class:

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$f \in C^r \implies \forall k \in \set {0, 1, \ldots, r - 1}: f \in C^k$

from which it is to be shown that:

$f \in C^{r + 1} \implies \forall k \in \set {0, 1, \ldots, r }: f \in C^k$


Induction Step
This is the induction step:
Let $f \in C^{r + 1}$.
Let $g = \dfrac {\d^r} {\d x^r} \map f x$.
Then:

$\dfrac {\d g} {\d x} = \dfrac {\d^{r + 1} } {\d x^{r + 1} } \map f x$
Thus $g \in C^1$.
By the basis for the induction it follows that $g \in C^0$.
That is, $g$ is continuous.
Hence by definition of $g$, $\dfrac {\d^r} {\d x^r} \map f x$ is continuous.
That is:

$f \in C^r$
By the induction hypothesis:

$\forall k \in \set {0, 1, \ldots, r - 1}: f \in C^k$
It follows that:

$\forall k \in \set {0, 1, \ldots, r}: f \in C^k$

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: f \in C^n \implies \forall k \in \set {0, 1, \ldots, n - 1}: f \in C^k$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.2$ Derivatives




