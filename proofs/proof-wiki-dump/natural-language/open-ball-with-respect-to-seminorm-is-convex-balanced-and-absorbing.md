# 

Source: https://proofwiki.org/wiki/Open_Ball_with_respect_to_Seminorm_is_Convex,_Balanced_and_Absorbing



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $p$ be a seminorm on $X$.
Let $d_p$ be the pseudometric induced by $p$.
Let $B$ be the open unit ball in $\struct {X, d_p}$. 
That is: 

$B = \set {x \in X : \map p x < 1}$

Then $B$ is convex, balanced and absorbing. 



This article, or a section of it, needs explaining.In particular: Include a link to "Open Ball" that defines the concept in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Proof that $B$ is convex
Let $t \in \closedint 0 1$ and $x, y \in B$. 
Then:














\(\ds \map p {t x + \paren {1 - t} y}\)

\(\le\)







\(\ds t \map p x + \paren {1 - t} \map p y\)





Seminorm Axiom $\text N 2$: Positive Homogeneity, Seminorm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds t + \paren {1 - t}\)




















\(\ds \)

\(=\)







\(\ds 1\)









so: 

$t x + \paren {1 - t} y \in B$.
$\Box$


Proof that $B$ is balanced
Let $s \in \GF$ such that $\cmod s \le 1$.
Let $x \in B$. 
Then, we have by Seminorm Axiom $\text N 2$: Positive Homogeneity we have: 

$\map p {s x} = \cmod s \map p x \le \map p x < 1$
so $s x \in B$.
So, we have: 

$s B \subseteq B$
for all $s \in \GF$ with $\cmod s \le 1$.
So $B$ is balanced. 
$\Box$


Proof that $B$ is absorbing
From Characterization of Convex Absorbing Set in Vector Space, it is enough to show that:

$\ds X = \bigcup_{n \mathop = 1}^\infty n B$
By Seminorm Axiom $\text N 2$: Positive Homogeneity, we have: 

$\map p {n x} < n$ if and only if $\map p x < 1$
for each $n \in \N$.
So, we have: 

$n B = \set {x \in X : \map p x < n}$
Clearly we have: 

$\ds \bigcup_{n \mathop = 1}^n n B \subseteq X$
Now let $x \in X$, then we have: 

$\ds \map p {\frac x {2 \map p x} } = \frac 1 2 < 1$
from Seminorm Axiom $\text N 2$: Positive Homogeneity, so: 

$\ds \frac x {2 \map p x} \in B$
Then we have: 

$x \in \paren {2 \map p x} B$
Taking $N \in \N$ with $N \ge \map p x$, we have $x \in N B$, and so: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty n B$
So:

$\ds X = \bigcup_{n \mathop = 1}^\infty n B$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.34$: Theorem




