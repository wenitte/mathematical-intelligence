# 

Source: https://proofwiki.org/wiki/Real_Function_is_Expressible_as_Sum_of_Even_Function_and_Odd_Function



Theorem
Let $f: \R \to \R$ be a real function which is neither an even function nor an odd function.
Then $f$ may be expressed as the pointwise sum of an even function and an odd function.


Proof
Let:














\(\ds \map g x\)

\(=\)







\(\ds \dfrac {\map f x + \map f {-x} } 2\)




















\(\ds \map h x\)

\(=\)







\(\ds \dfrac {\map f x - \map f {-x} } 2\)










We note that:














\(\ds \map g {-x}\)

\(=\)







\(\ds \dfrac {\map f {-x} + \map f {-\paren {-x} } } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map f {-x} + \map f x} 2\)




















\(\ds \)

\(=\)







\(\ds \map g x\)









Thus $g$ is an even function.

Then:














\(\ds \map h {-x}\)

\(=\)







\(\ds \dfrac {\map f {-x} - \map f {-\paren {-x} } } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map f {-x} - \map f x} 2\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\map f x - \map f {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds -\map h x\)









Thus $h$ is an odd function.

Then:














\(\ds \map g x + \map h x\)

\(=\)







\(\ds \dfrac {\map f x + \map f {-x} } 2 + \dfrac {\map f x - \map f {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map f x } 2 + \dfrac {\map f {-x} } 2 + \dfrac {\map f x } 2 - \dfrac {\map f {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









Hence the result.
$\blacksquare$


Examples
Arbitrary Function
Let $f: \R \to \R$ denote the real function:

$\map f x = e^{2 x} \sin x$
$f$ can be expressed as the pointwise sum of:

the even function $\map g x = \dfrac {\paren {e^{2 x} - e^{-2 x} } \sin x} 2$
and:

the odd function $\map h x = \dfrac {\paren {e^{2 x} + e^{-2 x} } \sin x} 2$


Sources
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.3$ Functions of a Real Variable: $\text {(h)}$ Even and Odd Functions $(9)$




