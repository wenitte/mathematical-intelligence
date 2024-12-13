# 

Source: https://proofwiki.org/wiki/Inverse_of_Direct_Image_Mapping_does_not_necessarily_equal_Inverse_Image_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $\RR^\to$ be the direct image mapping of $\RR$.
Let $\RR^\gets$ be the inverse image mapping of $\RR$.

Then it is not necessarily the case that:

$\paren {\RR^\to}^{-1} = \RR^\gets$
where $\paren {\RR^\to}^{-1}$ denote the inverse of $\RR^\to$.

That is, the inverse of the direct image mapping of $\RR$ does not always equal the inverse image mapping of $\RR$.


Proof
Proof by Counterexample:
Let $S = T = \set {0, 1}$.
Let $\RR = \set {\tuple {0, 0}, \tuple {0, 1} }$.

We have that:

$\RR^{-1} = \set {\tuple {0, 0}, \tuple {1, 0} }$
$\powerset S = \powerset T = \set {\O, \set 0, \set 1, \set {0, 1} }$

Thus, by inspection:














\(\ds \map {\RR^\to} \O\)

\(=\)







\(\ds \O\)




















\(\ds \map {\RR^\to} {\set 0}\)

\(=\)







\(\ds \set {0, 1}\)




















\(\ds \map {\RR^\to} {\set 1}\)

\(=\)







\(\ds \O\)




















\(\ds \map {\RR^\to} {\set {0, 1} }\)

\(=\)







\(\ds \set {0, 1}\)










Note that $\paren {\RR^\to}^{-1}$ is the inverse of a mapping which is neither an injection nor a surjection, and so is itself not a mapping from $\powerset T$ to $\powerset S$.














\(\ds \map {\paren {\RR^\to}^{-1} } \O\)

\(=\)







\(\ds \set {\O, \set 1}\)




















\(\ds \map {\paren {\RR^\to}^{-1} } {\set 0}\)

\(=\)







\(\ds \O\)




















\(\ds \map {\paren {\RR^\to}^{-1} } {\set 1}\)

\(=\)







\(\ds \O\)




















\(\ds \map {\paren {\RR^\to}^{-1} } {\set {0, 1} }\)

\(=\)







\(\ds \set {\set 0, \set {0, 1} }\)










This can be seen to be completely different from $\RR^\gets$, which can be determined by inspection to be:














\(\ds \map {\RR^\gets} \O\)

\(=\)







\(\ds \O\)




















\(\ds \map {\RR^\gets} {\set 0}\)

\(=\)







\(\ds \set 0\)




















\(\ds \map {\RR^\gets} {\set 1}\)

\(=\)







\(\ds \set 0\)




















\(\ds \map {\RR^\gets} {\set {0, 1} }\)

\(=\)







\(\ds \set 0\)









$\blacksquare$





