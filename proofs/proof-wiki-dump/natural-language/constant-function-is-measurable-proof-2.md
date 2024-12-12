# 

Source: https://proofwiki.org/wiki/Constant_Function_is_Measurable/Proof_2

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f : X \to \overline \R$ be a constant extended real-valued function.
That is, there exists $c \in \overline \R$ such that: 

$\map f x = c$ for all $x \in X$.

Then $f$ is $\Sigma$-measurable.


Proof
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





