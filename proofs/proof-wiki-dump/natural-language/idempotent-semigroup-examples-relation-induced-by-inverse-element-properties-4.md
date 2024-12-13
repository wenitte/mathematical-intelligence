# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/4



Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

$\RR$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity









\(\ds \forall a \in S: \, \)



\(\ds a \circ a \circ a\)

\(=\)







\(\ds a \circ a\)





Definition of Idempotent Semigroup














\(\ds \)

\(=\)







\(\ds a\)





Definition of Idempotent Semigroup








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\RR\)







\(\ds a\)





Definition of $\RR$



Thus $\RR$ is seen to be reflexive.
$\Box$


Symmetry













\(\ds a\)

\(\RR\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds a \circ b \circ a\)

\(=\)







\(\ds a\)





Definition of $\RR$












\(\, \ds \land \, \)

\(\ds b \circ a \circ b\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds b \circ a \circ b\)

\(=\)







\(\ds b\)





Conjunction is Commutative












\(\, \ds \land \, \)

\(\ds a \circ b \circ a\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds b\)

\(\RR\)







\(\ds a\)





Definition of $\RR$



Thus $\RR$ is seen to be symmetric.
$\Box$


Transitivity
Let $a \mathrel \RR b$ and $b \mathrel \RR c$.
Thus we have:














\(\ds a \circ b \circ a\)

\(=\)







\(\ds a\)




















\(\ds b \circ a \circ b\)

\(=\)







\(\ds b\)









and:














\(\ds b \circ c \circ b\)

\(=\)







\(\ds b\)




















\(\ds c \circ b \circ c\)

\(=\)







\(\ds c\)










Let:














\(\ds x\)

\(=\)







\(\ds c \circ b \circ c\)




















\(\ds y\)

\(=\)







\(\ds c \circ b \circ a\)




















\(\ds z\)

\(=\)







\(\ds a \circ b \circ a\)










We have:














\(\ds b \circ a \circ b\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {b \circ a} \circ \paren {b \circ c}\)

\(=\)







\(\ds b \circ c\)









and:














\(\ds b \circ c \circ b\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {b \circ c} \circ \paren {b \circ a}\)

\(=\)







\(\ds b \circ a\)









Hence using Properties of Idempotent Semigroup: $1$:














\(\ds c \circ \paren {b \circ a} \circ c \circ \paren {b \circ c}\)

\(=\)







\(\ds c \circ \paren {b \circ c}\)




















\(\ds c \circ \paren {b \circ c} \circ c \circ \paren {b \circ a}\)

\(=\)







\(\ds c \circ \paren {b \circ a}\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(=\)







\(\ds y\)




















\(\ds y \circ x\)

\(=\)







\(\ds x\)










Then we have:














\(\ds b \circ c \circ b\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ \paren {c \circ b}\)

\(=\)







\(\ds a \circ b\)









and:














\(\ds b \circ a \circ b\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {c \circ b} \circ \paren {a \circ b}\)

\(=\)







\(\ds c \circ b\)










Hence using Properties of Idempotent Semigroup: $2$:














\(\ds \paren {a \circ b} \circ a \circ \paren {c \circ b} \circ a\)

\(=\)







\(\ds \paren {a \circ b} \circ a\)




















\(\ds \paren {c \circ b} \circ a \circ \paren {a \circ b} \circ a\)

\(=\)







\(\ds \paren {c \circ b} \circ a\)














\(\ds \leadsto \ \ \)





\(\ds z \circ y\)

\(=\)







\(\ds z\)




















\(\ds y \circ z\)

\(=\)







\(\ds y\)









Thus we have:














\(\ds x \circ y\)

\(=\)







\(\ds y\)




















\(\ds y \circ x\)

\(=\)







\(\ds x\)




















\(\ds y \circ z\)

\(=\)







\(\ds y\)




















\(\ds z \circ y\)

\(=\)







\(\ds z\)









Hence by Idempotent Semigroup: Relation induced by Inverse Element: $3$:

$x \mathrel \RR z$
That is:














\(\ds c \circ b \circ c\)

\(\RR\)







\(\ds a \circ b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds c\)

\(\RR\)







\(\ds a\)









Thus $\RR$ is seen to be transitive.
$\Box$

$\RR$ has been shown to be reflexive, symmetric and transitive.
Hence by definition $\RR$ is an equivalence relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(f)}$




