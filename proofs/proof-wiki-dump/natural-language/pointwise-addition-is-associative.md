# 

Source: https://proofwiki.org/wiki/Pointwise_Addition_is_Associative



Theorem
Let $S$ be a non-empty set.
Let $\mathbb F$ be one of the standard number sets: $\Z, \Q, \R$ or $\C$.
Let $f, g, h: S \to \mathbb F$ be functions.
Let $f + g: S \to \mathbb F$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$

That is, pointwise addition is associative.


Proof









\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {\paren {f + g} + h} } x\)

\(=\)







\(\ds \paren {\map f x + \map g x} + \map h x\)





Definition of Pointwise Addition














\(\ds \)

\(=\)







\(\ds \map f x + \paren {\map g x + \map h x}\)





Associative Law of Addition














\(\ds \)

\(=\)







\(\ds \map {\paren {f + \paren {g + h} } } x\)





Definition of Pointwise Addition



$\blacksquare$


Specific Contexts
This result can be applied and proved in the context of the various standard number sets:


Pointwise Addition on Integer-Valued Functions is Associative
Let $f, g, h: S \to \Z$ be integer-valued functions.
Let $f + g: S \to \Z$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$


Pointwise Addition on Rational-Valued Functions is Associative
Let $f, g, h: S \to \Q$ be rational-valued functions.
Let $f + g: S \to \Q$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$


Pointwise Addition on Real-Valued Functions is Associative
Let $f, g, h: S \to \R$ be real-valued functions.
Let $f + g: S \to \R$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$


Pointwise Addition on Complex-Valued Functions is Associative
Let $f, g, h: S \to \C$ be complex-valued functions.
Let $f + g: S \to \C$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$




