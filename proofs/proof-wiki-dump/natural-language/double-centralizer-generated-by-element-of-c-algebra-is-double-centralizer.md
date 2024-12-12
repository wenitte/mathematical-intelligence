# 

Source: https://proofwiki.org/wiki/Double_Centralizer_Generated_by_Element_of_C*-Algebra_is_Double_Centralizer

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $c \in A$.
Define $L_c : A \to A$ and $R_c : A \to A$ by:

$\map {L_c} a = c a$
and:

$\map {R_c} a = a c$
for each $a \in A$. 

Then $\tuple {L_c, R_c}$ is a double centralizer of $A$. 


Proof
First, for each $a \in A$ we have:

$\norm {\map {L_c} a} \le \norm c \norm a$
and:

$\norm {\map {R_c} a} \le \norm a \norm c$
by the definition of an algebra norm.
Now, for $a, b \in A$ we have:














\(\ds \map {L_c} {a b}\)

\(=\)







\(\ds c a b\)




















\(\ds \)

\(=\)







\(\ds \paren {c a} b\)




















\(\ds \)

\(=\)







\(\ds \map {L_c} a b\)









and:














\(\ds \map {R_c} {a b}\)

\(=\)







\(\ds a b c\)




















\(\ds \)

\(=\)







\(\ds a \paren {b c}\)




















\(\ds \)

\(=\)







\(\ds a \map {R_c} b\)









Finally, we have:














\(\ds \map {R_c} a b\)

\(=\)







\(\ds a c b\)




















\(\ds \)

\(=\)







\(\ds a \paren {c b}\)




















\(\ds \)

\(=\)







\(\ds a \map {L_c} b\)









Hence $\tuple {L_c, R_c}$ is a double centralizer of $A$.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.1$: $\text C^\ast$-Algebras




