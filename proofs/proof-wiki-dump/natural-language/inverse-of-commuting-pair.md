# 

Source: https://proofwiki.org/wiki/Inverse_of_Commuting_Pair



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x, y \in S$ such that $x$ and $y$ are both invertible.

Then $x$ commutes with $y$ if and only if:

$\struct {x \circ y}^{-1} = x^{-1} \circ y^{-1}$


Proof













\(\ds x \circ y\)

\(=\)







\(\ds y \circ x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \struct {x \circ y}^{-1}\)

\(=\)







\(\ds \struct {y \circ x}^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \struct {x \circ y}^{-1}\)

\(=\)







\(\ds x^{-1} \circ y^{-1}\)





Inverse of Product



$\blacksquare$


Examples
Elements of Symmetric Group $S_3$
Consider the Symmetric Group on $3$ Letters $S_3$, whose Cayley table is given as:

$\begin{array}{c|cccccc}\circ & e & (123) & (132) & (23) & (13) & (12) \\ \hline e & e & (123) & (132) & (23) & (13) & (12) \\ (123) & (123) & (132) & e & (13) & (12) & (23) \\ (132) & (132) & e & (123) & (12) & (23) & (13) \\ (23) & (23) & (12) & (13) & e & (132) & (123) \\ (13) & (13) & (23) & (12) & (123) & e & (132) \\ (12) & (12) & (13) & (23) & (132) & (123) & e \\ \end{array}$

Let $x = \tuple {1 2 3}$ and $y = \tuple {1 3}$.
We have:














\(\ds \paren {x y}^{-1}\)

\(=\)







\(\ds \paren {\tuple {1 2 3} \tuple {1 3} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1 2}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1 2}\)










However:














\(\ds x^{-1} y^{-1}\)

\(=\)







\(\ds \tuple {1 2 3}^{-1} \tuple {1 3}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {1 3 2} \tuple {1 3}\)




















\(\ds \)

\(=\)







\(\ds \tuple {2 3}\)




















\(\ds \)

\(\ne\)







\(\ds \paren {x y}^{-1}\)













