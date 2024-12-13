# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Real_Case/Compact_Convex_Set_and_Closed_Convex_Set

Theorem
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $A$ be a compact convex set.
Let $B$ be a closed convex set disjoint from $A$.

Then there exists $f \in X^\ast$, $c \in \R$ and $\epsilon > 0$ such that: 

$A \subseteq \set {x \in X : \map f x \le c - \epsilon}$
and:

$B \subseteq \set {x \in X : \map f x \ge c + \epsilon}$
That is: 

there exists $f \in X^\ast$, $c \in \R$ and $\epsilon > 0$ such that $\map f a \le c - \epsilon < c + \epsilon \le \map f b$ for $a \in A$ and $b \in B$.


Proof
Let: 

$\delta = \dfrac 1 4 \inf \set {\norm {a - b} : a \in A, \, b \in B}$
so that: 

$\map d {A, B} = 4 \delta$
where $d$ is the metric induced by $\norm {\, \cdot \,}$ and $\map d {A, B}$ is the $d$-distance between $A$ and $B$.
From Distance between Disjoint Compact Set and Closed Set in Metric Space is Positive, we have that $\delta > 0$.
Let:

$A_\delta = A + \map B { {\mathbf 0}_X, \delta}$
and:

$B_\delta = B + \map B { {\mathbf 0}_X, \delta}$
where $\map B { {\mathbf 0}_X, \delta}$ is the open ball of center ${\mathbf 0}_X$ and radius $\delta$. 
From Sum of Set and Open Set in Topological Vector Space is Open, we have that $A_\delta$ and $B_\delta$ are open.
From Open Ball is Convex Set, we have that $\map B { {\mathbf 0}_X, \delta}$ is convex.
From Sum of Convex Sets in Vector Space is Convex it follows that $A_\delta$ and $B_\delta$ are convex.
It remains to show that $A_\delta$ and $B_\delta$ are disjoint.
Aiming for a contradiction, suppose that $x \in A_\delta \cap B_\delta$. 
Then there exists $a \in A$, $b \in B$ and $u, v \in \map B { {\mathbf 0}_X, \delta}$ such that: 

$x = a + u = b + v$
Then: 

$a - b = v - u$
Then, we have: 














\(\ds \norm {a - b}\)

\(=\)







\(\ds \norm {v - u}\)




















\(\ds \)

\(\le\)







\(\ds \norm v + \norm u\)




















\(\ds \)

\(=\)







\(\ds 2 \delta\)









This contradicts that: 

$\map d {A, B} = 4 \delta$
So we must have $A_\delta \cap B_\delta = \O$.
Hence, Hahn-Banach Separation Theorem: Real Case: Open Convex Set and Convex Set can be applied, and there exists $f \in X^\ast$ and $c \in \R$ such that: 

$A_\delta \subseteq \set {x \in X : \map f x < c}$
and:

$B_\delta \subseteq \set {x \in X : \map f x \ge c}$
For aesthetics, pick $v_0$ such that $\map f {v_0} = 1$.
Let $r \in \R$ be such that: 

$0 < r < \dfrac \delta {\norm {v_0} }$
and $a \in A$. 
Then we have: 

$\norm {r v_0} < \delta$
so that: 

$a + r v_0 \in A_\delta$
So, we have: 

$\map f {a + r v_0} < c$
giving, from linearity:

$\map f a < c - r$
This inequality holds for all $a \in A$ and: 

$0 < r < \dfrac \delta {\norm {v_0} }$
so we must have: 

$\map f a \le c - \dfrac \delta {\norm {v_0} }$
for all $a \in A$.
Similarly, for all:

$0 < r < \dfrac \delta {\norm {v_0} }$
we have $b - r v_0 \in B_\delta$, and so: 

$\map f {b - r v_0} \ge c$
and so:

$\map f b \ge c + r$
This gives:

$\map f b \ge c + \dfrac \delta {\norm {v_0} }$
for all $b \in B$.
So, setting:

$\epsilon = \dfrac \delta {\norm {v_0} }$
we have:

$A \subseteq \set {x \in X : \map f x \le c - \epsilon}$
and:

$B \subseteq \set {x \in X : \map f x \ge c + \epsilon}$
as required.
$\blacksquare$





