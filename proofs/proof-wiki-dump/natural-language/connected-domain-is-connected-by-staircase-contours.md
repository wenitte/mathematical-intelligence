# 

Source: https://proofwiki.org/wiki/Connected_Domain_is_Connected_by_Staircase_Contours



Theorem
Let $D \subseteq \C$ be an open set.

Then $D$ is a connected domain if and only if:

for all $z, w \in \C$, there exists a staircase contour in $D$ with start point $z$ and end point $w$.


Proof
Necessary Condition
Suppose $D$ is a connected domain.
If $z, w \in D$, there exists a path $\gamma: \closedint 0 1 \to D$ with $\map \gamma 0 = z$ and $\map \gamma 0 = w$.
From the Paving Lemma, it follows that there exist $\epsilon \in \R_{>0}$ and a subdivision $\set {x_0, x_1, \ldots, x_n}$ of $\closedint 0 1$ such that:

$\ds \bigcup_{k \mathop = 0}^n \map {B_\epsilon} {\map \gamma {x_k} } \subseteq D$
and for all $k \in \set {0, 1, \ldots, n - 1}$:

$\map \gamma {\closedint {x_k} {x_{k + 1} } } \subseteq \map {B_\epsilon} {\map \gamma {x_k} }$
where $\map {B_\epsilon} {\map \gamma {x_k} }$ is the open $\epsilon$-ball about $\map \gamma {x_k}$.

Let $\map \Re {x_{k + 1} - x_k}$ denote the real part of $x_{k + 1} - x_k$, and $\map \Im {x_{k + 1} - x_k}$ denote the imaginary part of $x_{k + 1} - x_k$.
For all $k \in \set {0, 1, \ldots, n - 1}$, define the smooth paths $\gamma_{2 k + 1}, \gamma_{2 k + 2}: \gamma: \closedint 0 1 \to D$ by:

$\map {\gamma_{2 k + 1} } t = x_k + t \paren {\map \Re {x_{k + 1} - x_k} }$
$\map {\gamma_{2 k + 2} } t = x_k + \map \Re {x_{k + 1} - x_k} + i t \paren {\map \Im {x_{k + 1} - x_k} }$
These are the line segments connecting $x_k$, $x_k + \map \Re {x_{k + 1} - x_k}$, and $x_{k + 1}$.

It follows that $x_k + \map \Re {x_{k + 1} - x_k} \in \map {B_\epsilon} {\map \gamma {x_k} }$, as:














\(\ds \cmod {\map \Re {x_{k + 1} - x_k} }\)

\(\le\)







\(\ds \cmod {x_{k + 1} - x_k}\)





Modulus Larger than Real Part














\(\ds \)

\(<\)







\(\ds \epsilon\)









Then Open Ball is Convex Set shows that $\map {\gamma_{2 k + 1} } t, \map {\gamma_{2 k + 2} } t \in \map {B_\epsilon} {\map \gamma {x_k} } \subseteq D$ for all $t \in \closedint 0 1$.
It follows that the images of $\gamma_{2k+1}$ and $\gamma_{2k+2}$ are subsets of $D$. 
Define $C_k$ as the directed smooth curve that is parameterized by $\gamma_k$.
Thus $C_{2 k - 1}$ has start point $x_{k - 1}$, and $C_{2 k}$ has end point $x_k$.
Define $C$ as the concatenation of $C_1, \ldots, C_{2n}$.
Then $C$ is a staircase contour in $D$ with start point $z$ and end point $w$.


Illustration of the open balls inside the connected domain $D$.
The path $\gamma$ between $w$ and $z$ is grey, and the constructed staircase contour $C$ is red.
$\Box$


Sufficient Condition
Suppose that for all $z, w \in \C$, there exists a staircase contour in $D$ with start point $z$ and end point $w$.
Let $\gamma: \closedint a b \to D$ be a parameterization of $C$, where $\closedint a b$ is a closed interval.
Then $\gamma$ is a path in $D$ with $\map \gamma a = z$ and $\map \gamma b = w$.
Define $\gamma_0: \closedint 0 1 \to D$ by $\map {\gamma_0} t = \map \gamma {a + t \paren {b - a} }$.
Then $\gamma_0$ is also a path in $D$ with $\map {\gamma_0} 0 = z$ and $\map {\gamma_0} 1 = w$.
By definition of path-connected, it follows that $D$ is path-connected.
Hence, $D$ is a connected domain.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 5.1$




