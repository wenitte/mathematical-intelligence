# 

Source: https://proofwiki.org/wiki/Dilation_of_Interior_of_Set_in_Topological_Vector_Space_is_Interior_of_Dilation

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $A \subseteq X$.
Let $\lambda \in K \setminus \set 0$.

Then we have: 

$\lambda A^\circ = \paren {\lambda A}^\circ$
where $A^\circ$ denotes the intrerior of $A$. 


Proof
From the definition of intrerior we have:

$\ds A^\circ = \bigcup \leftset {U \subseteq A: U}$ is open in $\rightset X$
and:

$\ds \paren {\lambda A}^\circ = \bigcup \leftset {U \subseteq \lambda A: U}$ is open in $\rightset X$
For brevity write: 

$\ds \SS_1 = \leftset {U \subseteq A: U}$ is open in $\rightset X$
and:

$\ds \SS_2 = \leftset {U \subseteq \lambda A: U}$ is open in $\rightset X$
so that: 

$\ds A^\circ = \bigcup_{U \mathop \in \SS_1} U$
and:

$\ds \paren {\lambda A}^\circ = \bigcup_{U \mathop \in \SS_2} U$
From Dilation of Union of Subsets of Vector Space, it now suffices to show that: 

$\SS_2 = \set {\lambda U : U \in \SS_1}$
Let $U \in \SS_1$.
Then $U$ is open and $U \subseteq A$.
From Dilation of Open Set in Topological Vector Space is Open, $\lambda U$ is open.
Since $\lambda U \subseteq \lambda A$, we have: 

$\set {\lambda U: U \in \SS_1} \subseteq \SS_2$
Now let $U' \in \SS_2$.
Then $U'$ is open and $U' \subseteq \lambda A$.
Let $U = \lambda^{-1} U'$.
From Dilation of Open Set in Topological Vector Space is Open, $U$ is open.
We have $U \subseteq A$, so $U \in \SS_1$. 
Since we have $U' = \lambda U$ for $U \in \SS_1$, we have: 

$U' \in \set {\lambda U: U \in \SS_1}$
giving:

$\SS_2 \subseteq \set {\lambda U : U \in \SS_1}$
So:

$\SS_2 = \set {\lambda U : U \in \SS_1}$
by the definition of set equality.
So: 














\(\ds \paren {\lambda A}^\circ\)

\(=\)







\(\ds \bigcup_{U' \mathop \in \SS_2} U'\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{U \mathop \in \SS_1} \paren {\lambda U}\)




















\(\ds \)

\(=\)







\(\ds \lambda \bigcup_{U \mathop \in \SS_1} U\)





Dilation of Union of Subsets of Vector Space














\(\ds \)

\(=\)







\(\ds \lambda A^\circ\)









$\blacksquare$





