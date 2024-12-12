# 

Source: https://proofwiki.org/wiki/Disjoint_Compact_Set_and_Closed_Set_in_Topological_Vector_Space_separated_by_Open_Neighborhood



Theorem
Let $F$ be a topological field.
Let $X$ be a topological vector space over $F$.
Let $K$ be a compact subspace of $X$.
Let $C \subseteq X$ be a closed set such that: 

$K \cap C = \O$

Then there exists an open neighborhood $V$ of ${\mathbf 0}_X$ such that: 

$\paren {K + V} \cap \paren {C + V} = \O$


Corollary
Let $V$ be an open neighborhood of ${\mathbf 0}_X$.

Then there exists an open neighborhood $W$ of ${\mathbf 0}_X$ such that: 

$W^- \subseteq V$
where $W^-$ denotes the closure of $W$.


Proof
If $K = \O$, we have $K + V = \O$, so we have: 

$\paren {K + V} \cap \paren {C + V} = \O$
from Intersection with Empty Set.
Now take $K \ne \O$.
Let $x \in K$. 
Since $K$ and $C$ are disjoint, it follows that $x \in X \setminus C$, so ${\mathbf 0}_X \in \paren {X \setminus C} - x$. 
Since $C$ is closed, $X \setminus C$ is open.
Then from Translation of Open Set in Topological Vector Space is Open, $\paren {X \setminus C} - x$ is an open neighborhood of ${\mathbf 0}_X$.
From Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$, there exists a symmetric open neighborhood $V'_x$ of ${\mathbf 0}_X$ such that: 

$V'_x + V'_x \subseteq \paren {X \setminus C} - x$
Applying Open Neighborhood of Point in Topological Vector Space contains Sum of Open Neighborhoods: Corollary $1$ again, there exists a symmetric open neighborhood $V_x$ of ${\mathbf 0}_X$ such that: 

$V_x + V_x \subseteq V'_x$
so that: 

$V_x + V_x + V_x + V_x \subseteq \paren {X \setminus C} - x$
so that: 

$x + V_x + V_x + V_x + V_x \subseteq X \setminus C$
Since ${\mathbf 0}_X \in V_x$, it follows that: 

$x + V_x + V_x + V_x \subseteq X \setminus C$
We argue that: 

$\paren {x + V_x + V_x} \cap \paren {C + V_x} = \O$
Suppose that: 

$\paren {x + V_x + V_x} \cap \paren {C + V_x} \ne \O$
Then there exists $u_1, u_2, u_3 \in V_x$ and $c \in C$ such that: 

$x + u_1 + u_2 = c + u_3$
Then: 

$c = x + u_1 + u_2 - u_3$
Since $V_x$ is symmetric, we have $-u_3 \in V_x$.
So:

$c \in x + V_x + V_x + V_x$
so:

$\paren {x + V_x + V_x + V_x} \cap C \ne \O$
contradicting that: 

$x + V_x + V_x + V_x + V_x \subseteq X \setminus C$
We therefore have: 

$\paren {x + V_x + V_x} \cap \paren {C + V_x} \ne \O$
for each $x \in K$. 
Since ${\mathbf 0}_X \in V_x$, we have: 

$x \in x + V_x$ for each $x \in K$.
So, we have: 

$\ds K \subseteq \bigcup_{x \in K} \paren {x + V_x}$
Since $K$ is compact, there exists $x_1, x_2, \ldots, x_n \in K$ such that: 

$\ds K \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} }$
Let:

$\ds V = \bigcap_{i \mathop = 1}^n V_{x_i}$
Since this is the finite intersection of open sets, $V$ is open.
From Sum of Union of Subsets of Vector Space and Subset, we then have: 

$\ds K + V \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} }  + V \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} + V}$
From Intersection is Subset, we then have: 

$x_i + V_{x_i} + V \subseteq x_i + V_{x_i} + V_{x_i}$
for each $i \in \set {1, 2, \ldots, n}$.
From Set Union Preserves Subsets: Families of Sets, we have: 

$\ds \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} + V} \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} + V_{x_i} }$
Recall that $x_i + V_{x_i} + V_{x_i}$ does not intersect $C + V_{x_i}$.
Since $C + V \subseteq C + V_{x_i}$, we have that $x_i + V_{x_i} + V_{x_i}$ does not intersect $C + V$ for any $i \in \set {1, 2, \ldots, n}$.
So, we have: 

$\ds K + V \subseteq \bigcup_{i \mathop = 1}^n \paren {x_i + V_{x_i} + V_{x_i} } \subseteq X \setminus \paren {C + V}$
so that: 

$\paren {K + V} \cap \paren {C + V} = \O$
So $V$ is the desired open neighborhood of ${\mathbf 0}_X$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.10$: Theorem




