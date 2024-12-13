# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Hausdorff_Locally_Convex_Space/Real_Case/Compact_Convex_Set_and_Closed_Convex_Set

Theorem
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\R$ equipped with its standard topology. 
Let $X^\ast$ be the topological dual space of $\struct {X, \PP}$. 
Let $A \subseteq X$ be an compact convex set.
Let $B \subseteq X$ be a closed convex set disjoint from $A$. 

Then there exists $f \in X^\ast$ such that: 

$\ds \sup_{x \mathop \in A} \map f x < \inf_{x \mathop \in B} \map f x$


Proof
Since $B$ is closed, $X \setminus B$ is open.
Let $x \in A$.
Since $A \cap B = \O$, we have $x \in X \setminus B$. 
So there exists an open neighborhood $O_x$ of $x$ such that $O_x \subseteq X \setminus B$.
From Classification of Open Neighborhoods in Topological Vector Space, there exists an open neighborhood $U_x$ of ${\mathbf 0}_X$ such that $O_x = x + U_x$.
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$, there exists an symmetric open neighborhood $V_x$ of ${\mathbf 0}_X$ such that: 

$V_x + V_x \subseteq U_x$
Now note that: 

$\ds A \subseteq \bigcup_{x \mathop \in A} \paren {x + V_x}$
Since $A$ is compact, there exists $x_1, \ldots, x_n \in A$ such that: 

$\ds A \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} }$
Now let: 

$\ds V' = \bigcap_{i \mathop = 1}^n V_{x_i}$
From the definition of a topology, we have that $V'$ is an open neighborhood of ${\mathbf 0}_X$.
From Standard Topology of Locally Convex Space has Local Basis of Balanced Convex Absorbing Sets, there exists a convex open neighborhood of ${\mathbf 0}_X$ $V$ contained in $V'$.  
From Sum of Set and Open Set in Topological Vector Space is Open, we have that $A + V$ is open.
From Sum of Convex Sets in Vector Space is Convex, $A + V$ is additionally convex.
With view to apply Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Real Case: Open Convex Set and Convex Set, we will show that $\paren {A + V} \cap B = \O$.
Let $x \in A + V$.
Then $x = y + z$ for $y \in A$ and $z \in V$. 
Since:

$\ds y \in \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} }$
there exists $1 \le j \le n$ and $y_j \in V_{x_j}$ such that: 

$y = x_j + y_j$
Since $z \in V$, we have $z \in V_{x_j}$. 
So, we have: 

$y + z = x_j + y_j + z \in x_j + V_{x_j} + V_{x_j}$
Since $V_{x_j} + V_{x_j} \subseteq U_{x_j}$, we have that: 

$x \in x_j + U_{x_j}$
By construction, we have that $\paren {x_j + U_{x_j} } \cap B = \O$, so we have $x \not \in B$. 
So we obtain $\paren {A + V} \cap B = \O$.
From Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Real Case: Open Convex Set and Convex Set, there exists $f \in X^\ast$ and $c \in \R$ such that: 

$\map f x < \inf_{y \mathop \in B} \map f y \le \map f b$ for all $x \in A + V$ and $b \in B$.
That is: 

$\map f {a + v} < \inf_{y \mathop \in B} \map f y \le \map f b$ for all $a \in A$, $v \in V$ and $b \in B$.
Write: 

$\ds c = \inf_{y \mathop \in B} \map f y$
for brevity.
Since for any $a_0 \in A$ we have:

$\map f {a_0} < \map f b$ for all $b \in B$
we certainly have that $f$ is not the constant ${\mathbf 0}_X$.
So there exists $v \in V$ such that: 

$\map f v \ne 0$
Replacing $v$ by $-v$ if necessary, suppose that: 

$\map f v > 0$
From Multiple of Vector in Topological Vector Space Converges, we have: 

$\dfrac v n \to {\mathbf 0}_X$ as $n \to \infty$
So for some $N \in \N$, we have: 

$\dfrac v N \in V$
by the definition of a convergent sequence.
Now, for each $a \in A$ we have: 














\(\ds \map f a\)

\(<\)







\(\ds \map f a + \map f v\)




















\(\ds \)

\(=\)







\(\ds \map f {a + v}\)





Definition of Linear Functional














\(\ds \)

\(<\)







\(\ds c\)




















\(\ds \)

\(=\)







\(\ds \inf_{y \in B} \map f y\)









From Continuous Function on Compact Space is Bounded, we have that $f$ is bounded on $A$ and attains its bounds.
That is, there exists some $a_\ast \in A$ such that: 

$\map f {a_\ast} = \sup_{y \mathop \in A} \map f y$
Since $\map f {a_\ast} < c$, obtain the result: 

$\ds \sup_{x \mathop \in A} \map f x < \inf_{x \mathop \in B} \map f x$
$\blacksquare$





