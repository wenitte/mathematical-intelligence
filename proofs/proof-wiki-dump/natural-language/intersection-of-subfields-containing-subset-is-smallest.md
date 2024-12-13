# 

Source: https://proofwiki.org/wiki/Intersection_of_Subfields_Containing_Subset_is_Smallest

Theorem
Let $\struct {F, +, \circ}$ be a field.
Let $S \subseteq F$ be a subset of $F$.
Let $L$ be the intersection of the set of all subfields of $F$ containing $S$.

Then $L$ is the smallest subfield of $F$ containing $S$. 


Proof
A field is by definition also a division subring.
Thus $L$ is the intersection of the set of all division subrings of $F$ containing $S$.
From Intersection of Division Subrings Containing Subset is Smallest, $L$ is the smallest division subring of $F$ containing $S$.
From Intersection of Subfields is Subfield, $L$ is a subfield of $F$.

As $L$ is the smallest division subring of $F$ containing $S$, and it is a subfield of $F$, there can be no smaller subfield of $F$ containing $S$ as it would then not be a division subring.

So the intersection of the set of all subfields of $F$ containing $S$ is the smallest subfield of $F$ containing $S$. 
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.1$




