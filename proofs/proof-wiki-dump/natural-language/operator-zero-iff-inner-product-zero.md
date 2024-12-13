# 

Source: https://proofwiki.org/wiki/Operator_Zero_iff_Inner_Product_Zero


It has been suggested that this page or section be merged into Operator with Zero Numerical Range is Zero Operator.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $\HH$ be a Hilbert space over $\C$.
Let $A: \HH \to \HH$ be a bounded linear operator.

Suppose that:

$\forall h \in \HH: \innerprod {A h} h_\HH = 0$

Then $A$ is the zero operator.


Proof
For each $x, y \in \HH$ we have: 














\(\ds 0\)

\(=\)







\(\ds \innerprod {\map A {x + y} } {x + y} - \innerprod {\map A {x - y} } {x - y} + i \innerprod {\map A {x + i y} } {x + i y} - i \innerprod {\map A {x - i y} } {x - i y}\)





since $\innerprod {A h} h_\HH = 0$ for each $h \in \HH$














\(\ds \)

\(=\)







\(\ds \innerprod {A x} x + \innerprod {A x} y + \innerprod {A y} x + \innerprod {A y} y - \paren {\innerprod {A x} x - \innerprod {A x} y - \innerprod {A y} x + \innerprod {A y} y}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds i \paren {\innerprod {A x} x + \innerprod {A x} {i y} + \innerprod {i A y} x + \innerprod {i A y} {i y} } - i \paren {\innerprod {A x} x - \innerprod {i A y} x + \innerprod {A x} {i y} - \innerprod {i A y} {i y} }\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \innerprod {A x} y + \innerprod {A y} x - \paren {-\innerprod {A x} y - \innerprod {A y} x} + i \paren {\innerprod {A x} {i y} + \innerprod {i A y} x + \cmod i^2 \innerprod {A y} y} - i \paren {\innerprod {i A y} x + \innerprod {A x} {i y} - \cmod i^2 \innerprod {A y} y}\)





Inner Product is Sesquilinear and again using the hypothesis $\innerprod {A h} h_\HH = 0$














\(\ds \)

\(=\)







\(\ds 2 \innerprod {A x} y + 2 \innerprod {A y} x + i \paren {-i \innerprod {A x} y + i \innerprod {A y} x} - i \paren {i \innerprod {A y} x - i \innerprod {A x} y}\)





using the hypothesis $\innerprod {A h} h_\HH = 0$














\(\ds \)

\(=\)







\(\ds 2 \innerprod {A x} y + 2 \innerprod {A y} x + \innerprod {A x} y - \innerprod {A y} x - \innerprod {A y} x + \innerprod {A x} y\)




















\(\ds \)

\(=\)







\(\ds 4 \innerprod {A x} y\)









So:

$\innerprod {A x} y = 0$
for each $x, y \in \HH$. 
Setting $y = A x$, we have: 

$\norm {A x}^2 = 0$
by the definition of the inner product norm.
So from Norm Axiom $\text N 1$: Positive Definiteness, we have $A x = 0$ for each $x \in \HH$.
$\blacksquare$


Also see
Norm of Hermitian Operator/Corollary


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.2.15$




