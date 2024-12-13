# 

Source: https://proofwiki.org/wiki/Pointwise_Addition_on_Integer-Valued_Functions_is_Associative

Theorem
Let $S$ be a set.
Let $f, g, h: S \to \Z$ be integer-valued functions.
Let $f + g: S \to \Z$ denote the pointwise sum of $f$ and $g$.

Then:

$\paren {f + g} + h = f + \paren {g + h}$

That is, pointwise addition on integer-valued functions is associative.


Proof









\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {\paren {f + g} + h} } x\)

\(=\)







\(\ds \paren {\map f x + \map g x} + \map h x\)





Definition of Pointwise Addition of Integer-Valued Functions














\(\ds \)

\(=\)







\(\ds \map f x + \paren {\map g x + \map h x}\)





Integer Addition is Associative














\(\ds \)

\(=\)







\(\ds \map {\paren {f + \paren {g + h} } } x\)





Definition of Pointwise Addition of Integer-Valued Functions



$\blacksquare$





