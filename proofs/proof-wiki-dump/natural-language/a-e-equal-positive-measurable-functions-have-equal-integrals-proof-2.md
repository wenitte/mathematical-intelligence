# 

Source: https://proofwiki.org/wiki/A.E._Equal_Positive_Measurable_Functions_have_Equal_Integrals/Proof_2

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R_{\ge 0}$ be positive $\Sigma$-measurable functions.
Suppose that $f = g$ almost everywhere.

Then:

$\ds \int f \rd \mu = \int g \rd \mu$


Proof
Let: 

$A = \set {x \in X : \map f x \ne \map g x}$
From Measurable Functions Determine Measurable Sets, we have that: 

$A$ is $\Sigma$-measurable.
Define $h : X \to \overline \R$ by: 

$\map h x = \begin{cases}+\infty & x \in A \\ 0 & x \not \in A\end{cases}$
We can show that $h$ is $\Sigma$-measurable.
If $t < 0$, we have that: 

$\set {x \in X : \map h x \le t} = \O$
From Sigma-Algebra Contains Empty Set, we therefore have that: 

$\set {x \in X : \map h x \le t}$ is $\Sigma$-measurable if $t < 0$.
If $t \ge 0$, we have that: 

$\set {x \in X : \map h x \le t} = X \setminus A$
This is also $\Sigma$-measurable, so $h$ is a $\Sigma$-measurable function.
Clearly also $h \ge 0$. 
We can show that: 

$f \le g + h$
If $x \in A$, then $\map h x = +\infty$, so $\map g x + \map h x = +\infty$, and the inequality is satisfied trivially.
If $x \not \in A$, we have $\map f x = \map g x = \map g x + \map h x$, and so $\map f x \le \map g x + \map h x$ again.
From Integral of Positive Measurable Function is Monotone, we then have: 

$\ds \int f \rd \mu \le \int \paren {g + h} \rd \mu$
Applying Integral of Integrable Function is Additive, we then have: 

$\ds \int f \rd \mu \le \int g \rd \mu + \int h \rd \mu$
To compute the latter integral, note that: 

$x \in X$ is such that $\map h x \ne 0$ if and only if $x \in A$.
Since by hypothesis, $f = g$ $\mu$-almost everywhere, we have that: 

$\map \mu A = 0$
So:

$h = 0$ $\mu$-almost everywhere.
Then, by Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$\ds \int \size h \rd \mu = 0$
Since $h \ge 0$, this gives: 

$\ds \int h \rd \mu = 0$
and so: 

$\ds \int f \rd \mu \le \int g \rd \mu$
Similarly, we have: 

$g \le f + h$
and obtain: 

$\ds \int g \rd \mu \le \int f \rd \mu$
simply swapping $g$ for $f$ in the prior computation. 
We therefore have: 

$\ds \int f \rd \mu = \int g \rd \mu$
$\blacksquare$





