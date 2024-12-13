# 

Source: https://proofwiki.org/wiki/Open_Set_Disjoint_from_Set_is_Disjoint_from_Closure

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$. 
Let $B$ be an open set of $T$ disjoint from $A$. 

Then:

$A^- \cap B = \O$
where $A^-$ denotes the closure of $A$.


Proof
Since $B \in \tau$, it follows by definition that $S \setminus B$ is closed.
Thus:














\(\ds A \cap B\)

\(=\)







\(\ds \O\)





Definition of Disjoint Sets








\(\ds \leadsto \ \ \)





\(\ds A\)

\(\subseteq\)







\(\ds S \setminus B\)





Empty Intersection iff Subset of Complement








\(\ds \leadsto \ \ \)





\(\ds A^-\)

\(\subseteq\)







\(\ds \paren {S \setminus B}^-\)





Topological Closure of Subset is Subset of Topological Closure








\(\ds \leadsto \ \ \)





\(\ds A^-\)

\(\subseteq\)







\(\ds S \setminus B\)





Closed Set Equals its Closure








\(\ds \leadsto \ \ \)





\(\ds A^- \cap B\)

\(=\)







\(\ds \O\)





Intersection with Complement is Empty iff Subset



$\blacksquare$





