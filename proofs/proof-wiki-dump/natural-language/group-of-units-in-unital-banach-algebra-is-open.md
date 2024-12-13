# 

Source: https://proofwiki.org/wiki/Group_of_Units_in_Unital_Banach_Algebra_is_Open

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$.

Then $\map G A$ is open in $A$. 


Proof
Let $x \in \map G A$.
We find an open neighborhood of $x$ contained in $\map G A$. 
Clearly $x^{-1} \ne \mathbf 0_A$, so $\norm {x^{-1} } > 0$. 
We have, for $y \in A$:














\(\ds \norm {1 - x^{-1} y}\)

\(=\)







\(\ds \norm {x^{-1} \paren {x - y} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {x^{-1} } \norm {x - y}\)









So for $y \in A$ satisfying: 

$\ds \norm {x - y} < \frac 1 {\norm {x^{-1} } }$
we have: 

$\norm {1 - x^{-1} y} < 1$
From Element of Unital Banach Algebra Close to Identity is Invertible, we have that $x^{-1} y$ is invertible.
That is, $x^{-1} y \in \map G A$. 
Since $\map G A$ is a group, from Group of Units is Group, we have: 

$y = x \paren {x^{-1} y} \in \map G A$
So we have: 

$\map {B_{\norm {x^{-1} }^{-1} } } x \subseteq \map G A$
where $\map {B_{\norm {x^{-1} }^{-1} } } x$ is the open ball centered at $x$ with radius $\norm {x^{-1} }^{-1}$.
Since $x \in \map G A$ was arbitrary, we have that $\map G A$ is open.
$\blacksquare$


Sources
2011: Graham R. Allan and H. Garth Dales: Introduction to Banach Spaces and Algebras ... (previous) ... (next): $4.4$: The group of units




