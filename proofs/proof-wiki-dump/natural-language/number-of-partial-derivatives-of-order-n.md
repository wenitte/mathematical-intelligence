# 

Source: https://proofwiki.org/wiki/Number_of_Partial_Derivatives_of_Order_n



Theorem
Let $u = \map f {x_1, x_2, \ldots, x_m}$ be a function of the $m$ independent variables $x_1, x_2, \ldots, x_m$.

There are $m^n$ partial derivatives of $u$ of order $n$.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

There are $m^n$ partial derivatives of $u$ of order $n$.

$\map P 0$ is the degenerate case where $f$ is not partially differentiated at all:

$\map f {x_1, x_2, \ldots, x_m}$
and it is apparent that there is only $1 = m^0$ such.

Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:

There are $m^1 = m$ partial derivatives of $u$ of order $1$.
These can be instanced as:














\(\ds \map {f_1} {x_1, x_2, \ldots, x_m}\)

\(=\)







\(\ds \dfrac {\partial u} {\partial {x_1} }\)




















\(\ds \map {f_2} {x_1, x_2, \ldots, x_m}\)

\(=\)







\(\ds \dfrac {\partial u} {\partial {x_2} }\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds \map {f_m} {x_1, x_2, \ldots, x_m}\)

\(=\)







\(\ds \dfrac {\partial u} {\partial {x_m} }\)









and it is apparent that there are $m$ such.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

There are $m^k$ partial derivatives of $u$ of order $k$.

from which it is to be shown that:

There are $m^{k + 1}$ partial derivatives of $u$ of order $k + 1$.


Induction Step
This is the induction step:
Let $g$ be one of the partial derivatives of $u$ of order $k$.
Then by the basis for the induction, there are $m$ partial derivatives of $g$.
By the induction hypothesis, there are $m^k$ partial derivatives of $u$ of order $k$.
Thus by the Product Rule for Counting, there are $m \times m^n$ partial derivatives of $u$ of order $k + 1$.
That is, a total of $m^{k + 1}$ partial derivatives of $u$ of order $k + 1$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}:$ there are $m^n$ partial derivatives of $u$ of order $n$.
$\blacksquare$


Examples
Partial Derivatives of Order $1$ of Function of $2$ Variables
Let $u = \map f {x, y}$ be a real function of $2$ variables.
There are $2$ partial derivatives of $u$ of order $1$.


Partial Derivatives of Order $2$ of Function of $2$ Variables
Let $u = \map f {x, y}$ be a real function of $2$ variables.
There are $4$ partial derivatives of $u$ of order $2$.


Partial Derivatives of Order $n$ of Function of $2$ Variables
Let $u = \map f {x, y}$ be a real function of $2$ variables.
There are $2^n$ partial derivatives of $u$ of order $n$.


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: $1.3$ Higher Order Derivatives




