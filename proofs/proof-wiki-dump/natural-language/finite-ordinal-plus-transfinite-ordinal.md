# 

Source: https://proofwiki.org/wiki/Finite_Ordinal_Plus_Transfinite_Ordinal


The validity of the material on this page is questionable.In particular: The proof is shaky and relies on theorems from other contexts (e.g. $\N$ instead of finite ordinals)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $n$ be a finite ordinal.
Let $x$ be a transfinite ordinal.
Then:

$n + x = x$


Proof
By Transfinite Induction on $x$.
The proof will use $<$, $\in$, and $\subset$ interchangeably.  This is justified by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal.


Base Case
By our hypothesis, $\omega \le x$, so $x \nless \omega$, so we may begin our induction at $\omega$.














\(\ds n + \omega\)

\(=\)







\(\ds \bigcup_{y \mathop \in \omega} \paren {n + y}\)





Definition of Ordinal Addition














\(\ds \forall y \in \omega: n + y \le \omega\)

\(\implies\)







\(\ds \bigcup_{y \mathop \in \omega} \paren {n + y} \le \omega\)





Natural Number Addition is Closed and Indexed Union Subset














\(\ds \forall y \in \omega: y \le \paren {n + y}\)

\(\implies\)







\(\ds \bigcup_{y \mathop \in \omega} y \le \bigcup_{y \mathop \in \omega} \paren {n + y}\)





Ordinal is Less than Sum and Indexed Union Subset














\(\ds \)

\(\implies\)







\(\ds \omega \le \bigcup_{y \mathop \in \omega} \paren {n + y}\)





Limit Ordinal Equals its Union



From these conclusions, we may deduce that:

$\ds \omega = \bigcup_{y \mathop \in \omega} \paren {n + y}$


Inductive Case













\(\ds n + x\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {n + x}^+\)

\(=\)







\(\ds x^+\)





Equality of Successors








\(\ds \leadsto \ \ \)





\(\ds n + x^+\)

\(=\)







\(\ds x^+\)





Definition of Ordinal Addition





Limit Case









\(\ds \forall y \in x: \, \)



\(\ds n + y\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{y \mathop \in x} \paren {n + y}\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} y\)





Indexed Union Equality








\(\ds \leadsto \ \ \)





\(\ds n + x\)

\(=\)







\(\ds \bigcup_{y \mathop \in x} y\)





Definition of Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds n + x\)

\(=\)







\(\ds x\)





Limit Ordinal Equals its Union



$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.10$




