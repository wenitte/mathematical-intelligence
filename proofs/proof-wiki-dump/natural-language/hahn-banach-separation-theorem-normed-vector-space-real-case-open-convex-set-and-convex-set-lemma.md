# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Real_Case/Open_Convex_Set_and_Convex_Set/Lemma

Lemma
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual space of $\struct {X, \norm \cdot}$.
Let $A \subseteq X$ be an open convex set.
Let $B \subseteq X$ be a convex set disjoint from $A$. 
Let $a_0 \in A$ and $b_0 \in B$.
Let:

$v_0 = b_0 - a_0$
Let:

$C = v_0 + A - B = \set {v_0 + a - b : a \in A, \, b \in B}$

Then: 

$C$ is open, convex and contains $0$.


Proof
We first show that $C$ is open. 
Note that we can write: 

$\ds A - B = \bigcup_{b \mathop \in B} \set {a - b : a \in A} = \bigcup_{b \mathop \in B} \paren {A - b}$
Since $A$ is open, from Translation of Open Set in Normed Vector Space is Open, we have: 

$A - b$ is open.
From Union of Open Sets of Normed Vector Space is Open, we therefore have: 

$A - B$ is open.
From Translation of Open Set in Normed Vector Space is Open, we then obtain: 

$C$ is open.
We now show that $C$ is convex.
From Sum of Convex Sets in Vector Space is Convex: Corollary, we have: 

$A - B$ is convex.
From Translation of Convex Set in Vector Space is Convex, we have: 

$v_0 + A - B = C$ is convex.
We finally show that $0 \in C$.
Since:

$-v_0 = a_0 - b_0 \in A - B$
We have:

$b_0 - a_0 + a_0 - b_0 = 0 \in C$
$\blacksquare$





