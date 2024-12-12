# 

Source: https://proofwiki.org/wiki/Conversion_per_Accidens



Theorem
Consider the categorical statements:








\(\ds \map {\mathbf A} {S, P}:\)   

The universal affirmative:   

  \(\ds \forall x:\)

\(\ds \map S x \implies \map P x \)   







  






\(\ds \map {\mathbf I} {P, S}:\)   

The particular affirmative:   

  \(\ds \exists x:\)

\(\ds \map P x \land \map S x \)   







  

Then:

$\map {\mathbf A} {S, P} \implies \map {\mathbf I} {P, S}$
if and only if:

$\exists x: \map S x$

Using the symbology of predicate logic:

$\exists x: \map S x \iff \paren {\paren {\forall x: \map S x \implies \map P x} \implies \paren {\exists x: \map P x \land \map S x} }$

This law has the traditional name conversion per accidens of $\mathbf A$.
Thus the $\mathbf A$ form converts per accidens to the $\mathbf I$ form.


Proof
From Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous:

$\exists x: \map S x \iff \paren {\paren {\forall x: \map S x \implies \map P x} \implies \paren {\exists x: \map S x \land \map P x} }$
From Law of Simple Conversion of I:

$\paren {\exists x: \map S x \land \map P x} \implies \paren {\exists x: \map P x \land \map S x}$
Hence the result.
$\blacksquare$


Also defined as
Some sources gloss over the possibility of $\map S x$ being vacuous and merely report that the universal affirmative $\map {\mathbf A} {S, P}$ implies the particular affirmative $\map {\mathbf I} {P, S}$.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $4$: The Predicate Calculus $2$: $4$ The Syllogism




