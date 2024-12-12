# 

Source: https://proofwiki.org/wiki/Burnside%27s_Lemma



Theorem
Let $G$ be a finite group acting on a set $X$.
Let $X / G$ be the set of orbits under this action.
For $x \in X$, let $\Stab x$ be the stabilizer of $x$ by $G$.
For $g \in G$, let $X^g$ denotes the set of all elements in $X$ which is fixed by $g$, that is:

$X^g := \set {x \in X: g x = x}$

Then:

$\ds \size {X / G} = \frac 1 {\order G} \sum_{g \mathop \in G} \size {X^g}$

In words, the number of orbits equals the average number of fixed elements.


Proof













\(\ds \frac 1 {\order G} \sum_{g \mathop \in G} \size {X^g}\)

\(=\)







\(\ds \frac 1 {\order G} \sum_{g \mathop \in G} \size {\set {x \in X: g x = x} }\)





by definition














\(\ds \)

\(=\)







\(\ds \frac 1 {\order G} \sum_{x \mathop \in X} \size {\set {g \in G: g x = x} }\)





Same summation, different indexing














\(\ds \)

\(=\)







\(\ds \frac 1 {\order G} \sum_{x \mathop \in X} \order {\Stab x}\)





Definition of Stabilizer














\(\ds \)

\(=\)







\(\ds \frac 1 {\order G} \sum_{x \mathop \in X} \frac {\order G} {\order {\Orb x} }\)





Orbit-Stabilizer Theorem














\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in X} \frac 1 {\order {\Orb x} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\Orb x \mathop \in X / G} \paren {\sum_{x \mathop \in \Orb x} \frac 1 {\order {\Orb x} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\Orb x \mathop \in X / G} 1\)




















\(\ds \)

\(=\)







\(\ds \order {X / G}\)









$\blacksquare$


Also known as
This theorem is also known as Burnside's Counting Theorem.


Source of Name
This entry was named for William Burnside.





