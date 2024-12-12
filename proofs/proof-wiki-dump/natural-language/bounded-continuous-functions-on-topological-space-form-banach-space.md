# 

Source: https://proofwiki.org/wiki/Bounded_Continuous_Functions_on_Topological_Space_form_Banach_Space

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a topological space. 
Let $Y$ be a Banach space over $\GF$.
Let $\map {\CC_b} {X; Y}$ be the space of bounded continuous functions on $X$ valued in $Y$. 
Let $\norm {\,\cdot\,}_\infty$ be the supremum norm on $\CC$.

Then $\struct {\map {\CC_b} {X; Y}, \norm {\,\cdot\,}_\infty}$ is a Banach space over $\GF$.


Proof
We first show that $\map {\CC_b} {X; Y}$ is a vector space over $\GF$.
We have that the set of continuous mappings $X \to Y$ is a subset of the set $Y^X$ of all mappings $X \to Y$.
Therefore by Vector Space of All Mappings is Vector Space, we need only show that $\map {\CC_b} {X; Y}$ is a subspace of $Y^X$.
First, define $f : X \to Y$ by: 

$\map f x = {\mathbf 0}_Y$
for each $x \in X$. 
By Constant Function is Continuous, we have that $f$ is continuous, so $\map {\CC_b} {X; Y} \ne \O$. 
By the One-Step Vector Subspace Test we now need to show that $\map {\CC_b} {X; Y}$ is closed under linear combinations.
Let $f, g \in \map {\CC_b} {X; Y}$ and $\lambda \in \GF$. 
We have that $f + \lambda g$ is continuous from Linear Combination of Continuous Functions valued in Topological Vector Space is Continuous.  
Further, we have:

$\norm {\map f x + \lambda \map g x}_Y \le \norm {\map f x}_Y + \cmod \lambda \norm {\map g x}_Y$
from Norm Axiom $\text N 3$: Triangle Inequality. 
Hence by taking supremums, we get:

$\norm {f + \lambda g}_\infty \le \norm f_\infty + \cmod \lambda \norm g_\infty < \infty$
So $f + \lambda g \in \map {\CC_b} {X; Y}$.
So $\map {\CC_b} {X; Y}$ is a vector space. 

We move to proving that $\map {\CC_b} {X; Y}$ is a normed vector space. 
By the definition of $\map {\CC_b} {X; Y}$, we have:

$\ds \sup_{x \in X} \norm {\map f x}_Y < \infty$
for each $f \in \map {\CC_b} {X; Y}$. 
So we can define the supremum norm:

$\ds \norm f_\infty = \sup_{x \in X} \norm {\map f x}_Y$
From Supremum Norm is Norm, $\map {\CC_b} {X; Y}$ is a normed vector space. 

We now show that $\map {\CC_b} {X; Y}$ is a Banach space. 
Let $\sequence {f_n}_{n \in \N}$ be a Cauchy sequence in $\CC$. 
Then for each $\epsilon > 0$ there exists $N \in \N$ such that: 

$\ds \norm {f_n - f_m}_\infty = \sup_{x \in X} \norm {\map {f_n} x - \map {f_m} x}_Y < \epsilon$
for each $n, m \ge N$. 
In particular, $\sequence {\map {f_n} x}_{n \in \N}$ is a Cauchy sequence in $Y$. 
Since $Y$ is Banach, we have $\map {f_n} x \to L_x$ for some $L_x \in Y$. 
Define $f : X \to Y$ by: 

$\map f x = L_x$
for each $x \in X$. 
Taking $N, \epsilon$ as defined previously, we have: 

$\norm {\map {f_n} x - \map {f_m} x}_Y < \epsilon$
for all $x \in X$ and $n, m \ge N$. 
Taking $m \to \infty$ and using Modulus of Limit: Normed Vector Space, we obtain: 

$\norm {\map {f_n} x - \map f x}_Y < \epsilon$
for all $x \in X$, and hence $f_n \to f$ uniformly. 

We now show that $f \in \map {\CC_b} {X; Y}$. 
Let $x \in X$.
We show $f$ is continuous at $x$.
Let $y \in X$.
We have:

$\norm {\map f x - \map f y}_Y \le \norm {\map f x - \map {f_n} x}_Y + \norm {\map {f_n} x - \map {f_n} y}_Y +\norm {\map {f_n} y - \map f y}_Y$
Let $\epsilon > 0$. 
Then we can find $n \in \N$ such that:

$\ds \sup_{x \mathop \in X} \norm {\map f x - \map {f_n} x}_Y < \frac \epsilon 3$
Since $f_n$ is continuous at $x$, we can find an open neighborhood $U$ of $x$ such that:

$\norm {\map {f_n} x - \map {f_n} y}_Y < \frac \epsilon 3$
for $y \in U$. 
Then for $y \in U$ we have:

$\norm {\map f x - \map f y}_Y < \epsilon$
Hence $f$ is continuous at $x$.
Finally, we have:

$\norm {\map f x}_Y \le \norm {\map f x - \map {f_n} x}_Y + \norm {\map {f_n} x}_Y$
We have shown that for some $n \in \N$, we have:

$\ds \sup_{x \mathop \in X} \norm {\map f x - \map {f_n} x}_Y < 1$
Further, since $f_n \in \map {\CC_b} {X; Y}$, we have:

$\ds \sup_{x \mathop \in X} \norm {\map {f_n} x}_Y < \infty$
We therefore have that:

$\ds \sup_{x \mathop \in X} \norm {\map f x}_Y < \infty$
so that $f \in \map {\CC_b} {X; Y}$.
So we have shown that every Cauchy sequence in $\map {\CC_b} {X; Y}$ converges.
So $\map {\CC_b} {X; Y}$ is Banach as required.
$\blacksquare$





