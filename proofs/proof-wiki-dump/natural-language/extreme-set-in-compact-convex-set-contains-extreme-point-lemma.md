# 

Source: https://proofwiki.org/wiki/Extreme_Set_in_Compact_Convex_Set_contains_Extreme_Point/Lemma

Lemma
Let $X$ be a vector space over $\R$. 
Let $K$ be a non-empty compact convex subset of $X$.
Let $E$ be an extreme set of $K$. 
Let $P$ be the set of extreme sets in $K$ that are contained in $E$. 
Define an ordering $\preceq$ on $P$ by $A \preceq B$ if and only if $B \subseteq A$. 

Then: 

every non-empty chain in $\struct {P, \preceq}$ has an upper bound.


Proof
Let $C$ be a non-empty chain in $\struct {P, \preceq}$.
Let:

$\ds D = \bigcap_{E \in C} E$
We first show that: 

$D \ne \O$
Aiming for a contradiction, suppose suppose that $D = \O$.
Then, from de Morgan's laws: 

$\ds K = \bigcup_{E \in C} \paren {K \setminus E}$
Since each $E \in C$ is closed, we have that: 

$K \setminus E$ is open in $K$.
So:

$\set {K \setminus E : E \in C}$ is an open cover for $K$.
Since $K$ is compact, we have that:

there exists a finite subcover $\set {K \setminus E_i : i \in \set {1, 2, \ldots, n} }$ of $\set {K \setminus E : E \in C}$ for $K$.
That is: 

$\ds K = \bigcup_{i \mathop = 1}^n \paren {K \setminus E_i}$
From de Morgan's laws, we then have: 

$\ds \O = \bigcap_{i \mathop = 1}^n E_i$
However, from Finite Non-Empty Subset of Ordered Set has Maximal and Minimal Elements: Corollary, there exists $i, j$ such that: 

$E_i \preceq E_k \preceq E_j$
for each $k \in \set {1, 2, \ldots, n}$. 
Then: 

$\ds E_j \subseteq E_k$
for each $k \in \set {1, 2, \ldots, n}$.
So, from Set Intersection Preserves Subsets, we have: 

$\ds E_j \subseteq \bigcap_{i \mathop = 1}^n E_i$
Since $E_j$ is non-empty, we have: 

$\ds \bigcap_{i \mathop = 1}^n E_i \ne \O$
a contradiction. 
So, we have: 

$D \ne \O$

We now show that $D$ is an extreme set of $K$, and that it is an upper bound for $C$.
From Intersection of Closed Sets is Closed in Normed Vector Space, $D$ is closed.
Let $x, y \in K$ and $t \in \openint 0 1$ be such that $t x + \paren {1 - t} y \in D$.
Then, from the definition of set intersection, we have: 

$t x + \paren {1 - t} y \in E$
for each $E \in C$.
Since $E$ is an extreme set, we have $x, y \in E$ for each $E \in C$.
So, $x, y \in D$. 
So $D$ is an extreme set of $K$

From Intersection is Subset, we then have: 

$\ds D = \bigcap_{E \in C} E \subseteq F$
for each $F \in C$. 
So, we have: 

$F \preceq D$
for each $F \in C$. 
So $D$ is an upper bound for $C$.
Since $C$ was an arbitrary non-empty chain in $\struct {P, \preceq}$, we have: 

every non-empty chain in $\struct {P, \preceq}$ has an upper bound.
$\blacksquare$





