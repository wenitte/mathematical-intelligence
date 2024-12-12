# 

Source: https://proofwiki.org/wiki/Dilation_of_Closure_of_Set_in_Topological_Vector_Space_is_Closure_of_Dilation/Proof_1

Theorem
Let $F$ be a topological field.
Let $X$ be a topological vector space over $F$. 
Let $A \subseteq X$.
Let $\lambda \in F \setminus \set {0_F}$.

Then we have: 

$\lambda A^- = \paren {\lambda A}^-$
where $A^-$ denotes the closure of $A$. 


Proof
From Set Closure as Intersection of Closed Sets, we have: 

$\ds A^- = \bigcap \leftset {K \supseteq A: K}$ is closed in $\rightset X$
and:

$\ds \paren {\lambda A}^- = \bigcap \leftset {K \supseteq \lambda A: K}$ is closed in $\rightset X$
For brevity write: 

$\ds \SS_1 = \leftset {K \supseteq A: K}$ is closed in $\rightset X$
and:

$\ds \SS_2 = \leftset {K \supseteq \lambda A: K}$ is closed in $\rightset X$
so that: 

$\ds A^- = \bigcap_{K \mathop \in \SS_1} K$
and:

$\ds \paren {\lambda A}^- = \bigcap_{K' \mathop \in \SS_2} K'$
From Dilation of Intersection of Subsets of Vector Space, it now suffices to show that: 

$\SS_2 = \set {\lambda K : K \in \SS_1}$.
Let $K \in \SS_1$. 
Then $K$ is closed and $A \subseteq K$. 
From Dilation of Closed Set in Topological Vector Space is Closed Set, $\lambda K$ is closed.
Since $\lambda A \subseteq \lambda K$, we have: 

$\set {\lambda K: K \in \SS_1} \subseteq \SS_2$
Now let $K' \in \SS_2$.
Then $K'$ is closed and $\lambda A \subseteq K'$. 
Let $K = \lambda^{-1} K'$. 
From Dilation of Closed Set in Topological Vector Space is Closed Set, $K$ is closed.
We have $A \subseteq K$, so $K \in \SS_1$. 
Since we have $K' = \lambda K$ for $K \in \SS_1$, we have: 

$K' \in \set {\lambda K: K \in \SS_1}$
giving:

$\SS_2 \subseteq \set {\lambda K: K \in \SS_1}$
So:

$\SS_2 = \set {\lambda K: K \in \SS_1}$
by the definition of set equality.
So: 














\(\ds \paren {\lambda A}^-\)

\(=\)







\(\ds \bigcap_{K' \mathop \in \SS_2} K'\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{K \mathop \in \SS_1} \paren {\lambda K}\)




















\(\ds \)

\(=\)







\(\ds \lambda \bigcap_{K \mathop \in \SS_1} K\)





Dilation of Intersection of Subsets of Vector Space














\(\ds \)

\(=\)







\(\ds \lambda A^-\)









$\blacksquare$





