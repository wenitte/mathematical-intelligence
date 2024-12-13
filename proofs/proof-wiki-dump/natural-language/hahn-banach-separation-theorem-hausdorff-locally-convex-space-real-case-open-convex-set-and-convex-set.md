# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Hausdorff_Locally_Convex_Space/Real_Case/Open_Convex_Set_and_Convex_Set

Theorem
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\R$ equipped with its standard topology. 
Let $X^\ast$ be the topological dual space of $\struct {X, \PP}$. 
Let $A \subseteq X$ be an open convex set.
Let $B \subseteq X$ be a convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ and $c \in \R$ such that: 

$A \subseteq \set {x \in X : \map f x < c}$
and:

$B \subseteq \set {x \in X : \map f x \ge c}$
That is: 

there exists $f \in X^\ast$ and $c \in \R$ such that $\map f a < c \le \map f b$ for each $a \in A$ and $b \in B$.


Proof
Fix $a_0 \in A$ and $b_0 \in B$. 
From Sum of Set and Open Set in Topological Vector Space is Open, we have: 

$A - B$ is open.
From Translation of Open Set in Topological Vector Space is Open, we have: 

$A - B + \paren {b_0 - a_0}$ is open.
Note that since $A \cap B = \O$, we have $0 \notin A - B$. 
Hence $b_0 - a_0 \notin A - B + \paren {b_0 - a_0}$.
From Sum of Convex Sets in Vector Space is Convex: Corollary, we have that $A - B$ is convex.
From Translation of Convex Set in Vector Space is Convex, we have that $A - B + \paren {b_0 - a_0}$ is convex.
Applying Open Convex Set in Hausdorff Locally Convex Space is Separated from Points outside Set by Continuous Linear Functional, there exists $f \in X^\ast$ such that: 

$\map f v < \map f {b_0 - a_0}$
for all $v \in A - B + \paren {b_0 - a_0}$.
That is: 

$\map f {a - b + b_0 - a_0} < \map f {b_0 - a_0}$
for each $a \in A$ and $b \in B$. 
Since $f$ is linear, we have: 

$\map f a < \map f b$
for each $a \in A$ and $b \in B$.
Then we have: 

$\map f {a_0} < \map f b$
for all $b \in B$. 
Hence: 

$\ds \inf_{b \mathop \in B} \map f b > -\infty$
Let:

$\ds c = \inf_{b \mathop \in B} \map f b$
Then, we have: 

$\map f a \le c \le \map f b$
It remains to show that $\map f a < c$ for each $a \in A$.
Let $a \in A$.
Since $A$ is open, there exists an open neighborhood $V_x$ of ${\mathbf 0}_X$ such that $x + V_x$ is an open neighborhood of $x$ in $A$.
Now, since we have: 

$\map f {a_0} < \map f b$
for each $b \in B$, we in particular have that $f$ is not constant ${\mathbf 0}_X$. 
Hence there exists $v \in X$ such that: 

$\map f v \ne 0$
Replacing $v$ by $-v$ if necessary, suppose that: 

$\map f v > 0$
From Multiple of Vector in Topological Vector Space Converges, we have: 

$\dfrac v n \to {\mathbf 0}_X$ as $n \to \infty$
So for some $N \in \N$, we have: 

$\dfrac v N \in V_x$
by the definition of a convergent sequence.
Set:

$v' = \dfrac v N$
Then we have $\map f {v'} > 0$ and $x + v' \in A$.
We therefore have: 














\(\ds \map f a\)

\(<\)







\(\ds \map f a + \map f {v'}\)




















\(\ds \)

\(=\)







\(\ds \map f {a + v'}\)





Definition of Linear Functional














\(\ds \)

\(\le\)







\(\ds c\)









In particular, $\map f a < c$ for each $a \in A$.
Hence we have found $f \in X^\ast$ such that: 

$\map f a < c \le \map f b$ for each $a \in A$ and $b \in B$.
$\blacksquare$





