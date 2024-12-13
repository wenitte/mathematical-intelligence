# 

Source: https://proofwiki.org/wiki/Identity_Element_for_Power_Structure



Theorem
Let $\struct {S, \circ}$ be a magma whose underlying set $S$ is non-empty.
Let $\struct {\powerset S, \circ_\PP}$ be the power structure of $\struct {S, \circ}$.

Then:

a subset $J$ of $S$ is an identity element of $\struct {\powerset S, \circ_\PP}$
if and only if:

there exists an identity element $e$ of $\struct {S, \circ}$, such that $J = \set e$.


Proof
Sufficient Condition
Let $J \subseteq S$ such that $J$ is an identity element of $\struct {\powerset S, \circ_\PP}$.
We have:










\(\ds \forall A \in \powerset S: \, \)



\(\ds J \circ_\PP A\)

\(=\)







\(\ds A\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \set {j \circ a: j \in J, a \in A}\)

\(=\)







\(\ds A\)





Definition of Operation Induced on Power Set








\(\ds \leadsto \ \ \)

\(\ds \forall a \in A: \forall j \in J: \, \)



\(\ds j \circ a\)

\(=\)







\(\ds a\)









That is, the elements of $J$ are all left identities for $\circ$.

Similarly:










\(\ds \forall A \in \powerset S: \, \)



\(\ds A \circ_\PP J\)

\(=\)







\(\ds A\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds \set {a \circ j: j \in J, a \in A}\)

\(=\)







\(\ds A\)





Definition of Operation Induced on Power Set








\(\ds \leadsto \ \ \)

\(\ds \forall a \in A: \forall j \in J: \, \)



\(\ds a \circ j\)

\(=\)







\(\ds a\)









That is, the elements of $J$ are all right identities for $\circ$.

So we have established that $J$ contains at least one element which is both a left identity and a right identity.
From Left and Right Identity are the Same, there is only one element of $J$, and it is the necessarily unique identity element for $\circ$.
That is:

there exists an identity element $e$ of $\struct {S, \circ}$, such that $J = \set e$.
$\Box$


Necessary Condition
Let $\struct {S, \circ}$ have an identity element $e$.
Let $J = \set e$.
Then we have:










\(\ds \forall A \in \powerset S: \, \)



\(\ds A \circ_\PP J\)

\(=\)







\(\ds \set {a \circ j: j \in J, a \in A}\)





Definition of Operation Induced on Power Set














\(\ds \)

\(=\)







\(\ds \set {a \circ e: a \in A}\)





Definition of $J$














\(\ds \)

\(=\)







\(\ds \set {a: a \in A}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds A\)









and similarly:










\(\ds \forall A \in \powerset S: \, \)



\(\ds J \circ_\PP A\)

\(=\)







\(\ds \set {j \circ a: j \in J, a \in A}\)





Definition of Operation Induced on Power Set














\(\ds \)

\(=\)







\(\ds \set {e \circ a: a \in A}\)





Definition of $J$














\(\ds \)

\(=\)







\(\ds \set {a: a \in A}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds A\)









So:

$\forall A \in \powerset S: A \circ_\PP J = A = J \circ_\PP A$
and it is seen that $J$ is an identity element for $\circ_\PP$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.6$




