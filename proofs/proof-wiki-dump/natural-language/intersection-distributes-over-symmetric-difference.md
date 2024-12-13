# 

Source: https://proofwiki.org/wiki/Intersection_Distributes_over_Symmetric_Difference

Theorem
Intersection is distributive over symmetric difference:

$\paren {R \symdif S} \cap T = \paren {R \cap T} \symdif \paren {S \cap T}$
$T \cap \paren {R \symdif S} = \paren {T \cap R} \symdif \paren {T \cap S}$


Proof
From Set Intersection Distributes over Set Difference, we have:

$\paren {R \setminus S} \cap T = \paren {R \cap T} \setminus \paren {S \cap T}$

So:














\(\ds \paren {R \cap T} \symdif \paren {S \cap T}\)

\(=\)







\(\ds \paren {\paren {R \cap T} \setminus \paren {S \cap T} } \cup \paren {\paren {S \cap T} \setminus \paren {R \cap T} }\)





Definition of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {\paren {R \setminus S} \cap T} \cup \paren {\paren {S \setminus R} \cap T}\)





Set Intersection Distributes over Set Difference














\(\ds \)

\(=\)







\(\ds \paren {\paren {R \setminus S} \cup \paren {S \setminus R} } \cap T\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {R \symdif S} \cap T\)





Definition of Symmetric Difference




The second part of the proof is a direct consequence of the fact that Intersection is Commutative.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $7 \ \text{(iv)}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $14$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): symmetric difference: $\text {(v)}$




