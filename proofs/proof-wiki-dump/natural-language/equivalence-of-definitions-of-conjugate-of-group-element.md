# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Conjugate_of_Group_Element



Theorem
The following definitions of the concept of Conjugate of Group Element are equivalent:

Definition 1
The conjugacy relation $\sim$ is defined on $G$ as:

$\forall \tuple {x, y} \in G \times G: x \sim y \iff \exists a \in G: a \circ x = y \circ a$
Definition 2
The conjugacy relation $\sim$ is defined on $G$ as:

$\forall \tuple {x, y} \in G \times G: x \sim y \iff \exists a \in G: a \circ x \circ a^{-1} = y$


Also defined as
Some sources define the conjugate of $x$ by $a$ in $G$ as:

$x \sim y \iff \exists a \in G: x \circ a = a \circ y$
or:

$x \sim y \iff \exists a \in G: a^{-1} \circ x \circ a = y$


Proof













\(\ds a \circ x\)

\(=\)







\(\ds y \circ a\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a \circ x \circ a^{-1}\)

\(=\)







\(\ds y\)
























\(\ds x \circ a\)

\(=\)







\(\ds a \circ y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a^{-1} \circ x \circ a\)

\(=\)







\(\ds y\)




















\(\ds \exists b \in G: \, \)



\(\ds x \circ b\)

\(=\)







\(\ds b \circ y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds b^{-1} \circ x \circ b \circ b^{-1}\)

\(=\)







\(\ds b^{-1} \circ b \circ y \circ b^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds b^{-1} \circ x\)

\(=\)







\(\ds y \circ b^{-1}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists a \in G: \, \)



\(\ds a \circ x\)

\(=\)







\(\ds y \circ a\)





setting $a := b^{-1}$



$\blacksquare$





