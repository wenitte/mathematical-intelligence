# 

Source: https://proofwiki.org/wiki/Real_Function_is_Expressible_as_Sum_of_Even_Function_and_Odd_Function/Examples/Arbitrary_Function_1

Example of Use of Real Function is Expressible as Sum of Even Function and Odd Function
Let $f: \R \to \R$ denote the real function:

$\map f x = e^{2 x} \sin x$
$f$ can be expressed as the pointwise sum of:

the even function $\map g x = \dfrac {\paren {e^{2 x} - e^{-2 x} } \sin x} 2$
and:

the odd function $\map h x = \dfrac {\paren {e^{2 x} + e^{-2 x} } \sin x} 2$


Proof













\(\ds \dfrac {\map f x + \map f {-x} } 2\)

\(=\)







\(\ds \dfrac {e^{2 x} \sin x + e^{2 \paren {-x} } \map \sin {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {e^{2 x} \sin x + e^{-2 x} \paren {-\sin x} } 2\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {e^{2 x} - e^{-2 x} } \sin x} 2\)









and:














\(\ds \dfrac {\map f x - \map f {-x} } 2\)

\(=\)







\(\ds \dfrac {e^{2 x} \sin x - e^{2 \paren {-x} } \map \sin {-x} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {e^{2 x} \sin x - e^{-2 x} \paren {-\sin x} } 2\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {e^{2 x} + e^{-2 x} } \sin x} 2\)









The result follows.
$\blacksquare$


Sources
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.3$ Functions of a Real Variable: $\text {(h)}$ Even and Odd Functions $(10)$




