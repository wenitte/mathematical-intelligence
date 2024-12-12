# 

Source: https://proofwiki.org/wiki/Congruence_Relation_on_Group_induces_Normal_Subgroup



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\RR$ be a congruence relation for $\circ$.
Let $H = \eqclass e \RR$, where $\eqclass e \RR$ is the equivalence class of $e$ under $\RR$.

Then:

$\struct {H, \circ \restriction_H}$ is a normal subgroup of $G$
where $\circ \restriction_H$ denotes the restriction of $\circ$ to $H$.


Proof
We are given that $\RR$ is a congruence relation for $\circ$.
From Equivalence Relation is Congruence iff Compatible with Operation, we have:

$\forall u \in G: x \mathrel \RR y \implies \paren {x \circ u} \mathrel \RR \paren {y \circ u}, \paren {u \circ x} \mathrel \RR \paren {u \circ y}$


Proof of being a Subgroup
We show that $H$ is a subgroup of $G$.

First we note that $H$ is not empty:

$e \in H \implies H \ne \O$

Then we show $H$ is closed:














\(\ds x, y\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(\RR\)







\(\ds x\)


















\(\, \ds \land \, \)

\(\ds e\)

\(\RR\)







\(\ds y\)





by definition of $H$








\(\ds \leadsto \ \ \)





\(\ds \paren {e \circ e}\)

\(\RR\)







\(\ds \paren {x \circ y}\)





$\RR$ is compatible with $\circ$








\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(\in\)







\(\ds H\)





by definition of $H$




Next we show that $x \in H \implies x^{-1} \in H$:














\(\ds x\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(\RR\)







\(\ds x\)





Definition of $H$








\(\ds \leadsto \ \ \)





\(\ds \paren {x^{-1} \circ e}\)

\(\RR\)







\(\ds \paren {x^{-1} \circ x}\)





$\RR$ is compatible with $\circ$








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\RR\)







\(\ds e\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds x^{-1}\)

\(\in\)







\(\ds H\)





Definition of $H$



Thus by the Two-Step Subgroup Test, $H$ is a subgroup of $G$.
$\Box$


Proof of Normality
Next we show that $H$ is normal in $G$.
Thus:














\(\ds x\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(\RR\)







\(\ds h\)





for some $h \in H$, by definition of $H$








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ e}\)

\(\RR\)







\(\ds \paren {x \circ h}\)





$\RR$ is compatible with $\circ$








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ e \circ x^{-1} }\)

\(\RR\)







\(\ds \paren {x \circ h \circ x^{-1} }\)





$\RR$ is compatible with $\circ$








\(\ds \leadsto \ \ \)





\(\ds e\)

\(\RR\)







\(\ds \paren {x \circ h \circ x^{-1} }\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds x \circ h \circ x^{-1}\)

\(\in\)







\(\ds H\)





Definition of $H$




Thus from Subgroup is Normal iff Contains Conjugate Elements, we have that $H$ is normal.
$\blacksquare$


Also see
Congruence Relation induces Normal Subgroup
Normal Subgroup induced by Congruence Relation defines that Congruence
Quotient Structure on Group defined by Congruence equals Quotient Group


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.5$




