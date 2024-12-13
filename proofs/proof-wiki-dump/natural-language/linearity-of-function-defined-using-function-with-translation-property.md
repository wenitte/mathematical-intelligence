# 

Source: https://proofwiki.org/wiki/Linearity_of_Function_defined_using_Function_with_Translation_Property

Theorem
Let $f$ be a real function.
Let $f$ have the translation property.
Let $x$ and $l$ be real numbers.
Define:

$\map {f_x} l = \map f {x + l} - \map f x$

Then:

$\forall q \in \Q: \map {f_x} {q l} = q \map {f_x} l$


Proof
Lemma
Let $f$ be a real function.
Let $f$ have the translation property.
Let $x$ and $l$ be real numbers.
Define:

$\map {f_x} l = \map f {x + l} - \map f x$

Then:

$\forall n \in \Z: \map {f_x} {n l} = n \map {f_x} l$
$\Box$

Let $q$ be a rational number.
Choose integers $n$, $m$ such that:

$\dfrac n m = q$

We need to prove that:

$\map {f_x} {q l} = q \map {f_x} l$
We have:














\(\ds \map {f_x} {q l}\)

\(=\)







\(\ds \map {f_x} {\frac n m l}\)





Definition of $n$, $m$














\(\ds \)

\(=\)







\(\ds n \map {f_x} {\frac l m}\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac n m m \map {f_x} {\frac l m}\)




















\(\ds \)

\(=\)







\(\ds \frac n m \map {f_x} {\frac {m l} m}\)





Lemma














\(\ds \)

\(=\)







\(\ds q \map {f_x} l\)





Definition of $n$, $m$



$\blacksquare$





