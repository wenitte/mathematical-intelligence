# 

Source: https://proofwiki.org/wiki/Convex_Real_Function_is_Pointwise_Supremum_of_Affine_Functions

Theorem
Let $f : \R \to \R$ be a convex real function. 

Then there exists a set $\SS \subseteq \R^2$ such that: 

$\ds \map f x = \sup_{\tuple {a, b} \in \SS} \paren {a x + b}$
for each $x \in \R$. 


Corollary
There exists a countable set $\mathcal S \subseteq \R^2$ such that: 

$\ds \map f x = \sup_{\tuple {a, b} \in \mathcal S} \paren {a x + b}$
for each $x \in \R$. 


Proof
Let $x \in \R$. 
We construct an affine function $\phi_x : \R \to \R$ such that: 

$\map f y \ge \map {\phi_x} y$
and $\map {\phi_x} x = \map f x$.
We will then argue that: 

$\map f x = \sup \set {\map {\phi_y} x : y \in \R}$
Define a function $g_x : \R \setminus \set x \to \R$ by: 

$\map {g_x} y = \dfrac {\map f y - \map f x} {y - x}$
for each $y \in \R \setminus \set x$.
From definition 3 of a convex real function, we have that $g_x$ is increasing.
Then from Limit of Increasing Function, we have: 

$\sup \set {\map {g_x} y : y < x} = c_x < \infty$
and from Limit of Increasing Function: Corollary: 

$\map {g_x} y \ge c_x$
for $y > x$.
That is, for $y - x > 0$, we have: 

$\dfrac {\map f y - \map f x} {y - x} \ge c_x$
and for $y - x < 0$, we have: 

$\dfrac {\map f y - \map f x} {y - x} \le c_x$
So for all $x, y \in \R$ with $x \ne y$ we have:

$\map f y - \map f x \ge c_x \paren {y - x}$
giving:

$\map f y \ge \map f x + c_x \paren {y - x}$
Clearly this inequality also holds when $x = y$. 
Now set:

$\map {\phi_x} y = \map f x + c_x \paren {y - x}$
for each $y \in \R$. 
Then we clearly have: 

$\map {\phi_x} x = \map f x$
while: 

$\map f x \ge \map {\phi_y} x$
for all $x, y \in \R$.
The latter gives that: 

$\sup \set {\map {\phi_y} x : y \in \R} \le \map f x$
while the former assures that: 

$\map f x \le \sup \set {\map {\phi_y} x : y \in \R}$
So we have: 

$\map f x = \sup \set {\map {\phi_y} x : y \in \R}$
In particular, setting: 

$\SS = \set {\tuple {c_y, \map f y - c_y y} : y \in \R}$
we obtain: 

$\ds \map f x = \sup_{\tuple {a, b} \in \SS} \paren {a x + b}$
for each $x \in \R$.
$\blacksquare$





