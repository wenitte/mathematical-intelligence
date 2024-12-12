# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Complex/Sum_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions which are continuous on an open subset $S \subseteq \C$.

Then:

$f + g$ is ‎continuous on $S$.


Proof
We have:










\(\ds \forall c \in S: \, \)



\(\ds \lim_{x \mathop \to c} \map f z\)

\(=\)







\(\ds \map f c\)





Definition of Continuous Complex Function










\(\ds \forall c \in S: \, \)



\(\ds \lim_{x \mathop \to c} \map g z\)

\(=\)







\(\ds \map g c\)





Definition of Continuous Complex Function




Let $f$ and $g$ tend to the following limits:














\(\ds \lim_{z \mathop \to c} \map f z\)

\(=\)







\(\ds l\)




















\(\ds \lim_{z \mathop \to c} \map g z\)

\(=\)







\(\ds m\)










From the Sum Rule for Limits of Complex Functions, we have that:

$\ds \lim_{z \mathop \to c} \paren {\map f z + \map g z} = l + m$

So, by definition of ‎continuous again, we have that $f + g$ is continuous on $S$.
$\blacksquare$





