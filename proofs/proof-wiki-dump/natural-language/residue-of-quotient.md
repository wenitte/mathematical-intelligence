# 

Source: https://proofwiki.org/wiki/Residue_of_Quotient

Theorem
Let $f$ and $g$ be functions holomorphic on some region containing $a$. 
Let $g$ have a zero of multiplicity $1$ at $a$. 

Then:

$\Res {\dfrac f g} a = \dfrac {\map f a} {\map {g'} a}$

This article, or a section of it, needs explaining.In particular: definition of "Res", by a link to ResidueYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
As $g$ has a zero of multiplicity $1$ at $a$, $\dfrac f g$ has a simple pole at $a$ by definition.
So: 














\(\ds \Res {\dfrac f g} a\)

\(=\)







\(\ds \lim_{z \mathop \to a} \paren {z - a} \frac {\map f z} {\map g z}\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to a} \frac {\map f z} {\frac {\map g z - \map g a} {z - a} }\)





$\map g a = 0$














\(\ds \)

\(=\)







\(\ds \frac {\lim_{z \mathop \to a} \map f z} {\lim_{z \mathop \to a} \frac {\map g z - \map g a} {z - a} }\)





Quotient Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \frac {\map f a} {\map {g'} a}\)





Definition of Derivative of Complex Function



$\blacksquare$





