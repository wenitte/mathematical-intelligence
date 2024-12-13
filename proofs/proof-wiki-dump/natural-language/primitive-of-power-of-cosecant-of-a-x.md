# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Cosecant_of_a_x



Theorem
$\ds \int \csc^n a x \rd x = \frac{-\csc^{n - 2} a x \cot a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \csc^{n - 2} a x \rd x$
where $n \ne -1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \csc^{n - 2} a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \paren {n - 2} \csc^{n - 3} a x \csc a x \cot a x\)





Derivative of Power, Derivative of $\csc$, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -a \paren {n - 2} \csc^{n - 2} a x \cot a x\)










and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \csc^2 a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cot a x} a\)





Primitive of $\csc^2 a x$




Then:














\(\ds \int \csc^n a x \rd x\)

\(=\)







\(\ds \int \csc^{n - 2} a x \csc^2 a x \rd x\)




















\(\ds \)

\(=\)







\(\ds \csc^{n - 2} a x \paren {\frac {-\cot a x} a} - \int \paren {\frac {-\cot a x} a} \paren {-a \paren {n - 2} \csc^{n - 2} a x \cot a x } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-\csc^{n - 2} a x \cot a x} a - \paren {n - 2} \int \cot^2 a x \csc^{n - 2} a x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\csc^{n - 2} a x \cot a x} a - \paren {n - 2} \int \paren {\csc^2 a x - 1} \csc^{n - 2} a x \rd x\)





Difference of $\csc^2$ and $\cot^2$














\(\ds \)

\(=\)







\(\ds \frac {-\csc^{n - 2} a x \cot a x} a - \paren {n - 2} \int \csc^n a x \rd x\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {n - 2} \int \csc^{n - 2} a x \rd x\)




















\(\ds \paren {n - 1} \int \csc^n a x \rd x\)

\(=\)







\(\ds \frac {-\csc^{n - 2} a x \cot a x} a + \paren {n - 2} \int \csc^{n - 2} a x \rd x\)





gathering terms














\(\ds \int \csc^n a x \rd x\)

\(=\)







\(\ds \frac{-\csc^{n - 2} a x \cot a x} {a \paren {n - 1} } + \frac {n - 2} {n - 1} \int \csc^{n - 2} a x \rd x\)





dividing by $n - 1$



$\blacksquare$


Also see
Primitive of $\csc a x$ for the case where $n = 1$
Primitive of $\sin^n a x$
Primitive of $\cos^n a x$
Primitive of $\tan^n a x$
Primitive of $\cot^n a x$
Primitive of $\sec^n a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csc a x$: $14.470$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $93$.




