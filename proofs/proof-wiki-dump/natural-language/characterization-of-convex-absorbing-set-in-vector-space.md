# 

Source: https://proofwiki.org/wiki/Characterization_of_Convex_Absorbing_Set_in_Vector_Space



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$. 
Let $C$ be a convex set. 

Then $C$ is absorbing if and only if:

for each $x \in X$ there exists $t \in \R_{> 0}$ such that $x \in t C$.


Proof
Necessary Condition
Suppose that $C$ is absorbing.
Then for each $x \in X$ there exists $s \in \R_{> 0}$ such that $x \in t C$ for $s \in \C$ with $\cmod s \ge t$.
In particular, $x \in t C$. 
$\Box$

Sufficient Condition
Suppose that:

for each $x \in X$ there exists $t \in \R_{> 0}$ such that $x \in t C$.
Then there exists $t \in \R_{> 0}$ such that:

${\mathbf 0}_X \in t C$
In particular, we have:

${\mathbf 0}_X \in C$
First suppose that $\GF = \R$. 
Let $x \in X$.
Let $t_1, t_2 > 0$ be such that: 

$x \in t_1 C$
$-x \in t_2 C$
Let $t = \max \set {t_1, t_2}$.
Then:

$\ds \frac {t_i} t \in \closedint 0 1$ for each $i \in \set {1, 2}$.
From Dilation of Convex Set containing Zero Vector by Real Number between 0 and 1, we have: 

$\ds \frac {t_i} t C \subseteq C$
hence:

$t_i \subseteq t C$ for each $i \in \set {1, 2}$.
Let $\alpha \in \C$ be such that $\cmod \alpha > t$.
Let:

$\ds c = \frac \alpha {\cmod \alpha}$
Then, we have:














\(\ds \frac 1 \alpha x\)

\(=\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \frac t {c \cmod \alpha} \frac 1 t x\)




















\(\ds \)

\(=\)







\(\ds \frac t {\cmod \alpha} \frac c t x\)





since $c \in \set {-1, 1}$ we have $1/c = c$



We have:

$\ds \frac c t x \in \set {\frac x t, -\frac x t}$
so that:

$\ds \frac c t x \in C$
We therefore have:

$\ds \frac c t x \in C$
so that:

$\ds \frac 1 \alpha x \in \frac t {\cmod \alpha}$
Since:

$\ds \frac t {\cmod \alpha} < 1$
we have:

$\ds \frac 1 \alpha x \in C$
so:

$x \in \alpha C$ for $\cmod \alpha > t$.
So $C$ is absorbing.

Now consider the case $\GF = \C$. 
Let $x \in X$. 
Let $t_1, t_2, t_3, t_4 \in \R_{> 0}$ be such that:

$x \in t_1 C$
$-x \in t_2 C$
$i x \in t_3 C$
$-i x \in t_4 C$
Let $t = \max \set {t_1, t_2, t_3, t_4}$. 
Then:

$\ds \frac {t_i} t \in \closedint 0 1$ for each $i \in \set {1, 2, 3, 4}$.
As in the $\GF = \C$ case, applying Dilation of Convex Set containing Zero Vector by Real Number between 0 and 1 we have $t_i C \subseteq t C$ for each $t \in \set {1, 2, 3, 4}$.
So we have:

$\ds \set {\frac x t, -\frac x t, \frac {i x} t, -\frac {i x} t} \subseteq C$
Let $\alpha \in \C$ be such that $\cmod \alpha > 2 t$.
We can write: 

$\ds \frac \alpha t = c_1 \alpha_1 + i c_2 \alpha_2$
where $\alpha_1, \alpha_2 \in \hointr 0 \infty$ and $c_1, c_2 \in \set {-1, 1}$.
We can now write:














\(\ds \frac 1 \alpha x\)

\(=\)







\(\ds \frac t \alpha \frac 1 t x\)




















\(\ds \)

\(=\)







\(\ds \paren {c_1 \alpha_1 + i c_2 \alpha_2} \frac 1 t x\)




















\(\ds \)

\(=\)







\(\ds \alpha_1 \frac {c_1} t x + \alpha_2 \frac {i c_2} t x\)




















\(\ds \)

\(=\)







\(\ds \paren {\alpha_1 + \alpha_2} \paren {\frac {\alpha_1} {\alpha_1 + \alpha_2} \frac {c_1} t x + \frac {\alpha_2} {\alpha_1 + \alpha_2} \frac {i c_2} t x}\)









We have:

$\ds \frac {c_1} t x \in \set {\frac x t, -\frac x t}$
and:

$\ds \frac {i c_2} t x \in \set {\frac {i x} t, -\frac {i x} t}$
We have:

$\ds \frac {\alpha_1} {\alpha_1 + \alpha_2} + \frac {\alpha_2} {\alpha_1 + \alpha_2} = 1$
Since $C$ is convex, we have:

$\ds \frac {\alpha_1} {\alpha_1 + \alpha_2} \frac {c_1} t x + \frac {\alpha_2} {\alpha_1 + \alpha_2} \frac {i c_2} t x \in C$
so that:

$\ds \frac 1 \alpha x \in \paren {\alpha_1 + \alpha_2} C$
Since:

$\ds \cmod {\frac r \alpha} < \frac 1 2$
we have that $\alpha_1 + \alpha_2 < 1$.
Hence:

$\ds \paren {\alpha_1 + \alpha_2} C \subseteq C$
from Dilation of Convex Set containing Zero Vector by Real Number between 0 and 1.
So we have:

$\ds \frac 1 \alpha x \in C$
and hence:

$x \in \alpha C$ for all $\cmod \alpha > 2 r$.
So $C$ is absorbing.
$\blacksquare$


Sources
Mathematics.StackExchange: Post 3420721, revision 1
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.33$: Definitions




