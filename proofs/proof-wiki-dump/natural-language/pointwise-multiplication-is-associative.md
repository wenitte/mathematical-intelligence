# 

Source: https://proofwiki.org/wiki/Pointwise_Multiplication_is_Associative



Theorem
Let $S$ be a non-empty set.
Let $\mathbb F$ be one of the standard number sets: $\Z, \Q, \R$ or $\C$.
Let $f, g, h: S \to \mathbb F$ be functions.
Let $f \times g: S \to \mathbb F$ denote the pointwise product of $f$ and $g$.

Then:

$\paren {f \times g} \times h = f \times \paren {g \times h}$

That is, pointwise multiplication is associative.


Proof









\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {\paren {f \times g} \times h} } x\)

\(=\)







\(\ds \paren {\map f x \times \map g x} \times \map h x\)





Definition of Pointwise Multiplication














\(\ds \)

\(=\)







\(\ds \map f x \times \paren {\map g x \times \map h x}\)





Associative Law of Multiplication














\(\ds \)

\(=\)







\(\ds \map {\paren {f \times \paren {g \times h} } } x\)





Definition of Pointwise Multiplication



$\blacksquare$


Specific Contexts
This result can be applied and proved in the context of the various standard number sets:


Pointwise Multiplication on Integer-Valued Functions is Associative
Let $f, g, h: S \to \Z$ be integer-valued functions.
Let $f \times g: S \to \Z$ denote the pointwise product of $f$ and $g$.

Then:

$\paren {f \times g} \times h = f \times \paren {g \times h}$


Pointwise Multiplication on Rational-Valued Functions is Associative
Let $f, g, h: S \to \Q$ be rational-valued functions.
Let $f \times g: S \to \Q$ denote the pointwise product of $f$ and $g$.

Then:

$\paren {f \times g} \times h = f \times \paren {g \times h}$


Pointwise Multiplication on Real-Valued Functions is Associative
Let $f, g, h: S \to \R$ be real-valued functions.
Let $f \times g: S \to \R$ denote the pointwise product of $f$ and $g$.

Then:

$\paren {f \times g} \times h = f \times \paren {g \times h}$


Pointwise Multiplication on Complex-Valued Functions is Associative
Let $f, g, h: S \to \C$ be complex-valued functions.
Let $f \times g: S \to \C$ denote the pointwise product of $f$ and $g$.

Then:

$\paren {f \times g} \times h = f \times \paren {g \times h}$




