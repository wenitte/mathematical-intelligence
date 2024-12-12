# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Measurable

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \overline \R$ be a constant extended real-valued function.
That is, there exists $c \in \overline \R$ such that: 

$\map f x = c$ for all $x \in X$.

Then $f$ is $\Sigma$-measurable.


Proof 1
By the definition of a $\Sigma$-measurable function, we aim to show that: 

$\set {x \in X : \map f x \le r}$ is $\Sigma$-measurable for each $r \in \R$.
First suppose that $\size c < \infty$. 
Note that there are no $x \in X$ such that $\map f x < c$.
So for $r < c$, we have: 

$\set {x \in X : \map f x \le r} = \O$
From $\sigma$-Algebra Contains Empty Set, we then have: 

$\set {x \in X : \map f x \le r} \in \Sigma$ if $r < c$.
Since for all $x \in X$ we have $\map f x = c$, we also have $\map f x \le c$ for all $x \in X$.
So, if $r \ge c$:

$\set {x \in X : \map f x \le r} = X$
From the definition of a $\sigma$-algebra, we then have: 

$\set {x \in X : \map f x \le r} \in \Sigma$ if $r \ge c$.
So:

$\set {x \in X : \map f x \le r} \in \Sigma$ for all $r \in \R$
which was the demand.

Now suppose that $c = \infty$. 
Then we have: 

$\map f x \ge r$
for all $x \in X$ and $r \in \R$. 
So:

$\set {x \in X : \map f x \le r} = \O$
for each $r \in \R$. 
From $\sigma$-Algebra Contains Empty Set we have $\O \in \Sigma$, so:

$\set {x \in X : \map f x \le r} \in \Sigma$ for all $r \in \R$.

Now suppose that $c = -\infty$. 
Then we have: 

$\map f x \le r$
for all $x \in X$ and $r \in \R$.
So:

$\set {x \in X : \map f x \le r} = X$
for each $r \in \R$. 
From the definition of a $\sigma$-algebra, we have that $X \in \Sigma$, so:

$\set {x \in X : \map f x \le r} \in \Sigma$ for all $r \in \R$.
$\blacksquare$


Proof 2
First, suppose that $\size c < \infty$. 
From Characteristic Function of Universe, we can write: 

$\map f x = c \map {\chi_X} x$
for each $x \in X$.
From the definition of a $\sigma$-algebra, we have: 

$X \in \Sigma$
So: 

$f$ is a simple function.
Then, from Simple Function is Measurable, we have: 

$f$ is $\Sigma$-measurable.

Now suppose that $c = \infty$. 
For each $n \in \N$, define $f_n : X \to \R$ by: 

$\map {f_n} x = n$
for each $x \in X$. 
Then: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
We have shown that each $f_n$ is $\Sigma$-measurable for each $n \in \N$, so this is the limit of $\Sigma$-measurable functions.
So, by Pointwise Limit of Measurable Functions is Measurable:

$f$ is $\Sigma$-measurable in this case.

Now suppose that $c = -\infty$.
For each $n \in \N$, define $g_n : X \to \R$ by: 

$\map {g_n} x = -n$
for each $x \in X$. 
Then: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {g_n} x$
for each $x \in X$.
We have shown that each $g_n$ is $\Sigma$-measurable for each $n \in \N$, so this is the limit of $\Sigma$-measurable functions.
So, by Pointwise Limit of Measurable Functions is Measurable:

$f$ is $\Sigma$-measurable in this case.
$\blacksquare$





