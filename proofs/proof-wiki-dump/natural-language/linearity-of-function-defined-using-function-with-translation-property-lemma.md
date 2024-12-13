# 

Source: https://proofwiki.org/wiki/Linearity_of_Function_defined_using_Function_with_Translation_Property/Lemma

Lemma
Let $f$ be a real function.
Let $f$ have the translation property.
Let $x$ and $l$ be real numbers.
Define:

$\map {f_x} l = \map f {x + l} - \map f x$

Then:

$\forall n \in \Z: \map {f_x} {n l} = n \map {f_x} l$


Proof
Let $n$ be an integer.
We have:














\(\ds \map {f_x} {n l}\)

\(=\)







\(\ds \map f {x + n l} - \map f x\)





Definition of $f_x$














\(\ds \)

\(=\)







\(\ds -\paren {\map f x - \map f {x + n l} }\)




















\(\ds \)

\(=\)







\(\ds -\paren {\sum_{k \mathop = 1}^n \map f {x + \paren {k - 1} l} - \map f {x + \paren {x + k l} } }\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds -\paren {\sum_{k \mathop = 1}^n \map f x - \map f {x + l} }\)





Definition of Translation Property














\(\ds \)

\(=\)







\(\ds -n \paren {\map f x - \map f {x + l} }\)




















\(\ds \)

\(=\)







\(\ds n \paren {\map f {x + l} - \map f x}\)




















\(\ds \)

\(=\)







\(\ds n \map {f_x} l\)





Definition of $f_x$



$\blacksquare$





