# 

Source: https://proofwiki.org/wiki/Compass_and_Straightedge_Construction_for_Regular_Heptagon_does_not_exist/Proof_2

Theorem
There exists no compass and straightedge construction for the regular heptagon.


Proof
Construction of a regular heptagon is the equivalent of constructing the point $\tuple {\cos \dfrac {2 \pi} 7, \sin \dfrac {2 \pi} 7}$ from the points $\tuple {0, 0}$ and $\tuple {1, 0}$
Let $\epsilon = \map \exp {\dfrac {2 \pi} 7}$.
Then $\epsilon$ is a root of $x^7 - 1$.
We have:














\(\ds x^7 - 1\)

\(=\)







\(\ds \paren {x - 1} \paren {x^6 + x^5 + x^4 + x^3 + x^2 + x + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon^6 + \epsilon^5 + \epsilon^4 + \epsilon^3 + \epsilon^2 + \epsilon + 1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon^3 + \epsilon^2 + \epsilon + 1 + \epsilon^{-1} + \epsilon^{-2} + \epsilon^{-3}\)

\(=\)







\(\ds 0\)









But we have:














\(\ds \epsilon\)

\(=\)







\(\ds \cos \dfrac {2 \pi} 7 + i \sin \dfrac {2 \pi} 7\)




















\(\ds \epsilon^{-1}\)

\(=\)







\(\ds \cos \dfrac {2 \pi} 7 - i \sin \dfrac {2 \pi} 7\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon + \epsilon^{-1}\)

\(=\)







\(\ds 2 c\)





where $c = \cos \dfrac {2 \pi} 7$








\(\ds \leadsto \ \ \)





\(\ds \epsilon^2 + \epsilon^{-2} + 2\)

\(=\)







\(\ds 4 c^2\)





squaring








\(\ds \leadsto \ \ \)





\(\ds \epsilon^3 + \epsilon^{-3} + 3 \paren {\epsilon + \epsilon^{-1} }\)

\(=\)







\(\ds 8 c^3\)





cubing








\(\ds \leadsto \ \ \)





\(\ds \epsilon^2 + \epsilon^{-2}\)

\(=\)







\(\ds 4 c^2 - 2\)














\(\ds \leadsto \ \ \)





\(\ds \epsilon^3 + \epsilon^{-3}\)

\(=\)







\(\ds 8 c^3 - 6 c\)














\(\ds \leadsto \ \ \)





\(\ds \paren {8 c^3 - 6 c} + \paren {4 c^2 - 2} + 2 c - 1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 8 c^3 + 4 c^2 - 4 c - 1\)

\(=\)







\(\ds 0\)









Thus $2 c$ is a root of the polynomial $x^3 + x^2 - 2 x - 1$
But from Irreducible Polynomial: $x^3 + x^2 - 2 x - 1$ in Rationals:

$x^3 + x^2 - 2 x - 1$ is irreducible over $\Q$.

Thus by Algebraic Element of Degree 3 is not Element of Field Extension of Degree Power of 2, $\cos \dfrac {2 \pi} 7$ is not an element of any extension of $\Q$ of degree $2^m$.
The result follows from Point in Plane is Constructible iff Coordinates in Extension of Degree Power of 2.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 40$. Construction with Ruler and Compasses: Example $79$




