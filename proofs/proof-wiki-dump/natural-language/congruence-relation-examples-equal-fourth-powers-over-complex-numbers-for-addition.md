# 

Source: https://proofwiki.org/wiki/Congruence_Relation/Examples/Equal_Fourth_Powers_over_Complex_Numbers_for_Addition

Example of Congruence Relation
Let $\C$ denote the set of complex numbers.
Let $\RR$ denote the equivalence relation on $\C$ defined as:

$\forall w, z \in \C: z \mathrel \RR w \iff z^4 = w^4$
Then $\RR$ is not a congruence relation for addition on $\C$.


Proof
Proof by Counterexample
We have from Equivalence Relation Examples: Equal Fourth Powers over Complex Numbers, $\RR$ is an equivalence relation.

However:














\(\ds i^4\)

\(=\)







\(\ds i^4\)


















\(\, \ds \land \, \)

\(\ds 1^4\)

\(=\)







\(\ds \paren {-i}^4\)














\(\ds \leadsto \ \ \)





\(\ds i\)

\(\RR\)







\(\ds i\)


















\(\, \ds \land \, \)

\(\ds 1\)

\(\RR\)







\(\ds -i\)










But:

$\paren {i + -i}^4 = 0$
while:

$\paren {i + 1}^4 = -4$

So while we have:

$\paren {w_1 \mathrel \RR w_2} \land \paren {z_1 \mathrel \RR z_2}$
where $w_1 = i$, $w_2 = 1$, $z_1 = -i$, $z_2 = -i$
we have:

$\paren {w_1 + z_1} \not \mathrel \RR \paren {w_2 + z_2}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.1 \ \text{(a)}$




