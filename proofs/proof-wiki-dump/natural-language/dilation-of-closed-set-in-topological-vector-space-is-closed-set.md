# 

Source: https://proofwiki.org/wiki/Dilation_of_Closed_Set_in_Topological_Vector_Space_is_Closed_Set

Theorem
Let $K$ be a topological field.
Let $X$ be a topological vector space over $K$. 
Let $F$ be a closed set in $X$. 
Let $\lambda \in K \setminus \set {0_K}$.

Then $\lambda F$ is a closed set in $X$.


Proof 1
We aim to show that $X \setminus \paren {\lambda F}$ is open.
Since $F$ is closed, $X \setminus F$ is open.
It follows from Dilation of Open Set in Topological Vector Space is Open that $\lambda \paren {X \setminus F}$ is open.
From Dilation of Complement of Set in Vector Space, we have: 

$X \setminus \paren {\lambda F} = \lambda \paren {X \setminus F}$.
Since we have established that $\lambda \paren {X \setminus F}$ is open, it follows that $X \setminus \paren {\lambda F}$ is open.
So $\lambda F$ is closed.
$\blacksquare$


Proof 2
Define a mapping $c_\lambda : X \to X$ by:

$\map {c_\lambda} x = \lambda x$
for each $x \in X$.
From Dilation Mapping on Topological Vector Space is Homeomorphism, $c_\lambda$ is a homeomorphism.
From Definition 4 of a homeomorphism, $c_\lambda$ is therefore a closed mapping.
Hence $c_\lambda \sqbrk F = \lambda F$ is closed.
$\blacksquare$





